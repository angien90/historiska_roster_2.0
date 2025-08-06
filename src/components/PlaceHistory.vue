<script setup>
defineProps({
  content: Array,
  image: Object,
});
</script>

<template>
  <section class="section">
    <div v-for="(section, index) in content" :key="index" class="history-section">
      <h2>{{ section.heading1 }}</h2>
      <h3>{{ section.heading2 }}</h3>
      <p v-for="(paragraph, pIndex) in section.text" :key="pIndex" v-html="paragraph"></p>
    </div>

    <div v-if="image" class="text-center">
      <a :href="image.src" target="_blank" rel="noopener">
        <img :src="image.src" :alt="image.alt" width="250" height="180" class="responsive-img img-rounded img-hover-zoom" loading="lazy"/>
      </a>
    </div>
  </section>
</template>

<style scoped>
h3 {
  padding-left: 0;
  padding-right: 0;
}
</style>
