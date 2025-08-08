<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import CookieSettingsModal from './CookieSettingsModal.vue'

const { t } = useI18n()

const showPopup = ref(false)
const showModal = ref(false)

onMounted(() => {
  const consent = localStorage.getItem('cookieConsent')
  if (!consent) {
    showPopup.value = true
  } else if (consent === 'all') {
    loadOptionalScripts({ statistics: true, marketing: true })
  } else if (consent === 'custom') {
    // Läs sparade val
    const customSettings = JSON.parse(localStorage.getItem('cookieConsentSettings') || '{}')
    loadOptionalScripts(customSettings)
  }
})

function acceptAll() {
  localStorage.setItem('cookieConsent', 'all')
  showPopup.value = false
  loadOptionalScripts({ statistics: true, marketing: true })
}

function rejectNecessary() {
  localStorage.setItem('cookieConsent', 'necessary')
  showPopup.value = false
}

function customSettings() {
  showModal.value = true
}

function onSaveSettings(settings) {
  localStorage.setItem('cookieConsent', 'custom')
  localStorage.setItem('cookieConsentSettings', JSON.stringify(settings))
  loadOptionalScripts(settings)
  showModal.value = false
  showPopup.value = false
}

function loadOptionalScripts(settings = {}) {
  if (settings.statistics) {
    // Exempel: Google Analytics
    if (!document.getElementById('ga-script')) {
      const script = document.createElement('script')
      script.id = 'ga-script'
      script.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR_ID'
      document.head.appendChild(script)

      script.onload = () => {
        window.dataLayer = window.dataLayer || []
        function gtag(){window.dataLayer.push(arguments)}
        gtag('js', new Date())
        gtag('config', 'YOUR_ID')
      }
    }
  }

  if (settings.marketing) {
    // Lägg till scripts för marknadsföring här, t.ex. Facebook Pixel
  }
}
</script>

<template>
  <div v-if="showPopup" class="cookie-consent">
    <h2>{{ t('cookie.title') }}</h2>
    <p>{{ t('cookie.message') }} <router-link to="/PrivacyPolicy" class="link">{{ t('cookie.readMore') }}</router-link></p>
    <div class="buttons">
      <button @click="acceptAll">{{ t('cookie.acceptAll') }}</button>
      <button @click="rejectNecessary">{{ t('cookie.necessaryOnly') }}</button>
      <button @click="customSettings">{{ t('cookie.customize') }}</button>
    </div>
  </div>
  <CookieSettingsModal v-if="showModal" @save="onSaveSettings" @close="showModal = false" />

</template>

<style scoped>
.cookie-consent {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  color: black;
  z-index: 1000;
}

.cookie-consent h2 {
  font-size: 2rem;
  margin-top: 1rem;
  font-weight: bold;
  color: #000;
}

.cookie-consent p {
  font-size: 1.3rem;
  padding: 1rem;
  margin-bottom: 0;
  line-height: 1.4;
}

.cookie-consent .link {
  font-weight: bold;
  text-decoration: underline;
  color: black;
}

.cookie-consent .buttons {
  display: flex;           
  justify-content: center; 
  gap: 1rem;               
  flex-wrap: nowrap;       
  padding: 0 1rem 1rem;
}

.cookie-consent button {
  flex: 1 1 120px;
  max-width: 200px;
  padding: 0.6rem 0;
  font-size: 1.1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: var(--font-display);
}
</style>
