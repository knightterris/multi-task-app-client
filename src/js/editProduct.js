import axios from "axios"
import Swal from "sweetalert2";

export default {
    name:"EditProductComponent",
    data() {
        return {
            userData : {},
            created_by_id : '',
            created_by :'',
            products: '',
            images:[],
            foodCategory:'',
            itemCategory:'',
            foodRadioStatus : '',
            itemRadioStatus : '',
            selectedRadioValue: '',
            imageUrl: "http://localhost:8000/storage/product_images/",
        }
    },
    methods: {
        checkRadioValue() {
            if(this.selectedRadioValue == 'food'){
                    this.foodRadioStatus = true;
                    this.itemRadioStatus = false;
            }else if(this.selectedRadioValue == 'item'){
                    this.itemRadioStatus = true;
                    this.foodRadioStatus = false;
            }
        },
        getImageUrl(fileName) {
            return this.imageUrl + fileName;
        },
        deleteCoverImage(id){
            axios.post(`http://localhost:8000/api/delete/cover/image/${id}`).then((response)=>{
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
                        title: 'Cover Image deleted'
                    })
                }
                this.products = response.data;
            })
        },
        deleteEachImage(id){
            axios.post(`http://localhost:8000/api/delete/each/image/${id}`).then((response)=>{
                console.log(response)
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
                        title: 'An image has removed'
                    })
                }
                this.images = this.images.filter((item) => item.id !== id)
            })
        },
        updateProduct(id){
            this.created_by_id = this.userData.id;
            this.created_by = this.userData.name;
            // console.log(this.productData);
            // console.log(this.productData.productImages)
            var formData = new FormData();
            formData.append('productName',this.products.name);
            formData.append('productDescription',this.products.description);
            formData.append('productPrice',this.products.price);
            formData.append('productImage',this.products.image);
            // formData.append('productImages',this.productData.productImages);

            for (let i = 0; i < this.images.length; i++) {
                    formData.append(`productImages[${i}]`, this.images[i]);
            }
                    
            formData.append('productCategory',this.products.category_id);
            formData.append('productCount',this.products.count);
            formData.append('productStatus',this.products.status);
            formData.append('productType',this.products.product_type);
            formData.append('created_by_id',this.created_by_id);
            formData.append('created_by',this.created_by);
            axios.post(`http://localhost:8000/api/update/product/${id}`,formData,{
                headers: { 'Content-Type': 'multipart/form-data' }}).then((response)=>{
                // console.log(response)
                this.$router.push('/product/list');
                if(response.data == 'Product Updated'){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                        })
                        
                        Toast.fire({
                        icon: 'success',
                        title: 'Product Updated'
                    })
                }
            })
        },
        productImage(){
                this.products.image = event.target.files[0];
        },
        getImages(){
                var inputImages = event.target.files;
                var imagesFile = [];
                for(let i = 0; i < inputImages.length; i++){
                        imagesFile.push(inputImages[i]);
                }
                this.images = imagesFile;
        },
    },
    mounted() {
        this.userData = this.$store.getters.getUserData;
                

        const id = this.$route.params.id;
        axios
          .get(`http://localhost:8000/api/get/edit/product/data/${id}`)
          .then((response) => {
            console.log(response.data);
            this.products = response.data.products;
            this.images = response.data.images;
            this.foodCategory = response.data.foodCategory;
            this.itemCategory = response.data.itemCategory;
          });
        },
        
}