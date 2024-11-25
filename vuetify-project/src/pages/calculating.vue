<template >
    <div class="mainpage">
        <v-sheet :height="550" :width="600" rounded class="container">
            <v-btn height="50" class="add-btn" @click=" $store.commit('addProduct')">
                Add product
            </v-btn>
            <ProductList/>
            <v-btn height="50" class="next-btn" @click="checkbtn">
                Next
            </v-btn>
            
        </v-sheet>
    </div>
    
</template>
<script>
export default {
    methods:{
        checkbtn(){
            this.$store.commit('checkProdBuyer');
            this.$store.commit('checkProdNames');
            this.$store.commit('checkProdPersons');
            if (this.$store.state.prodnamecheck && this.$store.state.prodbuyercheck && this.$store.state.prodpersoncheck)
                this.$router.push('/results');
        }
    },
    mounted(){
        if(!this.$store.state.fcheck || !this.$store.state.namecheck)
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
    }
</style>