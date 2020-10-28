<template>
    <div class="login flex h-screen">
        <form class="w-full max-w-sm m-auto">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Full Name
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input v-model="email" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text">
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Password
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input v-model="password" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="Password">
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3"></div>

                <label class="md:w-2/3 block text-gray-500 font-bold">
                    {{ remember_me }}
                    <input class="mr-2 leading-tight" type="checkbox"  v-model="remember_me">
                    <span class="text-sm">
                        Remember Me
                    </span>
                </label>
            </div>
            <p class="text-red-500 text-xs italic" v-if="feedback.error">{{ feedback.error }}</p>
            <p class="text-green-500 text-xs italic" v-if="feedback.success">{{ feedback.success }}</p>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                    <button @click="doLogin" class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Login
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                email:null,
                password:null,
                remember_me:null,
                feedback:{
                    success:null,
                    error:null,
                }
            }
        },
        methods:{
            doLogin:function (){
                if(this.username && this.email && this.password && this.confirm_password){
                    this.feedback.error = null;
                    const url = '/sign_in';
                    axios.post(url,{
                        email: this.email,
                        password: this.password,
                    }).then(response => {
                        this.feedback.success = response.data


                    }).catch(error =>{
                        this.feedback.error = error.message;

                    })

                }

            }
        }
    }
</script>

<style scoped>

</style>
