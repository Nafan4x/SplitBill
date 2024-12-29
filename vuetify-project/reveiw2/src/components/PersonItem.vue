<template>
  <div class="person-item">
    <v-card variant="outlined" class="card">
      <input 
        class="input-name"
        :value="person.name" 
        @input="onInput" 
      >
    </v-card>
        
    <v-btn 
      variant="outlined" 
      height="50px" 
      text="Del"
      @click="onClickDelPerson"
    />
  </div>
</template>
<script>
export default {
    props:{
        person:{
            type: Object,
            required: true,
        }
    },
    methods:{
        onClickDelPerson(){
            this.$store.commit("persons/delPerson", this.person.id)
        },
        onInput(event) {
            this.$emit("update", { id: this.person.id, value: event.target.value });
        },
    },

}
</script>
<style scoped>
    .input-name{
        width: 100%;
        height: 50px;
        padding-left: 10px;
        border: 0;
    }
    .person-item{
        padding: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .card{
        width: 88%;
    }
    
</style>