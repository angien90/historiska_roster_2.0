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

import sonjasVeranda_sv from "../Locales/sv/SonjasVeranda.json";
import sonjasVeranda_en from "../Locales/en/SonjasVeranda.json";

const { locale } = useI18n();

const sonjasVeranda = computed(() => {
  return locale.value === "sv" ? sonjasVeranda_sv : sonjasVeranda_en;
});

// Begränsa description till 155 tecken
const seoDescription = sonjasVeranda.value.history[0].text[0].slice(0, 155);

// Head + JSON-LD
useHead({
  title: `${sonjasVeranda.value.title} – Historiska Röster`,
  meta: [
    { name: "description", content: seoDescription },
    {
      name: "keywords",
      content:
        "Sonjas Veranda, spökhus, hemsökt plats, paranormal undersökning, Historiska Röster",
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
        "name": sonjasVeranda.value.title,
        "description": sonjasVeranda.value.history[0].text[0],
        "image": "https://www.historiskaroster.se" + sonjasVeranda.value.image,
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
  <div v-if="sonjasVeranda">
    <PlaceHeader
      :title="sonjasVeranda.title"
      :investigation="sonjasVeranda.investigation"
      :date="sonjasVeranda.investigationDate"
      :image="sonjasVeranda.image"
    />
    <PlaceHistory 
      :content="sonjasVeranda.history"  
    />
    <PlaceGallery
      :galleryTitle="sonjasVeranda.galleryTitle"
      :gallery="sonjasVeranda.gallery"
    />
    <PlaceResult
      :resultTitle="sonjasVeranda.resultTitle"
      :videoSectionTitle="sonjasVeranda.videoSectionTitle"
      :results="sonjasVeranda.results"
      :videos="sonjasVeranda.videos"
    />
    <PlaceReadMore
      :moreTitle="sonjasVeranda.moreTitle"
      :more="sonjasVeranda.more"
    />
    <PlaceReferences
      :more-title="sonjasVeranda.referencesTitle"
      :sources="sonjasVeranda.sources"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
