<template>
    <span class="ion-avatar">
        <img :src="src" alt="">
    </span>
</template>
<script>
    export default {
        name: 'ion-avatar',
        props: {
            src: {
                type: String,
                required: true
            }
        }
    }
</script>