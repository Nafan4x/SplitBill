<template>
    <v-app>
    <v-container>
    
    
    <div>
    <h3>Выбранные опции:</h3>
    <ul>
    <li v-for="option in selectedOptions" :key="option">{{ option }}</li>
    </ul>
    </div>
    </v-container>
    </v-app>
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
    }
    };
    </script>
    
    <style>
    /* Добавьте ваши стили здесь */
    </style>