import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const init_i18 = () => {
	i18n.
		use(Backend)
		.use(LanguageDetector)
		.use(initReactI18next)
		.init({
			lng: "he",
			debug: true,
		})
}

export default init_i18;