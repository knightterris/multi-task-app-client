<template>
  <div>
    <LayoutComponent>
      <AdminProfileComponent />
    </LayoutComponent>
  </div>
</template>

<script>
import LayoutComponent from "../components/LayoutComponent.vue";
import AdminProfileComponent from "../components/AdminProfileComponent.vue";
export default {
  name: "AdminProfileView",
  components: {
    LayoutComponent,
    AdminProfileComponent,
  },
};
</script>

<style lang="scss" scoped></style>
