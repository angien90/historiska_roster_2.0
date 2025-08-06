<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import TopNav from "@/components/TopNav.vue";

const { t, locale } = useI18n();
const route = useRoute();
const router = useRouter();
const currentYear = ref(new Date().getFullYear());

const isHomePage = computed(() => route.path === '/');

function setLanguage(lang) {
  locale.value = lang;
}

function goBack() {
  if (window.history.length > 1) {
    router.back();  // går till föregående sida i historiken
  } else {
    router.push('/');  // om ingen historik, gå till startsidan
  }
}
</script>

<template>
  <div class="app-container">
    <header class="site-header">
      <button v-if="route.path !== '/'" @click="goBack" class="home-link" aria-label="Tillbaka" title="Gå tillbaka" type="button">
        <span class="material-symbols-outlined home-icon">keyboard_return</span>
      </button>

      <TopNav v-if="isHomePage" />

      <nav class="language-switcher" aria-label="Välj språk">
        <button @click="setLanguage('en')" :aria-pressed="locale === 'en'" aria-label="Switch to English" title="Translate to English" type="button">
          <img src="/images/english_flag.webp" alt="English" width="40" height="30" />
        </button>
        <button @click="setLanguage('sv')" :aria-pressed="locale === 'sv'" aria-label="Byt till Svenska" title="Översätt till Svenska" type="button">
          <img src="/images/swedish_flag.webp" alt="Svenska" width="40" height="30" />
        </button>
      </nav>
    </header>
    <router-view /> 
  </div>

  <footer class="site-footer">
      <div class="footer-content">
        <p class="creator" v-html="t('createdBy', {author: `<a href='https://github.com/angien90' target='_blank' rel='noopener noreferrer'>Angelica</a>`})"></p>
        <p v-html="t('copyright', { year: currentYear })"></p>
      </div>
    </footer>
</template>

<style scoped>
.app-container {
  font-family: var(--font-display);
  background-color: var(--color-background);
  color: var(--color-text);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: var(--color-header, #181818);
  box-shadow: 0 0 30px var(--color-shadow, #000);
  z-index: 10000;
  gap: 1rem;
}

.home-link {
  color: var(--color-text);
  text-decoration: none;
  display: flex;
  align-items: center;
  background: none;       
  border: none;           
  box-shadow: none;       
  padding: 0;             
  margin: 0;              
  cursor: pointer;
}

.home-icon {
  font-size: 2.5rem;
  transition: transform 0.3s ease;
}

.home-icon:hover {
  transform: scale(1.2);
}

.language-switcher {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-right: 70px;
}

.language-switcher button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  outline-offset: 3px;
  transition: transform 0.3s ease;
}

.language-switcher button:focus,
.language-switcher button[aria-pressed="true"] {
  transform: scale(1.1);
}

.language-switcher img {
  border-radius: 4px;
  display: block;
  width: 40px;
  height: 30px;
  object-fit: contain;
}

router-view {
  margin-top: 90px;
  flex-grow: 1;
}

.site-footer {
  width: 100%;
  background-color: var(--color-header, #181818);
  color: var(--color-text);
  padding: 1rem 2rem;
  text-align: center;
  box-sizing: border-box;
}

.footer-content p {
  font-size: 1rem;
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .footer-content p {
  font-size: 1.5rem;
  }
}

@media (min-width: 1130px) {
  .footer-content p {
  font-size: 2rem;
  }
}
</style>
