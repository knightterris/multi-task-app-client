<template>
  <div class="mt-3 p-3">
    <div class="row">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-3"
      >
        <div class="card">
          <div class="card-header">
            <div class="d-flex">
              <div class="col-lg-11 col-md-11 col-sm-11">{{ item.name }}</div>
              <div class="col-lg-1 col-md-1 col-sm-1">
                <i
                  v-if="item.wishlist_status == 0"
                  class="fa-regular fa-bookmark"
                  title="Add Bookmark"
                  @click="addBookmark(item.id)"
                ></i>

                <i
                  v-if="item.wishlist_status == 1"
                  class="fa-solid fa-bookmark"
                  title="Remove Bookmark"
                  @click="removeBookmark(item.id)"
                ></i>
              </div>
            </div>
          </div>
          <div class="card-body">
            <img
              v-if="item.image == NULL"
              src="../images/no-image.png"
              style="height: 224px; object-fit: cover"
              alt=""
            />
            <img
              v-else
              style="height: 224px; object-fit: cover"
              :src="getImageUrl(item.image)"
              alt=""
            />
          </div>
          <div class="card-footer">
            <div class="my-3 d-flex justify-content-between">
              <h6 class="fw-bold">Created By</h6>
              <span>{{ item.created_by }}</span>
            </div>

            <div class="my-3 d-flex justify-content-between">
              <h6 class="fw-bold">Created At</h6>
              <span>{{
                item.created_at ? item.created_at.substr(0, 10) : ""
              }}</span>
            </div>

            <div class="my-3 d-flex justify-content-between">
              <h6 class="fw-bold">Product Name</h6>
              <span>{{ item.name }}</span>
            </div>

            <div class="my-3 d-flex justify-content-between">
              <h6 class="fw-bold">Product Type</h6>
              <span
                class="badge text-bg-success"
                style="font-size: 15px"
                v-if="parseInt(item.product_type) === 0"
                >Food</span
              >
              <span class="badge text-bg-success" style="font-size: 15px" v-else
                >Item</span
              >
            </div>

            <div class="my-3 d-flex justify-content-between">
              <h6 class="fw-bold">Product Status</h6>
              <span
                class="badge text-bg-success"
                style="font-size: 15px"
                v-if="parseInt(item.status) === 0"
                >In-stock</span
              >
              <span class="badge text-bg-danger" style="font-size: 15px" v-else
                >Out of Stock</span
              >
            </div>

            <div class="my-3 d-flex justify-content-between">
              <h6 class="fw-bold">Description</h6>
              <span>{{ item.description.substring(0, 40) }} ...</span>
            </div>
          </div>

          <div class="card-footer">
            <div class="d-flex">
              <i
                class="fa-regular fa-heart mt-1 me-2"
                @click="addLike(item.id)"
                v-if="item.reactionId !== userID"
              ></i>
              <i class="fa-solid fa-heart" v-else></i>
              {{ item.like }}

              <router-link :to="`/comments/${item.id}`">
                <i class="fa-regular fa-comment ms-5 me-2 mt-1 text-dark"></i>
              </router-link>

              {{ item.comment }}

              <i
                class="fa-regular fa-eye ms-5 mt-1"
                @click="showProduct(item.id)"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/adminhome.js"></script>

<style lang="scss" scoped></style>
