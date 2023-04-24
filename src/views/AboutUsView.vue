<template>
  <div>
    <HeaderComponent />
    <AboutUsComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import AboutUsComponent from "../components/AboutUsComponent.vue";
export default {
  name: "AboutUs",
  components: {
    AboutUsComponent,
    HeaderComponent,
  },
};
</script>

<style lang="scss" scoped></style>
