import axios from "axios"
import Swal from 'sweetalert2'

export default{
    name: "CommentComponent",
    data() {
        return {
            comment: '',
            userID: '',
            productID: '',
        }
    },
    methods: {
        postComment() {
            var comment = {
                comment: this.comment,
                user_id: this.userID,
                product_id: this.productID,
            };
            axios.post("http://localhost:8000/api/post/comment",comment).then((response)=>{
                // console.log(response);
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
                        title: 'Commented'
                    })
                }
            })
        }
    },
    mounted () {
        this.userID = this.$store.getters.getUserData.id;
        this.productID = this.$route.params.id;
        
    },
}