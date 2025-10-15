<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceGallery from "@/components/PlaceGallery.vue";
import PlaceResult from "../components/PlaceResult.vue";
import PlaceReadMore from "../components/PlaceReadMore.vue";
import PlaceReferences from "@/components/PlaceReferences.vue";

import sonjasVeranda_sv from "../Locales/sv/SonjasVeranda.json";
import sonjasVeranda_en from "../Locales/en/SonjasVeranda.json";

const { locale } = useI18n();

const sonjasVeranda = computed(() => {
  return locale.value === "sv" ? sonjasVeranda_sv : sonjasVeranda_en;
});
</script>

<template>
  <div v-if="sonjasVeranda">
    <PlaceHeader
      :title="sonjasVeranda.title"
      :investigation="sonjasVeranda.investigation"
      :date="sonjasVeranda.investigationDate"
      :image="sonjasVeranda.image"
    />
    <PlaceHistory 
      :content="sonjasVeranda.history"  
    />
    <PlaceGallery
      :galleryTitle="sonjasVeranda.galleryTitle"
      :gallery="sonjasVeranda.gallery"
    />
    <PlaceResult
      :resultTitle="sonjasVeranda.resultTitle"
      :videoSectionTitle="sonjasVeranda.videoSectionTitle"
      :results="sonjasVeranda.results"
      :videos="sonjasVeranda.videos"
    />
    <PlaceReadMore
      :moreTitle="sonjasVeranda.moreTitle"
      :more="sonjasVeranda.more"
    />
    <PlaceReferences
      :more-title="sonjasVeranda.referencesTitle"
      :sources="sonjasVeranda.sources"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
