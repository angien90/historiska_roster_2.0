<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceGhostStory from "../components/PlaceGhostStory.vue";
import PlaceHistoricalEvents from "../components/PlaceHistoricalEvents.vue";
import PlaceGallery from "../components/PlaceGallery.vue";
import PlaceResult from "../components/PlaceResult.vue";
import PlaceReadMore from "../components/PlaceReadMore.vue";

import huntersGrave_sv from "../Locales/sv/HuntersGrave.json";
import huntersGrave_en from "../Locales/en/HuntersGrave.json";
import PlaceReferences from "@/components/PlaceReferences.vue";

const { locale } = useI18n();

const huntersGrave = computed(() => {
  return locale.value === "sv" ? huntersGrave_sv : huntersGrave_en;
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
