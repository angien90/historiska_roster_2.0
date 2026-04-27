<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";

import CompletedTasks from "../components/CompletedTasks.vue";
import EducationItems from "../components/EducationItems.vue";
import OurEvents from "../components/OurEvents.vue";

const { locale } = useI18n();
const parallaxStyle = ref({
  "--parallax-y": "0px",
});
let animationFrame = 0;
let reduceMotionQuery;

const seoDescription =
  "Historiska Röster utforskar hemsökta platser genom historisk forskning, dokumentation och paranormala undersökningar i Sverige.";

useHead({
  title: "Historiska Roster - Hemsokta platser och forskning",
  meta: [
    { name: "description", content: seoDescription },
    {
      name: "keywords",
      content:
        "Historiska Röster, spökhistorier, hemsökta platser, event, undersökning",
    },
  ],
  link: [{ rel: "canonical", href: "https://www.historiskaroster.se/" }],
});

const copy = computed(() => {
  if (locale.value === "sv") {
    return {
      eyebrow: "Historisk forskning och paranormal utredning",
      title: "Historiska Röster",
      lead:
        "Låt oss ta dig med på en resa genom tid och rum, där gränserna mellan det kända och okända suddas ut.",
      primaryCta: "Utforska våra platser",
      secondaryCta: "Se kartan",
      differenceKicker: "Det som gör oss unika",
      differenceTitle: "Vi kombinerar historisk forskning med paranormal utredning.",
      differenceLead:
        "Vi undersöker inte bara vad som händer på en plats, utan också varför.",
      differenceCategories: [
        {
          title: "Historisk forskning",
          text: "Vi kartlägger vilka som har levt och verkat på platsen, samt undersöker om specifika händelser har lämnat bestående avtryck.",
        },
        {
          title: "Historisk resa",
          text: "Genom att besöka platser och gravar med historisk betydelse etablerar vi en personlig koppling till historien och visar vår vördnad.",
        },
        {
          title: "Kontaktförsök",
          text: "Under utredningens gång låter vi både byggnadens arkitektur och människornas öden komma till tals genom lyhörda frågor.",
        },
      ],
    };
  }

  return {
    eyebrow: "Historical research and paranormal investigation",
    title: "Historical Voices",
    lead:
      "Let us take you on a journey through time and space, where the boundaries between the known and the unknown blur.",
    primaryCta: "Explore our locations",
    secondaryCta: "View the map",
    differenceKicker: "What sets us apart",
    differenceTitle: "We combine historical research with paranormal investigation.",
    differenceLead:
      "We do not only investigate what happens at a place, but also why.",
    differenceCategories: [
      {
        title: "Sources",
        text: "We begin with archives, church records, and old newspapers.",
      },
      {
        title: "The place",
        text: "We map the people, events, and history surrounding the site.",
      },
      {
        title: "The investigation",
        text: "Then we continue with documentation and paranormal equipment.",
      },
    ],
  };
});

function updateParallax() {
  animationFrame = 0;
  parallaxStyle.value = {
    "--parallax-y": `${window.scrollY}px`,
  };
}

function requestParallaxUpdate() {
  if (animationFrame || reduceMotionQuery?.matches) {
    return;
  }

  animationFrame = window.requestAnimationFrame(updateParallax);
}

