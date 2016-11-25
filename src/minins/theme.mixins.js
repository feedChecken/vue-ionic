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
    props: {
        color: {
            type: String,
            default: 'default',
            validator(value) {
                return [
                    'default',
                    'primary',
                    'light',
                    'secondary',
                    'danger',
                    'dark'
                ].indexOf(value) > -1;
            }
        }
    }
}