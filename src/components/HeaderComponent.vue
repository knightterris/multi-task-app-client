<template>
  <div>
    <header class="">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a v-if="loginStatus" class="navbar-brand" href="/adminHome"
            ><h2>Sixteen <em>Clothing</em></h2></a
          >
          <a v-else class="navbar-brand" href="/login"
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

              <li
                v-if="loginStatus == false"
                class="nav-item"
                :class="{ active: isCurrentUrl('/login') }"
              >
                <router-link class="nav-link" to="/login">Login</router-link>
              </li>
              <li v-else class="nav-item">
                <a class="nav-link" @click="logout">Logout</a>
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
    logout() {
      localStorage.removeItem("userData");
      localStorage.removeItem("token");
      localStorage.removeItem("loginStatus");
      this.$router.push("/login");
    },
  },
  computed: {
    loginStatus() {
      return this.$store.getters.getLoginStatus;
    },
  },
};
</script>
