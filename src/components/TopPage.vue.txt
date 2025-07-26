<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125">
  
  <div class="greetings">
    <h1 class="titel">{{ t('title') }}</h1>
    <h2>{{ t('subtitle') }}</h2>
  </div>

  <div class="gradient-line"></div>
</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 1rem;
  height: 200px;
  width: auto;
}

h2 {
  padding: 0 2rem;
  font-family: 'Amatic SC', cursive;
  
}


@media (min-width: 768px) {
  .logo {
    margin: 0 auto 1rem;
    height: 300px;
    width: auto;
  }
}
</style>
