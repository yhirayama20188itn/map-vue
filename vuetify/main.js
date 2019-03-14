var vm = new Vue({
    el: '#app',
    data() {
        return {
            snackbar: false,
            color: '#005caf',
            mode: '',
            timeout: 6000,
            text: 'Hello, I\'m a snackbar'
        }
    }
});