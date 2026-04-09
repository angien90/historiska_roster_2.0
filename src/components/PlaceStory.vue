<script setup>
defineProps({
  content: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <section v-if="content.length" class="section">
    <div
      v-for="(section, index) in content"
      :key="index"
      class="story-section"
    >
      <h2 v-if="section.heading1 || section.heading2">
        {{ section.heading1 }}{{ section.heading2 }}
      </h2>
      <p
        v-for="(paragraph, pIndex) in section.text || []"
        :key="pIndex"
        v-html="paragraph"
      ></p>
    </div>
  </section>
</template>

<style scoped>
h2 {
  margin-top: 50px;
}
</style>
