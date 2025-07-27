<script setup>
const props = defineProps({
  title: String,
  investigation: String,
  date: String,
  image: {
    type: [String, Object],
    required: true
  },
  altText: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <header class="place-header">
    <span class="top-page">
      <h1>{{ title }}</h1>
    </span>
    <p class="date">{{ investigation }} : {{ date }}</p>
    <img 
      :src="image" 
      :alt="altText || title" 
      class="hero-image" 
      loading="lazy"
    />
  </header>
</template>

<style scoped>
.place-header {
  max-width: 700px;
  margin: 2rem auto;
  padding: 0 1rem;
  text-align: center;
}

.top-page h1 {
  margin-bottom: 0;
}

.hero-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.25);
  transition: transform 0.3s ease;
  cursor: zoom-in;
  display: block;
  margin: 0 auto;
}

.hero-image:hover {
  transform: scale(1.05);
}

/* Gör text och bild responsiva på mindre skärmar */
@media (max-width: 480px) {
  .top-page h1 {
    font-size: 1.8rem;
  }
  
  .hero-image {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
}
</style>
