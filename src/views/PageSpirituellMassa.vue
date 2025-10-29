<script setup>
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceResult from "../components/PlaceResult.vue";
import PlaceReadMore from "../components/PlaceReadMore.vue";

import Har_ar_vi from "/images/spirituellmassa/Har_ar_vi.jpg";

import spirituellaMassan_sv from "../Locales/sv/SpirituellaMassan.json";
import spirituellaMassan_en from "../Locales/en/SpirituellaMassan.json";

const { locale } = useI18n();

const spirituellaMassan = computed(() => {
  return locale.value === "sv" ? spirituellaMassan_sv : spirituellaMassan_en;
});

// SEO-beskrivning (begränsad till 155 tecken)
const seoDescription = spirituellaMassan.value.history[0].text[0].slice(0, 155);

// Head + JSON-LD
useHead({
  title: `${spirituellaMassan.value.title} – Historiska Röster`,
  meta: [
    { name: "description", content: seoDescription },
    {
      name: "keywords",
      content:
        "Spirituella Mässan, andlig mässa, event, Historiska Röster, medium, andlighet",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.historiskaroster.se/spirituell-massa",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Event",
        "name": spirituellaMassan.value.title,
        "description": spirituellaMassan.value.history[0].text[0],
        "image":
          "https://www.historiskaroster.se" +
          (spirituellaMassan.value.image || "/images/spirituellmassa/Har_ar_vi.jpg"),
        "startDate": spirituellaMassan.value.eventDate || "Okänt",
        "location": {
          "@type": "Place",
          "name": "Spirituella Mässan",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Sverige",
            "addressCountry": "SE",
          },
        },
        "url": "https://www.historiskaroster.se/spirituell-massa",
      }),
    },
  ],
});
</script>

<template>
  <div v-if="spirituellaMassan">
    <PlaceHeader
      :title="spirituellaMassan.title"
      :investigation="spirituellaMassan.investigation"
      :date="spirituellaMassan.investigationDate"
      :image="spirituellaMassan.image"
    />
    <PlaceHistory
      :content="spirituellaMassan.history"
    />
    <PlaceResult
      :resultTitle="spirituellaMassan.resultTitle"
      :videos="spirituellaMassan.videos"
    />
    <PlaceReadMore
      :moreTitle="spirituellaMassan.moreTitle"
      :more="spirituellaMassan.more"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>

