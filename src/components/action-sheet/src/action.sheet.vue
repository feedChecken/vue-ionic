<template>
    <div class="ion-action-sheet " :class="['action-sheet-'+theme]">
        <ion-backdrop @click.native="onClose"  ref="backdrop"></ion-backdrop>
        <transition name="ion-action-sheet-fade">
            <div v-show="currentValue" class="action-sheet-wrapper">
                <div class="action-sheet-container">
                    <div class="action-sheet-group">
                        <div class="action-sheet-title">title</div>
                        <ion-button prefix="action-sheet-button" class="action-sheet-icon action-sheet-destructive"> 哈哈 </ion-button>
                        <ion-button prefix="action-sheet-button" class=" action-sheet-icon"> 哈哈 </ion-button>
                        <ion-button prefix="action-sheet-button" class=" action-sheet-icon"> 哈哈 </ion-button>
                        <ion-button prefix="action-sheet-button" class=" action-sheet-icon"> 哈哈 </ion-button>
                    </div>
                    <div class="action-sheet-group">
                        <ion-button prefix="action-sheet-button" class=" action-sheet-icon">cancel</ion-button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import ThemeMixin from 'src/minins/theme.mixins';
    import ionBackdrop from 'src/components/backdrop';
    import ionButton from 'src/components/button';
    export default {
        name: 'ion-action-sheet',
        mixins: [ThemeMixin],
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
        methods: {
            open() {
                this.$refs.backdrop.setStyle('opacity', '0.4');
                this.$refs.backdrop.setStyle('pointer-events', 'none');
                this.currentValue = true;
                setTimeout(() => {
                    this.$refs.backdrop.setStyle('pointer-events', 'auto');
                }, 400);
            },
            onClose() {
                this.currentValue = false;
                setTimeout(() => {
                    this.$refs.backdrop.setStyle('opacity', '0.01');
                    this.$el.remove();
                }, 350);

            }
        },
        props: {
            value: {}
        },
        components: {
            ionBackdrop,
            ionButton
        }
    };
</script>
<style lang="scss">
    @import './action-sheet.scss';
    @import './action-sheet.ios.scss';
    @import './action-sheet.md.scss';
    @import './action-sheet.wp.scss';
    .ion-action-sheet-fade-enter-active {
        transition: transform .4s cubic-bezier(.36, .66, .04, 1);
        transform: translate3d(0, 0, 0);
    }
    
    .ion-action-sheet-fade-leave-active {
        transition: transform .3s cubic-bezier(.36, .66, .04, 1);
        transform: translate3d(0, 100%, 0);
    }
    
    .ion-action-sheet-fade-enter {
        transform: translate3d(0, 100%, 0);
    }
    
    .ion-action-sheet-fade-leave-to {
        transform: translate3d(0, 100%, 0);
    }
</style>