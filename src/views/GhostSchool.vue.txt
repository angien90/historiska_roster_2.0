<script setup>
</script>

<template>
  <h1>{{ $t("ghostSchool.title") }}</h1>
  <img src="../assets/images/ghost_school/abandoned_school.webp" width="400" alt="Spökjakt-utrustning" class="team-image" />
  <p>{{  $t("ghostSchool.whyGhostHunting") }}</p>
  <div class="section-content">
    <section class="section">
      
      <h2>{{ $t("ghostSchool.whatIsGhostHuntingTitle") }}</h2>
      <p>{{ $t("ghostSchool.whatIsGhostHuntingText") }}</p>
    </section>

    <section class="section">
      <h2>{{ $t("ghostSchool.equipmentTitle") }}</h2>
      <p v-for="(text, index) in $tm('ghostSchool.equipmentText')" :key="index" v-html="text" />
    </section>

    <section class="section">
      <h2>{{ $t("ghostSchool.methodsTitle") }}</h2>
      <p v-for="(text, index) in $tm('ghostSchool.methodsText')" :key="index" v-html="text" />
    </section>

    <section class="section">
      <h2>{{ $t("ghostSchool.ethicsTitle") }}</h2>
      <p v-for="(text, index) in $tm('ghostSchool.ethicsText')" :key="index" v-html="text" />
    </section>
  </div>
</template>

<style scoped>
.team-image {
  display: block;
  margin: 0 auto 2rem auto;
  width: 80%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.1);
}

p {
  padding: 0 2rem;
}

@media (min-width: 1024px) {
  .team-image {
    max-width: 40%;
  }
}
</style>
