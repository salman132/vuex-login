import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        isAuth:0,
    },
    getters:{
        checkedAuth: state =>{
            return state.isAuth;
        },
    },
    mutations:{
        AUTH_CHECKED:function (){
           console.log('mutation called');
        }
    },

    actions:{
        checkAuth:function (context){
            console.log('call action')
            const url = '/init';
            axios.get(url).then(response =>{

                return response.data;

            })
        }
    }
});

export default store;

