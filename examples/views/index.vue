<template>
	<div>
		<ion-header>
			<ion-toolbar color="primary">
				<ion-title>首页</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content class="outer-content">
			<ion-list>
				<ion-list-header>
					Basic
					<ion-button icon-only item-right slot="item-right" type="clear">
						<ion-icon name="cog"></ion-icon>
					</ion-button>
				</ion-list-header>
				<ion-item-group>
					<ion-item href="#/button" type="link">
						<ion-icon name="ionic" slot="item-left" item-left color="primary"></ion-icon>
						Button
					</ion-item>
					<ion-item href="#/header" type="link">
						<ion-icon name="ionic" slot="item-left" item-left color="primary"></ion-icon>
						Header
						<ion-note slot="item-right">note</ion-note>
					</ion-item>
					<ion-item href="#/Label" type="link">
						<ion-icon name="ionic" slot="item-left" item-left color="primary"></ion-icon>
						label
						<ion-note slot="item-right">off</ion-note>
					</ion-item>
				</ion-item-group>
				<ion-item type="divider">
					Other Settings
				</ion-item>
				<ion-item-group>
					<ion-item href="#/list" type="link">
						<ion-icon name="ionic" slot="item-left" item-left color="primary"></ion-icon>
						list
					</ion-item>
					<ion-item href="#/thumbnail" type="link">
						<ion-icon name="ionic" slot="item-left" item-left color="primary"></ion-icon>
						thumbnail
					</ion-item>
					<ion-item href="#/avatar" type="link">
						<ion-icon name="ionic" slot="item-left" item-left color="primary"></ion-icon>
						avatar
					</ion-item>
					<ion-item href="#/divider" type="link">
						<ion-icon name="ionic" slot="item-left" item-left color="primary"></ion-icon>
						divider
					</ion-item>
					<ion-item href="#/sliding" type="link">
						<ion-icon name="ionic" slot="item-left" item-left color="primary"></ion-icon>
						sliding
					</ion-item>
					<ion-item href="#/input" type="link">
						<ion-icon name="ionic" slot="item-left" item-left color="primary"></ion-icon>
						input
					</ion-item>
					<ion-item href="#/input1" type="link">
						<ion-icon name="ionic" slot="item-left" item-left color="primary"></ion-icon>
						input fixed
					</ion-item>
					<ion-item href="#/inputFloating" type="link">
						<ion-icon name="ionic" slot="item-left" item-left color="primary"></ion-icon>
						input inputFloating
					</ion-item>
					<ion-item href="#/inputStacked" type="link">
						<ion-icon name="ionic" slot="item-left" item-left color="primary"></ion-icon>
						input inputStacked
					</ion-item>
				</ion-item-group>
			</ion-list>
			<ion-list>
				<ion-list-header>
					Apps Installed
				</ion-list-header>
				<ion-item>
					<ion-icon name="ionic" slot="item-left" item-left color="primary"></ion-icon>
					Ionic View
					<ion-button type="outline" slot="item-right" item-right>
						Uninstall
					</ion-button>
				</ion-item>
				<ion-item>
					<ion-icon name="brush" slot="item-left" item-left color="primary"></ion-icon>
					Ionic brush
					<ion-button type="outline" slot="item-right" item-right>
						Uninstall
					</ion-button>
				</ion-item>
				<ion-item>
					<ion-icon name="logo-octocat" slot="item-left" item-left color="dark"></ion-icon>
					Hubstruck
					<ion-button type="outline" slot="item-right" item-right>
						Uninstall
					</ion-button>
				</ion-item>
				<ion-item>
					<ion-icon name="paw" slot="item-left" item-left color="danger"></ion-icon>
					Barkpark
					<ion-button type="outline" slot="item-right" item-right>
						Uninstall
					</ion-button>
				</ion-item>
			</ion-list>
		</ion-content>
	</div>
</template>