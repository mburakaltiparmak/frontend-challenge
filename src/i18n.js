import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
  tr: {
    translation: {
      1: "Ben bir Frontend Geliştiriciyim...",
      2: "Sağlam ve ölçeklenebilir kullanıcı deneyimleri sunan Frontend ürünleri oluşturmayı seven biriyim...",
      3: "Beceriler",
      4: "Profil",
      5: "Temel Bilgiler",
      6: "Doğum Tarihi",
      7: "İkamet Şehri",
      8: "Eğitim",
      9: "Tercih Ettiği Rol",
      10: "Erciyes Üni. Mak. Müh. (YL)",
      11: "Hakkımda",
      12: "Projeler",
      13: "Siteyi görüntüle",
      14: "Bana bir mesaj gönder!",
      15: "Bir sorun veya teklifin mi var, ya da sadece selam mı vermek istiyorsun? Devam et.",
    },
  },
  en: {
    translation: {
      1: "I am a Frontend Developer...",
      2: "...who likes to craft solid and scalable frontend products with great user experiences",
      3: "Skills",
      4: "Profile",
      5: "Basic Information",
      6: "Birth of Date",
      7: "Location",
      8: "Education",
      9: "Preferred Role",
      10: "Erciyes Uni. Mech.Eng. (MSc)",
      11: "About Me",
      12: "Projects",
      13: "View Site",
      14: "Send me a message!",
      15: "Got a question or proposal, or just want to say hello? Go ahead.",
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "tr",
  resources: resources,
});

export default i18n;
