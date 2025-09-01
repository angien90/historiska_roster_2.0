<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const showPopup = ref(false)

onMounted(() => {
  const consent = localStorage.getItem('cookieConsent')
  if (!consent) {
    showPopup.value = true
  } else if (consent === 'all') {
    loadOptionalScripts({ statistics: true, marketing: true })
  }
})

function acceptAll() {
  localStorage.setItem('cookieConsent', 'all')
  showPopup.value = false
  loadOptionalScripts({ statistics: true, marketing: true })
}

function acceptNecessary() {
  localStorage.setItem('cookieConsent', 'necessary')
  showPopup.value = false
}

function loadOptionalScripts(settings = {}) {
  if (settings.statistics) {
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
}

function closePopup() {
  showPopup.value = false
}
</script>

<template>
  <div v-if="showPopup" class="cookie-consent">
    <button class="close-btn" @click="closePopup" :title="t('cookie.close')">x</button>
    <h2>{{ t('cookie.title') }}</h2>
    <p>{{ t('cookie.message') }} <router-link to="/PrivacyPolicy" class="link">{{ t('cookie.readMore') }}</router-link></p>
    <div class="buttons">
      <button @click="acceptAll">{{ t('cookie.acceptAll') }}</button>
      <button @click="acceptNecessary">{{ t('cookie.necessaryOnly') }}</button>
    </div>
  </div>
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

.cookie-consent .close-btn {
  position: absolute;
  top: 8px;
  right: 12px;
  background: none;
  border: none;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  color: #666;
  transition: color 0.2s ease;
  padding-top: 0;
}

.close-btn:hover {
  color: #000;
}

.cookie-consent h2 {
  font-size: 1.7rem;
  margin-top: 1rem;
  font-weight: bold;
  color: #000;
}

.cookie-consent p {
  font-size: 1.2rem;
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
  gap: 0.5rem;               
  flex-wrap: nowrap;       
  padding: 0 1rem 1rem;
}

.cookie-consent button {
  flex: 1 1 120px;
  max-width: 200px;
  padding: 0.6rem 0;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: var(--font-display);
}

@media (min-width: 1024px) {
  .cookie-consent p {
  font-size: 2rem;
  }

  .cookie-consent button {
  font-size: 1.5rem;
  max-width: 300px;
  }
}
</style>
