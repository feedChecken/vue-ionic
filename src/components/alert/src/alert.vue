<template>
    <section class="ion-alert" :class="['alert-'+theme]" role="dialog" style="z-index: 9999;">
       <ion-backdrop @click.native="onClose"  ref="backdrop"></ion-backdrop>
        <div class="alert-wrapper">
            <div class="alert-head">
                <h2 class="alert-title" >{{ title }}</h2>
            </div>
            <div class="alert-message">
                {{ message }}
            </div>
            <div class="alert-button-group">
                
            </div>
        </div>
    </section>
</template>
<script>
    import ThemeMixins from 'src/minins/theme.mixins';
    export default {
        mixins: [ThemeMixins],
        data() {
            return {
                currentValue: false
            }
        },
        watch: {
            currentValue(val) {
                this.$emit('input', val);
            },
            value(val) {
                this.currentValue = val;
            }
        },
        props: {
            value: {}
        },
        methods: {
            open() {
                console.log('alert init');
                this.$refs.backdrop.setStyle('opacity', '0.4');
                this.$refs.backdrop.disableClick();
                this.currentValue = true;
                setTimeout(() => {
                    this.$refs.backdrop.enableClick();
                }, 400);
            }
        }
    }
</script>
<style lang="scss">
    @import './alert.scss';
    @import './alert.ios.scss';
    @import './alert.md.scss';
    @import './alert.wp.scss';
</style>