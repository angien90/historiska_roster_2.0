<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  title: String,
  stories: Array, // Ändrat från String till Array
  path: String,
  link_text: String,
});

const router = useRouter();

const goToLocation = () => {
  router.push(props.path);
};
</script>

<template>
  <div class="experience-card">
    <div class="experience-content">
      <h3>{{ title }}</h3>
      
      <!-- Loopa igenom alla berättelser för denna plats -->
      <div class="stories-container">
        <p v-for="(story, index) in stories" :key="index" class="story-text">
          {{ story }}
        </p>
      </div>

      <button class="read-more-btn" @click="goToLocation">
        {{ link_text }}
        <span class="arrow">→</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Behåll din befintliga styling, lägg till evt. avstånd mellan flera texter om det behövs */
.stories-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  margin-bottom: 1.5rem;
}

.story-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #d1d5db;
  text-align: center;
  margin: 0;
}

/* Resten av din CSS för ExperienceItem är oförändrad */
.experience-card {
  background: linear-gradient(145deg, rgba(30, 30, 30, 0.96), rgba(26, 26, 26, 0.94));
  padding: 1.5rem;
  border-radius: 12px;
  max-width: 100%;
  color: white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(216, 195, 156, 0.15);
  display: flex;
  flex-direction: column;
}

.experience-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
}

.experience-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.experience-content h3 {
  font-size: 1.4rem;
  margin: 0 0 1rem 0;
  text-align: center;
  color: #fff;
  font-family: var(--font-display);
}

.read-more-btn {
  align-self: center;
  background: #c49f68;
  color: #111;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  letter-spacing: 0.03em;
}

.read-more-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(196, 159, 104, 0.3);
}

.arrow {
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.read-more-btn:hover .arrow {
  transform: translateX(4px);
}
</style>