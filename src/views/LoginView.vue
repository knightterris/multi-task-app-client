<template>
  <div>
    <HeaderComponent />
    <LoginComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import LoginComponent from "../components/LoginComponent.vue";
export default {
  name: "LoginView",
  components: {
    HeaderComponent,
    LoginComponent,
  },
};
</script>

<style lang="scss" scoped></style>
