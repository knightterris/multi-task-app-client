<template>
  <div class="mt-5">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6 offset-3">
        <div class="card">
          <div class="card-header">Profile</div>
          <div class="card-body">
            <div class="container">
              <img v-if="userData.photo == NULL" src="../images/no-image.png" />
              <img
                v-else
                :src="getImageUrl(userData.photo)"
                class="w-50 h-50"
              />
            </div>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-between my-3">
              <p>Name</p>
              <input
                type="text"
                class="form-control w-50 text-end"
                v-model="userData.name"
              />
            </div>

            <div class="d-flex justify-content-between my-3">
              <p>Email</p>
              <input
                type="text"
                v-model="userData.email"
                class="form-control w-50 text-end"
              />
            </div>

            <div class="d-flex justify-content-between my-3">
              <p>Address</p>
              <input
                type="text"
                v-model="userData.address"
                class="form-control w-50 text-end"
              />
            </div>

            <div class="d-flex justify-content-between my-3">
              <p>Phone</p>
              <input
                type="number"
                v-model="userData.phone"
                class="form-control w-50 text-end"
              />
            </div>

            <div class="d-flex justify-content-between my-3">
              <p>Gender</p>
              <input
                type="text"
                v-model="userData.gender"
                class="form-control w-50 text-end"
              />
            </div>

            <div class="d-flex justify-content-between my-3">
              <p>Role</p>
              <input
                type="text"
                v-model="userData.role"
                class="form-control w-50 text-end"
                disabled
              />
            </div>

            <div class="d-flex justify-content-between my-3">
              <p>Photo</p>
              <input
                type="file"
                class="form-control w-50 text-end"
                @change="getPhoto"
              />
            </div>

            <div class="d-flex justify-content-between my-3">
              <p>Works At</p>
              <input
                type="text"
                v-model="userData.works_at"
                class="form-control w-50 text-end"
              />
            </div>

            <div class="card-footer">
              <div class="text-end">
                <button class="btn btn-primary" @click="updateProfile">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/editProfile.js"></script>

<style lang="scss" scoped></style>
