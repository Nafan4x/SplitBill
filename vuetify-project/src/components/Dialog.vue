<template>
  <div 
    v-if="show" 
    class="dialog"
    @click="OnClickHideDialog"
  >
    <div 
      class="dialog-content"
      @click.stop 
    >
      <h1>Choose buyer</h1>
      <v-radio-group 
        :value="buyer" 
        class="radio-group"
        @change="updateBuyer"
      >
        <div 
          v-for="item in persons"
          :key="item.id"
          class="person-card"
        >
          <h3>{{ item.name }}</h3>
          <v-radio 
            :value="item" 
            style="flex: none"
          />
        </div>
      </v-radio-group>
    </div>
  </div>
</template> 
<script>
export default {
    props:{
        show: {
            type: Boolean,
            required: true,
        },
        persons: {
            type: Array,
            required: true,
        },
        buyer: {
            type: [Object, null],
            default: null,
        },

    },
    methods:{
        OnClickHideDialog(){
            this.$emit("update:show", false)
        },
        updateBuyer(newValue) {
            console.log(newValue); // Теперь выводится правильное значение, а не объект события
            this.$emit('update:buyer', newValue);
        },
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
    overflow-y: auto;
    max-height: 50%;
}
.radio-group{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
    
</style>