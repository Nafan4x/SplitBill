<template>
  <v-card variant="outlined">
    <div 
      v-if="dept"
      class="card-person"
    >
      <h3>
        Person {{ name }} should give
      </h3>
      <p 
        v-for="[key, value] in Object.entries(dept)"
        :key="key.id"  
      >
        {{ key }} - {{ value.toFixed(2) }}
      </p>
    </div>
    <div 
      v-else 
      class="card-person"
    >
      <h3>No one owes anyone anything.</h3>
    </div>
  </v-card>
</template>
<script>
export default {
    props:{
        name: {
            type: String,
            required: true,

        },
        
        dept: {
            type: Object,
            default: () => null,
        }
    },
}
</script>
<style scoped>
    .card-person{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        margin-bottom: 20px;   
    }
</style>