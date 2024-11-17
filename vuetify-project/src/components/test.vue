<template>
    <div>
      
  
      <!-- Основной контейнер -->
      <v-container class="mt-4 main-container">
        <h3>Основной контейнер</h3>
        <!-- Кнопка для отображения/скрытия контейнера -->
        <v-btn @click="toggleContainer" color="primary" outlined w>
          00
        </v-btn>
  
        <!-- Дополнительный контейнер -->
        <div
          :class="['slide-container', { 'visible': isContainerVisible }]"
        >
          <h3>Дополнительный контейнер</h3>
          <v-btn @click="toggleContainer" color="primary" outlined w>
          00
        </v-btn>
        </div>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isContainerVisible: false, // Флаг для управления отображением контейнера
      };
    },
    methods: {
      toggleContainer() {
        this.isContainerVisible = !this.isContainerVisible;
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  /* Основной контейнер */
  .main-container {
    position: relative; /* Нужно для выезжающего контейнера */
    overflow: hidden; /* Скрываем выезжающий контент за границами */
  }
  
  /* Дополнительный контейнер */
  .slide-container {
    position: absolute;
    bottom: 100%; /* Изначально скрыт за пределами основного контейнера */
    left: 0;
    width: 100%;
    background-color: #f5f5f5;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transform: translateY(0);
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 0;
    z-index: 1;
  
    &.visible {
      transform: translateY(100%); /* Выезжает внутрь основного контейнера */
      opacity: 1;
    }
  }
  </style>
  