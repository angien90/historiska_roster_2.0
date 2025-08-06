<script setup>
import { onMounted, watch } from "vue";

const props = defineProps({
  resultTitle: String,
  results: Array,
  videos: Array,
  videoSectionTitle: String,
});

function isInstagram(url) {
  return typeof url === "string" && url.includes("instagram.com");
}

// Funktion för att ladda Instagram embed.js
function loadInstagramEmbed() {
  if (window.instgrm) {
    window.instgrm.Embeds.process();
  } else {
    const script = document.createElement("script");
    script.setAttribute("src", "//www.instagram.com/embed.js");
    script.async = true;
    script.onload = () => {
      window.instgrm.Embeds.process();
    };
    document.body.appendChild(script);
  }
}

// Kör när komponenten monteras
onMounted(() => {
  loadInstagramEmbed();
});

// Kör när videos ändras
watch(() => props.videos, () => {
  loadInstagramEmbed();
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

    <div v-if="videos?.length" class="video-section">
      <h3>{{ videoSectionTitle }}</h3>
      <article v-for="(video, index) in videos" :key="index" :class="['video-wrapper', { 'instagram-wrapper': isInstagram(video.url ?? video) }]">
  
        <!-- Instagram Reel -->
        <div v-if="isInstagram(video.url ?? video)">
          <blockquote class="instagram-media" :data-instgrm-permalink="video.url ?? video" data-instgrm-version="14" style="background:#FFF; border:0; margin:1rem auto; max-width:540px; width:100%;"></blockquote>
        </div>

        <!-- YouTube -->
        <iframe v-else-if="(video.url ?? video).includes('youtube.com') || (video.url ?? video).includes('youtu.be')" :src="video.url ?? video" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>

        <!-- Lokal mp4 eller annat -->
        <video v-else controls loading="lazy">
          <source :src="video.url ?? video" type="video/mp4" />
          Din webbläsare har inte stöd för videouppspelning.
        </video>
      </article>
    </div>
  </section>
</template>

<style scoped>
.video-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.video-wrapper {
  position: relative;
  width: 100%;
  max-width: 600px;
  aspect-ratio: 16 / 9;
  margin-bottom: 2rem;
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

/* Speciell styling för Instagram - ingen absolut position, auto höjd */
.instagram-wrapper {
  position: static; 
  aspect-ratio: auto; 
  padding: 0;
}

/* Instagram blockquote får max-bredd och margin */
.instagram-wrapper blockquote.instagram-media {
  max-width: 600px;
  margin: 0 auto 1.5rem;
  width: 100% !important;
  min-height: 400px; 
}

@media (min-width: 768px) {
  .video-wrapper {
    max-width: 560px;
  }

  .instagram-wrapper blockquote.instagram-media {
    max-width: 560px;
}
}

@media (min-width: 1024px) {
  .video-wrapper {
    max-width: 600px;
  }

  .instagram-wrapper blockquote.instagram-media {
    max-width: 600px;
  }
}
</style>
