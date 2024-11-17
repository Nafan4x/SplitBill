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
    }
    h2{
        margin-top: 50px;
    }
</style>