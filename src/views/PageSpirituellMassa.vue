<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceResult from "../components/PlaceResult.vue";

import spirituellaMassan_sv from "../Locales/sv/SpirituellaMassan.json";
import spirituellaMassan_en from "../Locales/en/SpirituellaMassan.json";

const { locale } = useI18n();

const spirituellaMassan = computed(() => {
  return locale.value === "sv" ? spirituellaMassan_sv : spirituellaMassan_en;
});
</script>

<template>
  <div v-if="spirituellaMassan">
    <PlaceHeader
      :title="spirituellaMassan.title"
      :investigation="spirituellaMassan.investigation"
      :date="spirituellaMassan.investigationDate"
      :image="spirituellaMassan.image"
    />
    <PlaceHistory
      :content="spirituellaMassan.history"
      :image="spirituellaMassanImage"
    />
    <PlaceResult
      :resultTitle="spirituellaMassan.resultTitle"
      :videoSectionTitle="spirituellaMassan.videoSectionTitle"
      :results="spirituellaMassan.results"
      :videos="spirituellaMassan.videos"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>

<style scoped>
spirituellaMassan.image {
  width: 20%;
}
</style>
