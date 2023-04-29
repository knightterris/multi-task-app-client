<template>
  <div>
    <LayoutComponent>
      <ShowProductComponent />
    </LayoutComponent>
  </div>
</template>

<script>
import LayoutComponent from "../components/LayoutComponent.vue";
import ShowProductComponent from "../components/ShowProductComponent.vue";
export default {
  name: "ShowProductView",
  components: {
    LayoutComponent,
    ShowProductComponent,
  },
};
</script>

<style lang="scss" scoped></style>
