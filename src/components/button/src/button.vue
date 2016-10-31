<template>
    <button class="disable-hover button btn-default    " :class="[
        theme ? role + theme:'',
        theme ? 'btn-default-'+theme:'',
        color ? role + theme + '-'+ color : ''
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
                role: 'button-'
            }
        },
        props: {
            color: {
                type: String,
                default: 'default'
            },
            theme: {
                type: String,
                default: 'ios'
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