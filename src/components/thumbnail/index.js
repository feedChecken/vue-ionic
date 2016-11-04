import Thumbnail from './src/thumbnail.vue';

Thumbnail.install = function() {
    Vue.component(Thumbnail.name, Thumbnail);
};

export default Thumbnail;