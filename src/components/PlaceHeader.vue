<script setup>
defineProps({
  title: String,
  investigation: String,
  date: String,
  image: {
    type: [String, Object],
    required: true,
  },
  altText: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <header class="place-header text-center">
    <h1>{{ title }}</h1>
    <p class="date">{{ investigation }}:<span class="mobile-break"><br></span> {{ date }}</p>
    <img :src="image" :alt="altText || title" width="250" height="180" class="responsive-img img-rounded img-shadow img-hover-zoom" loading="lazy"/>
  </header>
</template>

<style scoped>
.place-header {
  max-width: 90%;
  margin: 2rem auto;
  padding: 0 1rem;
}

.date {
  font-style: italic;
  margin-bottom: 2rem;
  color: #ccc;
  line-height: 1.2;
}

.mobile-break {
  display: none;
}

@media (max-width: 480px) {
  .mobile-break {
    display: inline;
  }
}
</style>
