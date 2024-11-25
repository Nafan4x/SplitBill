<template>
    <div>
        <v-sheet :height="550" :width="600" rounded class="container">
            <v-btn height="50" class="add-btn" @click=" $store.commit('addPerson')">
                Add person
            </v-btn>
            <PersonList class="list"
                :persons="this.persons">
            </PersonList>
            <v-btn  id='nextbtn' :class="{'active': isActive}" height="50" class="next-btn" @click="checkbtn" text="Next">
                
            </v-btn>
            <div ></div>
        </v-sheet>  
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    data() {
    return {
      persons: undefined,
      isActive: false,
    };
  },
    methods:{
        checkbtn(){
            this.$store.commit('checkPersons');
            this.$store.commit('checkPersonsName');
            
            const nextbtn = document.getElementById("nextbtn")
            
            this.isActive = true;
            setTimeout(() => {
                this.isActive = false;
            }, 1000);

            if(this.$store.state.fcheck){
                if(this.$store.state.namecheck){
                    console.log('nice')
                    this.$router.push('/calculating');
                }
                else{
                    nextbtn.textContent = 'enter names';
                }
            }
            else{
                nextbtn.textContent = 'Add at least 2 people';
            }

        }
    }
}
</script>
<style scoped>
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