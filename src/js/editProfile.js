import axios from "axios";
import Swal from 'sweetalert2'
export default{
    name:'EditProfileComponent',
    data() {
        return {
            userData: {},
            imageUrl: 'http://localhost:8000/storage/',
            photoFile: null,
        }
    },
    methods: {
        getImageUrl(fileName) {
            return this.imageUrl + fileName;
        },
        getPhoto(){
            this.photoFile = event.target.files[0];
        },
        updateProfile(){
            // console.log(this.photoFile)
            const userID = this.userData.id;
            const formData = new FormData();
            formData.append('photo', this.photoFile);
            formData.append('userData', JSON.stringify(this.userData));
            formData.append('user_id', userID);
            axios.post("http://localhost:8000/api/update/profile",formData,{
                headers: { 'Content-Type': 'multipart/form-data' }}).then((response)=>{
                this.userData = response.data
                if(response.status == 200){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Profile Updated'
                      })
                      this.$router.push('/admin/profile')
                }
                
            })
        }
    },
    mounted () {
        this.userData = this.$store.getters.getUserData;
        var userId = this.userData.id;
        axios.post("http://localhost:8000/api/get/user/data",{userID : userId}).then((response)=>{
            this.userData = response.data;
        })
    },
}