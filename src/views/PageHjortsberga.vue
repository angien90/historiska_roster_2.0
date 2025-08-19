<script setup>
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
