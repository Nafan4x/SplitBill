<template>
  <div class="main-page">
    <v-sheet 
      :height="550"
      :width="600"
      rounded
      class="container"
    >
      <v-btn 
        height="50"
        class="add-btn"
        text="Add product"
        @click="addBtn"
      />
            
      <ProductList />
            
      <v-btn 
        id="nextbtn" 
        :class="{'active': isActive}"
        height="50" 
        class="next-btn"
        :text="buttonText"
        @click="checkbtn" 
      />
    </v-sheet>
  </div>  
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            isActive: false,
            buttonText: 'Next',
        }
    },
    computed: {
        ...mapState('products', ['products'])
    },
    mounted(){
        if(!this.$store.state.persons.isPersonLenValid || !this.$store.state.persons.isNameValid)
            this.$router.push('/');
    },
    methods:{
        addBtn(){
            this.$store.commit('products/addProduct')
        },
        checkbtn(){
            this.$store.commit('calcCheck/checkProdBuyer', this.products);
            this.$store.commit('calcCheck/checkProdNames', this.products);
            this.$store.commit('calcCheck/checkProdPersons', this.products);
            this.$store.commit('calcCheck/checkProdLen', this.products);
            
            this.isActive = true;
            setTimeout(() => {
                this.isActive = false;
            }, 1000);
            
            if (this.$store.state.calcCheck.isProdNameValid && this.$store.state.calcCheck.isProdBuyerValid && this.$store.state.calcCheck.isProdPersonValid && this.$store.state.calcCheck.isProdLenValid)
                this.$router.push('/ResultPage');
            else if(!this.$store.state.calcCheck.isProdNameValid){
                this.buttonText = 'Enter all names and prices'
            }
            else if(!this.$store.state.calcCheck.isProdBuyerValid){
                this.buttonText = 'Select all buyers'
            }
            else if(!this.$store.state.calcCheck.isProdPersonValid){
                this.buttonText = 'Select all users of the products'
            }
            else if(!this.$store.state.calcCheck.isProdLenValid){
                this.buttonText = 'Add at least 2 products';
            }
        }
    },
    
}
</script>
<style scoped>
    @import '@/styles/pages.css';
    .add-btn {
        width: 100%;
        border-bottom: 1px solid white;
    }
    .next-btn {
        width: 100%;
        border-top: 1px solid white;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: color 0.5s ease;
    }
    .next-btn.active{
        color: red;
        transition: color 0.5s ease;
    }
</style>