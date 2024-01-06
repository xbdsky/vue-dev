import { createI18n } from 'vue-i18n/index';
import zh from './zh-CN';
import en from './en-US';

const defaultLanguage = 'zh-CN';
const i18n = createI18n({
  locale: defaultLanguage,
  silentTranslationWarn: true,
  messages: { zh, en },
});

export default i18n;