<template>
  <v-container>
    <v-btn 
      :class="{ 'active-color': isActive }" 
      @click="toggleButton"
      class="transition-button"
    >
      Нажми меня
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isActive: false, // Состояние кнопки
    };
  },
  methods: {
    toggleButton() {
      this.isActive = !this.isActive; // Переключение состояния
    },
  },
};
</script>

<style scoped>
/* Базовые стили кнопки */
.transition-button {
  transition: background-color 0.3s ease; /* Плавный переход цвета */
}

/* Цвет кнопки в активном состоянии */
.active-color {
  background-color: #4caf50 !important; /* Зелёный */
  color: white !important; /* Белый текст */
}
</style>
