<script setup>
import ContentItem from "./ContentItem.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const items = [
  { href: "https://www.youtube.com/watch?v=2FDUA-i3GbM",
    image: "/images/equipment/spiritbox.webp",
    alt: "Spiritbox",
    heading: "spiritbox",
  },
  {
    href: "https://www.youtube.com/watch?v=I06jPDzyG6Y",
    image: "/images/equipment/sls_kamera.webp",
    alt: "SLS-kamera",
    heading: "sls_camera",
  },
  {
    href: "https://youtu.be/fyxAXO-zfLU?si=NPjWLBzPEYdktrlc",
    image: "/images/equipment/polterscript.webp",
    alt: "Polterscript",
    heading: "polterscript",
  },
  {
    href: "https://www.youtube.com/watch?v=1PUrwAsEhlk",
    image: "/images/equipment/paranormal_rem_static.webp",
    alt: "PRS & PRP",
    heading: "prs_prp",
  },
  {
    href: "https://youtu.be/EedqF5DVQmk?si=fCzKToL8rPYnAbJc",
    image: "/images/equipment/mel_meter.webp",
    alt: "MEL-meter",
    heading: "mel_meter",
  },
  {
    href: "https://youtu.be/t1UAxEBWC_U?si=gS62lbVfP3V8WuHo",
    image: "/images/equipment/PMB.webp",
    alt: "PMB",
    heading: "pmb",
  },
  {
    href: "https://youtu.be/eaNv-ir632g?si=3A50UMWIvDlGPvc-",
    image: "/images/equipment/K2_matare.webp",
    alt: "K2-mätare",
    heading: "k2_meter",
  },
];
</script>

<template>
  <section class="section-style">
    <h2>{{ t("learn_heading") }}</h2>
    <p>
      {{ t("learn_subheading1") }}
      <router-link to="/ghostschool" class="link">{{ t("learning_school") }}.</router-link>
    </p>

    <div class="grid-style">
      <a v-for="(item, index) in items" :key="index" :href="item.href" class="card-style" target="_blank" rel="noopener">
        <ContentItem>
          <template #icon>
            <img :src="item.image" :alt="item.alt" class="card-img-style" width="125" height="125" loading="lazy"/>
          </template>
          <template #heading>{{ t(item.heading) }}</template>
        </ContentItem>
      </a>
    </div>
  </section>
</template>

