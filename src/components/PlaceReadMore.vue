<script setup>
defineProps({
  moreTitle: {
    type: String,
    required: true,
  },
  more: String,
});
</script>

<template>
  <section class="section">
    <h2>{{ moreTitle }}</h2>
    <p v-html="more"></p>
  </section>
</template>
