<template >
    <div class="mainpage">
        <v-sheet :height="550" :width="600" rounded class="container">
            <v-btn height="50" class="add-btn" @click="addBtn">
                Add product
            </v-btn>
            <ProductList/>
            <v-btn id="nextbtn" height="50" class="next-btn"  :class="{'active': isActive}" @click="checkbtn" text="Next">
            </v-btn>
            
        </v-sheet>
    </div>
    
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            isActive: false,
        }
    },
    computed: {
        ...mapState('products', ['products'])
    },
    methods:{
        addBtn(){
            this.$store.commit('products/addProduct')
        },
        checkbtn(){
            //console.log('prod', this.products);
            this.$store.commit('calcCheck/checkProdBuyer', this.products);
            this.$store.commit('calcCheck/checkProdNames', this.products);
            this.$store.commit('calcCheck/checkProdPersons', this.products);
            this.$store.commit('calcCheck/checkProdLen', this.products);
            

            const nextbtn = document.getElementById("nextbtn")
            this.isActive = true;
            setTimeout(() => {
                this.isActive = false;
            }, 1000);
            
            if (this.$store.state.calcCheck.prodnamecheck && this.$store.state.calcCheck.prodbuyercheck && this.$store.state.calcCheck.prodpersoncheck && this.$store.state.calcCheck.prodLen)
                this.$router.push('/results');
            else if(!this.$store.state.calcCheck.prodnamecheck){
                nextbtn.textContent = 'Enter all names and prices'
            }
            else if(!this.$store.state.calcCheck.prodbuyercheck){
                nextbtn.textContent = 'Select all buyers'
            }
            else if(!this.$store.state.calcCheck.prodpersoncheck){
                
                nextbtn.textContent = 'Select all users of the products'
            }
            else if(!this.$store.state.calcCheck.prodLen){
                nextbtn.textContent = 'Add at least 2 products';
            }
        }
    },
    mounted(){
        if(!this.$store.state.persons.fcheck || !this.$store.state.persons.namecheck)
            this.$router.push('/');
    }
}
</script>
<style scoped>
    .mainpage{
        display: flex;
        justify-content: center;
    }
    .container {
        margin-top: 60px;
        border: 1px solid white;     
        display: flex;
        flex-direction: column;
        position: relative;
    }
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