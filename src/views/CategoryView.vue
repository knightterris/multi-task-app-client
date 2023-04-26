<template>
  <div>
    <LayoutComponent>
      <CategoryComponent />
    </LayoutComponent>
  </div>
</template>

<script>
import LayoutComponent from "../components/LayoutComponent.vue";
import CategoryComponent from "../components/CategoryComponent.vue";
export default {
  name: "CategoryView",
  components: {
    LayoutComponent,
    CategoryComponent,
  },
};
</script>

<style lang="scss" scoped></style>
