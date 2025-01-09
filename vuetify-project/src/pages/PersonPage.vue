<template>
  <div class="main-page">
    <v-sheet 
      :height="550" 
      :width="600" 
      rounded 
      class="container"
    >
      <v-btn 
        height="50"
        class="add-btn"
        @click="OnClickAddPerson"
        text="Add person"
      />

      <PersonList 
        :persons="persons"
        class="list"
      />
      <v-btn 
        id="nextbtn"
        height="50"
        class="next-btn"
        :text="buttonText"
        :class="{'active': isActive}"
        @click="OnClickCheckBtn"
      />         
    </v-sheet>  
  </div>
</template>
<script>
import {mapState} from "vuex"
import PersonList from "@/components/PersonList.vue";
export default {
    components: [PersonList],
    data() {
        return {
            isActive: false,
            buttonText: "Next",
            isPersonLenValid: false,
            isNameValid: false,
        };
    },
    computed: {
        ...mapState("persons", ["persons"])
    },
    methods:{
        OnClickAddPerson(){
            this.$store.commit("persons/addPerson")
        },
        OnClickCheckBtn(){
            this.isPersonLenValid = Array.isArray(this.persons) && this.persons.length > 1;
            this.isNameValid = Array.isArray(this.persons) && this.persons.every(item => item.name !== "");
            this.isActive = true;
            setTimeout(() => {
                this.isActive = false;
            }, 1000);

            if(this.isPersonLenValid){
                if(this.isNameValid){
                    this.$router.push("/ProductPage");
                }
                else{
                    this.buttonText = "Enter names";
                }
            }
            else{
                this.buttonText = "Add at least 2 people";
            }
        }
    }
}
</script>
<style scoped>
  @import "@/styles/pages.css";
  .add-btn {
    width: 100%;
    border-bottom: 1px solid white;
  }
  .list {
    margin-top: 10px;
    flex: 1;
    overflow-y: auto;
    
  }
  .next-btn.active{
    color: red;
    transition: color 0.5s ease;
  }
  .next-btn {
    width: 100%;
    border-top: 1px solid white;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: color 0.5s ease;
  }
</style>