<template>
  <div class="row mt-3">
    <div class="col-lg-6 col-md-6 col-sm-6 offset-3">
      <div class="card">
        <div class="card-header text-center">
          <div class="d-flex justify-content-between fw-bold">
            <i class="fa-solid fa-arrow-left" @click="productList"></i>
          </div>
        </div>

        <div class="card-body text-start">
          <label for="product_name" class="form-lable fw-bold">Name</label>
          <input
            type="text"
            class="form-control mb-2"
            v-model="products.name"
          />

          <label for="product_description" class="form-lable fw-bold"
            >Description</label
          >
          <textarea
            cols="10"
            rows="3"
            class="form-control mb-2"
            v-model="products.description"
          ></textarea>

          <label for="product_price" class="form-lable fw-bold">Price</label>
          <input
            type="number"
            class="form-control mb-2"
            v-model="products.price"
            @input="this.value = Math.abs(this.value)"
          />

          <label for="product_image" class="form-lable fw-bold"
            >Cover Image</label
          >
          <input type="file" class="form-control mb-2" @change="productImage" />

          <label for="product_images" class="form-lable fw-bold">Images</label>
          <input
            type="file"
            class="form-control mb-2"
            multiple
            @change="getImages"
          />

          <label for="product_category" class="form-lable fw-bold me-2"
            >Category</label
          >

          <label for="" class="me-1">Food</label>
          <input
            type="radio"
            value="food"
            v-model="selectedRadioValue"
            class="me-3"
            @change="checkRadioValue"
          />

          <label for="" class="me-1">Item</label>
          <input
            type="radio"
            value="item"
            v-model="selectedRadioValue"
            @change="checkRadioValue"
          />

          <select
            name="product_category"
            class="form-control"
            v-model="products.category_id"
          >
            <option value="">Choose an option</option>
            <template v-if="products.product_type == 0 || foodRadioStatus">
              <option
                :value="item.id"
                v-for="(item, index) in foodCategory"
                :key="index"
              >
                {{ item.name }}
              </option>
            </template>

            <template v-if="products.product_type == 1 || itemRadioStatus">
              <option
                :value="item.id"
                v-for="(item, index) in itemCategory"
                :key="index"
              >
                {{ item.name }}
              </option>
            </template>
          </select>

          <label for="product_count" class="form-lable fw-bold"> Count</label>
          <input
            type="number"
            class="form-control mb-2"
            min="0"
            v-model="products.count"
            @input="this.value = Math.abs(this.value)"
          />

          <label for="product_status" class="form-lable fw-bold">Status</label>
          <select class="form-control mb-2" v-model="products.status">
            <option value="">Choose Status</option>
            <option value="0">In Stock</option>
            <option value="1">Out of Stock</option>
          </select>

          <label for="product_type" class="form-lable fw-bold"
            >Product Type</label
          >
          <select
            name="product_type"
            id="product_type"
            class="form-control mb-2"
            v-model="products.product_type"
          >
            <option value="">Choose Product Type</option>
            <option value="0">Food</option>
            <option value="1">Item</option>
          </select>

          <div class="card-footer mt-3">
            <div class="d-flex justify-content-end">
              <button
                class="btn btn-md btn-primary update"
                type="submit"
                @click="updateProduct(products.id)"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card mt-3">
        <div class="card-header">Cover Image</div>
        <div class="card-body">
          <div class="row">
            <div
              class="col-lg-6 col-md-6 col-sm-12 col-12"
              v-if="products.image != NULL"
            >
              <div class="">
                <img
                  :src="getImageUrl(products.image)"
                  class=""
                  style="
                    width: 100%;
                    height: 300px;
                    object-fit: contain !important;
                  "
                />
              </div>
              <div class="card-footer">
                <div class="d-flex justify-content-end">
                  <div
                    class="btn btn-md btn-danger"
                    id="delete_cover"
                    @click="deleteCoverImage(products.id)"
                  >
                    Delete Cover Image
                  </div>
                </div>
              </div>
            </div>
            <div class="alert alert-warning" v-else role="alert">
              There is no cover image
            </div>
          </div>
        </div>
      </div>

      <div class="card mt-3">
        <div class="card-header">Product Images</div>
        <div class="card-body">
          <div class="row" v-if="images.length != 0">
            <div
              class="col-lg-6 col-md-6 col-sm-12 col-12"
              v-for="(item, index) in images"
              :key="index"
            >
              <div class="mb-3">
                <img
                  :src="getImageUrl(item.image)"
                  class=""
                  style="
                    width: 100%;
                    height: 300px;
                    object-fit: contain !important;
                  "
                />
              </div>
              <div class="card-footer">
                <div class="d-flex justify-content-end">
                  <button
                    class="btn btn-md btn-danger each_image_id"
                    @click="deleteEachImage(item.id)"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="alert alert-warning" v-else role="alert">
            There are no product images.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/editProduct.js"></script>

<style lang="css" scoped></style>
