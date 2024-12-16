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
      <v-btn 
        height="50" 
        class="back-btn"
        text="Back"
        @click="OnClickBack" 
      />
    </v-sheet>
  </div>
</template>
<script>
import Tabs from '@/components/Tabs.vue';
export default {
    
    mounted(){ //переадресация
        if(!this.$store.state.persons.isPersonLenValid || !this.$store.state.persons.isNameValid)
            this.$router.push('/');
        if (!this.$store.state.calcCheck.isProdNameValid && !this.$store.state.calcCheck.isProdBuyerValid && !this.$store.state.calcCheck.isProdPersonValid){
            this.$router.push('/ProductPage');
        }
    },
    methods: {
        OnClickBack(){
            this.$router.push('/ProductPage');  
        },
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
    .back-btn {
        width: 100%;
        border-top: 1px solid white;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: color 0.5s ease;
    }
</style>