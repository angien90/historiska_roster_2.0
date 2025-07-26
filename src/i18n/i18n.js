import { createI18n } from 'vue-i18n';

import sv from '../Locales/sv/index.js';
import en from '../Locales/en/index.js';

const i18n = createI18n({
  legacy: false,
  locale: 'sv',
  fallbackLocale: 'en',
  messages: {
    sv,
    en,
  },
});

export default i18n;
