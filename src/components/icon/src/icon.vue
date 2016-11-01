<template>
    <i class="ion-icon" :class="[setName]"></i>
</template>
<script>
    const ICON_MODE = "ion";
    export default {
        name: 'ion-icon',
        props: {
            name: String
        },
        computed: {
            setName() {
                let name = this.name;
                if (!(/^md-|^ios-|^logo-/.test(name))) {
                    let theme = this.$ionic.theme;
                    return `ion-${theme} ${ICON_MODE}-${theme === 'wp'?'ios':theme}-${name}`;
                } else {
                    return name;
                }
            }
        }
    };
</script>
<style lang="scss">
    @import './icon.scss';
    @import './icon.ios.scss';
    @import './icon.md.scss';
    @import './icon.wp.scss';
</style>