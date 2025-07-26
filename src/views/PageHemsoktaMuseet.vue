<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import PlaceHeader from '../components/PlaceHeader.vue'
import PlaceHistory from '../components/PlaceHistory.vue'
import PlaceGhostStory from '../components/PlaceGhostStory.vue'
import PlaceResult from '../components/PlaceResult.vue'
import PlaceReadMore from '../components/PlaceReadMore.vue'

import hemsoktaMuseet_sv from '../Locales/sv/HemsoktaMuseet.json'
import hemsoktaMuseet_en from '../Locales/en/HemsoktaMuseet.json'

const { locale } = useI18n();

const hemsoktaMuseet = computed(() => {
  return locale.value === 'sv' ? hemsoktaMuseet_sv : hemsoktaMuseet_en;
});
</script>

<template>
  <div v-if="hemsoktaMuseet">
    <PlaceHeader
      :title="hemsoktaMuseet.title"
      :investigation="hemsoktaMuseet.investigation"
      :date="hemsoktaMuseet.investigationDate"
      :image="hemsoktaMuseet.image"
    />
    <PlaceHistory
      :content="hemsoktaMuseet.history"
      :image="hemsoktaMuseetImage"
    />
    <PlaceGhostStory 
      :storyTitle="hemsoktaMuseet.storyTitle"
      :stories="hemsoktaMuseet.stories"
    />
    <PlaceResult 
      :resultTitle="hemsoktaMuseet.resultTitle"
      :videoSectionTitle="hemsoktaMuseet.videoSectionTitle"
      :results="hemsoktaMuseet.results" 
      :videos="hemsoktaMuseet.videos" 
    />
    <PlaceReadMore 
      :moreTitle="hemsoktaMuseet.moreTitle"
      :more="hemsoktaMuseet.more" 
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>