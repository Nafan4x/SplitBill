<template>
  <div class="main-page">
    <h2>
      RESULTS
    </h2>
    <v-sheet 
      :height="550"
      :width="600"
      rounded
      class="container"
    >
      <Tabs />
    </v-sheet>
  </div>
</template>
<script>

export default {
    
    mounted(){ //переадресация
        if(!this.$store.state.persons.isPersonLenValid || !this.$store.state.persons.isNameValid)
            this.$router.push('/');
        if (!this.$store.state.calcCheck.isProdNameValid && !this.$store.state.calcCheck.isProdBuyerValid && !this.$store.state.calcCheck.isProdPersonValid){
            this.$router.push('/ProductPage');
        }
    }
}
</script>
<style scoped>
    @import '@/styles/pages.css';
    .container {
        margin-top: 10px;
        border: 1px solid white;     
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        height: 100%;
    }
    h2{
        margin-top: 50px;
    }
</style>