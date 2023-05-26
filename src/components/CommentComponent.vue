<template>
  <div class="row mt-4 p-3">
    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
      <div class="card">
        <div class="card-header text-start">
          <router-link to="/adminHome" class="text-dark text-decoration-none">
            <i class="fa-solid fa-arrow-left"></i>
          </router-link>
        </div>
        <div class="card-body">
          <!-- <p class="mb-3">{{ loggedInUserName }}</p> -->
          <div
            class="alert alert-warning"
            v-if="commentList.length == 0"
            role="alert"
          >
            There are no comments yet.
          </div>

          <div
            v-else
            class="d-flex mt-3 shadow-sm"
            v-for="(item, index) in commentList"
            :key="index"
          >
            <p>{{ item.user?.name }}</p>
            <img
              src="../../public/client/default.png"
              class="rounded-circle"
              style="width: 80px; height: 80px"
            />
            <!-- <img
              src="../../public/client/assets/images/team_04.jpg"
              class="rounded-circle"
              style="width: 80px; height: 80px"
            /> -->

            <p class="text-start">{{ item.message }}</p>
          </div>
        </div>
        <div class="card-footer">
          <div class="d-flex">
            <div class="w-100">
              <input
                type="text"
                name="comment"
                v-model="comment"
                class="w-100 form-control comment"
                placeholder="Write your comment here"
                v-on:keyup.enter="postComment()"
              />
            </div>
            <!-- <input type="hidden" name="product_id" id="product_id" value="{{ $data->id }}"> -->
            <div class="">
              <button class="btn btn-primary ms-2" @click="postComment()">
                <i class="fa-regular fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/comment.js"></script>
