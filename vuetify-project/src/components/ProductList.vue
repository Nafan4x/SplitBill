<template>
    <div class="person-list">
        <ProductItem 
            v-for="item in products"
            :product=item
            :key=item.id
            @updateName="updateProductName"
            @updatePrice="updateProductPrice"
            @updatePersons="updateProductPersons"
            @updateBuyer="updateProductBuyer"
            :persons="this.persons"
            >
        </ProductItem>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState('persons', ['persons']),
        ...mapState('products', ['products']),
    },
    methods: {
        updateProductName({ id, value }) {
            this.$store.commit('products/updateProductName', { id, name: value });
        },
        updateProductPrice({ id, value }) {
            this.$store.commit('products/updateProductPrice', { id, price: value }); // Исправлено
        },
        updateProductBuyer({ id, value }) {
            this.$store.commit('products/updateProductBuyer', { id, value: value });
        },
        updateProductPersons({ id, value }) {
            this.$store.commit('products/updateProductPersons', { id, value: value });
        }
    },
}
</script>
<style>
    .person-list{
        max-height: 450px; /* Задайте желаемую высоту */
        overflow-y: auto; /* Добавляем вертикальную прокрутку */
    }
</style>