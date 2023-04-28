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
            <router-link class="nav-link" to="">Wishlist</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <!-- main content -->
  <slot></slot>
  <!-- </div> -->
</template>

<script>
export default {
  name: "LayoutComponent",
  computed: {
    userName() {
      return this.$store.getters.getUserData;
    },
  },
  mounted() {},
};
</script>
