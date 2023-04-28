import axios from "axios"

import Swal from 'sweetalert2'

export default {
    name:"PasswordComponent",
    data() {
        return {
            userID: '',
            oldPassword : '',
            newPassword : '',
            confirmNewPassword : '',
            newPasswordStatus : '',
            confirmPasswordStatus : '',
            oldPasswordStatus: '',
        }
    },
    methods: {
        changePassword() {
            const data = {
                oldPassword : this.oldPassword,
                newPassword : this.newPassword,
                confirmNewPassword : this.confirmNewPassword,
                userId : this.userID
            }
            axios.post("http://localhost:8000/api/change/password",data).then((response)=>{
                // console.log(response.data);
                if(response.data == 'Old Password do not match.'){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                      })
                      
                      Toast.fire({
                        icon: 'error',
                        title: 'Old Password do not match.'
                    })
                    this.oldPasswordStatus = true;
                    
                }else if(response.data == 'New passwords not same.'){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                      })
                      
                      Toast.fire({
                        icon: 'error',
                        title: 'New Passwords do not match.'
                    })
                    this.newPasswordStatus = true;
                    this.confirmPasswordStatus = true;
                }else if(response.data == 'Password changed successfully.'){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Password Changed.'
                    })
                }
            })
        },
        
        newPasswordLengthCheck(){
            if(this.newPassword.length < 10 ){
                this.newPasswordStatus = true
            }else{
                this.newPasswordStatus = false;
            }
        },
        confirmPasswordLengthCheck(){
            if(this.confirmNewPassword.length < 10 ){
                this.confirmPasswordStatus = true
            }else{
                this.confirmPasswordStatus = false
            }
        }
    },
    mounted () {
        this.userData = this.$store.getters.getUserData;
        var userId = this.userData.id;
        this.userID = userId
    }
}