<template>
    <div class="person-list">
        <ProductItem 
            v-for="item in products"
            :product=item
            :key=item.id
            @updateName="updateProductName"
            @updatePrice="updateProductPrice"
            @updatePersons="updatePdoductPersons"
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
        updateProductBuyer({id, value}){
            this.$store.commit('updateProductBuyer', { id, value: value.name });
        },
        updatePdoductPersons({id, value}){
            this.$store.commit('updateProductPersons', {id, value: value.map(obj => obj.name)})
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