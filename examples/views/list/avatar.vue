<template>
    <div>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>avatar</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item>
                    <ion-avatar slot="item-left" item-left :src="list.img"></ion-avatar>
                    <h2>Venkman</h2>
                    <p>Back off man, I'm a scientist.</p>
                </ion-item>
                <ion-item>
                    <ion-avatar slot="item-left" item-left :src="list.img"></ion-avatar>
                    <h2>My Neighbor Totoro</h2>
                    <p>Hayao Miyazaki • 1988</p>
                    <ion-button type="clear" slot="item-right">
                        view
                    </ion-button>
                </ion-item>
                <ion-item>
                    <ion-avatar slot="item-left" item-left :src="list.img"></ion-avatar>
                    <h2>Venkman</h2>
                    <p>Back off man, I'm a scientist.</p>
                </ion-item>
                <ion-item>
                    <ion-avatar slot="item-left" item-left :src="list.img"></ion-avatar>
                    <h2>Venkman</h2>
                    <p>Back off man, I'm a scientist.</p>
                </ion-item>
                <ion-item>
                    <ion-avatar slot="item-left" item-left :src="list.img"></ion-avatar>
                    <h2>Venkman</h2>
                    <p>Back off man, I'm a scientist.</p>
                </ion-item>
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
        }
    }
</script>