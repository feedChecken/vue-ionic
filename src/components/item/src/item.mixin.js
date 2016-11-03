import ThemeMixin from 'src/minins/theme.mixins';
export default {
    mixins: [ThemeMixin],
    data() {
        return {
            viewLabel: true,
            componentName: 'ionItem'
        };
    },
    mounted() {
        //如果木有填label 则隐藏标签
        if (this.viewLabel) {
            let labelText = this.getText();
            this.viewLabel = (labelText.length > 0);
        }
    },
    methods: {
        getText() {
            let $labelEl = this.$refs.label.$el;
            return $labelEl.textContent || '';
        }
    }
}