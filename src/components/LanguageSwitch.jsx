import axios from "axios";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { resources } from '../i18n';
import i18n from '../i18n';
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../store/actions/actions";
import { useTranslation } from 'react-i18next';

export const useLanguageSwitch = () => {
  const [text, setText] = useState("");
  const [langMode, setLangMode] = useLocalStorage("language", "");
  const [lang, setLang] = useState("tr");
  const { t, i18n } = useTranslation();

  const languageClickHandler = async () => {
    const newLang = lang === "tr" ? "en" : "tr";
    setLang(newLang);
    i18nStart(newLang);
    setLangMode(newLang);
    await sendText();
    console.log("mevcut dil", newLang);
    await wait(3000); // 3 saniye beklet
    await getText();
  };

  const switchButtonText = () => {
    return lang === "tr" ? "SWITCH TO ENGLISH" : "TÜRKÇE'YE GEÇ";
  };

  const i18nStart = async (lang) => {
    await i18n.changeLanguage(lang);
  };

  const sendText = async () => {
    try {
      const response = await axios.post(
        "https://65c2b9b1f7e6ea59682baba9.mockapi.io/challenge/text",
        resources
      );
      console.log("Metin gönderimi başarılı.", response.data);
    } catch (err) {
      console.error("Metin gönderimi başarısız.", err);
    }
  };

  const getText = async () => {
    try {
      const response = await axios.get("https://65c2b9b1f7e6ea59682baba9.mockapi.io/challenge/text");
      console.log("Metin alma başarılı.", response.data);
      const translationData = response.data;
      if (lang === "en") {
        setText(translationData.resources.en.translation);
        console.log("metin", text);
      } else {
        setText(translationData.resources.tr.translation);
        console.log("metin", text);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const wait = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return { languageClickHandler, switchButtonText };
};
