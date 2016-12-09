import ThemeMixin from 'src/minins/theme.mixins';
export default {
    mixins: [ThemeMixin],
    data() {
        return {
            componentName: 'ionItem'
        };
    },
    methods: {
        getText() {
            let $labelEl = this.$refs.label.$el;
            return $labelEl.textContent || '';
        }
    }
};