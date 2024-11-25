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
::-webkit-scrollbar {
    width: 0px; /* Ширина вертикальной полосы прокрутки */
    height: 0px; /* Высота горизонтальной полосы прокрутки */
}
</style>
