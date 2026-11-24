const en = {
  general: "General", tools: "Tools", support: "Support", dashboard: "Dashboard",
  payment: "Payment", customers: "Customers", message: "Message", product: "Product",
  invoice: "Invoice", analytics: "Analytics", automation: "Automation",
  settings: "Settings", security: "Security", help: "Help", search: "Search",
  filter: "Filter", sort: "Sort", export: "Export", orders: "Orders",
  revenue: "Total Revenue", avgOrder: "Avg. Order Value", sales: "Sales Overview",
  increased: "increased", subs: "Total Subscriber", dist: "Sales Distribution",
  integ: "List of Integration", seeAll: "See All", app: "Application", type: "Type",
  rate: "Rate", profit: "Profit", website: "Website", mobile: "Mobile App",
  other: "Other", upgrade: "Upgrade Plan", team: "Team", marketing: "Marketing",
  customize: "Customize", color: "Primary color", font: "Font", purple: "Purple",
  blue: "Blue", green: "Green", beta: "BETA", monthly: "Monthly", weekly: "Weekly",
  range: "Oct 18 - Nov 18", finance: "Finance", crm: "CRM", market: "Marketplace",
  copy: "© 2023 Nexus.io, Inc.", theme: "Toggle theme", language: "Language", navigation: "Main navigation",
  retry: "Try again", loading: "Loading",
  loadError: "Couldn't load the data. Check your connection and try again.",
  days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["Oct", "Nov", "Dec"],
  regions: ["China", "UAE", "USA", "Canada", "Other"],
};

type Dictionary = typeof en;

const ar: Dictionary = {
  general: "عام", tools: "الأدوات", support: "الدعم", dashboard: "لوحة التحكم",
  payment: "المدفوعات", customers: "العملاء", message: "الرسائل", product: "المنتجات",
  invoice: "الفواتير", analytics: "التحليلات", automation: "الأتمتة",
  settings: "الإعدادات", security: "الأمان", help: "المساعدة", search: "بحث",
  filter: "تصفية", sort: "ترتيب", export: "تصدير", orders: "الطلبات",
  revenue: "إجمالي الإيرادات", avgOrder: "متوسط قيمة الطلب", sales: "نظرة على المبيعات",
  increased: "زيادة", subs: "إجمالي المشتركين", dist: "توزيع المبيعات",
  integ: "قائمة التكاملات", seeAll: "عرض الكل", app: "التطبيق", type: "النوع",
  rate: "النسبة", profit: "الربح", website: "الموقع", mobile: "تطبيق الجوال",
  other: "أخرى", upgrade: "ترقية الخطة", team: "الفريق", marketing: "التسويق",
  customize: "تخصيص", color: "اللون الأساسي", font: "الخط", purple: "بنفسجي",
  blue: "أزرق", green: "أخضر", beta: "تجريبي", monthly: "شهري", weekly: "أسبوعي",
  range: "18 أكتوبر - 18 نوفمبر", finance: "مالية", crm: "إدارة العملاء",
  market: "سوق", copy: "© 2023 Nexus.io", theme: "تبديل المظهر", language: "اللغة", navigation: "التنقل الرئيسي",
  retry: "إعادة المحاولة", loading: "جارٍ التحميل",
  loadError: "تعذّر تحميل البيانات. تحقق من اتصالك وحاول مرة أخرى.",
  days: ["أحد", "اثن", "ثلا", "أرب", "خمي", "جمع", "سبت"],
  months: ["أكتوبر", "نوفمبر", "ديسمبر"],
  regions: ["الصين", "الإمارات", "أمريكا", "كندا", "أخرى"],
};

export const translations = { en, ar };

export type Language = keyof typeof translations;

export type TranslationKey = {
  [K in keyof Dictionary]: Dictionary[K] extends string ? K : never;
}[keyof Dictionary];

export type TranslationListKey = {
  [K in keyof Dictionary]: Dictionary[K] extends string[] ? K : never;
}[keyof Dictionary];
