<script setup>
import ExperienceItem from "./ExperienceItem.vue";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t, tm } = useI18n();
const experiences = computed(() => tm("experiences"));
</script>

<template>
  <section class="section experiences-section">
    <h2>{{ t("experiences_heading") }}</h2>
    <p class="section-subheading">{{ t("experiences_subheading") }}</p>
    
    <div class="experiences-grid">
      <ExperienceItem 
        v-for="(experience, index) in experiences" 
        :key="index" 
        v-bind="experience"
      />
    </div>
  </section>
</template>

<style scoped>
.experiences-section {
  margin: 0;
  padding: 2rem;
  background-color: transparent;
  border-radius: 12px;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  font-family: var(--font-display);
}

.section-subheading {
  font-size: 1.3rem;
  text-align: center;
  color: #b8b8b8;
  margin: 0;
  padding-bottom: 1rem;
  font-family: var(--font-body);
}

.experiences-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .experiences-section {
    margin: 0;
    padding: 1.5rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  .section-subheading {
    font-size: 1.1rem;
  }

  .experiences-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .experiences-section {
    margin: 0;
    padding: 1rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .section-subheading {
    font-size: 1rem;
  }
}
</style>
