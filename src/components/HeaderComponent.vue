<template>
  <div>
    <header class="">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="index.html"
            ><h2>Sixteen <em>Clothing</em></h2></a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item" :class="{ active: isCurrentUrl('/') }">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li
                class="nav-item"
                :class="{ active: isCurrentUrl('/product') }"
              >
                <router-link class="nav-link" to="/product"
                  >Products</router-link
                >
              </li>
              <li
                class="nav-item"
                :class="{ active: isCurrentUrl('/aboutus') }"
              >
                <router-link class="nav-link" to="/aboutus"
                  >About Us</router-link
                >
              </li>
              <li
                class="nav-item"
                :class="{ active: isCurrentUrl('/contactus') }"
              >
                <router-link class="nav-link" to="/contactus"
                  >Contact Us</router-link
                >
              </li>
              <li class="nav-item" :class="{ active: isCurrentUrl('/login') }">
                <router-link class="nav-link" to="/login">Login</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  methods: {
    isCurrentUrl(url) {
      return this.$route.path.includes(url);
    },
  },
};
</script>

<style lang="scss" scoped></style>
