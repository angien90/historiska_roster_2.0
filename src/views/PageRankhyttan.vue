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

import rankhyttan_sv from "../Locales/sv/Rankhyttan.json";
import rankhyttan_en from "../Locales/en/Rankhyttan.json";

const { locale } = useI18n();

const rankhyttan = computed(() => {
  return locale.value === "sv" ? rankhyttan_sv : rankhyttan_en;
});
</script>

<template>
  <div v-if="rankhyttan">
    <PlaceHeader
      :title="rankhyttan.title"
      :investigation="rankhyttan.investigation"
      :date="rankhyttan.investigationDate"
      :image="rankhyttan.image"
    />
    <PlaceHistory 
      :content="rankhyttan.history" 
      />
    <PlaceGhostStory
      :storyTitle="rankhyttan.storyTitle"
      :stories="rankhyttan.stories"
    />
    <PlaceHistoricalEvents
      :eventTitle="rankhyttan.eventTitle"
      :events="rankhyttan.events"
    />
    <PlaceGallery
      :galleryTitle="rankhyttan.galleryTitle"
      :gallery="rankhyttan.gallery"
    />
    <PlaceResult
      :resultTitle="rankhyttan.resultTitle"
      :videoSectionTitle="rankhyttan.videoSectionTitle"
      :results="rankhyttan.results"
      :videos="rankhyttan.videos"
    />
    <PlaceReadMore :moreTitle="rankhyttan.moreTitle" :more="rankhyttan.more" />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
