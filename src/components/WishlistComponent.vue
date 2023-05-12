<template>
  <div>
    <div class="row" v-if="wishlist.length != 0">
      <div class="col-4" v-for="(item, index) in wishlist" :key="index">
        <div class="card p-3" style="height: 800px">
          <div class="card-header text-center">
            <div class="d-flex">
              <div class="col-lg-11 col-md-11 col-sm-11">{{ item.name }}</div>
              <div class="col-lg-1 col-md-1 col-sm-1">
                <i
                  v-if="item.wishlist_status == 0"
                  class="fa-regular fa-bookmark"
                  title="Add Bookmark"
                ></i>

                <i
                  v-if="item.wishlist_status == 1"
                  class="fa-solid fa-bookmark"
                  title="Remove Bookmark"
                ></i>
              </div>
            </div>
          </div>
          <div class="my-3">
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
              <h6>Created By</h6>
              <span>{{ item.created_by }}</span>
            </div>
            <div class="my-3 d-flex justify-content-between">
              <h6>Product Name</h6>
              <span>{{ item.name }}</span>
            </div>
            <div class="my-3 d-flex justify-content-between">
              <h6>Product Type</h6>
              <span v-if="item.product_type == 0" class="badge text-bg-success"
                >Food</span
              >
              <span v-if="item.product_type == 1" class="badge text-bg-success"
                >Item</span
              >
            </div>
            <div class="my-3 d-flex justify-content-between">
              <h6>Product Status</h6>
              <span v-if="item.status == 0" class="badge text-bg-success"
                >In-stock</span
              >
              <span v-if="item.status == 1" class="badge text-bg-danger"
                >Out-of-stock</span
              >
            </div>
            <div class="my-3 text-start">
              <h6 class="mb-2">Description</h6>
              <span class="">{{ item.description }}</span>
            </div>
          </div>
          <div class="card-footer mb-3">
            <div class="d-flex justify-content-between">
              <div class="mt-2">
                <i class="fa-regular fa-heart mt-1 me-2"></i>
                <span class="">{{ item.like }} Likes</span>
                <i
                  class="fa-regular fa-eye ms-5 mt-1"
                  @click="showProduct(item.id)"
                ></i>
              </div>
              <div class="">
                <!-- @if (item.wishlist_status == 0)
                                        <button class="btn btn-primary wishlist" data-id="{{ item.id }}">
                                            <i class="ti-download"></i>
                                            {{ trans('globalText.product.wishlist') }}
                                        </button>
                                    @else
                                        <a href="{{ route('admin.product.removeWishList', item.id) }}">
                                            <button class="btn btn-danger">
                                                <i class="ti-trash"></i>
                                                {{ trans('globalText.product.remove_wishlist') }}
                                            </button>
                                        </a>
                                    @endif -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3 v-else class="text-danger text-center p-3">
      There is no wishlist yet.
    </h3>
  </div>
</template>

<script src="../js/wishlist.js"></script>

<style lang="scss" scoped></style>
