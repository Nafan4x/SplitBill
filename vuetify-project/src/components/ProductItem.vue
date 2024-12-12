<template>
  <div class="mt-4 main-container">
    <!-- Первый контейнер -->
    <div class="first-container">
      <v-card 
        variant="outlined"
        class="card">
        <input  
          placeholder="Name" 
          class="inpt"
          :value="product.name"
          @input="onInputName"
        >
      </v-card>

      <v-card 
        variant="outlined" 
        class="card">
        <input 
          placeholder="Price" 
          class="inpt"
          type="number" 
          name="quantity"
          :value="product.price"
          @input="onInputPrice"
        >
      </v-card>
            
      <v-btn 
        variant="outlined"
        height="50px"
        @click="delProduct"
      > 
        del 
      </v-btn>

      <v-btn 
        variant="outlined"
        height="50px"
        @click="toggleContainer"
      > 
        V
      </v-btn>
    </div>
    <!-- Второй контейнер -->            
    <div id="product-item" :class="['slide-container', { 'visible': isContainerVisible }]">
      <!-- Список пользователей -->
      <div class="person-container">
        <PersonButton
          :person="{id: -1, name: 'all'}"
          :selected-items="selectedPersons"
          @update:selected="updateSelectedItems"
        >
          All 
        </PersonButton>

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
        @click="showDialog"
      >   
        <h4>{{ this.buyer.name }}</h4>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" fill="white">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm4-3a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM4.216 8.928a6.458 6.458 0 0 0-2.47 2.398A1 1 0 0 0 2 12v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1a1 1 0 0 0-.216-.674 6.458 6.458 0 0 0-2.47-2.398C9.781 8.317 8.901 8 8 8c-.901 0-1.781.317-2.784.928z"/>
        </svg>         
      </v-btn>
      <!-- Кнопка скрытия контейнера -->
      <v-btn variant="outlined" height="50px" @click="toggleContainer">
        ^
      </v-btn>
    </div>
  </div>
  <!-- Выбор покупателя -->
  <Dialog
    v-model:show="isDialogVisible"
    v-model:buyer="buyer"
    :persons="persons"
  />
</template>

<script>
import Dialog from './Dialog.vue';
import PersonButton from './PersonButton.vue';
import { mapGetters } from 'vuex';

export default {
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
    emits: ['updateName', 'updatePrice', 'updatePersons', 'updateBuyer'],   
    data() {
        return {
            isContainerVisible: false,
            isDialogVisible: false,
            buyer: '',
            selectedPersons: [],
        };
    },
    computed: {
        ...mapGetters('products', ['productById']),
    },
    watch:{
        buyer: function(value){
            this.$emit("updateBuyer", { id: this.product.id, value:value });
        }
    },
    mounted(){
        if(this.product.persons){
            this.selectedPersons = this.product.persons;
        }
        if(this.product.buyer){
            this.buyer = this.product.buyer;
        }
    },
    
    methods:{
        delProduct(){
            this.$store.commit("products/delProduct", this.product.id)
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
        showDialog(){
            this.isDialogVisible = true;
        },
        addUser(person){
            this.test.push(person)
        },
        updateSelectedItems(item, isActive){
            if (item.id === -1){
                if (isActive){  
                    this.selectedPersons = this.persons.concat([item]);
                }else{
                    this.selectedPersons = [];
                }
            }
            else{
                if (isActive){
                    this.selectedPersons.push(item);
                }else{
                    this.selectedPersons = this.selectedPersons.filter((selectedItem) => (selectedItem.id != item.id) && (selectedItem.id != -1))
                }
            }
            this.$emit("updatePersons", {id: this.product.id, value: this.selectedPersons.filter((selectedItem) => selectedItem.id != -1)});
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
        padding-top: 0px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        
    }
    .first-container{
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
        height: 60px;

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
        width: 17%;
    }
</style>