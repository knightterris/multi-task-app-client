import axios from "axios";

export default {
    name: "AdminProfileComponent",
    data() {
        return {
            userData: {},
            imageUrl: 'http://localhost:8000/storage/',
        }
    },
    methods: {
        getImageUrl(fileName) {
            return this.imageUrl + fileName;
        },
        goEditProfile(){
            this.$router.push("/admin/profile/edit")
        }
    },
    mounted () {
        this.userData = this.$store.getters.getUserData;
        var userId = this.userData.id;
        axios.post("http://localhost:8000/api/get/user/data",{userID : userId}).then((response)=>{
            // console.log(response.data)
            this.userData = response.data;
        })
    },
};