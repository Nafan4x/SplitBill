<template>
    <div class="product-item">
        <v-card variant="outlined" class="card">
            <input  placeholder="Name" class="inpt"/>
        </v-card>
        <v-card variant="outlined" class="card">
            <input placeholder="Price" class="inpt"/>
        </v-card>
        <v-btn variant="outlined" height="50px" class="btn">
            -
        </v-btn>
        <v-btn variant="outlined" height="50px" class="btn">
            -
        </v-btn>
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