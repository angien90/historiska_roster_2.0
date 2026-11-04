<script setup>
import ExperienceItem from "./ExperienceItem.vue";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t, tm } = useI18n();
const experiences = computed(() => tm("experiences") || []);

// Skapa en lista med hela alfabetet (eller filtrera ut de bokstäver som används)
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ".split("");

// Kontrollera vilka bokstäver som har minst en plats som börjar på den bokstaven
const availableLetters = computed(() => {
  const letters = new Set();
  experiences.value.forEach(exp => {
    if (exp.title) {
      const firstLetter = exp.title.charAt(0).toUpperCase();
      letters.add(firstLetter);
    }
  });
  return letters;
});

// Funktion för att scrolla till rätt kort
const scrollToLetter = (letter) => {
  const element = document.getElementById(`exp-${letter}`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>

<template>
  <section class="section experiences-section">
    <h2>{{ t("experiences_heading") }}</h2>
    <p class="section-subheading">{{ t("experiences_subheading") }}</p>
    
    <!-- Alfabetisk navigering -->
    <div class="alphabet-nav">
      <button 
        v-for="letter in alphabet" 
        :key="letter"
        @click="scrollToLetter(letter)"
        :disabled="!availableLetters.has(letter)"
        :class="{ 'inactive': !availableLetters.has(letter) }"
        class="alphabet-btn"
      >
        {{ letter }}
      </button>
    </div>

    <div class="experiences-grid">
      <ExperienceItem 
        v-for="(experience, index) in experiences" 
        :key="index" 
        :id="`exp-${experience.title ? experience.title.charAt(0).toUpperCase() : ''}`"
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
  padding-bottom: 1.5rem;
  font-family: var(--font-body);
}

/* Stil för alfabetts-knaparna */
.alphabet-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.4rem;
  margin-bottom: 2.5rem;
  padding: 1rem;
  background: rgba(30, 30, 30, 0.6);
  border-radius: 12px;
  border: 1px solid rgba(216, 195, 156, 0.1);
}

.alphabet-btn {
  background: #2a2a2a;
  color: #fff;
  border: 1px solid rgba(216, 195, 156, 0.2);
  width: 36px;
  height: 36px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: var(--font-display);
}

.alphabet-btn:hover:not(.inactive) {
  background: #c49f68;
  color: #111;
  transform: translateY(-2px);
}

/* Stil för bokstäver som inte har några platser */
.alphabet-btn.inactive {
  opacity: 0.3;
  cursor: not-allowed;
  background: #1a1a1a;
  color: #666;
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

  .alphabet-btn {
    width: 30px;
    height: 30px;
    font-size: 0.85rem;
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

  .alphabet-btn {
    width: 27px;
    height: 27px;
    font-size: 0.75rem;
    gap: 0.2rem;
  }
}
</style>