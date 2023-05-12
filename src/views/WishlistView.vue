<template>
  <div>
    <LayoutComponent>
      <WishlistComponent />
    </LayoutComponent>
  </div>
</template>

<script>
import LayoutComponent from "../components/LayoutComponent.vue";
import WishlistComponent from "../components/WishlistComponent.vue";
export default {
  name: "WishlistView",
  components: {
    LayoutComponent,
    WishlistComponent,
  },
};
</script>

<style lang="scss" scoped></style>
