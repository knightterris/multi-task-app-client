import axios from "axios";

import Swal from 'sweetalert2'
export default {
    name: "AdminHomeComponent",
    data() {
        return {
            userID:'',
            data: {},
            imageUrl: 'http://localhost:8000/storage/product_images/',
        }
    },
    methods: {
        getImageUrl(fileName) {
            return this.imageUrl + fileName;
        },
         
        showProduct(id){
            this.$router.push('/product/show/'+id)
        },
        addBookmark(id){
            var productID = id;
            var userId = this.userID;
            axios.post(`http://localhost:8000/api/add/bookmark/${productID}`,{auth_user_id: userId}).then((response)=>{
                // console.log(response.data.wishlist_status);
                if(response.status == 200){
                    var updatedItem = this.data.find(item => item.id === id);
                    if(updatedItem){
                        updatedItem.wishlist_status = 1;
                    }
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Added to wishlist.'
                    })
                    // this.data = this.data.filter((item) => item.id !== id)
                }
            })
        },
        removeBookmark(id){
            var productID = id;
            axios.post(`http://localhost:8000/api/remove/bookmark/${productID}`).then((response)=>{
                // console.log(response.data.wishlist_status);
                if(response.status == 200){
                    var updatedItem = this.data.find(item => item.id === id);
                    if(updatedItem){
                        updatedItem.wishlist_status = 0;
                    }
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Removed from wishlist.'
                    })
                    // this.data = response.data;
                    // this.data = this.data.filter((item) => item.id !== id)
                }
            })
        }
    },
    mounted() {
    this.userID = this.$store.getters.getUserData.id;
      axios.get("http://localhost:8000/api/allProducts").then((response)=>{
        this.data = response.data;
        // console.log(this.data);
      })
    },
  };