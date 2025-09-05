<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <img src="/images/generell/logo.svg" alt="Historiska Rösters logga" class="logo" width="125" height="125" loading="lazy"/>

  <div class="greetings">
    <h1 class="titel">{{ t("title") }}</h1>
    <h2>{{ t("subtitle") }}</h2>
  </div>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 1rem;
  height: 200px;
  width: auto;
  padding-top: 20px;
}

h1 {
  margin-top: 2rem;
}

h2 {
  font-family: "Amatic SC", cursive;
  font-weight: lighter;
  padding: 0 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .logo {
    margin: 0 auto 1rem;
    height: 300px;
    width: auto;
  }

  h2 {
  padding-bottom: 2rem;
  font-size: 2.5rem;
}
}
</style>
