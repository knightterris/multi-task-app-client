<template>
  <div class="row mt-5">
    <div class="col">
      <div class="card">
        <div class="card-header d-flex justify-content-between">
          Product List
          <div class="">
            <button class="btn btn-primary" @click="createProduct">
              Create Product
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-12">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Image</th>
                    <th scope="col">Description</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Status</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in productData" :key="index">
                    <th scope="row">{{ item.id }}</th>
                    <td class="w-25">
                      <img
                        src="../images/no-image.png"
                        v-if="item.image == NULL"
                        class="img-fluid"
                        style="width: 500px; height: 300px; object-fit: contain"
                      />
                      <img
                        v-else
                        class="img-fluid"
                        style="width: 500px; height: 300px; object-fit: contain"
                        :src="getImageUrl(item.image)"
                        alt=""
                      />
                    </td>
                    <td class="w-25">
                      {{ item.description }}
                    </td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.category_id }}</td>
                    <td>{{ item.status }}</td>
                    <td>{{ item.price }}</td>
                    <td>
                      <i class="fa-regular fa-eye me-3"></i>
                      <i class="fa-regular fa-pen-to-square me-3"></i>
                      <i class="fa-regular fa-trash-can"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/productList.js"></script>

<style lang="scss" scoped></style>
