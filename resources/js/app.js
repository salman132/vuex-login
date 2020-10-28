require('./bootstrap');
window.Vue = require('vue');

import Vue from 'vue'
import routes from "./router/index"
import Auth from "./auth";
import Welcome from "./components/Welcome";


import App from "./App.vue";






new Vue({
    router:routes,
    auth:Auth,
    components:{
        Welcome: Welcome,
        App: App,

    },
    render: h =>h(App)
}).$mount('#app');
