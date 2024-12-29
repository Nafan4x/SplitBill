<template>
  <div class="person-list">
    <ProductItem 
      v-for="item in products"
      :key="item.id"
      :product="item"
      :persons="persons"
      @updateName="updateProductName"
      @updatePrice="updateProductPrice"
      @updatePersons="updateProductPersons"
      @updateBuyer="updateProductBuyer"
    />
  </div>
</template>
<script>
import {mapState} from "vuex";
import ProductItem from "./ProductItem.vue";
export default {
    components: [ProductItem],
    computed: {
        ...mapState("persons", ["persons"]),
        ...mapState("products", ["products"]),
    },
    methods: {
        updateProductName({ id, value }) {
            this.$store.commit("products/updateProduct", { id, field: "name", value: value });
        },
        updateProductPrice({ id, value }) {
            this.$store.commit("products/updateProduct", { id, field: "price", value: value });
        },
        updateProductBuyer({ id, value }) {
            this.$store.commit("products/updateProduct", { id, field: "buyer", value: value });
        },
        updateProductPersons({ id, value }) {
            this.$store.commit("products/updateProduct", { id, field: "persons", value: value });
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