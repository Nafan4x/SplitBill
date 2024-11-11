<template>
    <div class="person-list">
        <ProductItem 
            v-for="item in products"
            :person=item
            :key=item.id
            @update="updatePersonName"
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
        updatePersonName({ id, value }) {
            this.$store.commit('updatePersonName', { id, name: value });
    },
  },
}
</script>
<style>
    .person-list{
        max-height: 430px; /* Задайте желаемую высоту */
        overflow-y: auto; /* Добавляем вертикальную прокрутку */
    }
</style>