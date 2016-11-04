<template>
    <div class="ion-thumbnail">
        <img  :src="src" alt="">
    </div>
</template>
<script>
    export default {
        name: 'ion-thumbnail',
        props: {
            src: {
                type: String,
                required: true
            }
        }
    };
</script>