import axios from "axios"
export default{
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