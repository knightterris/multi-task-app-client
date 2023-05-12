<template>
  <div class="mt-5">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6 offset-3">
        <div class="card">
          <div class="card-header">Change Password</div>
          <div class="card-body">
            <div class="text-start my-3">
              <label for="oldpassword">Old Password</label>
              <input
                type="text"
                v-model="oldPassword"
                class="form-control"
                :class="{
                  'is-invalid': oldPasswordStatus === true,
                }"
              />
            </div>

            <div class="text-start my-3">
              <label for="">New Password</label>
              <input
                type="password"
                v-model="newPassword"
                class="form-control"
                :class="{
                  'is-invalid': newPasswordStatus === true,
                  'is-valid': newPasswordStatus === false,
                }"
                @input="newPasswordLengthCheck"
              />
              <small v-if="newPasswordStatus" class="text-danger"
                >Password is too weak.</small
              >
              <small
                v-else-if="newPasswordStatus === false"
                class="text-success"
                >Password is strong.</small
              >
              <small
                v-else-if="passwordsCheckMateStatus === false"
                class="text-success"
                >Passwords are same.</small
              >

              <small
                v-else-if="passwordsCheckMateStatus === true"
                class="text-danger"
                >Passwords are not same.</small
              >
            </div>

            <div class="text-start my-3">
              <label for="">Confirm New Password</label>
              <input
                type="password"
                v-model="confirmNewPassword"
                class="form-control"
                :class="{
                  'is-invalid': confirmPasswordStatus === true,
                  'is-valid': confirmPasswordStatus === false,
                }"
                @input="confirmPasswordLengthCheck"
              />
              <small v-if="confirmPasswordStatus" class="text-danger"
                >Password is too weak.</small
              >
              <small
                v-else-if="confirmPasswordStatus === false"
                class="text-success"
                >Password is strong.</small
              >
              <small
              v-else-if="passwordsCheckMateStatus === false"
              class="text-success"
              >Passwords are same.</small
            >

            <small
              v-else-if="passwordsCheckMateStatus === true"
              class="text-danger"
              >Passwords are not same.</small
            >
            </div>
          </div>
          <div class="card-footer d-flex justify-content-end">
            <button
              class="btn btn-primary"
              @click="changePassword"
              :disabled="newPasswordStatus || confirmPasswordStatus"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/password.js"></script>

<style lang="scss" scoped></style>
