<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'

const { t, locale, messages } = useI18n()

const thirdPartyList = messages.value[locale.value].privacy.thirdPartyList

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <section class="integritet-container">
    <h1>{{ t('privacy.title') }}</h1>

    <p>{{ t('privacy.intro') }}</p>

    <h2>{{ t('privacy.whatAreCookiesTitle') }}</h2>
    <p>{{ t('privacy.whatAreCookiesText') }}</p>

    <h2>{{ t('privacy.typesTitle') }}</h2>
    <table class="cookie-table">
      <thead>
        <tr>
          <th>{{ t('privacy.tableHeaders.type') }}</th>
          <th>{{ t('privacy.tableHeaders.purpose') }}</th>
          <th>{{ t('privacy.tableHeaders.example') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>{{ t('privacy.types.necessary.name') }}</strong></td>
          <td>{{ t('privacy.types.necessary.purpose') }}</td>
          <td>{{ t('privacy.types.necessary.example') }}</td>
        </tr>
        <tr>
          <td><strong>{{ t('privacy.types.statistics.name') }}</strong></td>
          <td>{{ t('privacy.types.statistics.purpose') }}</td>
          <td>{{ t('privacy.types.statistics.example') }}</td>
        </tr>
        <tr>
          <td><strong>{{ t('privacy.types.marketing.name') }}</strong></td>
          <td>{{ t('privacy.types.marketing.purpose') }}</td>
          <td>{{ t('privacy.types.marketing.example') }}</td>
        </tr>
      </tbody>
    </table>

    <h2>{{ t('privacy.thirdPartyTitle') }}</h2>
    <p>{{ t('privacy.thirdPartyText') }}</p>
    <ul class="thirdpartcookies">
      <li v-for="(item, index) in thirdPartyList" :key="index">
        {{ item }}
      </li>
    </ul>

    <h2>{{ t('privacy.manageTitle') }}</h2>
    <p>{{ t('privacy.manageText') }}</p>

    <h2>{{ t('privacy.contactTitle') }}</h2>
    <p>
      {{ t('privacy.contactText') }}
      <a :href="`mailto:${t('privacy.contactEmail')}`">{{ t('privacy.contactEmail') }}</a>.
    </p>
  </section>
</template>

<style scoped>
.integritet-container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

.integritet-container h1 {
  margin-bottom: 0.5rem;
}

.integritet-container h2 {
    margin-top: 3rem;
    margin-bottom: 0.5rem;
}

.cookie-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.cookie-table th,
.cookie-table td {
  border: 1px solid #ccc;
  padding: 0.6rem;
  text-align: left;
}

.cookie-table th {
  background-color: var(--color-header, #181818);
  color: var(--color-text, #fff);
  text-align: center;
}

.thirdpartcookies {
    list-style: none;
    text-align: center;
    margin-top: 0;
}
</style>
