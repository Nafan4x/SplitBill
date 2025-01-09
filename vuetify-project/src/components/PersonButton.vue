<template>
  <v-btn
    :class="{'active-color' : isSelected}"
    height="50px"
    class="transition-btn"
    @click="OnClickSelected"
  >
    {{ person.name }}
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
            required: true,
        }
    },
    computed:{
        isSelected(){
            return this.selectedItems?.some((selectedItem) => selectedItem.id == this.person.id);
        }
    },

    methods:{
        OnClickSelected(){
            this.$emit("update:selected", this.person, !this.isSelected)
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
        background-color: gray;
        color: rgb(var(--v-theme-surface));
        flex: 1;
    }
</style>