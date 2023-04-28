<template>
  <div>
    <LayoutComponent>
      <ProductCreateComponent />
    </LayoutComponent>
  </div>
</template>

<script>
import LayoutComponent from "../components/LayoutComponent.vue";
import ProductCreateComponent from "../components/ProductCreateComponent.vue";
export default {
  name: "ProductCreateView",
  components: {
    LayoutComponent,
    ProductCreateComponent,
  },
};
</script>

<style lang="scss" scoped></style>
