<script setup>
defineProps({
  eventTitle: String,
  events: Array,
});
</script>

<template>
  <section class="section">
    <h2>{{ eventTitle }}</h2>
    <div v-for="(event, index) in events" :key="index">
      <h3 v-if="event.title">{{ event.title }}</h3>
      <p>{{ event.text }}</p>
    </div>
  </section>
</template>

<style scoped>
h3 {
  margin-top: 20px;
}
</style>
