import axios from "axios";

import Swal from 'sweetalert2'
export default {
    name: "AdminHomeComponent",
    data() {
        return {
            userID:'',
            data: {},
            imageUrl: 'http://localhost:8000/storage/product_images/',
            reactionId:'',
        }
    },
    // computed: {
    //     // userName() {
    //     //   return this.$store.getters.getUserData;
    //     // },
    //     data(){
    //         return {...this.searchData, ...this.data};
    //     }
    //   },
    // props: {
    //     data: {},
    // },
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
        },
        addLike(id){
            let data = {
                product_id: id,
                user_id: this.userID,
            };
            axios.post("http://localhost:8000/api/add/like",data).then((response)=>{
                console.log(response.data);
                console.log(response.data[0].like);
                // var product_id = response.data.id[0];
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
                        title: 'Liked'
                    })
                    const itemToUpdate = this.data.find(item => item.id === id);
                    if (itemToUpdate) {
                    itemToUpdate.like = response.data[0].like;
                    const currentLoggedInUserId = this.userID;
                    const currentUserReactionID = response.data[0].reactions.find(
                        reaction => reaction.user_id === currentLoggedInUserId
                    );
                    itemToUpdate.reactionId = currentUserReactionID ? currentUserReactionID.user_id : null;
                    }
                }
            })
        },
        
       
    },
    mounted() {
    this.userID = this.$store.getters.getUserData.id;
    // alert(this.userID)
    axios.get("http://localhost:8000/api/allProducts").then((response) => {
        this.data = response.data;
  
        const currentLoggedInUserId = this.userID;
  
        this.data.forEach((item) => {
          const currentUserReactionID = item.reactions.find(
            (reaction) => reaction.user_id === currentLoggedInUserId
          );
  
          item.reactionId = currentUserReactionID ? currentUserReactionID.user_id : null;
        });
      });
    },
  };