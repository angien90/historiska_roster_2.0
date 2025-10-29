<script setup>
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceGhostStory from "../components/PlaceGhostStory.vue";
import PlaceResult from "../components/PlaceResult.vue";
import PlaceReadMore from "../components/PlaceReadMore.vue";

import hemsoktaMuseet_sv from "../Locales/sv/HemsoktaMuseet.json";
import hemsoktaMuseet_en from "../Locales/en/HemsoktaMuseet.json";

const { locale } = useI18n();

const hemsoktaMuseet = computed(() => {
  return locale.value === "sv" ? hemsoktaMuseet_sv : hemsoktaMuseet_en;
});

const hemsoktaMuseetImage = {
  src: "/images/hemsokta/museet.webp",
  alt: hemsoktaMuseet.value.historyImage?.alt || "Hemsökta Museet"
};

// Begränsa description till 155 tecken
const seoDescription = hemsoktaMuseet.value.history[0].text[0].slice(0, 155);

useHead({
  title: `${hemsoktaMuseet.value.title} – Historiska Röster`,
  meta: [
    { name: "description", content: seoDescription },
    { name: "keywords", content: "Hemsökta Museet, spökhus, Historiska Röster, hemsökt hus" },
  ],
  link: [
    { rel: "canonical", href: "https://www.historiskaroster.se/PageHemsoktaMuseet" }
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": hemsoktaMuseet.value.title,
        "description": hemsoktaMuseet.value.history[0].text[0],
        "image": "https://www.historiskaroster.se" + hemsoktaMuseetImage.src,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Göteborg",
          "addressCountry": "SE"
        },
        "url": "https://www.historiskaroster.se/PageHemsoktaMuseet"
      })
    }
  ]
});
</script>


<template>
  <div v-if="hemsoktaMuseet">
    <PlaceHeader
      :title="hemsoktaMuseet.title"
      :investigation="hemsoktaMuseet.investigation"
      :date="hemsoktaMuseet.investigationDate"
      :image="hemsoktaMuseet.image"
    />
    <PlaceHistory
      :content="hemsoktaMuseet.history"
    />
    <PlaceGhostStory
      :storyTitle="hemsoktaMuseet.storyTitle"
      :stories="hemsoktaMuseet.stories"
    />
    <PlaceResult
      :resultTitle="hemsoktaMuseet.resultTitle"
      :videoSectionTitle="hemsoktaMuseet.videoSectionTitle"
      :results="hemsoktaMuseet.results"
      :videos="hemsoktaMuseet.videos"
    />
    <PlaceReadMore
      :moreTitle="hemsoktaMuseet.moreTitle"
      :more="hemsoktaMuseet.more"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
