<template>
    <div>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>list</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="outer-content">
            <ion-list>
                <ion-list-header>
                    Settings
                    <ion-button icon-only item-right slot="item-right" type="clear">
                        <ion-icon name="cog"></ion-icon>
                    </ion-button>
                </ion-list-header>
                <ion-item-group>
                    <ion-item>
                        <ion-icon slot="item-left" name="plane" item-left color="danger"></ion-icon>
                        <ion-label>Airplane Mode</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon slot="item-left" name="wifi" item-left color="primary"></ion-icon>
                        <ion-label>哈哈哈</ion-label>
                    </ion-item>
                </ion-item-group>
            </ion-list>
        </ion-content>
    </div>
</template>