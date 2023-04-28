import axios from "axios"
import Swal from "sweetalert2";

export default {
        name : "ProductCreateComponent",
        data() {
                return {
                        userData : {},
                        created_by_id : '',
                        created_by :'',
                        foodCategories: '',
                        itemCategories: '',
                        foodRadioStatus : '',
                        itemRadioStatus : '',
                        selectedRadioValue: '',
                        productData : {
                                productName:'',
                                productDescription:'',
                                productPrice:'',
                                productImage:'',
                                productImages:[],
                                productCategory:'',
                                productCount:'',
                                productStatus:'',
                                productType:'',
                        },
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
                productImage(){
                        this.productData.productImage = event.target.files[0];
                },
                getImages(){
                        var images = event.target.files;
                        var imagesFile = [];
                        for(let i = 0; i < images.length; i++){
                                imagesFile.push(images[i]);
                        }
                        this.productData.productImages = imagesFile;
                },
                createProduct(){
                        this.created_by_id = this.userData.id;
                        this.created_by = this.userData.name;
                        // console.log(this.productData);
                        // console.log(this.productData.productImages)
                        var formData = new FormData();
                        formData.append('productName',this.productData.productName);
                        formData.append('productDescription',this.productData.productDescription);
                        formData.append('productPrice',this.productData.productPrice);
                        formData.append('productImage',this.productData.productImage);
                        // formData.append('productImages',this.productData.productImages);

                        for (let i = 0; i < this.productData.productImages.length; i++) {
                                formData.append(`productImages[${i}]`, this.productData.productImages[i]);
                        }
                              
                        formData.append('productCategory',this.productData.productCategory);
                        formData.append('productCount',this.productData.productCount);
                        formData.append('productStatus',this.productData.productStatus);
                        formData.append('productType',this.productData.productType);
                        formData.append('created_by_id',this.created_by_id);
                        formData.append('created_by',this.created_by);
                        axios.post("http://localhost:8000/api/create/product",formData,{
                                headers: { 'Content-Type': 'multipart/form-data' }}).then((response)=>{
                                // console.log(response);
                                this.$router.push('/product/list');
                                if(response.data == 'Product Created'){
                                        const Toast = Swal.mixin({
                                                toast: true,
                                                position: 'top-end',
                                                showConfirmButton: false,
                                                timer: 2000,
                                                timerProgressBar: true,
                                              })
                                              
                                              Toast.fire({
                                                icon: 'success',
                                                title: 'Product Created'
                                        })
                                }
                        })
                        
                },
        },
        mounted () {
                this.userData = this.$store.getters.getUserData;
                
                axios.get("http://localhost:8000/api/get/categories").then((response)=>{
                        // console.log(response.data.food_categories);
                        this.foodCategories = response.data.food_categories;
                        this.itemCategories = response.data.item_categories;
                })
        },
}