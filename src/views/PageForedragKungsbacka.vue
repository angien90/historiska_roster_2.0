<script setup>
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import PlaceHeader from "../components/PlaceHeader.vue";
import PlaceHistory from "../components/PlaceHistory.vue";
import PlaceReadMore from "../components/PlaceReadMore.vue";

import foredragKungsbacka_sv from "../Locales/sv/ForedragKungsbacka.json";
import foredragKungsbacka_en from "../Locales/en/ForedragKungsbacka.json";

const { locale } = useI18n();

const foredragKungsbacka = computed(() => {
  return locale.value === "sv" ? foredragKungsbacka_sv : foredragKungsbacka_en;
});

// SEO-beskrivning (begränsad till 155 tecken)
const seoDescription = foredragKungsbacka.value.history[0].text[0].slice(0, 155);

// Head + JSON-LD
useHead({
  title: `${foredragKungsbacka.value.title} – Historiska Röster`,
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
        "name": foredragKungsbacka.value.title,
        "description": foredragKungsbacka.value.history[0].text[0],
        "image":
          "https://www.historiskaroster.se" +
          (foredragKungsbacka.value.image || "/images/spirituellmassa/Har_ar_vi.jpg"),
        "startDate": foredragKungsbacka.value.eventDate || "Okänt",
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
  <div v-if="foredragKungsbacka">
    <PlaceHeader
      :title="foredragKungsbacka.title"
      :investigation="foredragKungsbacka.investigation"
      :date="foredragKungsbacka.investigationDate"
      :image="foredragKungsbacka.image"
    />
    <PlaceHistory
      :content="foredragKungsbacka.history"
    />
    <PlaceReadMore
      :moreTitle="foredragKungsbacka.moreTitle"
      :more="foredragKungsbacka.more"
    />
  </div>
  <div v-else>
    <p>Laddar platsinformation...</p>
  </div>
</template>

