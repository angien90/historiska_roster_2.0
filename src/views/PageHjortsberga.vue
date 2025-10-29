<script setup>
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceResult from "../components/PlaceResult.vue";
import PlaceReadMore from "../components/PlaceReadMore.vue";

import hjortsberga_sv from "../Locales/sv/Hjortsberga.json";
import hjortsberga_en from "../Locales/en/Hjortsberga.json";

const { locale } = useI18n();

const hjortsberga = computed(() => {
  return locale.value === "sv" ? hjortsberga_sv : hjortsberga_en;
});


// Begränsa description till 155 tecken
const seoDescription = hjortsberga.value.history[0].text[0].slice(0, 155);

useHead({
  title: `${hjortsberga.value.title} – Historiska Röster`,
  meta: [
    { name: "description", content: seoDescription },
    { name: "keywords", content: "Hjortsberga Prästgård, Historiska Röster, spökhistoria" },
  ],
  link: [
    { rel: "canonical", href: "https://www.historiskaroster.se/PageHjortsberga" }
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": hjortsberga.value.title,
        "description": hjortsberga.value.history[0].text[0],
        "image": "https://www.historiskaroster.se" + hjortsberga.value.image,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hjortsberga",
          "addressCountry": "SE"
        },
        "url": "https://www.historiskaroster.se/PageHjortsberga"
      })
    }
  ]
});
</script>

<template>
  <div v-if="hjortsberga">
    <PlaceHeader
      :title="hjortsberga.title"
      :investigation="hjortsberga.investigation"
      :date="hjortsberga.investigationDate"
      :image="hjortsberga.image"
    />
    <PlaceHistory 
      :content="hjortsberga.history"  
    />
    <PlaceResult
      :resultTitle="hjortsberga.resultTitle"
      :videoSectionTitle="hjortsberga.videoSectionTitle"
      :results="hjortsberga.results"
      :videos="hjortsberga.videos"
    />
    <PlaceReadMore
      :moreTitle="hjortsberga.moreTitle"
      :more="hjortsberga.more"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
