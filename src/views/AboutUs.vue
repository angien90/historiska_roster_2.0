<script setup>
</script>

<template>
  <h1>{{ $t("aboutUs.title") }}</h1>
  <div class="section-content">
    <section class="section">
      <img src="../assets/images/about_us/historiska_roster_i_trappa.webp" width="400" alt="En bild på teamet" class="team-image" />
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
        </div>
      </section>
    </section>

    <section class="section">
      <h2>{{ $t("aboutUs.howWeInvestigate") }}</h2>
      <p v-for="(text, index) in $tm('aboutUs.howWeInvestigateText')" :key="index" v-html="text" />
    </section>

    <section class="section">
      <h2>{{ $t("aboutUs.interestedInCooperation") }}</h2>
      <p v-for="(text, index) in $tm('aboutUs.cooperationText')" :key="index" v-html="text" />
    </section>
  </div>
</template>


<style scoped>
.about-us {
  max-width: 100%;
  margin: 0 auto;
  background-color: #111;
  color: #fff;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.08);
}

h3 {
  margin-top: 2rem; 
  margin-bottom: 0;
}

.vision h2 {
  margin-top: 2rem;
  margin-bottom: 0;
}

.vision p {
  margin-top: 0;
}

h4 {
  margin-bottom: 0;
}

.back-link {
  color: white;
  text-decoration: none;
  font-size: 1.8rem;
}

.team-image {
  display: block;
  margin: 0 auto 2rem auto;
  min-width: 40%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.1);
}

.ledord-wrapper {
  display: grid;
  gap: 1.5rem;
  margin-top: 1rem;
}

@media (min-width: 1024px) {
  .team-image {
    max-width: 40%;
  }  
}
</style>
