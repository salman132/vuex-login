
import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from "@/components/Welcome";
import Login from "@/components/Login";
import Register from "@/components/Register";

Vue.use(VueRouter)

const routes = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'Welcome',
            component: Welcome
        },
        {
            path: '/sign_in',
            name: 'signIn',
            component: Login
        },
        {
            path: '/sign_up',
            name: 'signUp',
            component: Register
        }
    ]
})

export default routes;
