import React from "react";
import "../style/Profile.css";
import profileImg from "../assets/profile-foto.png";
import { useDarkModeSwitch } from "./DarkModeSwitch";
import {useDarkMode} from "./DarkMode";
const Profile = (props) => {
  const {darkMode}=useDarkMode();
  const {t}=props;
  /*const {profileClass} = useDarkModeSwitch();*/
  return (<div className={darkMode ? "bg-[#171043]" : "bg-[#4731D3]"} id="profile-container">
    <div id="text-container">
      <section id="section1">
    <h2 className="text-[48px] text-[#CBF281] font-bold" id="profile-title">{t("4")}</h2>
    </section>
    <section className="text-white" id="section2">
      <section id="section2-1">
    <h3 className="text-[30px] font-normal" id="info">{t("5")}</h3>
    <div  className="text-[18px] " id="blok1">
    <div className="text-[#CBF281] font-semibold" id="sutun1">
    <p>{t("6")}</p>
    <p>{t("7")}</p>
    <p>{t("8")}</p>
    <p>{t("9")}</p>
    </div>
    <div id="sutun2">
      <p>10.12.1996</p>
      <p>Kayseri</p>
      
      <p>{t("10")}</p>
      
      <p>Frontend,UI</p>
    </div>
    </div>
    </section>
    <div id="blok3">
    <img id="profile-image" src={profileImg} alt="" />
    </div>
    <div className="text-[16px]" id="blok2">
    <section id="section2-2">
    <h3 className="text-[30px] font-normal" id="about">{t("11")}</h3>
    <label id="paragraf">
    <p>Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...</p>
    <p>Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...</p>
    </label>
    </section>
    </div>
    </section>
    </div>
  </div>);
};
export default Profile;
