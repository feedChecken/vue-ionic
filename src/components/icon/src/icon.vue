<template>
    <i class="ion-icon" role="img" :class="[setName,setColor,isParentItem?'item-icon':'']"></i>
</template>
<script>
    const ICON_MODE = "ion";
    export default {
        name: 'ion-icon',
        data() {
            return {
                isParentItem: false
            }
        },
        props: {
            name: String,
            color: String
        },
        created() {
            let name = this.$parent.$data.componentName;
            //如果在item 组件里 则加上class  
            if (name === 'ionItem') {
                this.isParentItem = true;
            }

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
            },
            setColor() {
                return this.color ? `icon-${this.$ionic.theme}-${this.color}` : '';
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