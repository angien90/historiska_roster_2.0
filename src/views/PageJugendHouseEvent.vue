<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceReadMore from "../components/PlaceReadMore.vue";

import jugendHouseEvent_sv from "../Locales/sv/JugendHouseEvent.json";
import jugendHouseEvent_en from "../Locales/en/JugendHouseEvent.json";

const { locale } = useI18n();

const jugendHouseEvent = computed(() => {
  return locale.value === "sv"
    ? jugendHouseEvent_sv
    : jugendHouseEvent_en;
});
</script>

<template>
  <div v-if="jugendHouseEvent">
    <PlaceHeader
      :title="jugendHouseEvent.title"
      :investigation="jugendHouseEvent.investigation"
      :date="jugendHouseEvent.investigationDate"
      :image="jugendHouseEvent.image"
    />
    <PlaceHistory 
      :content="jugendHouseEvent.history" 
    />
    <PlaceReadMore
      :moreTitle="jugendHouseEvent.moreTitle"
      :more="jugendHouseEvent.more"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
