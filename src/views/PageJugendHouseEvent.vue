<script setup>
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceGallery from "../components/PlaceGallery.vue";
import PlaceReadMore from "../components/PlaceReadMore.vue";

import jugendHouseEvent_sv from "../Locales/sv/JugendHouseEvent.json";
import jugendHouseEvent_en from "../Locales/en/JugendHouseEvent.json";

const { locale } = useI18n();

const jugendHouseEvent = computed(() => {
  return locale.value === "sv" ? jugendHouseEvent_sv : jugendHouseEvent_en;
});

// Begränsa description till 155 tecken
const seoDescription = jugendHouseEvent.value.history[0].text[0].slice(0, 155);

useHead({
  title: `${jugendHouseEvent.value.title} – Historiska Röster`,
  meta: [
    { name: "description", content: seoDescription },
    { name: "keywords", content: "Klevs gästgiveri, spökjakt, Historiska Röster, event" },
  ],
  link: [
    { rel: "canonical", href: "https://www.historiskaroster.se/PageJugendHouseEvent" }
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Event",
        "name": jugendHouseEvent.value.title,
        "description": jugendHouseEvent.value.history[0].text[0],
        "image": "https://www.historiskaroster.se" + jugendHouseEvent.value.image,
        "startDate": jugendHouseEvent.value.eventDate || "Okänt",
        "location": {
          "@type": "Place",
          "name": "Klevs gästgiveri",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Okänd",
            "addressCountry": "SE"
          }
        },
        "url": "https://www.historiskaroster.se/PageJugendHouseEvent"
      })
    }
  ]
});
</script>

<template>
  <div v-if="jugendHouseEvent">
    <PlaceHeader
      :title="jugendHouseEvent.title"
      :investigation="jugendHouseEvent.investigation"
      :date="jugendHouseEvent.investigationDate"
      :image="jugendHouseEvent.image"
    />
    <PlaceHistory 
      :content="jugendHouseEvent.history" 
    />
    <PlaceGallery
      :galleryTitle="jugendHouseEvent.galleryTitle"
      :gallery="jugendHouseEvent.gallery"
    />
    <PlaceReadMore
      :moreTitle="jugendHouseEvent.moreTitle"
      :more="jugendHouseEvent.more"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
