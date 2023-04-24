<template>
  <div>
    <HeaderComponent />
    <ContactUsComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import ContactUsComponent from "../components/ContactComponent.vue";
export default {
  name: "ContactUs",
  components: {
    ContactUsComponent,
    HeaderComponent,
  },
};
</script>

<style lang="scss" scoped></style>
