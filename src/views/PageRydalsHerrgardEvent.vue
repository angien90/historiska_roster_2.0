<script setup>
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceReadMore from "../components/PlaceReadMore.vue";

import rydalsHerrgardEvent_sv from "../Locales/sv/RydalsHerrgardEvent.json";
import rydalsHerrgardEvent_en from "../Locales/en/RydalsHerrgardEvent.json";

const { locale } = useI18n();

const rydalsHerrgardEvent = computed(() => {
  return locale.value === "sv"
    ? rydalsHerrgardEvent_sv
    : rydalsHerrgardEvent_en;
});

// Begränsa description till 155 tecken
const seoDescription = rydalsHerrgardEvent.value.history[0].text[0].slice(0, 155);

// Head + JSON-LD schema
useHead({
  title: `${rydalsHerrgardEvent.value.title} – Historiska Röster`,
  meta: [
    { name: "description", content: seoDescription },
    {
      name: "keywords",
      content:
        "Rydals Herrgård, Spökjakt, event, hemsökt herrgård, paranormalt, Historiska Röster",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.historiskaroster.se/rydals-herrgard-event",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Event",
        "name": rydalsHerrgardEvent.value.title,
        "description": rydalsHerrgardEvent.value.history[0].text[0],
        "image":
          "https://www.historiskaroster.se" + rydalsHerrgardEvent.value.image,
        "startDate": rydalsHerrgardEvent.value.eventDate || "Okänt datum",
        "endDate": rydalsHerrgardEvent.value.eventEndDate || undefined,
        "location": {
          "@type": "Place",
          "name": "Rydals Herrgård",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Rydal",
            "addressCountry": "SE",
          },
        },
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "url": "https://www.historiskaroster.se/rydals-herrgard-event",
      }),
    },
  ],
});
</script>

<template>
  <div v-if="rydalsHerrgardEvent">
    <PlaceHeader
      :title="rydalsHerrgardEvent.title"
      :investigation="rydalsHerrgardEvent.investigation"
      :date="rydalsHerrgardEvent.investigationDate"
      :image="rydalsHerrgardEvent.image"
    />
    <PlaceHistory 
      :content="rydalsHerrgardEvent.history" 
    />
    <PlaceReadMore
      :moreTitle="rydalsHerrgardEvent.moreTitle"
      :more="rydalsHerrgardEvent.more"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>
