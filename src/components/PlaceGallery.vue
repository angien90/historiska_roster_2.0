<script setup>
defineProps({
  galleryTitle: {
    type: String,
    required: true,
  },
  gallery: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="section">
    <h2>{{ galleryTitle }}</h2>
    <div class="gallery">
      <div v-for="(item, index) in gallery" :key="index" class="image-container text-center">
        <img :src="item.src" :alt="item.alt" width="250" height="180" class="responsive-img img-rounded img-hover-zoom" loading="lazy"/>
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
  max-width: 100%;
  margin-top: 20px;
}

.responsive-img {
  margin-top: 0;
  margin-bottom: 0;
}

/* För större skärmar */
@media (min-width: 768px) {
  .gallery {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem 1.5rem;
  }

  figcaption {
  font-size: 1.5rem;
}

  .image-container {
    flex: 1 1 calc(33.333% - 1.5rem);
    box-sizing: border-box;
  }

  img {
    width: auto;
    height: 300px;
    object-fit: cover;
  }
}
</style>
