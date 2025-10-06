<script setup>
import ContentItem from "./ContentItem.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const items = [
  {
    to: "/PageJugendHouseEvent",
    src: "/images/jugend_house/klevs_gastgiveri_event.webp",
    alt: "event_place5",
    label: "event_place5",
  },
  {
    to: "/PageSpirituellMassa",
    src: "/images/spirituellmassa/massan.webp",
    alt: "event_place4",
    label: "event_place4",
  },
  {
    to: "/PageRydalsHerrgardEvent",
    src: "/images/rydals_herrgard/spokjakt.webp",
    alt: "event_place3",
    label: "event_place3",
  },
  {
    to: "/PageMysterieMassan",
    src: "/images/mysterium_massan/silja_line.webp",
    alt: "event_place2",
    label: "event_place2",
  },
  {
    to: "/PageMysteriumMassan",
    src: "/images/mysterium_massan/Mysterium_massan.webp",
    alt: "event_place1",
    label: "event_place1",
  },
];
</script>

<template>
  <section class="section-style">
    <h2>{{ t("event_heading") }}</h2>
    <p>{{ t("event_subheading") }}</p>

    <div class="grid-style">
      <router-link v-for="item in items" :key="item.to" :to="item.to" class="card-style">
        <ContentItem>
          <template #icon>
            <img :src="item.src" :alt="t(item.alt)" class="card-img-style" width="250" height="180" loading="lazy"/>
          </template>
          <template #heading>{{ t(item.label) }}</template>
        </ContentItem>
      </router-link>
    </div>
  </section>
</template>
