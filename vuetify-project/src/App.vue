<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
body {
  scrollbar-width: thin;

}
::-webkit-scrollbar {
    width: 0; /* Ширина вертикальной полосы прокрутки */
    height: 0; /* Высота горизонтальной полосы прокрутки */
}
</style>
