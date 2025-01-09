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
        @click="OnClickAddProduct"
      />
            
      <ProductList />
      <div class="navigation-buttons">
        <v-btn 
          :class="{'active': isActive}"
          height="50" 
          class="back-btn"
          text="Back"
          @click="OnClickBack" 
        />
        <v-btn
          :class="{'active': isActive}"
          height="50" 
          class="next-btn"
          :text="buttonText"
          @click="OnClickCheckBtn" 
        />
      </div>
    </v-sheet>
  </div>  
</template>
<script>
import {mapState} from "vuex"
import ProductList from "@/components/ProductList.vue";
export default {
    components: [ProductList],
    data(){
        return{
            isActive: false,
            buttonText: "Next",
            isProdNameValid: false,
            isProdPersonValid: false,
            isProdBuyerValid: false,
            isProdLenValid: false,
        }
    },
    computed: {
        ...mapState("products", ["products"])
    },
    mounted(){
        if(!this.$store.state.persons.persons.length)
            this.$router.push("/");
    },
    methods: {
        OnClickBack(){
            this.$router.push("/");
        },
        OnClickAddProduct(){
            this.$store.commit("products/addProduct")
        },
        OnClickCheckBtn(){
            this.isProdNameValid = Array.isArray(this.products) && this.products.every(item => item.name && item.price);
            this.isProdBuyerValid = Array.isArray(this.products) && this.products.every(item => item.buyer);
            this.isProdPersonValid = Array.isArray(this.products) && this.products.every(item => item.persons?.length);
            this.isProdLenValid = Array.isArray(this.products) && this.products.length > 1;
            
            this.isActive = true;
            setTimeout(() => {
                this.isActive = false;
            }, 1000);
            
            if (this.isProdNameValid && this.isProdBuyerValid && this.isProdPersonValid && this.isProdLenValid)
                this.$router.push("/ResultPage");
            else if(!this.isProdNameValid){
                this.buttonText = "Enter all names and prices"
            }
            else if(!this.isProdBuyerValid){
                this.buttonText = "Select all buyers"
            }
            else if(!this.isProdPersonValid){
                this.buttonText = "Select all users of the products"
            }
            else if(!this.isProdLenValid){
                this.buttonText = "Add at least 2 products";
            }
        }
    },
    
}
</script>
<style scoped>
    @import "@/styles/pages.css";
    .add-btn {
        width: 100%;
        border-bottom: 1px solid white;
    }
    .next-btn {
        width: 50%;
        border-top: 1px solid white;
        border-left: 1px solid white;
        border-top-left-radius: 1px;
        border-bottom-left-radius: 1px;
        position: absolute;
        bottom: 0;
        right: 0;
        transition: color 0.5s ease;
    }
    .back-btn {
        width: 50%;
        border-top: 1px solid white;
        border-right: 1px solid white;
        border-top-right-radius: 1px;
        border-bottom-right-radius: 1px;
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