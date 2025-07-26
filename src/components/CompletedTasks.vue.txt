<script setup>
import ContentItem from './ContentItem.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <section class="completed-tasks">
    <h2>{{ t('investigations_heading') }}</h2>
    <p>{{ t('investigations_subheading') }}. {{ t('learn_subheading2') }}
      <router-link to="/MapView" class="link"> {{ t('learn_subheading3') }}</router-link>
    </p>

    <div class="content-wrapper">
      <router-link to="/PageRydalsHerrgard" class="content">
        <ContentItem>
          <template #icon>
            <img src="../assets/images/rydals_herrgard/rydals_herrgard.webp" alt="Rydals Herrgård" width="125" height="125" />
          </template>
          <template #heading>{{ t('rydals') }}</template>
        </ContentItem>
      </router-link>

      <router-link to="/PageRankhyttan" class="content">
        <ContentItem>
          <template #icon>
            <img src="../assets/images/rankhyttan/rankhyttan.webp" alt="Rankhyttans Herrgård" width="125" height="125" />
          </template>
          <template #heading>{{ t('rankhyttan') }}</template>
        </ContentItem>
      </router-link>

      <router-link to="/PageGathenhielmskaHuset" class="content">
        <ContentItem>
          <template #icon>
            <img src="../assets/images/gathenhielmska_huset/Gathenhielmska_huset.webp" alt="Gathenhielmska Huset" width="125" height="125" />
          </template>
          <template #heading>{{ t('gathenhielmska') }}</template>
        </ContentItem>
      </router-link>

      <router-link to="/PageHemsoktaMuseet" class="content">
        <ContentItem>
          <template #icon>
            <img src="../assets/images/hemsokta_museet/Hemsokta_museet.webp" alt="Hemsökta museet" width="125" height="125" />
          </template>
          <template #heading>{{ t('hemsokta') }}</template>
        </ContentItem>
      </router-link>

      <router-link to="/PageHjortsberga" class="content">
        <ContentItem>
          <template #icon>
            <img src="../assets/images/hjortsberga/Hjortsberga.webp" alt="Hjortsberga Prästgård" width="125" height="125" />
          </template>
          <template #heading>{{ t('hjortsberga') }}</template>
        </ContentItem>
      </router-link>

      <router-link to="/PageFrammegarden" class="content">
        <ContentItem>
          <template #icon>
            <img src="../assets/images/frammegarden/Frammegarden.webp" alt="Frammegården" width="125" height="125" />
          </template>
          <template #heading>{{ t('frammegarden') }}</template>
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
  background-color: #111;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.08);
  color: white;
}

.content-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
}

.content {
  background-color: #1a1a1a;
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
  width: 100%;
  max-width: 250px;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  margin: 0 auto 1rem auto;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.08);
}
</style>
