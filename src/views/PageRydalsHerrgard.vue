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

import rydalsHerrgard_sv from "../Locales/sv/RydalsHerrgard.json";
import rydalsHerrgard_en from "../Locales/en/RydalsHerrgard.json";

const { locale } = useI18n();

const rydalsHerrgard = computed(() => {
  return locale.value === "sv" ? rydalsHerrgard_sv : rydalsHerrgard_en;
});
</script>

<template>
  <div v-if="rydalsHerrgard">
    <PlaceHeader
      :title="rydalsHerrgard.title"
      :investigation="rydalsHerrgard.investigation"
      :date="rydalsHerrgard.investigationDate"
      :image="rydalsHerrgard.image"
    />
    <PlaceHistory :content="rydalsHerrgard.history" />
    <PlaceGhostStory
      :storyTitle="rydalsHerrgard.storyTitle"
      :stories="rydalsHerrgard.stories"
    />
    <PlaceHistoricalEvents
      :eventTitle="rydalsHerrgard.eventTitle"
      :events="rydalsHerrgard.events"
    />
    <PlaceGallery
      :galleryTitle="rydalsHerrgard.galleryTitle"
      :gallery="rydalsHerrgard.gallery"
    />
    <PlaceResult
      :resultTitle="rydalsHerrgard.resultTitle"
      :videoSectionTitle="rydalsHerrgard.videoSectionTitle"
      :results="rydalsHerrgard.results"
      :videos="rydalsHerrgard.videos"
    />
    <PlaceReadMore
      :moreTitle="rydalsHerrgard.moreTitle"
      :more="rydalsHerrgard.more"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
