<script setup>
defineProps({
  text: String,
  name: String,
  handle: String,
  image: String,
});
</script>

<template>
  <div class="review-card">
    <div class="details">
      <p class="stars">⭐⭐⭐⭐⭐</p>
      <blockquote>
        <p>"{{ text }}"</p>
      </blockquote>
      <div class="review-image-wrapper">
        <img :src="image" :alt="name" width="250" height="180" class="review-image" loading="lazy"/>
      </div>
      <div class="author">
        <p class="name">{{ name }}</p>
        <p class="handle">{{ handle }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.review-card {
  background-color: var(--color-third-background);
  padding: 1.5rem;
  border-radius: 12px;
  max-width: 300px;
  text-align: center;
  color: white;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.review-card:hover {
  transform: scale(1.03);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.15);
}

.review-image-wrapper {
  display: flex;
  justify-content: center;
  margin: 2rem auto 1rem;
}

.review-image {
  width: 125px;
  height: 125px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.08);
}

.stars {
  color: gold;
  font-size: 1.2rem;
  margin-top: 20px;
  padding-bottom: 0;
}

blockquote {
  font-style: italic;
  max-width: 90%;
  margin: 0 auto;
  
}

p {
  font-size: 1.2rem;
  margin-top: 0;
}

.name {
  font-weight: bold;
  padding-bottom: 0;
  margin-bottom: 0;
}

.handle {
  font-size: 1.2rem;
  color: #ccc;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