function scrollToInvestigations() {
  document.getElementById("investigations")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function removeInvestigationsHash() {
  if (window.location.hash === "#investigations") {
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  }
}

onMounted(() => {
  removeInvestigationsHash();

  reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!reduceMotionQuery.matches) {
    updateParallax();
    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", requestParallaxUpdate);

  if (animationFrame) {
    window.cancelAnimationFrame(animationFrame);
  }
});
</script>

<template>
  <main class="home-page" :style="parallaxStyle">
    <section class="hero">
      <div class="hero-backdrop"></div>
      <img
        src="/images/generell/logo-white-transparent-background.svg"
        alt="Historiska Röster logga"
        class="hero-logo-mark"
        loading="lazy"
      />
      <div class="hero-content">
        <p class="eyebrow">{{ copy.eyebrow }}</p>
        <h1>{{ copy.title }}</h1>
        <div class="social-icons">
          <a
            href="https://www.instagram.com/historiskaroster"
            target="_blank"
            rel="noopener"
            data-tooltip="Instagram"
          >
            <img src="/images/social_media/InstagramIcon.webp" alt="Instagram" />
          </a>
          <a
            href="https://www.tiktok.com/@historiskaroster"
            target="_blank"
            rel="noopener"
            data-tooltip="TikTok"
          >
            <img src="/images/social_media/TikTokIcon.webp" alt="TikTok" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61564978259193"
            target="_blank"
            rel="noopener"
            data-tooltip="Facebook"
          >
            <img src="/images/social_media/FacebookIcon.webp" alt="Facebook" />
          </a>
          <a
            href="https://www.youtube.com/@HistoriskaR%C3%B6ster"
            target="_blank"
            rel="noopener"
            data-tooltip="YouTube"
          >
            <img src="/images/social_media/YouTubeIcon.webp" alt="YouTube" />
          </a>
          <a
            href="https://soundcloud.com/historiska-roester/sets/historiska-roester"
            target="_blank"
            rel="noopener"
            data-tooltip="SoundCloud"
          >
            <img src="/images/social_media/SoundCloudIcon.webp" alt="SoundCloud" />
          </a>
          <a
            href="https://digg.com/@HistoriskaRoster"
            target="_blank"
            rel="noopener"
            data-tooltip="digg.com"
          >
            <img src="/images/social_media/DiggIcon.webp" alt="Digg" />
          </a>
        </div>
        <p class="hero-lead">{{ copy.lead }}</p>

        <div class="hero-actions">
          <button
            type="button"
            class="hero-button hero-button-primary"
            @click="scrollToInvestigations"
          >
            {{ copy.primaryCta }}
          </button>
          <router-link to="/map-view" class="hero-button hero-button-secondary">
            {{ copy.secondaryCta }}
          </router-link>
        </div>
      </div>
    </section>

    <section class="section-shell difference-section">
      <div class="section-heading">
        <p class="section-kicker">{{ copy.differenceKicker }}</p>
        <h2>{{ copy.differenceTitle }}</h2>
        <p>{{ copy.differenceLead }}</p>
      </div>

      <div class="difference-grid">
        <article
          v-for="(category, index) in copy.differenceCategories"
          :key="index"
          class="difference-card"
        >
          <span class="difference-number">0{{ index + 1 }}</span>
          <h3 class="difference-point-title">{{ category.title }}</h3>
          <p class="difference-point-text">{{ category.text }}</p>
        </article>
      </div>
    </section>

    <CompletedTasks />
    <OurEvents />
    <EducationItems />
  </main>
</template>

<style scoped>
.home-page {
  --parallax-y: 0px;
  padding-bottom: 4rem;
}

.hero,
.section-shell {
  width: min(1200px, calc(100% - 2rem));
  margin-inline: auto;
}

.hero {
  position: relative;
  isolation: isolate;
  min-height: 84vh;
  display: flex;
  align-items: center;
  border-radius: 28px;
  overflow: hidden;
  margin-top: 1.25rem;
  background:
    linear-gradient(180deg, rgba(6, 8, 10, 0.1), rgba(6, 8, 10, 0.88)),
    radial-gradient(circle at top, rgba(184, 147, 88, 0.35), transparent 35%);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.35);
}

.hero::before {
  content: "";
  position: absolute;
  inset: -8%;
  z-index: -2;
  background: url("/images/generell/background.webp") center/cover no-repeat;
  transform: translate3d(0, calc(var(--parallax-y) * 0.12), 0);
  will-change: transform;
}

.hero-backdrop {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(135deg, rgba(6, 8, 10, 0.15), rgba(6, 8, 10, 0.92)),
    linear-gradient(90deg, rgba(0, 0, 0, 0.4), transparent 55%);
}

.hero-logo-mark {
  position: absolute;
  top: 1.5rem;
  right: 80px;
  z-index: 1;
  width: clamp(110px, 16vw, 200px);
  height: auto;
  padding-right: 40px;
  opacity: 0.72;
  pointer-events: none;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.35));
  transform: translate3d(0, calc(var(--parallax-y) * -0.04), 0);
  will-change: transform;
}

.hero-content {
  position: relative;
  z-index: 1;
  width: min(760px, 100%);
  padding: 5.5rem 1.5rem 5rem;
  color: #f8f2e8;
  transform: translate3d(0, calc(var(--parallax-y) * -0.025), 0);
  will-change: transform;
}

.eyebrow,
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

.eyebrow::before,
.section-kicker::before {
  content: "";
  width: 2.5rem;
  height: 1px;
  background: currentColor;
}

