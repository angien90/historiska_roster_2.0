<script setup>
defineProps({
  resultTitle: {
    type: String,
    required: true
  },
  results: {
    type: Array,
    required: true
  },
  videos: {
    type: Array,
    required: false
  },
  videoSectionTitle: {
    type: String,
    required: false
  }
});
</script>

<template>
  <section class="section">
    <h2>{{ resultTitle }}</h2>

    <div v-for="result in results" :key="result.title">
      <h3>{{ result.title }}</h3>
      <div v-for="(paragraph, i) in result.text" :key="i">
      <p>{{ paragraph }}</p>
    </div>
    </div>

    <!-- Filmsektion -->
    <div v-if="videos && videos.length" class="video-section">
      <h3>{{ videoSectionTitle }}</h3>
      <article v-for="(video, index) in videos" :key="index" class="video-wrapper">
        <iframe v-if="video.includes('youtube.com') || video.includes('youtu.be')" :src="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <video v-else controls>
          <source :src="video" type="video/mp4" />
          Din webbläsare har inte stöd för videouppspelning.
        </video>
      </article>
          </div>
  </section>
</template>

<style scoped>
.video-section {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.video-wrapper {
  position: relative;
  width: 100%;
  max-width: 320px; 
  aspect-ratio: 16 / 9;
}

.video-wrapper iframe,
.video-wrapper video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
}

@media (min-width: 768px) {
  .video-wrapper {
    max-width: 560px;
  }
}

@media (min-width: 1024px) {
  .video-wrapper {
    max-width: 600px;
  }
}
</style>