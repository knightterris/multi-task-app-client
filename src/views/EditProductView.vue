<template>
  <div>
    <LayoutComponent>
      <EditProductComponent />
    </LayoutComponent>
  </div>
</template>

<script>
import LayoutComponent from "../components/LayoutComponent.vue";
import EditProductComponent from "../components/EditProductComponent.vue";
export default {
  name: "EditProductView",
  components: {
    LayoutComponent,
    EditProductComponent,
  },
};
</script>

<style lang="scss" scoped></style>
