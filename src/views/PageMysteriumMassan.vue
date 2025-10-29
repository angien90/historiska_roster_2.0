<script setup>
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceResult from "../components/PlaceResult.vue";
import PlaceReadMore from "../components/PlaceReadMore.vue";

import mysteriumMassan_sv from "../Locales/sv/MysteriumMassan.json";
import mysteriumMassan_en from "../Locales/en/MysteriumMassan.json";

const { locale } = useI18n();

const mysteriumMassan = computed(() => {
  return locale.value === "sv" ? mysteriumMassan_sv : mysteriumMassan_en;
});

const seoDescription = mysteriumMassan.value.history[0].text[0].slice(0, 155);

useHead({
  title: `Mysterium Mässan – Historiska Röster`,
  meta: [
    { name: "description", content: seoDescription },
    { name: "keywords", content: "Mysterium Mässan, Historiska Röster, event" }
  ],
  link: [
    { rel: "canonical", href: "https://www.historiskaroster.se/PageMysteriumMassan" }
  ]
});
</script>

<template>
  <div v-if="mysteriumMassan">
    <PlaceHeader
      :title="mysteriumMassan.title"
      :investigation="mysteriumMassan.investigation"
      :date="mysteriumMassan.investigationDate"
      :image="mysteriumMassan.image"
    />
    <PlaceHistory 
      :content="mysteriumMassan.history" 
    />
    <PlaceResult
      :resultTitle="mysteriumMassan.resultTitle"
      :videos="mysteriumMassan.videos"
    />
    <PlaceReadMore
      :moreTitle="mysteriumMassan.moreTitle"
      :more="mysteriumMassan.more"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
