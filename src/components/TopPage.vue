<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <img src="/images/generell/logo.svg" alt="Historiska Rösters logga" class="logo" width="125" height="125">
  
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
  padding: 0 1rem;
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
