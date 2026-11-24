import type { Language } from "../i18n/translations";

const localeFor = (lang: Language) => (lang === "ar" ? "ar-u-nu-latn" : "en-US");

export const formatNumber = (value: number, lang: Language) =>
  new Intl.NumberFormat(localeFor(lang)).format(value);

export const formatCurrency = (value: number, lang: Language) =>
  new Intl.NumberFormat(localeFor(lang), { style: "currency", currency: "USD" }).format(value);
