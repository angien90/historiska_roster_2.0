<script setup>
defineProps({
  galleryTitle: {
    type: String,
    required: true
  },
  gallery: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <section class="section">
    <h2>{{ galleryTitle }}</h2>
    <div class="gallery">
      <div v-for="(item, index) in gallery" :key="index" class="image-container">
        <img :src="item.src" :alt="item.alt" />
        <figcaption v-if="item.caption">{{ item.caption }}</figcaption>
      </div>
    </div>
  </section>
</template>


<style scoped>
.gallery {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
}

img {
  width: 100%;
  height: auto;
  max-width: 400px;
  border-radius: 6px;
}

figcaption {
  text-align: center;
}

/* Tablet och uppåt: flera kolumner med jämn höjd */
@media (min-width: 768px) {
  .gallery {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem 1.5rem;
  }

  .image-container {
    /* Sätt max-bredd så att flera bilder får plats i rad, t.ex. 3 per rad */
    flex: 1 1 calc(33.333% - 1.5rem);
    box-sizing: border-box;
    height: auto;
  }

  img {
    width: auto;
    height: 300px;
    object-fit: cover;
  }
}
</style>