<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import PlaceHeader from '../components/PlaceHeader.vue'
import PlaceHistory from '../components/PlaceHistory.vue'
import PlaceGhostStory from '../components/PlaceGhostStory.vue'
import PlaceGallery from '../components/PlaceGallery.vue'
import PlaceResult from '../components/PlaceResult.vue'
import PlaceReadMore from '../components/PlaceReadMore.vue'

import Familjetrad from '/images/Frammegarden/Familjetrad_frammegarden.webp'

import frammegarden_sv from '../Locales/sv/Frammegarden.json'
import frammegarden_en from '../Locales/en/Frammegarden.json'

const { locale } = useI18n();

const frammegarden = computed(() => {
  return locale.value === 'sv' ? frammegarden_sv : frammegarden_en;
});

const frammegardenImage = {
  src: Familjetrad,
  alt: frammegarden.value.historyImage.alt || 'Frammegårdens family tree'
};
</script>

<template>
  <div v-if="frammegarden">
    <PlaceHeader
      :title="frammegarden.title"
      :investigation="frammegarden.investigation"
      :date="frammegarden.investigationDate"
      :image="frammegarden.image"
    />
    <PlaceHistory
      :content="frammegarden.history"
      :image="frammegardenImage"
    />
    <PlaceGhostStory 
      :storyTitle="frammegarden.storyTitle"
      :stories="frammegarden.stories"
    />
    <PlaceGallery 
      :galleryTitle="frammegarden.galleryTitle" 
      :gallery="frammegarden.gallery" 
    />
    <PlaceResult 
      :resultTitle="frammegarden.resultTitle"
      :videoSectionTitle="frammegarden.videoSectionTitle"
      :results="frammegarden.results" 
      :videos="frammegarden.videos" 
    />
    <PlaceReadMore 
      :moreTitle="frammegarden.moreTitle"
      :more="frammegarden.more" 
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
