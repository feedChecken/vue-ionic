<template>
    <div class="ion-input">
     <input
      @change="$emit('change', currentValue)"
      ref="input"
      class="text-input "
      :class="['text-input-'+theme]"
      :placeholder="placeholder"
      :number="type === 'number'"
      :type="type"
      @focus="active = true"
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
        }
    }
</script>
<style lang="scss">
    @import './input.scss';
    @import './input.ios.scss';
    @import './input.md.scss';
    @import './input.wp.scss';
</style>