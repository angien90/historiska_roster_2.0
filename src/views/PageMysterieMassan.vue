<script setup>
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
</script>

<template>
  <div v-if="mysterieMassan">
    <PlaceHeader
      :title="mysterieMassan.title"
      :investigation="mysterieMassan.investigation"
      :date="mysterieMassan.investigationDate"
      :image="mysterieMassan.image"
    />
    <PlaceHistory :content="mysterieMassan.history" />
    <PlaceResult
      :resultTitle="mysterieMassan.resultTitle"
      :videoSectionTitle="mysterieMassan.videoSectionTitle"
      :results="mysterieMassan.results"
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
