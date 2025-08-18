<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <section class="section-style">
    <h2>{{ t("highlights_title") }}</h2>

    <div class="grid-style">
    <!-- Nyheter -->
    <router-link to="/PageSpirituellMassa" class="highlight-upcoming" aria-label="Spirituell Massa">
      <h3>{{ t("spirituell_massa") }}</h3>
      <img src="/images/spirituellmassa/spirituellamassan.webp" alt="Spirituella Mässan" width="250" height="180" class="upcoming-image" loading="lazy"/>
      <div class="upcoming-text">
          <p>{{ t("spirituell_massa_text1") }}</p>
          <p>{{ t("spirituell_massa_text2") }}</p>
          <p>{{ t("spirituell_massa_text3") }}</p>
      </div>
    </router-link>

      <!-- Kommande utredningar -->
      <div class="highlight-upcoming">
        <h3>{{ t("upcoming") }}</h3>
        <img src="/images/generell/empty_room_with_ghost.webp" alt="Tomt rum med ett spöke" width="250" height="180" class="upcoming-image" loading="lazy"/>
        <div class="upcoming-text">
            <p>{{ t("upcoming_paragraph1") }}</p>
            <p>{{ t("upcoming_paragraph2") }}</p>
            <p>{{ t("upcoming_paragraph3") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.highlights-section {
  max-width: 100%;
  margin: 20px auto;
  padding: 2rem;
  background-color: #252525;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(255 255 255 / 0.08);
  color: white;
}

.highlights-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.highlight-upcoming {
  background-color: #1a1a1a;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 0 12px rgba(255 255 255 / 0.05);
  width: 100%;
  max-width: 320px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: inherit;
  text-decoration: none;
  margin-top: 20px;
  flex: 0 0 300px;
  max-width: 215px;
}

h3 {
  margin-bottom: 30px;
  margin-top: 0;
}

.upcoming-image {
  width: 100%;
  height: 270px;
  max-width: 320px;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(255 255 255 / 0.05);
  object-fit: cover;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: center;
  padding-bottom: 0;
  font-weight: lighter;
}

/* Desktop justeringar */
@media (min-width: 768px) {
    .highlights-wrapper {
      gap: 8%;
    }

    .highlight,
    .highlight-upcoming-div {
      width: 100%;
      max-width: 450px;
    }

    h3 {
      font-size: 1.7rem; 
    }

    p {
      font-size: 1.5rem;
    }  
}

@media (min-width: 1130px) {
    .highlight {
      width: 100%;
      max-width: 550px;
    }
  }
</style>
