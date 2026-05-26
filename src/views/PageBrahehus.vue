<script setup>
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceGallery from "@/components/PlaceGallery.vue";
import PlaceResult from "../components/PlaceResult.vue";
import PlaceReferences from "@/components/PlaceReferences.vue";

import brahehus_sv from "../Locales/sv/Brahehus.json";
import brahehus_en from "../Locales/en/Brahehus.json";

const { locale } = useI18n();

const brahehus = computed(() => {
  return locale.value === "sv" ? brahehus_sv : brahehus_en;
});

// Begränsa description till 155 tecken
const seoDescription = brahehus.value.history[0].text[0].slice(0, 155);

// Head + JSON-LD
useHead({
  title: `${brahehus.value.title} – Historiska Röster`,
  meta: [
    { name: "description", content: seoDescription },
    {
      name: "keywords",
      content:
        "brahehus, spökhus, hemsökt plats, paranormal undersökning, Historiska Röster",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.historiskaroster.se/brahehus",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": brahehus.value.title,
        "description": brahehus.value.history[0].text[0],
        "image": "https://www.historiskaroster.se" + brahehus.value.image,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sverige",
          "addressCountry": "SE",
        },
        "url": "https://www.historiskaroster.se/brahehus",
      }),
    },
  ],
});
</script>

<template>
  <div v-if="brahehus">
    <PlaceHeader
      :title="brahehus.title"
      :investigation="brahehus.investigation"
      :date="brahehus.investigationDate"
      :image="brahehus.image"
    />
    <PlaceHistory 
      :content="brahehus.history"  
    />
    <PlaceGallery
      :galleryTitle="brahehus.galleryTitle"
      :gallery="brahehus.gallery"
    />
    <PlaceResult
      :resultTitle="brahehus.resultTitle"
      :videoSectionTitle="brahehus.videoSectionTitle"
      :results="brahehus.results"
      :videos="brahehus.videos"
    />
    <PlaceReferences
      :more-title="brahehus.referencesTitle"
      :sources="brahehus.sources"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
