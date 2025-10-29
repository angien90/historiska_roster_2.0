<script setup>
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceGhostStory from "../components/PlaceGhostStory.vue";
import PlaceHistoricalEvents from "../components/PlaceHistoricalEvents.vue";
import PlaceGallery from "../components/PlaceGallery.vue";
import PlaceResult from "../components/PlaceResult.vue";
import PlaceReadMore from "../components/PlaceReadMore.vue";

import rydalsHerrgard_sv from "../Locales/sv/RydalsHerrgard.json";
import rydalsHerrgard_en from "../Locales/en/RydalsHerrgard.json";

const { locale } = useI18n();

const rydalsHerrgard = computed(() => {
  return locale.value === "sv" ? rydalsHerrgard_sv : rydalsHerrgard_en;
});

// Begränsa description till 155 tecken
const seoDescription = rydalsHerrgard.value.history[0].text[0].slice(0, 155);

// Head + JSON-LD schema
useHead({
  title: `${rydalsHerrgard.value.title} – Historiska Röster`,
  meta: [
    { name: "description", content: seoDescription },
    {
      name: "keywords",
      content:
        "Rydals Herrgård, Rydal, hemsökt herrgård, spöken, Historiska Röster",
    },
  ],
  link: [
    { rel: "canonical", href: "https://www.historiskaroster.se/rydals-herrgard" },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": rydalsHerrgard.value.title,
        "description": rydalsHerrgard.value.history[0].text[0],
        "image": "https://www.historiskaroster.se" + rydalsHerrgard.value.image,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Rydal",
          "addressCountry": "SE",
        },
        "url": "https://www.historiskaroster.se/rydals-herrgard",
      }),
    },
  ],
});
</script>

<template>
  <div v-if="rydalsHerrgard">
    <PlaceHeader
      :title="rydalsHerrgard.title"
      :investigation="rydalsHerrgard.investigation"
      :date="rydalsHerrgard.investigationDate"
      :image="rydalsHerrgard.image"
    />
    <PlaceHistory 
      :content="rydalsHerrgard.history" 
    />
    <PlaceGhostStory
      :storyTitle="rydalsHerrgard.storyTitle"
      :stories="rydalsHerrgard.stories"
    />
    <PlaceHistoricalEvents
      :eventTitle="rydalsHerrgard.eventTitle"
      :events="rydalsHerrgard.events"
    />
    <PlaceGallery
      :galleryTitle="rydalsHerrgard.galleryTitle"
      :gallery="rydalsHerrgard.gallery"
    />
    <PlaceResult
      :resultTitle="rydalsHerrgard.resultTitle"
      :videoSectionTitle="rydalsHerrgard.videoSectionTitle"
      :results="rydalsHerrgard.results"
      :videos="rydalsHerrgard.videos"
    />
    <PlaceReadMore
      :moreTitle="rydalsHerrgard.moreTitle"
      :more="rydalsHerrgard.more"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
