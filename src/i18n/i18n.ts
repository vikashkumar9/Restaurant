// src/i18n/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to the application",
      logout: "Logout",
      login: "Login",
      homeTitle: "Welcome to the Homepage",
      achieving: "Achieving Perfection Every Day",
      whatLook: "What are You looking for",
      ourWork: "Our Works",
      knowAbout: "KNOW MORE ABOUT US",
      aboutUs: " About Us..",
      loremOne:
        "Lorem ipsum dolor sit amet, vel te nulla dicam. Ad sea omnis efficiantur, nominati evertitur est an. Mei magna mutat ridens cu. Te est quot assentior, et odio nibh graeco nec.",
      loremTwo:
        " An minim qualisque vix, fastidii recusabo has ex. Ius an discere ornatus delectus, in dicit omnesque imperdiet eam, ex eam elitr scaevola. Esse ridens eam te, in nec perpetua dissentiet. Alia neglegentur id sit, et fabulas volumus definiebas sea.",
      loremThree:
        "Ea eum numquam recteque, nam quod omittam necessitatibus cu.Nostrud electram est ea, vis eu quod natum. No pri percipit  gubergren expetendis. His libris omnesque praesent ea, mei ad nibh solum mentitum, ut purto fuisset mentitum pro. Sed cu facer   invenire, vis at probatus singulis reformidans, ea nonumes feugait indoctum vis.",
      reallyDo: " What We Really Do",
      ourvision: "Our Vision",
      send: "SEND",
      website: "Website",
      home: "Home",
      about: "About",
      Service: "Service",
      portfolio: "Portfolio",
      contact: "Contact",
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue dans l'application",
      logout: "Se déconnecter",
      login: "Connexion",
      homeTitle: "Bienvenue sur la page d'accueil",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });

export default i18n;
