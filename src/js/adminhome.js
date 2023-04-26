import axios from "axios";

export default {
    name: "AdminHomeComponent",
    data() {
        return {
            data: {},
            imageUrl: 'http://localhost:8000/storage/product_images/',
        }
    },
    methods: {
        getImageUrl(fileName) {
            return this.imageUrl + fileName;
        },
    },
    mounted() {
      axios.get("http://localhost:8000/api/allProducts").then((response)=>{
        this.data = response.data;
        console.log(this.data);
      })
    },
  };