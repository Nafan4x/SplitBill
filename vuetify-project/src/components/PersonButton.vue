<template>
  <v-btn
    :class="{'active-color' : isSelected}"
    height="50px"
    class="transition-btn"
    @click="toggleButton"
  >   
    <slot>
    </slot>

    <div v-if="person.name != 'all'">
      {{ person.name }}
    </div>        
  </v-btn>
</template>
<script>
export default {
    props:{
        person:{
            type: Object,
            required: true, 
        },
        selectedItems:{
            type: Array,
            default: () => [],
        }
    },
    computed:{
        isSelected(){
            return this.selectedItems?.some((selectedItem) => selectedItem.id === this.person.id) || false;
        }
    },

    methods:{
        toggleButton(){
            const newState = !this.isSelected;
            this.$emit('update:selected', this.person, newState)
        },
    },
    
    
}
</script>
<style scoped>
    .transition-btn{
        display: flex;
        border: 1px white solid;
        transition: background-color 0.3s ease;
        flex: 1;
        margin-right: 5px;
        margin-left: 5px;
        min-width: 40px;


        

    }

    .active-color{
        background-color: gray !important;
        color: rgb(var(--v-theme-surface)) !important;
        flex: 1;

    }
</style>