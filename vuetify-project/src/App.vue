<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  //
</script>
  
<style>
body {
  scrollbar-width: thin;

}
    /* Устанавливаем ширину полосы прокрутки */
::-webkit-scrollbar {
    width: 0px; /* Ширина вертикальной полосы прокрутки */
    height: 0px; /* Высота горизонтальной полосы прокрутки */
}

/* Стили для дорожки прокрутки */
::-webkit-scrollbar-track {
    background: #f1f1f1; /* Цвет дорожки */
}

/* Стили для ползунка прокрутки */
::-webkit-scrollbar-thumb {
    background: #888; /* Цвет ползунка */
    border-radius: 10px; /* Закругление углов ползунка */
}

/* Стили для ползунка при наведении */
::-webkit-scrollbar-thumb:hover {
    background: #555; /* Цвет ползунка при наведении */
}

</style>
