<script setup>
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceGhostStory from "../components/PlaceGhostStory.vue";
import PlaceGallery from "../components/PlaceGallery.vue";
import PlaceResult from "../components/PlaceResult.vue";
import PlaceReadMore from "../components/PlaceReadMore.vue";
import PlaceReferences from "../components/PlaceReferences.vue";

import Familjetrad from "/images/Frammegarden/Familjetrad_frammegarden.webp";

import frammegarden_sv from "../Locales/sv/Frammegarden.json"; 
import frammegarden_en from "../Locales/en/Frammegarden.json"; 

const { locale } = useI18n();

const frammegarden = computed(() => {
  return locale.value === "sv" ? frammegarden_sv : frammegarden_en;
});

const frammegardenImage = {
  src: Familjetrad,
  alt: frammegarden.value.historyImage?.alt || "Frammegårdens släktträd",
};

// Begränsa description till 155 tecken
const seoDescription = frammegarden.value.history[0].text[0].slice(0, 155);

// Head + JSON-LD
useHead({
  title: `${frammegarden.value.title} – Historiska Röster`,
  meta: [
    { name: "description", content: seoDescription },
    { name: "keywords", content: "Frammegården, Frammegarden, spökhus Värmland, hemsökt hus, Historiska Röster" },
  ],
  link: [
    { rel: "canonical", href: "https://www.historiskaroster.se/PageFrammegarden" }
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": frammegarden.value.title,
        "description": frammegarden.value.history[0].text[0],
        "image": "https://www.historiskaroster.se" + frammegarden.value.image,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Skillingmark",
          "addressCountry": "SE"
        },
        "url": "https://www.historiskaroster.se/PageFrammegarden"
      })
    }
  ]
});
</script>

<template>
  <div v-if="frammegarden">
    <PlaceHeader
      :title="frammegarden.title"
      :investigation="frammegarden.investigation"
      :date="frammegarden.investigationDate"
      :image="frammegarden.image"
    />
    <PlaceHistory 
      :content="frammegarden.history" 
      :image="frammegardenImage" 
    />
    <PlaceGhostStory
      :storyTitle="frammegarden.storyTitle"
      :stories="frammegarden.stories"
    />
    <PlaceGallery
      :galleryTitle="frammegarden.galleryTitle"
      :gallery="frammegarden.gallery"
    />
    <PlaceResult
      :resultTitle="frammegarden.resultTitle1"
      :videoSectionTitle="frammegarden.videoSectionTitle1"
      :results="frammegarden.results1"
      :videos="frammegarden.videos1"
    />
    <PlaceResult
      :resultTitle="frammegarden.resultTitle2"
      :videoSectionTitle="frammegarden.videoSectionTitle2"
      :results="frammegarden.results2"
      :videos="frammegarden.videos2"
    />
    <PlaceReadMore
      :moreTitle="frammegarden.moreTitle"
      :more="frammegarden.more"
    />
    <PlaceReferences
      :more-title="frammegarden.referencesTitle"
      :sources="frammegarden.sources"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
