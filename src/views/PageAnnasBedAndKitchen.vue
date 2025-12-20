<script setup>
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "@/components/PlaceHeader.vue";
import PlaceHistory from "@/components/PlaceHistory.vue";
import PlaceGallery from "@/components/PlaceGallery.vue";
import PlaceResult from "@/components/PlaceResult.vue";
import PlaceReadMore from "@/components/PlaceReadMore.vue";
import PlaceReferences from "@/components/PlaceReferences.vue";

import annas_sv from "@/Locales/sv/AnnasBedAndKitchen.json";
import annas_en from "@/Locales/en/AnnasBedAndKitchen.json";

const { locale } = useI18n();

const annas = computed(() =>
  locale.value === "sv" ? annas_sv : annas_en
);

// SEO-beskrivning max ~155 tecken
const seoDescription = annas.value.history[0].text[0].slice(0, 155);

useHead({
  title: `${annas.value.title} – Historiska Röster`,
  meta: [
    { name: "description", content: seoDescription },
    {
      name: "keywords",
      content:
        "Annas Bed & Kitchen, Johnssons gård, spökhus, hemsökt plats, Historiska Röster",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.historiskaroster.se/annas-bed-and-kitchen",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: annas.value.title,
        description: annas.value.history[0].text[0],
        image: "https://www.historiskaroster.se" + annas.value.image,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Varberg",
          addressCountry: "SE",
        },
        url: "https://www.historiskaroster.se/annas-bed-and-kitchen",
      }),
    },
  ],
});
</script>

<template>
  <div v-if="annas">
    <PlaceHeader
      :title="annas.title"
      :investigation="annas.investigation"
      :date="annas.investigationDate"
      :image="annas.image"
    />

    <PlaceHistory :content="annas.history" />

    <PlaceGallery
      :galleryTitle="annas.galleryTitle"
      :gallery="annas.gallery"
    />

    <PlaceResult
      :resultTitle="annas.resultTitle"
      :results="annas.results"
    />

    <PlaceReadMore
      :moreTitle="annas.moreTitle"
      :more="annas.more"
    />

    <PlaceReferences
      :more-title="annas.referencesTitle"
      :sources="annas.sources"
    />
  </div>

  <div v-else>
    <p>Laddar platsinformation…</p>
  </div>
</template>
