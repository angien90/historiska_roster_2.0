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

import borgvattnet_sv from "../Locales/sv/Borgvattnet.json";
import borgvattnet_en from "../Locales/en/Borgvattnet.json";

const { locale } = useI18n();

const borgvattnet = computed(() => {
  return locale.value === "sv" ? borgvattnet_sv : borgvattnet_en;
});

// Begränsa description till 155 tecken
const seoDescription = borgvattnet.value.history[0].text[0].slice(0, 155);

// Head + JSON-LD
useHead({
  title: `${borgvattnet.value.title} – Historiska Röster`,
  meta: [
    { name: "description", content: seoDescription },
    {
      name: "keywords",
      content:
        "Borgvattnet, spökhus, hemsökt plats, paranormal undersökning, Historiska Röster",
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
        "name": borgvattnet.value.title,
        "description": borgvattnet.value.history[0].text[0],
        "image": "https://www.historiskaroster.se" + borgvattnet.value.image,
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
  <div v-if="borgvattnet">
    <PlaceHeader
      :title="borgvattnet.title"
      :investigation="borgvattnet.investigation"
      :date="borgvattnet.investigationDate"
      :image="borgvattnet.image"
    />
    <PlaceHistory 
      :content="borgvattnet.history"  
    />
    <PlaceGallery
      :galleryTitle="borgvattnet.galleryTitle"
      :gallery="borgvattnet.gallery"
    />
    <PlaceResult
      :resultTitle="borgvattnet.resultTitle"
      :videoSectionTitle="borgvattnet.videoSectionTitle"
      :results="borgvattnet.results"
      :videos="borgvattnet.videos"
    />
    <PlaceReadMore
      :moreTitle="borgvattnet.moreTitle"
      :more="borgvattnet.more"
    />
    <PlaceReferences
      :more-title="borgvattnet.referencesTitle"
      :sources="borgvattnet.sources"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
