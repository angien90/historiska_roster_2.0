<script setup>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const pageSize = 6;
const currentPage = ref(0);

const items = [
  {
    to: "/jugend-house-event",
    src: "/images/jugend_house/klevs_gastgiveri_event.webp",
    alt: "event_place5",
    label: "event_place5",
  },
  {
    to: "/spirituell-massa",
    src: "/images/spirituellmassa/massan.webp",
    alt: "event_place4",
    label: "event_place4",
  },
  {
    to: "/rydals-herrgard-event",
    src: "/images/rydals_herrgard/spokjakt.webp",
    alt: "event_place3",
    label: "event_place3",
  },
  {
    to: "/mysterie-massan",
    src: "/images/mysterium_massan/silja_line.webp",
    alt: "event_place2",
    label: "event_place2",
  },
  {
    to: "/mysterium-massan",
    src: "/images/mysterium_massan/Mysterium_massan.webp",
    alt: "event_place1",
    label: "event_place1",
  },
];

const totalPages = computed(() => Math.ceil(items.length / pageSize));

const pagedItems = computed(() => {
  const start = currentPage.value * pageSize;
  return items.slice(start, start + pageSize);
});

function goToPage(index) {
  currentPage.value = index;
}

function goPrevious() {
  currentPage.value =
    currentPage.value === 0 ? totalPages.value - 1 : currentPage.value - 1;
}

function goNext() {
  currentPage.value =
    currentPage.value === totalPages.value - 1 ? 0 : currentPage.value + 1;
}
</script>

<template>
  <section class="section-shell events-section">
    <div class="section-heading">
      <p class="section-kicker">{{ t("event_heading") }}</p>
      <h2>{{ t("event_heading") }}</h2>
      <p>{{ t("event_subheading") }}</p>
    </div>

    <div class="events-grid">
      <router-link
        v-for="item in pagedItems"
        :key="item.to"
        :to="item.to"
        class="featured-card"
      >
        <img :src="item.src" :alt="t(item.alt)" loading="lazy" />
        <div class="featured-overlay"></div>
        <div class="featured-copy">
          <h3>{{ t(item.label) }}</h3>
          <span class="featured-link">{{ t("event_link") }}</span>
        </div>
      </router-link>
    </div>

    <div v-if="totalPages > 1" class="carousel-controls">
      <button type="button" class="carousel-button" @click="goPrevious">
        {{ t("event_previous") }}
      </button>

      <div class="carousel-dots" aria-label="Event pages">
        <button
          v-for="page in totalPages"
          :key="page"
          type="button"
          class="carousel-dot"
          :class="{ 'carousel-dot-active': currentPage === page - 1 }"
          @click="goToPage(page - 1)"
        >
          <span class="sr-only">{{ t("event_page") }} {{ page }}</span>
        </button>
      </div>

      <button type="button" class="carousel-button" @click="goNext">
        {{ t("event_next") }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.events-section {
  margin-top: 4rem;
}

.section-shell {
  width: min(1200px, calc(100% - 2rem));
  margin-inline: auto;
}

.section-heading {
  margin-bottom: 2.5rem;
}

.section-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1rem;
  font-size: 1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #d8c39c;
}

.section-kicker::before {
  content: "";
  width: 2.5rem;
  height: 1px;
  background: currentColor;
}

.section-heading h2,
.section-heading p {
  text-align: left;
}

.section-heading h2 {
  justify-content: flex-start;
}

.section-heading p {
  padding-top: 0;
}

.events-grid {
  display: grid;
  gap: 0.85rem;
}

.featured-card {
  position: relative;
  min-height: 250px;
  border-radius: 22px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
}

.featured-card img,
.featured-overlay {
  position: absolute;
  inset: 0;
}

.featured-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.featured-card:hover img {
  transform: scale(1.05);
}

.featured-overlay {
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.85)),
    linear-gradient(0deg, rgba(10, 12, 14, 0.9), transparent 35%);
}

.featured-copy {
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  left: 0;
  right: 0;
  bottom: 1.5rem;
  padding: 0 1.1rem;
}

.featured-copy h3 {
  text-align: left;
  padding: 0;
  margin-top: 0;
  font-size: 1.25rem;
  line-height: 1.05;
}

.featured-link {
  display: inline-flex;
  margin-top: 0.7rem;
  font-family: var(--font-display);
  color: #d8c39c;
  font-size: 1rem;
  align-self: flex-start;
}

.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;
}

.carousel-button {
  border: 1px solid rgba(216, 195, 156, 0.35);
  background: rgba(255, 255, 255, 0.04);
  color: #f8f2e8;
  border-radius: 999px;
  padding: 0.85rem 1.2rem;
  font-family: var(--font-display);
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;
}

.carousel-button:hover {
  transform: translateY(-1px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(216, 195, 156, 0.65);
}

.carousel-dots {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.carousel-dot {
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 999px;
  border: 0;
  background: rgba(255, 255, 255, 0.18);
  cursor: pointer;
}

.carousel-dot-active {
  background: #d8c39c;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (min-width: 900px) {
  .events-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .featured-card {
    min-height: 220px;
  }

  .carousel-controls {
    justify-content: center;
    gap: 0.75rem;
    margin-top: 1.25rem;
  }

  .carousel-button {
    width: 2.75rem;
    min-width: 2.75rem;
    height: 2.75rem;
    padding: 0;
    border-radius: 8px;
    font-size: 0;
  }

  .carousel-button::before {
    font-size: 1.5rem;
    line-height: 1;
  }

  .carousel-button:first-child::before {
    content: "‹";
  }

  .carousel-button:last-child::before {
    content: "›";
  }

  .carousel-dots {
    min-height: 2.75rem;
    padding: 0 0.35rem;
  }

  .carousel-dot {
    width: 0.7rem;
    height: 0.7rem;
  }
}
</style>
