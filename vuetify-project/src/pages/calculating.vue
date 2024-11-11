<template >
    <div class="mainpage">
        <v-sheet :height="550" :width="600" rounded class="container">
            <v-btn height="50" class="add-btn" @click=" $store.commit('addPerson')">
                Add product
            </v-btn>
            <ProductList></ProductList>
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
</style>