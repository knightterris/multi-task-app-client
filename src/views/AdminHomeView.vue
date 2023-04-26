<template>
  <div>
    <LayoutComponent>
      <AdminHomeComponent />
    </LayoutComponent>
  </div>
</template>

<script>
import LayoutComponent from "../components/LayoutComponent.vue";
import AdminHomeComponent from "../components/AdminHomeComponent.vue";
export default {
  name: "AdminHomeView",
  components: {
    LayoutComponent,
    AdminHomeComponent,
  },
};
</script>
