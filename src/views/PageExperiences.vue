<script setup>
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";
import OurExperiences from "../components/OurExperiences.vue";

const { locale } = useI18n();

const seoDescription =
  "Läs om våra fasinerande paranormala upplevelser och utredningar från hemsökta platser i Sverige. Historiska Röster dokumenterar händelser och möten med det okända.";

const seoDescriptionEn =
  "Read about our fascinating paranormal experiences and investigations from haunted locations in Sweden. Historical Voices documents events and encounters with the unknown.";

useHead({
  title: locale.value === "sv" 
    ? "Våra Upplevelser - Paranormala Utredningar" 
    : "Our Experiences - Paranormal Investigations",
  meta: [
    { 
      name: "description", 
      content: locale.value === "sv" ? seoDescription : seoDescriptionEn 
    },
    {
      name: "keywords",
      content: locale.value === "sv"
        ? "paranormala utredningar, upplevelser, hemsökta platser, spöken"
        : "paranormal investigations, experiences, haunted places, ghosts",
    },
  ],
  link: [{ 
    rel: "canonical", 
    href: `https://www.historiskaroster.se/${locale.value === "sv" ? "" : "en/"}experiences` 
  }],
});
</script>

<template>
  <div class="experiences-page">
    <OurExperiences />
  </div>
</template>

<style scoped>
.experiences-page {
  width: 100%;
  margin: 0 auto;
}
</style>