<template>
    <div class="person-item">
        <v-card variant="outlined" class="card">
            <input :value="person.name" @input="onInput" class="inpt"/>
        </v-card>
        <v-btn variant="outlined" height="50px" @click="delPerson">
            -
        </v-btn>
    </div>
</template>
<script>
export default {
    props:{
        person:{
            type: Object,
            required: true,
        }
    },
    methods:{
        delPerson(){
            console.log(this.person)
            this.$store.commit("persons/delPerson", this.person.id)
        },
        onInput(event) {
            this.$emit("update", { id: this.person.id, value: event.target.value });
        },
    },

}
</script>
<style scoped>
    .inpt{
        width: 100%;
        height: 50px;
        padding-left: 10px;
        border: 0px;
    }
    .inpt:focus{
        border: 0px;
    }
    .person-item{
        padding: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .card{
        width: 88%;
    }
    
</style>