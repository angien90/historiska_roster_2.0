<script setup>
</script>

<template>
  <h1>{{ $t("ghostSchool.title") }}</h1>
  <img src="/images/generell/abandoned_school.webp"  alt="Spökjakt-utrustning" class="team-image" width="250" height="180" loading="lazy"/>
  <p>{{ $t("ghostSchool.whyGhostHunting") }}</p>
  
  <div class="section-content">
    <section class="section">
      <h2>{{ $t("ghostSchool.whatIsGhostHuntingTitle") }}</h2>
      <p>{{ $t("ghostSchool.whatIsGhostHuntingText") }}</p>
    </section>

    <section class="section">
      <h2>{{ $t("ghostSchool.equipmentTitle") }}</h2>
      <p v-for="(text, index) in $tm('ghostSchool.equipmentText')" :key="index" v-html="text"/>
    </section>

    <section class="section">
      <h2>{{ $t("ghostSchool.methodsTitle") }}</h2>
      <p v-for="(text, index) in $tm('ghostSchool.methodsText')" :key="index" v-html="text"/>
    </section>

    <section class="section">
      <h2>{{ $t("ghostSchool.ethicsTitle") }}</h2>
      <p v-for="(text, index) in $tm('ghostSchool.ethicsText')" :key="index" v-html="text"/>
    </section>
  </div>
</template>

<style scoped>
p {
  padding: 0 2rem;
}
</style>
