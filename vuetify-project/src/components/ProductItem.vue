<template>

        <div class="mt-4 main-container">
            <div class="test">
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
                
                <v-btn variant="outlined" height="50px" class="btn" @click="delProduct"> - </v-btn>

                <v-btn variant="outlined" height="50px" class="btn" @click="toggleContainer"> V </v-btn>
            </div>
            
            <div :class="['slide-container', { 'visible': isContainerVisible }]" id="product-item">
                <v-btn variant="outlined" height="50px" class="btn" @click="">     
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" fill="white">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm4-3a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM4.216 8.928a6.458 6.458 0 0 0-2.47 2.398A1 1 0 0 0 2 12v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1a1 1 0 0 0-.216-.674 6.458 6.458 0 0 0-2.47-2.398C9.781 8.317 8.901 8 8 8c-.901 0-1.781.317-2.784.928z"/>
                    </svg>
                </v-btn>
                

                <v-btn variant="outlined" height="50px" class="btn" @click="toggleContainer">
                    ^
                </v-btn>
            </div>
            
            
        </div>
    <div id="qwe">
        
    </div>
</template>
<script>
export default {
    data() {
      return {
        isContainerVisible: false, // Флаг для управления отображением контейнера
      };
    },
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
        toggleContainer() {
        this.isContainerVisible = !this.isContainerVisible;
      },
    }
}
</script>
<style lang="scss" scoped>

    .main-container {
        position: relative; /* Нужно для выезжающего контейнера */
        overflow: hidden; /* Скрываем выезжающий контент за границами */
        padding-top: 0px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        
    }
    .test{
        position: relative; /* Нужно для выезжающего контейнера */
        overflow: hidden; /* Скрываем выезжающий контент за границами */
        padding-top: 0px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 98%;
    }


    .slide-container {
        position: absolute;
        bottom: 100%; /* Изначально скрыт за пределами основного контейнера */
        width: 98%;
        background-color: rgb(var(--v-theme-surface));
        transform: translateY(0);
        transition: transform 0.3s ease, opacity 0.3s ease;
        opacity: 0;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        height: 102%;

        &.visible {
            transform: translateY(100%); /* Выезжает внутрь основного контейнера */
            opacity: 1;
        }
    }
    .inpt{
        width: 100%;
        height: 50px;
        padding-left: 10px;
        border: 0px;
        
    }
    .inpt:focus{
        border: 0px;
    }

    .card{
        width: 37%;
    }
    .btn{
        display: 1;
    }
</style>