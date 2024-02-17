import React from "react";
import { useDarkMode } from "./DarkMode";
import "../style/Skills.css"

const Skills = (props) => {
  /*const {skillsClass,logoClass} = useDarkModeSwitch;*/
  const {darkMode}=useDarkMode();
  const {t}=props;
  return (<div className={darkMode ? "bg-[#2B2727] text-[#CBF281]" : "bg-white text-[#4832D3]"} id="skills-container">
    <section id="skills-section">
    <h2 className="text-[48px] font-bold" id="title">{t("3")}</h2>
    <div className={darkMode ? "text-white" : "text-black"} id="logo-container">
    <p><img id="img-id" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"></img>JAVASCRIPT</p>
    <p><img id="img-id" src="https://vistaran-tech.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/05/13104926/nodejs-logo.png"></img>NODE</p>
    <p><img id="img-id" src="https://www.cdnlogo.com/logos/r/85/react.svg"></img>REACT</p>
    <p><img id="img-id" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"></img>VS CODE</p>
    <p><img id="img-id" src="https://cdn.worldvectorlogo.com/logos/redux.svg"></img>REDUX</p>
    <p><img id="img-id" src="https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png"></img>FIGMA</p>
    </div>
    </section>
  </div>);
};
export default Skills;
