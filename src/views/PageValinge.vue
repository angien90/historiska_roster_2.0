<script setup>
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceGallery from "@/components/PlaceGallery.vue";
import PlaceResult from "../components/PlaceResult.vue";
import PlaceReferences from "@/components/PlaceReferences.vue";

import valinge_sv from "../Locales/sv/Valinge.json";
import valinge_en from "../Locales/en/Valinge.json";

const { locale } = useI18n();

const valinge = computed(() => {
  return locale.value === "sv" ? valinge_sv : valinge_en;
});

// Begränsa description till 155 tecken
const seoDescription = valinge.value.history[0].text[0].slice(0, 155);

// Head + JSON-LD
useHead({
  title: `${valinge.value.title} – Historiska Röster`,
  meta: [
    { name: "description", content: seoDescription },
    {
      name: "keywords",
      content:
        "valinge, spökhus, hemsökt plats, paranormal undersökning, Historiska Röster",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.historiskaroster.se/valinge",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": valinge.value.title,
        "description": valinge.value.history[0].text[0],
        "image": "https://www.historiskaroster.se" + valinge.value.image,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sverige",
          "addressCountry": "SE",
        },
        "url": "https://www.historiskaroster.se/valinge",
      }),
    },
  ],
});
</script>

<template>
  <div v-if="valinge">
    <PlaceHeader
      :title="valinge.title"
      :investigation="valinge.investigation"
      :date="valinge.investigationDate"
      :image="valinge.image"
    />
    <PlaceHistory 
      :content="valinge.history"  
    />
    <PlaceGallery
      :galleryTitle="valinge.galleryTitle"
      :gallery="valinge.gallery"
    />
    <PlaceResult
      :resultTitle="valinge.resultTitle"
      :videoSectionTitle="valinge.videoSectionTitle"
      :results="valinge.results"
      :videos="valinge.videos"
    />
    <PlaceReferences
      :more-title="valinge.referencesTitle"
      :sources="valinge.sources"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
