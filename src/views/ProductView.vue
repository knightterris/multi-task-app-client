<template>
  <div class="">
    <HeaderComponent />
    <ProductComponent />
  </div>
</template>
<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import ProductComponent from "../components/ProductComponent.vue";
export default {
  name: "ProductView",
  components: {
    ProductComponent,
    HeaderComponent,
  },
};
</script>
