<script setup>
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceHistoricalEvents from "../components/PlaceHistoricalEvents.vue";
import PlaceGhostStory from "../components/PlaceGhostStory.vue";
import PlaceResult from "../components/PlaceResult.vue";
import PlaceReadMore from "../components/PlaceReadMore.vue";

import gathenhielmskaHuset_sv from "../Locales/sv/GathenhielmskaHuset.json";
import gathenhielmskaHuset_en from "../Locales/en/GathenhielmskaHuset.json";

const { locale } = useI18n();

const gathenhielmskaHuset = computed(() => {
  return locale.value === "sv" ?gathenhielmskaHuset_sv : gathenhielmskaHuset_en;
});

// Begränsa description till 155 tecken
const seoDescription = gathenhielmskaHuset.value.history[0].text[0].slice(0, 155);

useHead({
  title: `${gathenhielmskaHuset.value.title} – Historiska Röster`,
  meta: [
    { name: "description", content: seoDescription },
    { name: "keywords", content: "Gathenhielmska huset, spökhus Göteborg, Historiska Röster, hemsökt hus" },
  ],
  link: [
    { rel: "canonical", href: "https://www.historiskaroster.se/PageGathenhielmskaHuset" }
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": gathenhielmskaHuset.value.title,
        "description": gathenhielmskaHuset.value.history[0].text[0],
        "image": "https://www.historiskaroster.se" + gathenhielmskaHuset.value.image,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Göteborg",
          "addressCountry": "SE"
        },
        "url": "https://www.historiskaroster.se/PageGathenhielmskaHuset"
      })
    }
  ]
});
</script>

<template>
  <div v-if="gathenhielmskaHuset">
    <PlaceHeader
      :title="gathenhielmskaHuset.title"
      :investigation="gathenhielmskaHuset.investigation"
      :date="gathenhielmskaHuset.investigationDate"
      :image="gathenhielmskaHuset.image"
    />
    <PlaceHistory 
      :content="gathenhielmskaHuset.history" 
    />
    <PlaceGhostStory
      :storyTitle="gathenhielmskaHuset.storyTitle"
      :stories="gathenhielmskaHuset.stories"
    />
    <PlaceHistoricalEvents
      :eventTitle="gathenhielmskaHuset.eventTitle"
      :events="gathenhielmskaHuset.events"
    />
    <PlaceResult
      :resultTitle="gathenhielmskaHuset.resultTitle"
      :videoSectionTitle="gathenhielmskaHuset.videoSectionTitle"
      :results="gathenhielmskaHuset.results"
      :videos="gathenhielmskaHuset.videos"
    />
    <PlaceReadMore
      :moreTitle="gathenhielmskaHuset.moreTitle"
      :more="gathenhielmskaHuset.more"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
