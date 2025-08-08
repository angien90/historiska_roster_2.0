<script setup>
import ContentItem from "./ContentItem.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const items = [
  { to: "/PageRydalsHerrgard", 
    src: "/images/rydals_herrgard/rydals_herrgard.webp", 
    alt: "Rydals Herrgård", 
    label: "rydals" 
  },
  { to: "/PageRankhyttan", 
    src: "/images/rankhyttan/rankhyttan.webp", 
    alt: "Rankhyttans Herrgård", 
    label: "rankhyttan" 
  },
  { to: "/PageGathenhielmskaHuset", 
    src: "/images/gathenhielmska_huset/Gathenhielmska_huset.webp", 
    alt: "Gathenhielmska Huset", 
    label: "gathenhielmska" 
  },
  { to: "/PageHemsoktaMuseet", 
    src: "/images/hemsokta_museet/Hemsokta_museet.webp", 
    alt: "Hemsökta museet", 
    label: "hemsokta" 
  },
  { to: "/PageHjortsberga", 
    src: "/images/hjortsberga/Hjortsberga.webp", 
    alt: "Hjortsberga Prästgård", 
    label: "hjortsberga" 
  },
  { to: "/PageFrammegarden", 
    src: "/images/Frammegarden/Frammegarden.webp", 
    alt: "Frammegården",  
    label: "frammegarden" 
  },
];
</script>

<template>
  <section class="section-style">
    <h2>{{ t("investigations_heading") }}</h2>
    <p>
      {{ t("investigations_subheading") }}. {{ t("learn_subheading2") }}
      <router-link to="/MapView" class="link">
        {{ t("learn_subheading3") }}
      </router-link>
    </p>

    <div class="grid-style">
      <router-link v-for="item in items" :key="item.to" :to="item.to" class="card-style">
        <ContentItem>
          <template #icon>
            <img :src="item.src" :alt="item.alt" class="card-img-style" width="250" height="180" loading="lazy" />
          </template>
          <template #heading>{{ t(item.label) }}</template>
        </ContentItem>
      </router-link>
    </div>
  </section>
</template>

<style scoped>

</style>
