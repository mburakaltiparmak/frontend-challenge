import React, { useEffect, useState } from "react";
import DarkModeContainer from "./DarkModeContainer";
import "../style/Header.css";
import githubSvg from "../assets/svg-img/brand/github.svg";
import linkedinSvg from "../assets/svg-img/brand/linkedin.svg";
import headerImage from "../assets/foto.png";
import axios from "axios";
import {resources} from '../i18n';
import { useLanguageSwitch } from "./LanguageSwitch";
import useLocalStorage from "../hooks/useLocalStorage";
import { useDarkModeSwitch } from "./DarkModeSwitch";
import { useDarkMode } from "./DarkMode";

const Header = (props) => {
  const {t} = props;
  const {languageClickHandler, switchButtonText } = useLanguageSwitch();
  const {darkMode}=useDarkMode();
  
  /*const {headerClass,buttonClass,darkModeFromServer} = useDarkModeSwitch;*/
  /*
  const [langMode, setLangMode] = useLocalStorage("language", "");
  const languageClickHandler = () => {
    const newLang = lang === "tr" ? "en" : "tr";
    setLang(newLang);
    i18nStart(newLang);
    setLangMode(newLang);
    sendText();
    console.log("mevcut dil", newLang);
  };
  const switchButtonText = () => {
    if (lang === "tr") {
      return "SWITCH TO ENGLISH";
    } else if (lang === "en") {
      return "TÜRKÇE'YE GEÇ";
    }
  };
  const i18nStart = async lang => {
    await i18n.changeLanguage(lang);
          
  }
  const [text, setText] = useState("");
  const [lang, setLang] = useState("tr");

  const sendText = () => {
    axios.post("https://65c2b9b1f7e6ea59682baba9.mockapi.io/challenge/text", resources).then((res) => {
      console.log("Metin gönderimi başarılı.", res.data);
      getText();
    }).catch((err) => {
      console.error("Metin gönderimi başarısız.", err);
    })
  }

  const getText = () => {
    axios.get("https://65c2b9b1f7e6ea59682baba9.mockapi.io/challenge/text").then((res) => {
      console.log("Metin alma başarılı.", res.data);
      if (lang === "en") {
        setText(resources.en.translation);
        console.log("metin", text);
      }
      else {
        setText(resources.tr.translation);
        console.log("metin", text);
      }
    }).catch((err) => {
      console.error(err);
    })
  }
  */

  return (
    <>
      <header id="header-container" className={darkMode ? "dark-header" : "light-header"}>
        <section id="header-section">
          <div id="header-text-container">
            <h2 className={darkMode ? "text-[#4731D3] text-[24px] font-bold" : "text-[#CBF281] text-[24px] font-bold"} id="header-title">Burak</h2>
            <h1 className={darkMode ? "text-[#4731D3] text-[54px] font-bold"  :"text-[#CBF281] text-[54px] font-bold"} id="header-second-title">{t("1")}</h1>
            <p className="text-[20px] font-normal text-[white]" id="paragraph">{t("2")}</p>
            <div id="header-button-container">
              <a href="https://github.com/mburakaltiparmak" target="_blank" rel="noopener noreferrer" className={darkMode ? "dark-button" : "light-button" } id="header-button">
                <img src={githubSvg} alt="github" className="w-5 h-5 m-2" />
                <p>Github</p>
              </a>
              <a href="https://www.linkedin.com/in/mburakaltiparmak/" target="_blank" rel="noopener noreferrer" className={darkMode ? "dark-button" : "light-button" } id="header-button">
                <img src={linkedinSvg} alt="linkedin" className="w-5 h-5 m-2" />
                <p>Linkedin</p>
              </a>
            </div>
          </div>
          <div id="header-img-container">
            <div id="darkmode-container">
              <a className="text-[#CBF281] text-[12px] font-bold" id="dil-change" onClick={languageClickHandler}>{switchButtonText()}</a>
              <DarkModeContainer  />
            </div>
            <img id="header-img" src={headerImage} alt="" />
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
