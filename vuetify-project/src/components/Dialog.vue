<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
        <div @click.stop class="dialog-content">
            <h1>Choose buyer</h1>
            <v-radio-group v-model="buyer" class="radio-group">
                <div v-for="item in this.persons" class="person-card">
                        <h3>{{ item.name }}</h3>
                        <v-radio v-bind:value=item style="flex: none"  @change="addBuyer"></v-radio>
                </div>
            </v-radio-group>
        </div>
    </div>
</template> 
<script>
export default {
    data(){
        return{
            buyer: ''
        }
    },
    props:{
        show: {
            type: Boolean,
            Required: true,
        },
        persons: {
            type: Array,
            Required: true,
        }
    },
    methods:{
        hideDialog(){
            this.$emit('update:show', false)
        },
        addBuyer(){
            this.$emit('update:buyer', this.buyer)
        }
    }
}
</script>
<style>
.person-card{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 5px;
    max-height: 40px
    
    
}
.dialog{
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    display: flex;
    background: rgba(0, 0, 0, 0.7);
    z-index: 3;
}
.dialog-content{
    margin: auto;
    background-color: rgb(var(--v-theme-surface));
    border: 1px white solid;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    
    align-items: center;
    
    min-width: 500px;
    min-height: 100px;
}
.radio-group{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
    
</style>