<template>
    <div class="ion-title " :class="['title-'+theme]">
        <div class="toolbar-title " :class="['toolbar-title-'+theme]">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import ThemeMixin from 'src/minins/theme.mixins';
    export default {
        name: 'ion-title',
        mixins: [ThemeMixin]
    }
</script>