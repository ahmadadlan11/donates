import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import qs from "query-string";

const resources = {
  en: {
    translation: {
      longDescription:
        "Solus offers cutting edge electronic payment solutions in Sudan. We offer, noebs, a free and open source payment gateway to run your businesses.",
      shortDescription:
        "Solus offers cutting edge electronic payment solutions in Sudan.",

      error: {
        400: "required fields are missing",
        500: "Server Error",
        502: "EBS Error",
        502: "EBS unreachable",
      },
    },
  },
  ar: {
    translation: {
      longDescription:
        "Solus توفر احدث حلول الدفع الإلكتروني في السودان " +
        "ونوفر ايضا noebs وهو بوابة دفع مفتوحة المصدر.",
      shortDescription: "Solus توفر احدث حلول الدفع الإلكتروني في السودان",

      "welcome to": "مرحـبـا بـك",
      "Are you sure ?": "هل انت متأكد؟",

      PAN: "رقم البطاقة",
      PIN: "الرقم السري",
      "Expire Date": "تاريخ الإنتهاء",

      "PAN should be 16 or 19 digits": "رقم البطاقة يتكون من 16 او 19 رقم",
      Pay: "دفع",
      SDG: "جنية سوداني",
      To: "إلى",
      Confirm: "تأكيد",
      Cancel: "إلغاء",
      Submit: "إرسال",
      error: {
        400: "بعض الحقول المطلوبة مفقودة",
        500: "خطأ في الخادم",
        502: "خطأ في EBS",
        502: "لا يمكن الوصول إلى EBS",
      },

      "Invalid input": "إدخال خاطئ",

      "Payment was successful": "تم الدفع بنجاح",
    },
  },
};

const Language = ["en", "ar"];

i18n.use(initReactI18next).init({
  resources,
  lng: qs.parse(window.location.search).lang === "ar" ? "ar" : "en",
  debug: false,
  supportedLngs: Language,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
