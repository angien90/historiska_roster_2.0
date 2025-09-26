<script setup>
import { defineEmits, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const emit = defineEmits(['close', 'save'])
const { t } = useI18n()

// Lokala val, default false
const allowStatistics = ref(false)
const allowMarketing = ref(false)

function saveSettings() {
  const settings = {
    statistics: allowStatistics.value,
    marketing: allowMarketing.value,
  }
  localStorage.setItem('cookieConsent', JSON.stringify(settings))
  emit('save', settings)
  emit('close')
}
</script>

<template>
  <div class="modal-backdrop">
    <div class="modal-content">
      <h2>{{ t('cookieSettings.title') }}</h2>

      <label>
        <input type="checkbox" v-model="allowStatistics" />
        {{ t('cookieSettings.statistics') }}
      </label>

      <label>
        <input type="checkbox" v-model="allowMarketing" />
        {{ t('cookieSettings.marketing') }}
      </label>

      <div class="buttons">
        <button @click="saveSettings">{{ t('cookieSettings.save') }}</button>
        <button @click="$emit('close')">{{ t('cookieSettings.cancel') }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 60%;
}

h2 {
    color: black;
    margin-top: 0;
}

label {
  display: block;
  margin: 1rem 0;
  color: black;
  font-family: var(--font-body);
  font-size: 1.5rem;
  text-align: center;
}

.buttons {
  display: flex;           
  justify-content: center; 
  gap: 1rem;               
  flex-wrap: nowrap;       
  padding: 0 1rem 1rem;
}

button {
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
