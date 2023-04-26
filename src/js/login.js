
import axios from "axios";
export default {
    name: "LoginComponent",
   
    data() {
        return {
            userData:{
                email: '',
                password:''
            },
            errorMsg:'',
            errorMsgStatus:false,
        }
    },
    methods: {
        accountLogin() {
            axios.post("http://localhost:8000/api/user/login",this.userData).then((response)=>{
                // console.log(response.data);
                if(response.data.loginStatus == true){
                    this.$store.dispatch("setToken", response.data.loginToken)
                    this.$store.dispatch("setUserData", response.data.userData)
                    this.$store.dispatch("setLoginStatus", response.data.loginStatus)
                    this.$router.push('/adminHome');
                }else{
                    this.$router.push('/login')
                    this.errorMsg = response.data.msg
                    this.errorMsgStatus = true
                }
            })
        }
    },

  };