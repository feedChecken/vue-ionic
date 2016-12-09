<template>
     <div>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Input fixed</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="outer-content">
            <ion-list>
                <ion-list-header>
                    Login
                </ion-list-header>
                <ion-item>
                   <ion-label fixed>Username</ion-label>
                   <ion-input slot="item-content"  v-model="uname1" ></ion-input>
                </ion-item>
                <ion-item>
                   <ion-label fixed>pwd</ion-label>
                   <ion-input slot="item-content" :disableClear="true" v-model="pwd1" type="password" placeholder="Password" ></ion-input>
                </ion-item>
            </ion-list>
            <p style="padding:0 10px;">
                <ion-button  color="danger" block> Login </ion-button>
            </p>
            <p>输入的用户名密码</p>
            {{ uname1 }}
            {{ pwd1 }}
        </ion-content>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                uname1: '',
                pwd1: ''
            }
        }
    }
</script>