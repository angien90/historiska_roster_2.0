<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceReadMore from "../components/PlaceReadMore.vue";

import rydalsHerrgardEvent_sv from "../Locales/sv/RydalsHerrgardEvent.json";
import rydalsHerrgardEvent_en from "../Locales/en/RydalsHerrgardEvent.json";

const { locale } = useI18n();

const rydalsHerrgardEvent = computed(() => {
  return locale.value === "sv"
    ? rydalsHerrgardEvent_sv
    : rydalsHerrgardEvent_en;
});
</script>

<template>
  <div v-if="rydalsHerrgardEvent">
    <PlaceHeader
      :title="rydalsHerrgardEvent.title"
      :investigation="rydalsHerrgardEvent.investigation"
      :date="rydalsHerrgardEvent.investigationDate"
      :image="rydalsHerrgardEvent.image"
    />
    <PlaceHistory :content="rydalsHerrgardEvent.history" />
    <PlaceReadMore
      :moreTitle="rydalsHerrgardEvent.moreTitle"
      :more="rydalsHerrgardEvent.more"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
