<template>
    <div>
        <ion-header>
            <ion-toolbar>
                <ion-title>Sliding Items</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="outer-content">
            <ion-list>
                <ion-list-header>
                    Busters
                </ion-list-header>
                <!--class="active-slide active-options-right" style="transform: translate3d(-160px, 0px, 0px);" -->
                <ion-item-sliding >
                    <ion-item >
                        <ion-avatar slot="item-left" item-left :src="list.img"></ion-avatar>
                        <h2>Venkman</h2>
                        <p>Back off man, I'm a scientist.</p>
                    </ion-item>
                    <ion-item-options>
                        <ion-button color="light" icon-left>
                            <ion-icon name="ios-more"></ion-icon>
                            more
                        </ion-button>
                        <ion-button color="primary" icon-left>
                            <ion-icon name="text"></ion-icon>
                            Text
                        </ion-button>
                        <ion-button color="secondary" icon-left>
                            <ion-icon name="call"></ion-icon>
                            Call
                        </ion-button>
                    </ion-item-options>
                </ion-item-sliding>
                <ion-item-sliding >
                    <ion-item >
                        <ion-avatar slot="item-left" item-left :src="list.img"></ion-avatar>
                        <h2>Ren Hong</h2>
                        <p>I'm loser codeer.</p>
                    </ion-item>
                    <ion-item-options>
                        <ion-button color="primary" icon-left @click.native="sayHi">
                            <ion-icon name="text"></ion-icon>
                            Text
                        </ion-button>
                        <ion-button color="secondary" icon-left>
                            <ion-icon name="call"></ion-icon>
                            Call
                        </ion-button>
                    </ion-item-options>
                </ion-item-sliding>
            </ion-list>
        </ion-content>
    </div>
</template>
<script>
    import imgSrc from 'assets/thumbnail-totoro.png';
    export default {
        data() {
            return {
                list: {}
            }
        },
        created() {
            this.list.img = imgSrc;
        },
        methods: {
            sayHi() {
                alert('hello ');
            }
        }
    }
</script>