<style lang="scss">
    .view {
        margin: 8px;
    }
</style>
<template>
    <div class="view" style=" padding-bottom: 100px;">
        <ion-button color="light"> default</ion-button><br/>
        <ion-button> default</ion-button><br/>
        <ion-button color="secondary">secondary</ion-button><br/>
        <ion-button color="danger">danger</ion-button><br/>
        <ion-button color="dark">dark</ion-button><br/>
        <h1> outline</h1>
        <ion-button color="light" type="outline"> default</ion-button><br/>
        <ion-button type="outline"> default</ion-button><br/>
        <ion-button color="secondary" type="outline">secondary</ion-button><br/>
        <ion-button color="danger" type="outline">danger</ion-button><br/>
        <ion-button color="dark" type="outline">dark</ion-button><br/>
        <h1>clear</h1>
        <ion-button color="light" type="clear"> default</ion-button><br/>
        <ion-button type="clear"> default</ion-button><br/>
        <ion-button color="secondary" type="clear">secondary</ion-button><br/>
        <ion-button color="danger" type="clear">danger</ion-button><br/>
        <ion-button color="dark" type="clear">dark</ion-button><br/>
        <h1>round</h1>
        <ion-button round> round default</ion-button><br/>
        <h1>block</h1>
        <p>
            <ion-button block> round default</ion-button>
        </p>
        <h1>full</h1>
        <p>
            <ion-button color="danger" full> fulldefault</ion-button>
        </p>
        <h1>Button Sizes</h1>
        <p>
            <ion-button size="small"> small button</ion-button>
        </p>
        <p>
            <ion-button color="danger"> default button</ion-button>
        </p>
        <p>
            <ion-button color="dark" size="large"> large button</ion-button>
        </p>
        <h1>Icon buttons</h1>
        <p>
            <ion-button color="dark" icon-left>
                <ion-icon name="home"></ion-icon>
                button
            </ion-button>
        </p>
        <p>
            <ion-button color="danger" icon-right>
                button
                <ion-icon name="home"></ion-icon>
            </ion-button>
        </p>
        <p>
            <ion-button color="secondary" icon-only>
                <ion-icon name="home"></ion-icon>
            </ion-button>
        </p>
    </div>
</template>
<script>
    export default {}
</script>