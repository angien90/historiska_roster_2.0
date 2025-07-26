<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const { t, locale } = useI18n();
const route = useRoute();

const currentYear = ref(new Date().getFullYear());

function setLanguage(lang) {
  locale.value = lang;
}
</script>

<template>
  <div class="container">
    <header>
      <router-link
        v-if="route.path !== '/'"
        to="/"
        class="HomePage"
        aria-label="Hem"
        title="Gå tillbaka till startsidan"
      >
        <span class="material-symbols-outlined home-icon">home</span>
      </router-link>
      <section class="language" role="group" aria-label="Välj språk">
        <button
          @click="setLanguage('en')"
          :aria-pressed="locale === 'en'"
          aria-label="Switch to English"
          type="button"
        >
          <img src="/images/english_flag.webp" alt="English" width="40" height="30" />
        </button>
        <button
          @click="setLanguage('sv')"
          :aria-pressed="locale === 'sv'"
          aria-label="Byt till Svenska"
          type="button"
        >
          <img src="/images/swedish_flag.webp" alt="Svenska" width="40" height="30" />
        </button>
      </section>
    </header>

    <main>
      <router-view />
    </main>

    <footer class="site-footer">
      <div class="footer-content">
        <p
          class="comercial"
          v-html="t('createdBy', {
            author: '<a href=\'https://github.com/angien90\' target=\'_blank\' rel=\'noopener noreferrer\'>Angelica</a>'
          })"
        ></p>
        <p v-html="t('copyright', { year: currentYear })"></p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Din stil från tidigare */
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  max-width: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  padding: 0 1rem;
  box-sizing: border-box;
  overflow-x: hidden;
}

.flag {
  width: 40px;
  height: auto;
  max-width: 100%;
  display: block;
}

header {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding-top: 1rem;
}

header button {
  background: transparent;  
  border: none;             
  cursor: pointer;          
}

.language {
  display: flex;
  gap: 0.5rem;
  margin-left: auto;
}

.HomePage {
  text-decoration: none;
}

.home-icon {
  font-size: 2.5rem;
  transition: all 0.3s ease;
}

.home-icon:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.material-symbols-outlined {
  vertical-align: middle;
}

main {
  flex: 1;
}

.site-footer {
  text-align: center;
  font-size: 0.95rem;
  padding: 1rem 0;
}

.site-footer p {
  font-size: 1.5rem;
  padding-bottom: 0;
}

@media (min-width: 768px) {
  .site-footer {
    font-size: 1rem;
  }

  .site-footer p {
    font-size: 1.8rem;
  }
}
</style>
