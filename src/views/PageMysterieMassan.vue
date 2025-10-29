<script setup>
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceResult from "../components/PlaceResult.vue";
import PlaceReadMore from "../components/PlaceReadMore.vue";

import mysterieMassan_sv from "../Locales/sv/MysterieMassan.json";
import mysterieMassan_en from "../Locales/en/MysterieMassan.json";

const { locale } = useI18n();

const mysterieMassan = computed(() => {
  return locale.value === "sv" ? mysterieMassan_sv : mysterieMassan_en;
});

// Begränsa description till 155 tecken
const seoDescription = mysterieMassan.value.history[0].text[0].slice(0, 155);

useHead({
  title: `${mysterieMassan.value.title} – Historiska Röster`,
  meta: [
    { name: "description", content: seoDescription },
    { name: "keywords", content: "Mysterium Mässan, event, Historiska Röster" },
  ],
  link: [
    { rel: "canonical", href: "https://www.historiskaroster.se/PageMysterieMassan" }
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Event",
        "name": mysterieMassan.value.title,
        "description": mysterieMassan.value.history[0].text[0],
        "image": "https://www.historiskaroster.se" + mysterieMassan.value.image,
        "startDate": mysterieMassan.value.eventDate || "Okänt",
        "location": {
          "@type": "Place",
          "name": "Mysterium Mässan on Sea",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Okänd",
            "addressCountry": "SE"
          }
        },
        "url": "https://www.historiskaroster.se/PageMysterieMassan"
      })
    }
  ]
});
</script>

<template>
  <div v-if="mysterieMassan">
    <PlaceHeader
      :title="mysterieMassan.title"
      :investigation="mysterieMassan.investigation"
      :date="mysterieMassan.investigationDate"
      :image="mysterieMassan.image"
    />
    <PlaceHistory 
      :content="mysterieMassan.history" 
    />
    <PlaceResult
      :resultTitle="mysterieMassan.resultTitle"
      :videos="mysterieMassan.videos"
    />

    <PlaceReadMore
      :moreTitle="mysterieMassan.moreTitle"
      :more="mysterieMassan.more"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
