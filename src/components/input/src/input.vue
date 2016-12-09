<template>
    <div class="ion-input">
     <input
      @change="$emit('change', currentValue)"
      v-clickoutside="doCloseActive"
      ref="input"
      class="text-input "
      :class="['text-input-'+theme]"
      :placeholder="placeholder"
      :number="type === 'number'"
      :type="type"
      @focus="active = true"
      @blur="active = false"
      :disabled="disabled"
      :readonly="readonly"
      :value="currentValue"
      @input="handleInput" />
        <ion-button v-if="!disableClear" class="text-input-clear-icon" @click.native="handleClear"  type="clear"  icon-only>
             <i role="img" class="ion-icon ion-ios-close-outline"></i>
         </ion-button> 
    </div>
</template>
<script>
    import ThemeMixin from 'src/minins/theme.mixins';
    import ionButton from 'src/components/button';
    import Clickoutside from 'src/utils/clickoutside';
    export default {
        name: 'ion-input',
        mixins: [ThemeMixin],
        data() {
            return {
                active: false,
                currentValue: this.value
            }
        },
        mounted() {
            let $parent = this.$parent;
            //input 组件必须和item 组件一起使用 如果是ionItem 则给 item 添加class
            if ($parent.componentName === 'ionItem') {
                $parent.addClass('item-block item-input');
            }
            this.initAttr('floating');
            this.initAttr('stacked');
        },
        props: {
            type: {
                type: String,
                default: 'text'
            },
            placeholder: String,
            readonly: Boolean,
            disabled: Boolean,
            disableClear: Boolean,
            value: {},
            attr: Object
        },
        methods: {
            handleInput(evt) {
                this.currentValue = evt.target.value;
            },
            handleClear() {
                if (this.disabled || this.readonly) return;
                this.currentValue = '';
            },
            doCloseActive() {
                this.active = false;
            },
            /**
             * 根据input 上的属性显示不同的样式　
             */
            initAttr(attr) {
                let $parent = this.$parent;
                const $el = this.$el;
                if ($el.getAttribute(attr) != null) {
                    ////如果input 设置了  floating  就设置 item 的class 为  item-label-floating
                    $parent.addClass(`item-label-${attr}`);
                    //如果 属性设置了 attr  则动态设置 属性 attr
                    $parent.addLabelAttr(attr);
                }
            }
        },
        watch: {
            value(val) {
                this.currentValue = val;
            },
            currentValue(val) {
                let hasValue = (val !== null && val !== undefined && val !== '');
                this.$parent[hasValue ? 'addClass' : 'removeClass']('input-has-value');
                this.$emit('input', val);
            },
            active(val) {
                let cls = 'input-has-focus';
                this.$parent[val ? 'addClass' : 'removeClass'](cls);
            }
        },
        components: {
            ionButton
        },
        directives: {
            Clickoutside
        }
    }
</script>
<style lang="scss">
    @import './input.scss';
    @import './input.ios.scss';
    @import './input.md.scss';
    @import './input.wp.scss';
</style>