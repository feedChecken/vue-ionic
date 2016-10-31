<template>
    <button @touchstart="handleTouchStart" class="disable-hover button " :class="[
        theme ? role + theme:'',
        type ? role + type : '',
        theme ? role + type + '-' + theme:'',
        aColor,
        isActive?'activated':''

     ]">
		<span class="button-inner">
            <slot></slot>
        </span>
		<div class="button-effect"></div>
	</button>
</template>
<script>
    export default {
        name: 'ion-button',
        data() {
            return {
                role: 'button-',
                isActive: false,
                theme: 'ios'
            }
        },
        computed: {
            aColor: function() {
                let theme = this.$ionic.theme;
                switch (this.type) {
                    case 'outline':
                    case 'clear':
                        return `${this.role}${this.type}-${theme}-${this.color}`;
                    default:
                        return `${this.role}${theme}-${this.color}`;
                }
            }
        },
        created() {
            if (this.theme != this.$ionic.theme) {
                this.theme = this.$ionic.theme;
            }
        },
        methods: {
            handleTouchStart(evt) {
                this.isActive = true;
                this.$emit('touchstart', evt);
                window.addEventListener('touchend', this.handleTouchMove);
                window.addEventListener('touchmove', this.handleTouchMove);
            },
            handleTouchMove(e) {
                e.preventDefault();
                this.isActive = false;
            }
        },
        props: {
            // 类型 默认   outline  clear
            type: {
                type: String,
                default: 'default',
                validator(value) {
                    return [
                        'default',
                        'outline',
                        'clear'
                    ].indexOf(value) > -1;
                }
            },
            color: {
                type: String,
                default: 'default',
                validator(value) {
                    return [
                        'default',
                        'light',
                        'secondary',
                        'danger',
                        'dark'
                    ].indexOf(value) > -1;
                }
            }
        }
    };
</script>
<style lang="scss">
    @import './button.scss';
    @import './button-icon.scss';
    @import './button.ios.scss';
    @import './button.md.scss';
</style>