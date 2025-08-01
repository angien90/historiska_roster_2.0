<script setup>
import OurReviewsItem from './OurReviewsItem.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t, tm } = useI18n();
const reviews = computed(() => tm('reviews'));
</script>

<template>
  <section class="reviews-section">
    <h2 class="section-title">{{ t('reviews_heading') }}</h2>
    <div class="content-wrapper">
      <OurReviewsItem
        v-for="(review, index) in reviews"
        :key="index"
        v-bind="review"
      />
    </div>
  </section>
</template>

<style scoped>
.reviews-section {
  max-width: 100%;
  margin: 20px auto;
  padding: 2rem;
  background-color: #252525;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.08);
  color: white;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.content-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  flex-direction: column; 
}

@media (min-width: 768px) {
  .content-wrapper {
    flex-direction: row; 
  }
}
</style>