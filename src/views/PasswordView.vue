<template>
  <div>
    <LayoutComponent>
      <PasswordComponent />
    </LayoutComponent>
  </div>
</template>

<script>
import LayoutComponent from "../components/LayoutComponent.vue";
import PasswordComponent from "../components/PasswordComponent.vue";
export default {
  name: "PasswordView",
  components: {
    LayoutComponent,
    PasswordComponent,
  },
};
</script>

<style lang="scss" scoped></style>
