<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="card">
          <div class="card-header d-flex justify-content-between">
            Food Category
            <i
              class="fa-solid fa-plus"
              data-toggle="modal"
              data-target="#exampleModal"
            ></i>
          </div>
          <div class="card-body">
            <div
              class="justify-content-between d-flex mb-4"
              v-for="(item, index) in foodCategory"
              :key="index"
            >
              <div class="" id="">{{ item.name }}</div>
              <div class="">
                <i
                  class="fa-regular fa-trash-can text-dark"
                  @click="deleteFoodCategory(item.id)"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="card">
          <div class="card-header d-flex justify-content-between">
            Item Category
            <i
              class="fa-solid fa-plus"
              data-toggle="modal"
              data-target="#exampleModal2"
            ></i>
          </div>
          <div class="card-body">
            <div
              class="justify-content-between d-flex mb-4"
              v-for="(item, index) in itemCategory"
              :key="index"
            >
              <div class="" id="">
                {{ item.name }}
              </div>
              <div class="">
                <!-- <a href=""><i class="fa-solid fa-pencil text-dark me-3"></i></a> -->
                <i
                  class="fa-regular fa-trash-can text-dark"
                  @click="deleteItemCategory(item.id)"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabelTwo"
    aria-hidden="true"
    ref="exampleModal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Food category</h5>
          <button
            type="button"
            class="btn-close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <input
            type="text"
            v-model="foodCategoryName"
            class="form-control my-3"
            placeholder="Food Category Name"
          />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button
            type="submit"
            class="btn btn-primary"
            @click="createFoodCategory"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="exampleModal2"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabelTwo"
    aria-hidden="true"
    ref="exampleModal2"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Item category</h5>
          <button
            type="button"
            class="btn-close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <input
            type="text"
            v-model="itemCategoryName"
            class="form-control my-3"
            placeholder="Item Category Name"
          />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button
            type="submit"
            class="btn btn-primary"
            @click="createItemCategory"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/category.js"></script>

<style lang="scss" scoped></style>
