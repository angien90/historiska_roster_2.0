<script setup>
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceGallery from "../components/PlaceGallery.vue";
import PlaceResult from "../components/PlaceResult.vue";
import PlaceReferences from "@/components/PlaceReferences.vue";

import huntersGrave_sv from "../Locales/sv/HuntersGrave.json";
import huntersGrave_en from "../Locales/en/HuntersGrave.json";

const { locale } = useI18n();

const huntersGrave = computed(() => {
  return locale.value === "sv" ? huntersGrave_sv : huntersGrave_en;
});

// Begränsa description till 155 tecken
const seoDescription = huntersGrave.value.history[0].text[0].slice(0, 155);

useHead({
  title: `${huntersGrave.value.title} – Historiska Röster`,
  meta: [
    { name: "description", content: seoDescription },
    { name: "keywords", content: "Jägarens grav, Historiska Röster, spökhistoria" },
  ],
  link: [
    { rel: "canonical", href: "https://www.historiskaroster.se/PageHuntersGrave" }
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": huntersGrave.value.title,
        "description": huntersGrave.value.history[0].text[0],
        "image": "https://www.historiskaroster.se" + huntersGrave.value.image,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Okänd",
          "addressCountry": "SE"
        },
        "url": "https://www.historiskaroster.se/PageHuntersGrave"
      })
    }
  ]
});
</script>

<template>
  <div v-if="huntersGrave">
    <PlaceHeader
      :title="huntersGrave.title"
      :investigation="huntersGrave.investigation"
      :date="huntersGrave.investigationDate"
      :image="huntersGrave.image"
    />
    <PlaceHistory 
      :content="huntersGrave.history" 
    />  
    <PlaceGallery
      :galleryTitle="huntersGrave.galleryTitle"
      :gallery="huntersGrave.gallery"
    />
    <PlaceResult
      :resultTitle="huntersGrave.resultTitle"
      :videoSectionTitle="huntersGrave.videoSectionTitle"
      :results="huntersGrave.results"
      :videos="huntersGrave.videos"
    />
    <PlaceReferences
      :more-title="huntersGrave.referencesTitle"
      :sources="huntersGrave.sources"
    />
    </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
