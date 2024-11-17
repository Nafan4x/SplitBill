<template lang="">
    <div>
        <v-menu v-model="menu" offset-y>
            <template #activator="{ props }">
               
                <v-btn v-bind="props" variant="outlined" height="50px" class="btn">
                    V
                </v-btn>
            </template>
            <v-list  class="list-item-group">
                <v-list-item-group v-model="selectedOptions">
                    <v-list-item class="list-item" v-for="option in options" :key="option.value">
                            <v-list-item-title>
                                <v-checkbox
                                :label="option.text"
                                :value="option.value"
                                v-model="selectedOptions"
                                @click.stop
                                />
                            </v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-menu>
    </div>
</template>
<script>
export default {
    data() {
    return {
    menu: false,
    options: [
    { text: 'Опция 1', value: 'option1' },
    { text: 'Опция 2', value: 'option2' },
    { text: 'Опция 3', value: 'option3' }
    ],
    selectedOptions: []
    };
    },
}
</script>
<style scoped>
    .list-item{
        height: 20px;
    }
    .list-item-group{
        height: 80px;
    }
</style>