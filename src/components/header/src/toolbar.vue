<template>
    <nav class="ion-navbar ion-toolbar toolbar " :class="['toolbar-'+theme,aColor]">
        <div class="toolbar-background " :class="['toolbar-background-'+theme]"></div>
        <slot name="buttons"></slot>
        <div class="toolbar-content " :class="['toolbar-content-'+theme]">
            <slot></slot>
        </div>
    </nav>
</template>
<script>
    import ThemeMixin from 'src/minins/theme.mixins';
    export default {
        name: 'ion-toolbar',
        mixins: [ThemeMixin],
        computed: {
            aColor: function() {
                switch (this.color) {
                    case 'default':
                        return '';
                    default:
                        return `toolbar-${this.theme}-${this.color}`;
                }
            }
        }
    }
</script>
<style lang="scss">
    @import './toolbar.scss';
    @import './toolbar.ios.scss';
    @import './toolbar.md.scss';
</style>