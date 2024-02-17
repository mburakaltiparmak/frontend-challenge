import React from "react";
import "../style/Projects.css";
import workintechImg from "../assets/projects-foto.png";
import journeyImg from "../assets/journey-foto.png";
import {useDarkMode} from "./DarkMode";
import { useDarkModeSwitch } from "./DarkModeSwitch";
const Projects = (props) => {
  /*const {projectClass,sectionClass,textClass,buttonProjectClass,anchorClass} = useDarkModeSwitch();*/
  const {darkMode}=useDarkMode();
  const {t}=props;
  return (<div className={darkMode ? "bg-[#1A210B] text-[#CBF281]" : "bg-[#CBF281] text-[#4731D3]"} id="projects-container">
    <section  id="main-section">
      <span id="projects-title-span">
    <h2 className="text-[48px]  font-bold" id="projects-title">{t("12")}</h2>
    </span>
    <div className={darkMode ? "bg-[#2B2727] text-[#C1BAED]" : "bg-white text-[#4731D3]"} id="workintech">
    <img id="projects-img" src={workintechImg} alt="" />
      <section id="projects-text-section">
      <h3 className="font-bold text-[32px] " id="projects-h3">Workintech</h3>
      <p className={darkMode ? "text-white" : "text-[#383838]"} id="projects-p">Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...</p>
      <section className="text-white" id="projects-button-section">
      <label id="button-label">
      <button className={darkMode ? "bg-[#8173DA]" : "bg-[#4731D3]"}  id="button">react</button>
      <button className={darkMode ? "bg-[#8173DA]" : "bg-[#4731D3]"} id="button">redux</button>
      <button className={darkMode ? "bg-[#8173DA]" : "bg-[#4731D3]"} id="button">vercel</button>
      </label>
      <label className="text-[16px] text-black underline" id="anchor-label">
      <a className={darkMode?"text-white":"text-black"} id="anchor" href="/">{t("13")}</a>
      <a className={darkMode?"text-white":"text-black"} id="anchor" href="/">Github</a>
      </label>
      </section>
      </section>
    </div>
    <div className={darkMode ? "bg-[#2B2727] text-[#C1BAED]":"bg-white text-[#4731D3]"} id="journey">
      <img id="projects-img" src={journeyImg} alt="" />
      <section id="projects-text-section">
      <h3 className="font-bold text-[32px] " id="projects-h3">Journey</h3>
      <p className={darkMode?"text-white":"text-[#383838]"} id="projects-p">Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...</p>
      <section className="text-white"  id="projects-button-section">
      <label id="button-label">
      <button className={darkMode ? "bg-[#8173DA]" : "bg-[#4731D3]"}  id="button">react</button>
      <button className={darkMode ? "bg-[#8173DA]" : "bg-[#4731D3]"} id="button">redux</button>
      <button className={darkMode ? "bg-[#8173DA]" : "bg-[#4731D3]"} id="button">vercel</button>
      </label>
      <label className="text-[16px] text-black underline" id="anchor-label">
      <a className={darkMode?"text-white":"text-black"} href="/">{t("13")}</a>
      <a className={darkMode?"text-white":"text-black"} href="/">Github</a>
      </label>
      </section>
      </section>
    </div>
    </section>
  </div>);
};
export default Projects;
