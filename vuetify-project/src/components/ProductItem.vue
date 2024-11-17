<template>
    <div class="product-item">
        <v-card variant="outlined" class="card">
            <input  
                placeholder="Name" 
                class="inpt"
                :value="product.name"
                @input="onInputName"
            />
        </v-card>
        <v-card variant="outlined" class="card">
            <input 
            placeholder="Price" 
            class="inpt"
            :value="product.price"
            @input="onInputPrice"
            />
        </v-card>
        <MenuButton/>

        <v-btn variant="outlined" height="50px" class="btn" @click="delProduct">
            -
        </v-btn>
        
    </div>
    <div id="qwe">
        
    </div>
</template>
<script>
export default {
    props:{
        product:{
            type: Object,
            required: true,
        }
    },
    methods:{
        delProduct(){
            console.log(this.product)
            this.$store.commit("delProduct", this.product.id)
        },
        onInputName(event) {
            this.$emit("updateName", { id: this.product.id, value: event.target.value });
            
        },
        onInputPrice(event) {
            this.$emit("updatePrice", { id: this.product.id, value: event.target.value });
        },
    }
}
</script>
<style >
    .inpt{
        width: 100%;
        height: 50px;
        padding-left: 10px;
        border: 0px;
        
    }
    .inpt:focus{
        border: 0px;
    }
    .product-item{
        padding: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .card{
        width: 37%;
    }
    .btn{
        display: 1;
    }
</style>