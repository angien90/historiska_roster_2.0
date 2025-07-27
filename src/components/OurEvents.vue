<script setup>
import ContentItem from './ContentItem.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <section class="completed-tasks">
    <h2>{{ t('event_heading') }}</h2>
    <p>{{ t('event_subheading') }}</p>

    <div class="content-wrapper">
        <router-link to="/PageRydalsHerrgardEvent" class="content">
        <ContentItem>
          <template #icon>
            <img src="/images/rydals_herrgard/spokjakt.webp" alt="Rydals Herrgård" width="125" height="125" />
          </template>
          <template #heading>{{ t('rydals_herrgard_event') }}</template>
        </ContentItem>
      </router-link>
    
        <router-link to="/PageMysterieMassan" class="content">
        <ContentItem>
          <template #icon>
            <img src="/images/mysterium_massan/silja_line.webp" alt="Silja Line" width="125" height="125" />
          </template>
          <template #heading>{{ t('mysterie_massan_on_sea') }}</template>
        </ContentItem>
      </router-link>

      <router-link to="/PageMysteriumMassan" class="content">
        <ContentItem>
          <template #icon>
            <img src="/images/mysterium_massan/mysterium_massan.webp" alt="Rankhyttans Herrgård" width="125" height="125" />
          </template>
          <template #heading>{{ t('mysterium_massan') }}</template>
        </ContentItem>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.completed-tasks {
  max-width: 100%;
  margin: 20px auto;
  padding: 2rem;
  background-color: #252525;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.08);
  color: white;
}

.content-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-bottom: 20px;
}

.content {
  background-color: #1a1a1a;
  padding: 1rem;
  border-radius: 12px;
  flex: 1 1 250px;
  max-width: 300px;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.05);
  text-align: center;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.content:hover {
  transform: scale(1.03);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.15);
}

.content img {
  width: 120%;
  max-width: 250px;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.08);
}

@media (min-width: 768px) {
  .content img {
    width: 100%;
  }
}
</style>
