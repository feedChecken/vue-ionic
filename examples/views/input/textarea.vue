<template>
     <div>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Textarea</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="outer-content">
            <ion-list>
                <ion-list-header>
                    Demo
                </ion-list-header>
                <ion-item>
                   <ion-input slot="item-content"  placeholder="username"  v-model="from.username" ></ion-input>
                </ion-item>
                <ion-item>
                   <ion-input slot="item-content" v-model="from.pwd" type="textarea" placeholder="Password" ></ion-input>
                </ion-item>
                <ion-item>
                    Address fixed
                   <ion-input fixed slot="item-content" v-model="from.address" type="textarea"  ></ion-input>
                </ion-item>
                <ion-item>
                    Address floating
                   <ion-input floating slot="item-content" v-model="from.address" type="textarea"  ></ion-input>
                </ion-item>
                <ion-item>
                    Address stacked
                   <ion-input stacked slot="item-content" v-model="from.address" type="textarea"  ></ion-input>
                </ion-item>
            </ion-list>
            <div padding>
                <ion-button  color="danger" block> Login </ion-button>
            </div>
        </ion-content>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                from: {}
            }
        }
    }
</script>