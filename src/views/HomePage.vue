<script setup>
import { useHead } from "@vueuse/head";
import TopPage from "../components/TopPage.vue";
import CompletedTasks from "../components/CompletedTasks.vue";
import EducationItems from "../components/EducationItems.vue";
import OurEvents from "../components/OurEvents.vue";
import HighlightsSection from "../components/HighlightsSection.vue";

// Enkel SEO-beskrivning, max 155 tecken
const seoDescription = "Historiska Röster – Utforska hemsökta platser, spökhistorier och unika event i Sverige med vårt team av undersökare.";

// Head-inställningar
useHead({
  title: "Historiska Röster – Hemsökta platser och forskning",
  meta: [
    { name: "description", content: seoDescription },
    { name: "keywords", content: "Historiska Röster, spökhistorier, hemsökta platser, event, undersökning" }
  ],
  link: [
    { rel: "canonical", href: "https://www.historiskaroster.se/" }
  ]
});
</script>

<template>
  <TopPage />

  <main>
    <HighlightsSection />
    <CompletedTasks />
    <OurEvents />
    <EducationItems />
  </main>
</template>

<style scoped>
.home-header-content {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  .home-header-content {
    display: flex;
    flex-direction: column;
  }

  .home-header-content .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
