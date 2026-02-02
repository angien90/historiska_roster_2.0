<script setup>
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceGallery from "@/components/PlaceGallery.vue";
import PlaceResult from "../components/PlaceResult.vue";
import PlaceReadMore from "../components/PlaceReadMore.vue";
import PlaceReferences from "@/components/PlaceReferences.vue";

import askhultsby_sv from "../Locales/sv/AskhultsBy.json";
import askhultsby_en from "../Locales/en/AskhultsBy.json";

const { locale } = useI18n();

const askhultsby = computed(() => {
  return locale.value === "sv" ? askhultsby_sv : askhultsby_en;
});

// Begränsa description till 155 tecken
const seoDescription = askhultsby.value.history[0].text[0].slice(0, 155);

// Head + JSON-LD
useHead({
  title: `${askhultsby.value.title} – Historiska Röster`,
  meta: [
    { name: "description", content: seoDescription },
    {
      name: "keywords",
      content:
        "Äskhultsby, spökhus, hemsökt plats, paranormal undersökning, Historiska Röster",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.historiskaroster.se/sonjas-veranda",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": askhultsby.value.title,
        "description": askhultsby.value.history[0].text[0],
        "image": "https://www.historiskaroster.se" + askhultsby.value.image,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sverige",
          "addressCountry": "SE",
        },
        "url": "https://www.historiskaroster.se/sonjas-veranda",
      }),
    },
  ],
});
</script>

<template>
  <div v-if="askhultsby">
    <PlaceHeader
      :title="askhultsby.title"
      :investigation="askhultsby.investigation"
      :date="askhultsby.investigationDate"
      :image="askhultsby.image"
    />
    <PlaceHistory 
      :content="askhultsby.history"  
    />
    <PlaceGallery
      :galleryTitle="askhultsby.galleryTitle"
      :gallery="askhultsby.gallery"
    />
    <PlaceResult
      :resultTitle="askhultsby.resultTitle"
      :videoSectionTitle="askhultsby.videoSectionTitle"
      :results="askhultsby.results"
      :videos="askhultsby.videos"
    />
    <PlaceReadMore
      :moreTitle="askhultsby.moreTitle"
      :more="askhultsby.more"
    />
    <PlaceReferences
      :more-title="askhultsby.referencesTitle"
      :sources="askhultsby.sources"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
