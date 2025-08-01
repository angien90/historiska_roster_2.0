<script setup>
defineProps({
  content: Array,
  image: Object
});
</script>

<template>
  <section class="section">
    <div v-for="(section, index) in content" :key="index" class="history-section">
      <h2>{{ section.heading }}</h2>
      <p v-for="(paragraph, pIndex) in section.text" :key="pIndex" v-html="paragraph"></p>
    </div>
    <div v-if="image" class="history-image">
      <a :href="image.src" target="_blank" rel="noopener">
        <img :src="image.src" :alt="image.alt" />
      </a>
    </div>
  </section>
</template>

<style scoped>
h2 {
  margin-bottom: 0;
}

.history-image {
  margin-bottom: 1rem;
  text-align: center;
}

.history-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.history-image img:hover {
  transform: scale(1.02);
}
</style>