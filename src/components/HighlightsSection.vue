<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <section class="section-style">
    <h2>{{ t("highlights_title") }}</h2>

    <div class="grid-style">
    <!-- Nyheter -->
    <router-link to="/PageJugendHouseEvent" class="highlight-upcoming" aria-label="Klevs Gästgiveri">
      <h3>{{ t("klevs_gastgiveri_event") }}</h3>
      <img src="/images/jugend_house/Klevs Gästgiveri (CC BY).webp" alt="Klevs Gästgiveri" width="250" height="180" class="upcoming-image" loading="lazy"/>
      <div class="upcoming-text">
          <p>{{ t("klevs_gastgiveri_event_text1") }}</p>
          <p>{{ t("klevs_gastgiveri_event_text2") }}</p>
          <p>{{ t("klevs_gastgiveri_event_text3") }}</p>
      </div>
    </router-link>

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
  max-width: none;
  text-align: center;
  text-decoration: none;
  margin: 0 auto 20px;
  margin-top: 20px;
}

h3 {
  margin-bottom: 30px;
  margin-top: 0;
}

.upcoming-image {
  width: 100%;
  height: auto;
  max-height: 400px;
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
  .highlight,
  .highlight-upcoming-div {
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
    .highlight-upcoming {
      max-width: 500px;
    }

    .upcoming-image {
      max-height: 320px;
      width: auto;
    }
  }
</style>