.hero h1 {
  justify-content: flex-start;
  text-align: left;
  font-size: clamp(2.35rem, 6vw, 5rem);
  line-height: 0.95;
  margin: 0;
  max-width: none;
  white-space: nowrap;
  color: var(--color-text);
}

.social-icons {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 1rem;
  margin: 1.25rem 0;
}

.social-icons a {
  position: relative;
  display: inline-block;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999px;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease,
    background-color 0.2s ease;
}

.social-icons a:hover {
  transform: translateY(-2px);
  opacity: 0.85;
  background: rgba(255, 255, 255, 0.06);
}

.social-icons img {
  width: 28px;
  height: 28px;
  object-fit: contain;
  background: transparent;
  filter: drop-shadow(0 8px 14px rgba(0, 0, 0, 0.25));
}

.social-icons a::after {
  content: attr(data-tooltip);
  position: absolute;
  left: 50%;
  bottom: -2rem;
  transform: translateX(-50%);
  padding: 0.2rem 0.45rem;
  border-radius: 6px;
  background: rgba(12, 14, 16, 0.9);
  color: #f8f2e8;
  font-size: 0.72rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
}

.social-icons a:hover::after {
  opacity: 1;
}

.hero-lead {
  max-width: 40rem;
  text-align: left;
  font-size: clamp(1.55rem, 3.4vw, 2.25rem);
  line-height: 1.18;
  margin-top: 1.5rem;
  color: var(--color-text);
  padding-top: 0;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 1.75rem;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 11rem;
  padding: 0.95rem 1.35rem;
  border: 0;
  border-radius: 999px;
  text-decoration: none;
  font-family: var(--font-display);
  font-size: 1rem;
  letter-spacing: 0.03em;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    background-color 0.25s ease,
    border-color 0.25s ease;
}

.hero-button:hover {
  transform: translateY(-2px);
}

.hero-button-primary {
  background: #c49f68;
  color: #111;
}

.hero-button-secondary {
  border: 1px solid rgba(248, 242, 232, 0.35);
  color: #f8f2e8;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
}

.difference-section {
  margin-top: 4rem;
  transform: translate3d(0, calc(var(--parallax-y) * -0.01), 0);
  will-change: transform;
}

.section-heading {
  margin-bottom: 2.5rem;
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

.difference-grid {
  display: grid;
  gap: 0.85rem;
  margin-top: 1.25rem;
}

.difference-card {
  position: relative;
  overflow: hidden;
  padding: 1.65rem 1.35rem;
  border-radius: 22px;
  min-height: 190px;
  background:
    linear-gradient(145deg, rgba(18, 22, 25, 0.96), rgba(30, 26, 20, 0.94));
  border: 1px solid rgba(216, 195, 156, 0.18);
  box-shadow: 0 22px 50px rgba(0, 0, 0, 0.18);
  transform: translate3d(0, calc(var(--parallax-y) * -0.006), 0);
  will-change: transform;
}

.difference-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #c49f68, rgba(196, 159, 104, 0));
}

.difference-number {
  position: relative;
  z-index: 1;
  display: inline-flex;
  margin-bottom: 1.2rem;
  font-family: var(--font-display);
  font-size: 1.05rem;
  color: #d8c39c;
}

.difference-point-title {
  position: relative;
  z-index: 1;
  margin: 0 0 0.8rem;
  text-align: left;
  font-size: 1.85rem;
  line-height: 1.1;
  color: #f8f2e8;
}

.difference-point-text {
  position: relative;
  z-index: 1;
  margin: 0;
  text-align: left;
  font-size: 1.38rem;
  line-height: 1.55;
  color: var(--color-text);
}

@media (min-width: 900px) {
  .difference-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 2rem; /* Add padding to ensure spacing */
  }

  .hero-logo-mark {
    margin-bottom: 2rem; /* Increase spacing below the logo */
  }

  .eyebrow {
    margin-top: 0;
    font-size: 1.2rem; /* Adjust font size for better readability */
  }

  .hero-content {
    padding: 6.35rem 1.25rem 3.5rem;
  }

  .hero h1 {
    max-width: 100%;
    font-size: clamp(2.1rem, 10vw, 3.2rem);
  }

  .social-icons {
    gap: 0.85rem;
  }

  .social-icons img {
    width: 24px;
    height: 24px;
  }

  .hero-button {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero::before,
  .hero-logo-mark,
  .hero-content,
  .difference-section,
  .difference-card {
    transform: none;
    will-change: auto;
  }
}
</style>
