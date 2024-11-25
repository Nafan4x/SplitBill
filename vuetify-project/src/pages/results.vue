<template>
    <div class="mainpage">
        <h2>
            RESULTS
        </h2>
        <v-sheet :height="550" :width="600" rounded class="container">
            <Tabs/>
           
            
        </v-sheet>
    </div>
</template>
<script>

export default {
    mounted(){
        if(!this.$store.state.fcheck || !this.$store.state.namecheck)
            this.$router.push('/');
        
        if (!this.$store.state.calcCheck.prodnamecheck && !this.$store.state.calcCheck.prodbuyercheck && !this.$store.state.calcCheck.prodpersoncheck){
            this.$router.push('/calculating');
        }
    }
    
}
</script>
<style scoped>
    .mainpage{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
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