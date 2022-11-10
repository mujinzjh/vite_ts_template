import { createI18n, I18n } from 'vue-i18n';
import zh from './lang/zh';
import en from './lang/en';

const defaultLocale: string = localStorage.getItem('locale') || 'zh-CN'

const i18n: I18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: 'zh-CN',
  legacy: false,
  messages: {
    zh,
    en
  }
})

export default i18n;