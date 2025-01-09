<template>
  <div class="mt-4 main-container">
    <!-- Первый контейнер -->
    <div class="first-container">
      <v-card 
        variant="outlined"
        class="card"
      >
        <input  
          placeholder="Name" 
          class="input"
          :value="product.name"
          @input="onInputName"
        >
      </v-card>

      <v-card 
        variant="outlined" 
        class="card"
      >
        <input 
          placeholder="Price" 
          class="input"
          type="number" 
          name="quantity"
          :value="product.price"
          @input="onInputPrice"
        >
      </v-card>
            
      <v-btn 
        variant="outlined"
        height="50px"
        text="Del"
        @click="OnClickDelProduct"
      /> 

      <v-btn 
        variant="outlined"
        height="50px"
        text="V"
        @click="OnClickChangeContainer"
      />
    </div>
    <!-- Второй контейнер -->            
    <div id="product-item" :class="['slide-container', { 'visible': isContainerVisible }]">
      <!-- Список пользователей -->
      <div class="person-container">
        <PersonButton
          :person="{id: null, name: 'all'}"
          :selected-items="selectedPersons"
          @update:selected="updateSelectedItems"
        />

        <PersonButton 
          v-for="item in persons"
          :key="item.id"
          :person="item"
          :selected-items="selectedPersons"
          @update:selected="updateSelectedItems"
        />
      </div>
      <!-- Выбор покупателя -->
      <v-btn
        variant="outlined"
        height="50px"
        class="btn"
        @click="OnClickShowDialog"
      >   
        <h4>{{ buyer.name }}</h4>
        <v-icon>mdi-account</v-icon>       
      </v-btn>
      <!-- Кнопка скрытия контейнера -->
      <v-btn 
        variant="outlined"
        height="50px"
        text="^"
        @click="OnClickChangeContainer"
      />
    </div>
    <Dialog
      :show="isDialogVisible"
      :buyer="buyer"
      :persons="persons"
      @update:show="handleDialogClose" 
      @update:buyer="handleBuyerUpdate"
    />
  </div>
  <!-- Выбор покупателя -->
</template>

<script>
import Dialog from "./Dialog.vue";
import PersonButton from "./PersonButton.vue";
import { mapGetters } from "vuex";

export default {
    components: [Dialog, PersonButton],
    props:{
        product:{
            type: Object,
            required: true,
        },
        persons: {
            type: Array,
            required: true,
        }
    },
    emits: ["updateName", "updatePrice", "updatePersons", "updateBuyer"],   
    data() {
        return {
            isContainerVisible: false,
            isDialogVisible: false,
            buyer: "",
            selectedPersons: [],
        };
    },
    // watch:{
    //     buyer: function(value){
    //         this.$emit("updateBuyer", { id: this.product.id, value:value });
    //     }
    // },
    mounted(){
        if(this.product.persons){
            this.selectedPersons = this.product.persons;
        }
        if(this.product.buyer){
            this.buyer = this.product.buyer;
        }
    },
    
    methods:{
        OnClickDelProduct(){
            this.$store.commit("products/delProduct", this.product.id)
        },
        onInputName(event) {
            this.$emit("updateName", { id: this.product.id, value: event.target.value });   
        },
        onInputPrice(event) {
            this.$emit("updatePrice", { id: this.product.id, value: event.target.value });
        },
        OnClickChangeContainer() {
            this.isContainerVisible = !this.isContainerVisible;
        },
        OnClickShowDialog(){
            this.isDialogVisible = true;
        },
        updateSelectedItems(item, isActive){
            if (item.id === null) {
                if (isActive) {
                    this.selectedPersons = [...this.persons, item];
                } else {
                    this.selectedPersons = [];
                }
            }
            else{
                if (isActive){
                    this.selectedPersons.push(item);
                }else{
                    this.selectedPersons = this.selectedPersons.filter((selectedItem) => (selectedItem.id != item.id) && (selectedItem.id != null))
                }
                
            }
            this.$emit("updatePersons", {id: this.product.id, value: this.selectedPersons.filter((selectedItem) => selectedItem.id != null)});
        },
        handleDialogClose(newShowValue) {
            this.showDialog = newShowValue;
        },
        handleBuyerUpdate(newBuyer) {
            console.log(newBuyer)
            this.buyer = newBuyer.name;
        },

    },
}
</script>
<style lang="scss" scoped>
    .person-container{
        width: 70%;
        height: 50px;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        overflow-x:auto;
        white-space: nowrap;
    }
    .main-container {
        position: relative; /* Нужно для выезжающего контейнера */
        overflow: hidden; /* Скрываем выезжающий контент за границами */
        padding-top: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .first-container{
        position: relative; /* Нужно для выезжающего контейнера */
        overflow: hidden; /* Скрываем выезжающий контент за границами */
        padding-top: 0;
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
        height: 60px;
        &.visible {
            transform: translateY(100%); /* Выезжает внутрь основного контейнера */
            opacity: 1;
        }
    }
    .input{
        width: 100%;
        height: 50px;
        padding-left: 10px;
        border: 0;  
    }
    .card{
        width: 37%;
    }
    .btn{
        width: 17%;
    }
</style>