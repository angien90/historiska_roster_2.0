<script setup>
defineProps({
  content: Array,
  image: [String, Object],
});
</script>

<template>
  <section class="section">
    <div v-for="(section, index) in content" :key="index" class="history-section">
      <h2>{{ section.heading1 }}{{ section.heading2 }}</h2>
      <p v-for="(paragraph, pIndex) in section.text" :key="pIndex" v-html="paragraph"></p>
    </div>

    <div v-if="image" class="text-center">
      <a :href="typeof image === 'object' ? image.src : image" target="_blank" rel="noopener">
        <img :src="image.src" :alt="image.alt" width="250" height="180" class="responsive-img img-rounded img-hover-zoom" loading="lazy"/>
      </a>
    </div>
  </section>
</template>

<style scoped>
h2 {
  margin-top: 50px;
}
</style>
