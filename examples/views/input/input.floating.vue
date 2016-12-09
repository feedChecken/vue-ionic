<template>
	<div>
		<ion-header>
			<ion-toolbar color="primary">
				<ion-title>Input Floating</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content class="outer-content">
			<ion-list>
				<ion-list-header>
					Login
				</ion-list-header>
				<ion-item>
					Username
					<ion-input floating slot="item-content" v-model="uname1"></ion-input>
				</ion-item>
				<ion-item>
					<ion-label slot="ion-label">Password</ion-label>
					<ion-input floating slot="item-content" :disableClear="true" v-model="pwd1" type="password"></ion-input>
				</ion-item>
				<ion-item>
					date
					<ion-input slot="item-content" :disableClear="true" v-model="date" type="password"></ion-input>
				</ion-item>
			</ion-list>
			<div padding>
				<ion-button block>Sign In</ion-button>
			</div>
		</ion-content>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                uname1: '',
                pwd1: '',
                date: ''
            }
        }
    }
</script>