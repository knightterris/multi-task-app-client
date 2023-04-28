<template>
  <div class="row mt-3 p-3">
    <div class="col">
      <div class="card">
        <div class="card-header text-center">
          <div class="row my-3">
            <div class="col-1">
              <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div class="col">Create Product</div>
          </div>
        </div>

        <div class="card-body text-start">
          <label for="product_name" class="form-lable my-3">Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Product Name"
            v-model="productData.productName"
          />

          <label for="product_description" class="form-lable my-3"
            >Description</label
          >
          <textarea
            name="product_description"
            id="product_description"
            cols="10"
            rows="3"
            class="form-control"
            placeholder="Product Description......"
            v-model="productData.productDescription"
          ></textarea>

          <label for="product_price" class="form-lable my-3">Price</label>
          <input
            type="number"
            class="form-control"
            @input="this.value = Math.abs(this.value)"
            placeholder="Product Price"
            v-model="productData.productPrice"
          />

          <label for="product_image" class="form-lable my-3"
            >Product Image</label
          >
          <input type="file" class="form-control" @change="productImage" />

          <label for="product_images" class="form-lable my-3"
            >Add More Images</label
          >
          <input
            type="file"
            name="product_images[]"
            class="form-control"
            multiple
            @change="getImages"
          />

          <label for="product_category" class="form-lable my-3 me-3"
            >Product Category</label
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
            v-model="productData.productCategory"
          >
            <option value="">Choose an option</option>
            <template v-if="foodRadioStatus">
              <option
                :value="item.id"
                v-for="(item, index) in foodCategories"
                :key="index"
              >
                {{ item.name }}
              </option>
            </template>

            <template v-if="itemRadioStatus">
              <option
                :value="item.id"
                v-for="(item, index) in itemCategories"
                :key="index"
              >
                {{ item.name }}
              </option>
            </template>
          </select>

          <label for="product_count" class="form-lable my-3"
            >Product Count</label
          >
          <input
            type="number"
            name="product_count"
            class="form-control"
            min="0"
            v-model="productData.productCount"
            @input="this.value = Math.abs(this.value)"
          />

          <label for="product_status" class="form-lable my-3"
            >Product Status</label
          >
          <select
            name="product_status"
            id="product_status"
            class="form-control"
            v-model="productData.productStatus"
          >
            <option value="">Choose an option</option>
            <option value="0">In Stock</option>
            <option value="1">Out of Stock</option>
          </select>

          <label for="product_type" class="form-lable my-3">Product Type</label>
          <select
            name="product_type"
            id="product_type"
            class="form-control"
            v-model="productData.productType"
          >
            <option value="">Choose an option</option>
            <option value="0">Food</option>
            <option value="1">Item</option>
          </select>

          <div class="card-footer mt-3">
            <div class="d-flex justify-content-end">
              <button
                class="btn btn-md btn-primary"
                @click="createProduct"
                type="submit"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/createProduct.js"></script>

<style lang="scss" scoped></style>
