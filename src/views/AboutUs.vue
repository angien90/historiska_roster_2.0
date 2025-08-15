<script setup>
import OurReviews from "../components/OurReviews.vue";
</script>

<template>
  <span class="about-us">
    <h1>{{ $t("aboutUs.title") }}</h1>
  </span>
  <img :src="`/images/generell/historiska_roster_i_trappa.webp`" width="250" height="180" alt="En bild på teamet" class="responsive-img" loading="lazy"/>
  <div class="section-content">
    <section class="section">
      <h2>{{ $t("aboutUs.teamTitle") }}</h2>
      <p>{{ $t("aboutUs.teamText") }}</p>
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

@media (min-width: 1024px) {
  h4 {
    margin-bottom: -25px;
  }

  p {
    padding: 20px;
  }
}
</style>
