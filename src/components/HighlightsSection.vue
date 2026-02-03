<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <section class="section-style">
    <h2>{{ t("highlights_title") }}</h2>

    <div class="grid-style">
      <div class="highlight-upcoming">
        <h3>{{ t("upcoming") }}</h3>
        
        <div class="upcoming-content">
          <img src="/images/generell/empty_room_with_ghost.webp" alt="Tomt rum med ett spöke" width="250" height="180" class="upcoming-image" loading="lazy"/>
          <div class="upcoming-text">
            <p>{{ t("upcoming_paragraph1") }}</p>
            <p>{{ t("upcoming_paragraph2") }}</p>
            <p>{{ t("upcoming_paragraph3") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-style {
  padding: 10px;
  padding-bottom: 30px;
}

.highlight-upcoming {
  background-color: #1a1a1a;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 0 12px rgba(255 255 255 / 0.05);
  width: 100%;
  text-align: center;
}

.upcoming-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center; 
  justify-content: center;
}

h3 {
  font-size: 2rem;
  margin-bottom: 20px;
  margin-top: 0;
}

.upcoming-image {
  width: 100%;
  height: auto;
  max-height: 400px;
  border-radius: 12px;
  object-fit: cover;
}

.upcoming-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem; 
  justify-content: center; 
}

.upcoming-text p {
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: lighter;
  margin: 0; 
  padding: 0; 
}
/* Tablet & Desktop */
@media (min-width: 768px) {
  .highlight-upcoming {
    text-align: left;
    max-width: 1000px;
  }

  .upcoming-content {
    flex-direction: row; 
    align-items: center; 
    gap: 40px;
  }

  .upcoming-image {
    width: 300px;
    flex-shrink: 0;
  }

  .upcoming-text {
    flex: 1;
  }

  .upcoming-text p {
    font-size: 1.6rem;
    text-align: left;
  }
}

@media (min-width: 1130px) {
  .upcoming-image {
    width: 400px;
  }
}
</style>
