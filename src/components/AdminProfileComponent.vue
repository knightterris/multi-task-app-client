<template>
  <div class="mt-5">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6 offset-3">
        <div class="card">
          <div class="card-header">Profile</div>
          <div class="card-body">
            <div class="container">
              <img
                v-if="userData.photo == NULL"
                src="../images/no-image.png"
                class="w-50 h-50"
              />
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
              <p>{{ userData.name ?? "-" }}</p>
            </div>

            <div class="d-flex justify-content-between my-3">
              <p>Email</p>
              <p>{{ userData.email ?? "-" }}</p>
            </div>

            <div class="d-flex justify-content-between my-3">
              <p>Address</p>
              <p>{{ userData.address ?? "-" }}</p>
            </div>

            <div class="d-flex justify-content-between my-3">
              <p>Phone</p>
              <p>{{ userData.phone ?? "-" }}</p>
            </div>

            <div class="d-flex justify-content-between my-3">
              <p>Gender</p>
              <p>{{ userData.gender ?? "-" }}</p>
            </div>

            <div class="d-flex justify-content-between my-3">
              <p>Role</p>
              <p>{{ userData.role ?? "-" }}</p>
            </div>

            <div class="d-flex justify-content-between my-3">
              <p>Works At</p>
              <p>{{ userData.works_at ?? "-" }}</p>
            </div>

            <div class="card-footer">
              <div class="text-end">
                <button class="btn btn-primary" @click="goEditProfile">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/adminProfile.js"></script>

<style lang="scss" scoped></style>
