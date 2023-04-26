import axios from "axios";
import Swal from 'sweetalert2'
// import { BPagination } from 'bootstrap-vue'
export default {
    name: 'CategoryComponent',
    data() {
        return {
            foodCategory: [],
            itemCategory:[],
            foodCategoryName:'',
            foodCategoryDescription:'',
            itemCategoryName: '',
            itemCategoryDescription:'',
        }
    },
    
    methods: {
         sweetAlertFunction (){
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Action Successful'
              })
        },
        createFoodCategory() {
            const data = {
                name: this.foodCategoryName,
              };
            axios.post("http://localhost:8000/api/createFoodCategory",data).then((response)=>{
               const newCategory = response.data[0];
                if(response.data.msg == "Category Created"){
                    this.sweetAlertFunction();
                    this.foodCategoryName = "";

                    this.foodCategory.push(newCategory);
                }
            })
        },

        createItemCategory() {
            const data = {
                name: this.itemCategoryName,
              };
            axios.post("http://localhost:8000/api/createItemCategory",data).then((response)=>{
               const newCategory = response.data[0];
                if(response.data.msg == "Category Created"){
                    this.sweetAlertFunction();
                    this.itemCategoryName = "";
                    this.itemCategory.push(newCategory);
                }
            })
        },

        deleteFoodCategory(id){
            var categoryId = id;

            axios.post("http://localhost:8000/api/delete/foodCategory",{categoryId: categoryId}).then((response)=>{
            // console.log(response)
            if(response.data.msg == "Delete Success"){
                this.sweetAlertFunction();
                this.foodCategory = this.foodCategory.filter((item) => item.id !== id)
            }
            
            })
        },
        deleteItemCategory(id){
            var categoryId = id;
            axios.post("http://localhost:8000/api/delete/itemCategory",{categoryId: categoryId}).then((response)=>{
                if(response.data.msg == "Delete Success"){
                    this.sweetAlertFunction();
                    this.itemCategory = this.itemCategory.filter((item) => item.id !== id)
                }
            })
        }

    },
    mounted () {
        axios.get("http://localhost:8000/api/foodCategory").then((response)=>{
            this.foodCategory = response.data;
        });
        axios.get("http://localhost:8000/api/itemCategory").then((response)=>{
            this.itemCategory = response.data;
        });
    },
};