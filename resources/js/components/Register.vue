<template>
    <div class="register flex h-screen">
        <form class="w-full max-w-lg m-auto">
            <div class="flex flex-wrap mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                         Name
                    </label>
                    <input v-model="username" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name">

                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Email
                    </label>
                    <input v-model="email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email">
                </div>
            </div>
            <div class="flex flex-wrap mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Password
                    </label>
                    <input v-model="password" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Password">
                    <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                </div>
            </div>
            <div class="flex flex-wrap mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="confirm-password">
                        Confirm Password
                    </label>
                    <input v-model="confirm_password" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="confirm-password" type="password" placeholder="Confirm Password">
                    <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                </div>
            </div>
            <p class="text-red-500 text-xs italic" v-if="feedback.error">{{ feedback.error }}</p>
            <p class="text-green-500 text-xs italic" v-if="feedback.success">{{ feedback.success }}</p>

            <div class="flex flex-wrap map-3 mb-6 py-3 px-4 mb-3 align-middle">
                <button @click="doRegister()" class="flex-shrink-0 text-right bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                    Sign Up
                </button>
            </div>
        </form>
    </div>
</template>


<script>
    export default {
        name: 'Register',
        data(){
            return{
                username:null,
                email:null,
                password:null,
                confirm_password:null,
                feedback:{
                    error:null,
                    success:null,
                },


            }
        },
        methods:{
            doRegister:function (){
                if(this.username && this.email && this.password && this.confirm_password){
                    this.feedback.error = null;
                    const url = '/sign_up';
                    axios.post(url,{
                        name: this.username,
                        email: this.email,
                        password: this.password,
                        confirm_password: this.confirm_password
                    }).then(response => {
                        this.feedback.success = response.data
                        this.$router.push({name: 'signIn'})

                    }).catch(error =>{
                        this.feedback.error = error.message;

                    })

                }

            }
        }
    }
</script>
