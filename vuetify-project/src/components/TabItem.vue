<template >
    <v-card class="card-person"  variant="outlined">
            <h3>
                Person {{ name }} should give
            </h3>
            <p>
                {{dept}}
            </p>
        </v-card>
</template>
<script>
export default {
    props:{
      name: {
        type: String,
        Required: true,

      },
      dept: {
        type: Object,
        Required: true,
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