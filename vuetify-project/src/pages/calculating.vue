<template >
    <div class="mainpage">
        <v-sheet :height="550" :width="600" rounded class="container">
            <v-btn height="50" class="add-btn" @click=" $store.commit('addProduct')">
                Add product
            </v-btn>
            <ProductList/>
            <v-btn height="50" class="next-btn" @click=" $store.commit('addProduct')">
                Next
            </v-btn>
            
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