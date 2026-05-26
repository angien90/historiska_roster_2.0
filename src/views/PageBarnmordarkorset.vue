<script setup>
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceGallery from "@/components/PlaceGallery.vue";
import PlaceResult from "../components/PlaceResult.vue";

import barnmordarkorset_sv from "../Locales/sv/Barnmordarkorset.json";
import barnmordarkorset_en from "../Locales/en/Barnmordarkorset.json";

const { locale } = useI18n();

const barnmordarkorset = computed(() => {
  return locale.value === "sv" ? barnmordarkorset_sv : barnmordarkorset_en;
});

// Begränsa description till 155 tecken
const seoDescription = barnmordarkorset.value.history[0].text[0].slice(0, 155);

// Head + JSON-LD
useHead({
  title: `${barnmordarkorset.value.title} – Historiska Röster`,
  meta: [
    { name: "description", content: seoDescription },
    {
      name: "keywords",
      content:
        "barnmordarkorset, spökhus, hemsökt plats, paranormal undersökning, Historiska Röster",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.historiskaroster.se/barnmordarkorset",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": barnmordarkorset.value.title,
        "description": barnmordarkorset.value.history[0].text[0],
        "image": "https://www.historiskaroster.se" + barnmordarkorset.value.image,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sverige",
          "addressCountry": "SE",
        },
        "url": "https://www.historiskaroster.se/barnmordarkorset",
      }),
    },
  ],
});
</script>

<template>
  <div v-if="barnmordarkorset">
    <PlaceHeader
      :title="barnmordarkorset.title"
      :investigation="barnmordarkorset.investigation"
      :date="barnmordarkorset.investigationDate"
      :image="barnmordarkorset.image"
    />
    <PlaceHistory 
      :content="barnmordarkorset.history"  
    />
    <PlaceGallery
      :galleryTitle="barnmordarkorset.galleryTitle"
      :gallery="barnmordarkorset.gallery"
    />
    <PlaceResult
      :resultTitle="barnmordarkorset.resultTitle"
      :videoSectionTitle="barnmordarkorset.videoSectionTitle"
      :results="barnmordarkorset.results"
      :videos="barnmordarkorset.videos"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
