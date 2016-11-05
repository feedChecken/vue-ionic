<template>
    <div>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Thumbnails</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item>
                    <ion-thumbnail slot="item-left" item-left :src="list.img"></ion-thumbnail>
                    <h2>My Neighbor Totoro</h2>
                    <p>Hayao Miyazaki • 1988</p>
                    <ion-button type="clear" slot="item-right">
                        view
                    </ion-button>
                </ion-item>
                <ion-item>
                    <ion-thumbnail slot="item-left" item-left :src="list.img"></ion-thumbnail>
                    <ion-label slot="ion-label">
                        <h2>My Neighbor Totoro</h2>
                        <p>Hayao Miyazaki • 1988</p>
                    </ion-label>
                    <ion-button type="clear" slot="item-right">
                        view
                    </ion-button>
                </ion-item>
                <ion-item>
                    <ion-thumbnail slot="item-left" item-left :src="list.img"></ion-thumbnail>
                    <ion-label>
                        <h2>My Neighbor Totoro</h2>
                        <p>Hayao Miyazaki • 1988</p>
                    </ion-label>
                    <ion-button type="clear" slot="item-right">
                        view
                    </ion-button>
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