<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceResult from "../components/PlaceResult.vue";
import PlaceReadMore from "../components/PlaceReadMore.vue";
import PlaceReferences from "@/components/PlaceReferences.vue";

import jugendHouse_sv from "../Locales/sv/JugendHouse.json";

const { locale } = useI18n();

const jugendHouse = computed(() => {
  return locale.value === "sv" ? jugendHouse_sv : jugendHouse_en;
});
</script>

<template>
  <div v-if="jugendHouse">
    <PlaceHeader
      :title="jugendHouse.title"
      :investigation="jugendHouse.investigation"
      :date="jugendHouse.investigationDate"
      :image="jugendHouse.image"
    />
    <PlaceHistory 
      :content="jugendHouse.history" 
    />  
    <PlaceResult
      :resultTitle="jugendHouse.resultTitle"
      :videoSectionTitle="jugendHouse.videoSectionTitle"
      :results="jugendHouse.results"
      :videos="jugendHouse.videos"
    />
    <PlaceReadMore
      :moreTitle="jugendHouse.moreTitle"
      :more="jugendHouse.more"
    />
    <PlaceReferences
      :more-title="jugendHouse.referencesTitle"
      :sources="jugendHouse.sources"
    />
    </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
