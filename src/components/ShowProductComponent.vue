<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header text-center">
          <div class="d-flex justify-content-between my-3">
            <i class="fa-solid fa-arrow-left" @click="productList"></i>
          </div>
        </div>
      </div>

      <div class="row p-3">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="card mb-3">
            <div class="card-header">Cover Image</div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div class="">
                    <img
                      src="../images/no-image.png"
                      v-if="products.image == NULL"
                      class="img-fluid"
                      style="width: 500px; height: 300px; object-fit: contain"
                    />
                    <img
                      v-else
                      class="img-fluid"
                      style="width: 500px; height: 300px; object-fit: contain"
                      :src="getImageUrl(products.image)"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header text-center">Product Details</div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-12">Product Name</div>
                <div class="col-lg-6 col-md-6 col-12">
                  {{ products.name }}
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-md-6 col-12">Product Type</div>
                <div class="col-lg-6 col-md-6 col-12">
                  <span
                    v-if="products.product_type == 0"
                    class="badge text-bg-success"
                    >Food</span
                  >
                  <span
                    v-else-if="products.product_type == 1"
                    class="badge text-bg-success"
                    >Item</span
                  >
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-md-6 col-12">Product Category</div>
                <div class="col-lg-6 col-md-6 col-12">
                  <span v-if="products.product_type == 0">
                    {{ foodCategory.name }}
                  </span>
                  <span v-else-if="products.product_type == 1">
                    {{ itemCategory.name }}
                  </span>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-md-6 col-12">Product Owner</div>
                <div class="col-lg-6 col-md-6 col-12">
                  {{ products.created_by }}
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-md-6 col-12">Product Status</div>
                <div class="col-lg-6 col-md-6 col-12">
                  <span
                    v-if="products.status == 0"
                    class="badge text-bg-success"
                    >In-stock</span
                  >
                  <span
                    v-else-if="products.status == 1"
                    class="badge text-bg-danger"
                    >Out-of-stock</span
                  >
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-md-6 col-12">Product Price</div>
                <div class="col-lg-6 col-md-6 col-12">
                  {{ products.price }}
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-md-6 col-12">Product Count</div>
                <div class="col-lg-6 col-md-6 col-12">
                  {{ products.count }}
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div
                class="col-lg-12 col-md-6 col-12 text-start card-header fw-bold"
              >
                Contact with the creator
              </div>
              <div class="row text-start">
                <div class="col-lg-6 col-md-6 col-12">
                  <span>Name: </span>
                  {{ products.creator_name }}
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                  <span>Email : </span>
                  {{ products.creator_email }}
                </div>
              </div>
              <div class="row text-start">
                <div class="col-lg-6 col-md-6 col-12">
                  <span>Phone Number : </span>
                  {{ products.creator_phone }}
                </div>
              </div>
            </div>
            <div class="card-footer text-start">
              <div class="col-lg-12 col-md-6 col-12 card-header">
                Product Description
              </div>
              <div class="col-lg-12 col-md-6 col-12">
                {{ products.description }}
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 col-12">
          <div class="card">
            <div class="card-header">Product Images</div>
            <div class="card-body">
              <div class="row" v-if="images.length != 0">
                <div
                  class="col-lg-12 col-md-12 col-sm-12 col-12 my-3"
                  v-for="(item, index) in images"
                  :key="index"
                >
                  <div class="">
                    <img
                      :src="getImageUrl(item.image)"
                      style="width: 100%; height: 300px; object-fit: contain"
                    />
                  </div>
                </div>
              </div>
              <div v-else class="alert alert-warning" role="alert">
                There is no images.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ShowProductComponent",
  data() {
    return {
      products: "",
      images: [],
      foodCategory: "",
      itemCategory: "",
      imageUrl: "http://localhost:8000/storage/product_images/",
    };
  },
  methods: {
    getImageUrl(fileName) {
      return this.imageUrl + fileName;
    },
    productList() {
      this.$router.push("/product/list");
    },
  },
  mounted() {
    const id = this.$route.params.id;
    axios
      .get(`http://localhost:8000/api/get/product/${id}`)
      .then((response) => {
        // console.log(response.data.images);
        this.products = response.data.products;
        this.images = response.data.images;
        this.foodCategory = response.data.foodCategory;
        this.itemCategory = response.data.itemCategory;
      });
  },
};
</script>

<style lang="css" scoped>
.col-lg-6.col-md-6.col-12 {
  line-height: 3;
}
</style>
