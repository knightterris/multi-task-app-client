import axios from "axios"

export default {
        name: "WishlistComponent",
        data() {
            return {
                wishlist: '',
                imageUrl: 'http://localhost:8000/storage/product_images/'
            }
        },
        methods: {
            getImageUrl(fileName) {
                return this.imageUrl + fileName;
            },
            showProduct(id){
                this.$router.push('/product/show/'+id)
            },
        },
        mounted () {
            var userID  = this.$store.getters.getUserData.id;
            axios.get(`http://localhost:8000/api/get/my/wishlist/${userID}`).then((response)=>{
                // console.log(response.data)
                this.wishlist = response.data
            })
        },
}