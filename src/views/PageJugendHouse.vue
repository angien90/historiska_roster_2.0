<script setup>
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceGhostStory from "../components/PlaceGhostStory.vue";
import PlaceGallery from "../components/PlaceGallery.vue";
import PlaceResult from "../components/PlaceResult.vue";
import PlaceReadMore from "../components/PlaceReadMore.vue";
import PlaceReferences from "../components/PlaceReferences.vue";

import jugendHouse_sv from "../Locales/sv/JugendHouse.json";
import jugendHouse_en from "../Locales/en/JugendHouse.json";

const { locale } = useI18n();

const jugendHouse = computed(() => {
  return locale.value === "sv" ? jugendHouse_sv : jugendHouse_en;
});

// Begränsa description till 155 tecken
const seoDescription = jugendHouse.value.history[0].text[0].slice(0, 155);

useHead({
  title: `${jugendHouse.value.title} – Historiska Röster`,
  meta: [
    { name: "description", content: seoDescription },
    { name: "keywords", content: "Klevs gästgiveri, Historiska Röster, spökhistoria" },
  ],
  link: [
    { rel: "canonical", href: "https://www.historiskaroster.se/PageJugendHouse" }
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": jugendHouse.value.title,
        "description": jugendHouse.value.history[0].text[0],
        "image": "https://www.historiskaroster.se" + jugendHouse.value.image,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Okänd",
          "addressCountry": "SE"
        },
        "url": "https://www.historiskaroster.se/PageJugendHouse"
      })
    }
  ]
});
</script>

<template>
  <div v-if="jugendHouse">
    <PlaceHeader
      :title="jugendHouse.title"
      :investigation="jugendHouse.investigation"
      :date="jugendHouse.investigationDate"
      :image="jugendHouse.image"
    />
    <PlaceHistory 
      :content="jugendHouse.history" 
    />  
    <PlaceGhostStory
      :storyTitle="jugendHouse.storyTitle"
      :stories="jugendHouse.stories"
    />
    <PlaceGallery
      :galleryTitle="jugendHouse.galleryTitle"
      :gallery="jugendHouse.gallery"
    />
    <PlaceResult
      :resultTitle="jugendHouse.resultTitle"
      :videoSectionTitle="jugendHouse.videoSectionTitle"
      :results="jugendHouse.results"
      :videos="jugendHouse.videos"
    />
    <PlaceReadMore
      :moreTitle="jugendHouse.moreTitle"
      :more="jugendHouse.more"
    />
    <PlaceReferences
      :more-title="jugendHouse.referencesTitle"
      :sources="jugendHouse.sources"
    />
    </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
