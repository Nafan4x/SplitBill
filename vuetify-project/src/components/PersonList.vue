<template>
  <div class="person-list">
    <PersonItem 
      v-for="item in persons"
      :key="item.id"
      :person="item"
      @update="updatePersonName"
    />   
  </div>
</template>
<script>
import {mapState} from "vuex"
import PersonButton from "./PersonButton.vue";
export default {
    components: [PersonButton],
    computed: {
        ...mapState("persons", ["persons"])
    },
    methods: {
        updatePersonName({ id, value }) {
            this.$store.commit("persons/updatePersonName", { id, name: value });
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