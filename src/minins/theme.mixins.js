export default {
    data() {
        return {
            theme: 'ios'
        }
    },
    created() {
        if (this.theme != this.$ionic.theme) {
            this.theme = this.$ionic.theme;
        }
    },
}