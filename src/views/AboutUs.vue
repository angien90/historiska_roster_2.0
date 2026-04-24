<script setup>
import { useHead } from "@vueuse/head";
import OurReviews from "../components/OurReviews.vue";

// Enkel SEO-beskrivning, max 155 tecken
const seoDescription = "Om Historiska Röster – vårt team, vårt arbete med spökhistorier och undersökningar i Sverige.";

// Head-inställningar
useHead({
  title: "Om oss – Historiska Röster",
  meta: [
    { name: "description", content: seoDescription },
    { name: "keywords", content: "Historiska Röster, team, undersökning, spökhistoria" }
  ],
  link: [
    { rel: "canonical", href: "https://www.historiskaroster.se/about-us" }
  ]
});
</script>

<template>
  <span class="about-us">
    <h1>{{ $t("aboutUs.title") }}</h1>
  </span>
  <div class="section-content">
    <section class="section team-section">
      <h2>{{ $t("aboutUs.teamTitle") }}</h2>
      <div class="team-layout">
        <img :src="`/images/generell/historiska_röster.webp`" alt="En bild på teamet" class="responsive-img team-image" loading="lazy"/>
        <div class="team-copy">
          <p class="team-text">{{ $t("aboutUs.teamText") }}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>{{ $t("aboutUs.whoAreWe") }}</h2>
      <p>{{ $t("aboutUs.whoAreWeText") }}</p>

      <section class="vision">
        <h2>{{ $t("aboutUs.visionTitle") }}</h2>
        <p>{{ $t("aboutUs.visionText") }}</p>

        <h2>{{ $t("aboutUs.goalTitle") }}</h2>
        <p>{{ $t("aboutUs.goalText") }}</p>

        <h2>{{ $t("aboutUs.keywordsTitle") }}</h2>
        <div class="ledord-wrapper">
          <div class="ledord-block">
            <h4>{{ $t("aboutUs.keywords.document.title") }}</h4>
            <p>{{ $t("aboutUs.keywords.document.text") }}</p>
          </div>
          <div class="ledord-block">
            <h4>{{ $t("aboutUs.keywords.understand.title") }}</h4>
            <p>{{ $t("aboutUs.keywords.understand.text") }}</p>
          </div>
          <div class="ledord-block">
            <h4>{{ $t("aboutUs.keywords.inform.title") }}</h4>
            <p>{{ $t("aboutUs.keywords.inform.text") }}</p>
          </div>
          <div class="ledord-block">
            <h4>{{ $t("aboutUs.keywords.preserve.title") }}</h4>
            <p>{{ $t("aboutUs.keywords.preserve.text") }}</p>
          </div>
          <div class="ledord-block">
            <h4>{{ $t("aboutUs.keywords.collaborate.title") }}</h4>
            <p>{{ $t("aboutUs.keywords.collaborate.text") }}</p>
          </div>
          <div class="ledord-block">
            <h4>{{ $t("aboutUs.keywords.reliability.title") }}</h4>
            <p>{{ $t("aboutUs.keywords.reliability.text") }}</p>
          </div>
        </div>
      </section>
    </section>

    <section class="section">
      <h2>{{ $t("aboutUs.howWeInvestigate") }}</h2>
      <p v-for="(text, index) in $tm('aboutUs.howWeInvestigateText')" :key="index" v-html="text"/>
    </section>

    <section class="section">
      <h2>{{ $t("aboutUs.ghostHauntingEvent") }}</h2>
      <p v-for="(text, index) in $tm('aboutUs.ghostHauntingEventText')" :key="index" v-html="text"/>
    </section>

    <section class="section">
      <h2>{{ $t("aboutUs.interestedInCooperation") }}</h2>
      <p v-for="(text, index) in $tm('aboutUs.cooperationText')" :key="index" v-html="text"/>
    </section>
    <OurReviews />
  </div>
</template>

<style scoped>
p {
  padding: 0;
}

h4 {
  margin-bottom: -10px;
}

.ledord-wrapper {
  display: grid;
  gap: 1.5rem;
  margin-top: 1rem;
}

.team-text {
  margin: 0;
}

.team-layout {
  display: grid;
  gap: 1rem;
  justify-items: center;
}

.team-copy {
  min-width: 0;
  width: 100%;
}

.team-image {
  display: block;
  width: min(100%, 320px) !important;
  height: auto;
  margin: 1rem auto 1rem !important;
  border-radius: 10px;
}

@media (min-width: 1024px) {
  h4 {
    margin-bottom: -25px;
  }

  .team-layout {
    grid-template-areas: "copy image";
    grid-template-columns: minmax(0, 1fr) 450px;
    align-items: center;
    justify-items: stretch;
    gap: 2rem;
  }

  .team-copy {
    grid-area: copy;
  }

  .team-image {
    grid-area: image;
    align-self: center;
    width: 100% !important;
    max-width: 450px;
    margin: 0 !important;
  }

  p {
    padding: 20px;
  }
}
</style>
