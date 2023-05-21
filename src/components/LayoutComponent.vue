<template>
  <!-- <div> -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Sixteen Clothing</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/adminHome"
              >Dashboard</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/profile">{{
              userName.name
            }}</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/change/password"
              >Password</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="">My Wall</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/category">Category</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/product/list"
              >Product</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/wishList">Wishlist</router-link>
          </li>
        </ul>
        <div
          class="d-flex"
          v-if="
            currentRouteName == 'adminHome' ||
            currentRouteName === 'productList' ||
            currentRouteName === 'category' ||
            currentRouteName === 'wishList'
          "
        >
          <input
            class="form-control me-2"
            type="search"
            v-model="key"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            class="btn btn-outline-success"
            type="button"
            @click="generalSearch()"
          >
            Search
          </button>
          <!-- <a href="" class="btn btn-outline-success" @click="generalSearch"
              >Search</a
            > -->
        </div>
      </div>
    </div>
  </nav>
  <!-- main content -->
  <!-- <AdminHomeComponent :data="data" /> -->
  <slot></slot>
  <!-- </div> -->
</template>

<script>
import axios from "axios";
// import AdminHomeComponent from "./AdminHomeComponent.vue";
export default {
  name: "LayoutComponent",
  data() {
    return {
      key: "",
      data: {},
    };
  },
  computed: {
    userName() {
      return this.$store.getters.getUserData;
    },
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    generalSearch() {
      const searchKey = { name: this.key };
      axios
        .post("http://localhost:8000/api/search/data", searchKey)
        .then((response) => {
          console.log(response);
          this.data = response.data;
          console.log(this.data);
        });
    },
  },
  // components: {
  //   AdminHomeComponent,
  // },
  mounted() {},
};
</script>
