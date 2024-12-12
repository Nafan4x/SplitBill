<template>
    <div class="person-list">
        <PersonItem 
            v-for="item in persons"
            :person=item
            :key=item.id
            @update="updatePersonName"
            >   
        </PersonItem>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState('persons', ['persons'])
    },
    methods: {
        updatePersonName({ id, value }) {
            this.$store.commit('persons/updatePersonName', { id, name: value });
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