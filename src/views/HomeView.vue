<template>
  <div class="">
    <HeaderComponent />
    <HomeComponent />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeComponent from "../components/HomeComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
export default {
  name: "HomeView",
  components: {
    HomeComponent,
    HeaderComponent,
  },
};
</script>
