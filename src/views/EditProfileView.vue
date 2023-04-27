<template>
    <LayoutComponent>
        <EditProfileComponent/>
    </LayoutComponent>
</template>

<script>
import LayoutComponent from '../components/LayoutComponent.vue'
import EditProfileComponent from '../components/EditProfileComponent.vue'
    export default {
        name:"EditProfileView",
        components: {
            LayoutComponent,
            EditProfileComponent
        },
    }
</script>

<style lang="scss" scoped>

</style>