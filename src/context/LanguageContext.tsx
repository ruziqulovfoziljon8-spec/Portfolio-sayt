import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Lang = "uz" | "en";

type Translations = {
  [key: string]: { uz: string; en: string };
};

// Barcha sayt matnlarini shu yerga qo'shib boring.
// Yangi matn qo'shish uchun: key: { uz: "...", en: "..." }
export const translations: Translations = {
  // ---- Navbar / Sidebar ----
  home: { uz: "Bosh sahifa", en: "Home" },
  about: { uz: "Haqida", en: "About" },
  projects: { uz: "Loyihalar", en: "Projects" },
  contact: { uz: "Bog'lanish", en: "Contact" },

  email: { uz: "Email", en: "Email" },
  github: { uz: "Github", en: "Github" },
  telegram: { uz: "Telegram", en: "Telegram" },
  phone: { uz: "Telefon", en: "Phone" },
  role: { uz: "FRONTEND DEVELOPER", en: "FRONTEND DEVELOPER" },

  // ---- Bosh sahifa ----
  home_badge: {
    uz: "Veb-dasturchi & UI/UX Dizayner",
    en: "Web Developer & UI/UX Designer",
  },
  home_greeting: { uz: "Assalomu alaykum, Men", en: "Hello, I'm" },
  home_name: { uz: "Foziljonman", en: "Foziljon" },
  home_desc: {
    uz: "Veb-saytlar va raqamli mahsulotlar yaratish orqali foydalanuvchilar muammolariga zamonaviy yechimlar taqdim etaman.",
    en: "I build websites and digital products, delivering modern solutions to users' problems.",
  },
  home_btn_projects: { uz: "Loyihalarim", en: "My Projects" },
  home_btn_contact: { uz: "Bog'lanish", en: "Contact" },

  // ---- Haqida ----
  about_title: { uz: "Men haqimda", en: "About Me" },
  about_p1: {
    uz: "Men Ro'ziqulov Foziljon veb dasturchisiman. Yoshim 21 da, Buxoro viloyati Qorakol tumanida tug'ilganman. Qiziqarli, ko'p funksionallika ega bo'lgan va kuchli dizaynga ega bo'lgan dasturlar yaratishga qiziqaman.",
    en: "I am Ro'ziqulov Foziljon, a web developer. I am 21 years old, born in the Qorako'l district of Bukhara region. I'm passionate about building engaging, feature-rich applications with strong design.",
  },
  about_p2: {
    uz: "Mening vazifam veb saytni foydalanuvchilarga qulay, sayt dizayni foydalanuvchilarga jalb qiluvchi lekin ayni paytda tezkor bo'lishini taminlashdir!",
    en: "My mission is to make websites convenient for users — with an engaging design that's also fast at the same time!",
  },
  tools_title: { uz: "Asbob-uskunalar", en: "Tools" },
  abilities_title: { uz: "Nimalar qila olaman", en: "What I Can Do" },
  clients_title: { uz: "Mijozlar", en: "Clients" },

  ability_seo_title: { uz: "SEO", en: "SEO" },
  ability_seo_desc: {
    uz: "Qidiruv tizimining natijalarida sayt reytingini yaxshilash",
    en: "Improving the site's ranking in search engine results",
  },
  ability_design_title: { uz: "Dizayn", en: "Design" },
  ability_design_desc: {
    uz: "Kuchli dizayn va kichik detallargacha e'tibor berish",
    en: "Strong design with attention to the smallest details",
  },
  ability_quality_title: { uz: "Sifat", en: "Quality" },
  ability_quality_desc: {
    uz: "Yuqori darajada saytlarni sifatli ishlab chiqish",
    en: "Developing high-quality websites to a high standard",
  },
  ability_speed_title: { uz: "Tezkorlik", en: "Speed" },
  ability_speed_desc: {
    uz: "Qisqa muddat ichida tezkor sayt ishlab chiqish",
    en: "Building fast websites in a short amount of time",
  },

  // ---- Bog'lanish ----
  contact_email_title: { uz: "E-pochta", en: "E-mail" },
  contact_form_title: { uz: "So'rov yuborish", en: "Send a Request" },
  form_name_label: { uz: "Ismingiz*", en: "Your Name*" },
  form_email_label: { uz: "Manzilingiz (Email)*", en: "Your Email*" },
  form_message_label: { uz: "Izohingiz*", en: "Your Message*" },
  form_name_placeholder: { uz: "Ismingizni kiriting", en: "Enter your name" },
  form_email_placeholder: { uz: "Email@example.com", en: "Email@example.com" },
  form_message_placeholder: {
    uz: "Xabarlaringizni shu yerga yozing...",
    en: "Write your message here...",
  },
  form_sending: { uz: "Yuborilmoqda...", en: "Sending..." },
  form_submit: { uz: "Yuborish", en: "Submit" },
  form_success: {
    uz: "✅ So'rov muvaffaqiyatli yuborildi! Tez orada bog'lanamiz.",
    en: "✅ Your request has been sent successfully! We'll contact you soon.",
  },
  form_error_prefix: { uz: "Xatolik yuz berdi: ", en: "An error occurred: " },

  // ---- Loyihalar ----
  projects_title_prefix: { uz: "Mening", en: "My" },
  projects_title_highlight: { uz: "Loyihalarim", en: "Projects" },
  projects_search_placeholder: {
    uz: "Texnologiya yoki nom bo'yicha qidirish...",
    en: "Search by technology or name...",
  },
  projects_status_active: { uz: "ACTIVE", en: "ACTIVE" },
  projects_not_found_title: {
    uz: "Bunday ma'lumot mavjud emas",
    en: "No results found",
  },
  projects_not_found_desc_prefix: {
    uz: 'Kechirasiz, "',
    en: 'Sorry, no project or technology was found matching "',
  },
  projects_not_found_desc_suffix: {
    uz: "\" kalit so'zi bo'yicha hech qanday loyiha yoki texnologiya topilmadi.",
    en: '".',
  },
};

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    return saved === "en" || saved === "uz" ? saved : "uz";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
  };

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang];
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
