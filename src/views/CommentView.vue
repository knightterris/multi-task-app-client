<template>
  <div>
    <LayoutComponent>
      <CommentComponent />
    </LayoutComponent>
  </div>
</template>

<script>
import LayoutComponent from "../components/LayoutComponent.vue";
import CommentComponent from "../components/CommentComponent.vue";
export default {
  name: "CommentView",
  components: {
    LayoutComponent,
    CommentComponent,
  },
};
</script>

<style lang="scss" scoped></style>
