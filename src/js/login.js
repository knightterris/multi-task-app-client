
import axios from "axios";
export default {
    name: "LoginComponent",
   
    data() {
        return {
            userData:{
                email: '',
                password:''
            }
        }
    },
    methods: {
        accountLogin() {
            axios.post("http://localhost:8000/api/user/login",this.userData).then((response)=>{
                console.log(response.data);
                
            })
        }
    },

  };