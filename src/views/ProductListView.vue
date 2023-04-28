<template>
    <div>
        <LayoutComponent>
            <ProductListComponent/>
        </LayoutComponent>
    </div>
</template>

<script>
import LayoutComponent from '../components/LayoutComponent.vue';
import ProductListComponent from '../components/ProductListComponent.vue'
    export default {
        name:"ProductList",
        components: {
            LayoutComponent,
            ProductListComponent
        },
    }
</script>

<style lang="scss" scoped>

</style>