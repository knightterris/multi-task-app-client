import axios from "axios"
import Swal from "sweetalert2";
export default{
    name:"ProductListComponent",
    data() {
        return {
            productData: [],
            imageUrl: 'http://localhost:8000/storage/product_images/'
        }
    },
    methods: {
        getImageUrl(fileName) {
            return this.imageUrl + fileName;
        },
        createProduct(){
            this.$router.push("/product/create")
        },
        deleteProduct(id){
            var productID = id;
            axios.post("http://localhost:8000/api/delete/product",{product_id:productID}).then((response)=>{
                // console.log(response);
                if(response.data == 'Product Deleted'){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Product Deleted'
                    })
                    this.productData = this.productData.filter((item) => item.id !== id)
                }
            })
        }
    },
    mounted() {
        axios.get("http://localhost:8000/api/allProducts").then(response => {
            // console.log(response.data)
          this.productData = response.data
        }).catch(error => {
          console.error(error)
        })
    },
}