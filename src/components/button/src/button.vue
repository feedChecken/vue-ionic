<template>
	<button class="disable-hover button button-ios button-default button-default-ios button-ios-light">
		<span class="button-inner">
            <slot></slot>
        </span>
		<div class="button-effect"></div>
	</button>
</template>
<script>
    export default {
        name: 'ion-button'
    };
</script>
<style lang="scss">
    @import './button.scss';
    @import './button-icon.scss';
    @import './button.ios.scss';
    @import './button.md.scss';
</style>