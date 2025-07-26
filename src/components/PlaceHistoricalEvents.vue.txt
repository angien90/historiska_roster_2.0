<script setup>
defineProps({
  eventTitle: {
    type: String,
    required: true
  },
  events: {
    type: Array,
    required: true
  }  
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



