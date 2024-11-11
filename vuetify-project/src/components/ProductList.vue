<template>
    <div class="person-list">
        <ProductItem 
            v-for="item in products"
            :product=item
            :key=item.id
            @updateName="updateProductName"
            @updatePrice="updateProductPrice"
            >
        </ProductItem>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState({
            persons: state => state.persons,
            products: state => state.products
        }),
    },
    methods: {
        updateProductName({ id, value }) {
            this.$store.commit('updateProductName', { id, name: value });
        },
        updateProductPrice({ id, value }) {
                this.$store.commit('updateProductPrice', { id, name: value });
        },
  },
}
</script>
<style>
    .person-list{
        max-height: 450px; /* Задайте желаемую высоту */
        overflow-y: auto; /* Добавляем вертикальную прокрутку */
    }
</style>