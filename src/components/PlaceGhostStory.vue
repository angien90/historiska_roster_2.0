<script setup>
defineProps({
  storyTitle: {
    type: String,
    required: true,
  },
  stories: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="section">
    <h2>{{ storyTitle }}</h2>
    <div class="stories">
      <div v-for="story in stories" :key="story.title" class="story">
        <h3 v-if="story.title">{{ story.title }}</h3>
        <p v-html="story.text"></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
 
</style>
