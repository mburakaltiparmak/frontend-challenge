import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faCodepen, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import "../style/Contact.css";
import { useDarkModeSwitch } from "./DarkModeSwitch";
import {useDarkMode} from "./DarkMode";
const Contact = (props) => {
  const {t}=props;
  const {darkMode}=useDarkMode();
  /*const {contactClass,anchorClass} = useDarkModeSwitch();*/
  const icons = [
    { icon: faTwitter, className: ' w-[25px] h-[25px]', link: 'https://twitter.com/phantasticum_' },
    { icon: faCodepen, className: ' w-[25px] h-[25px]', link: 'https://codepen.io' },
    { icon: faAt, className: ' w-[25px] h-[25px]', link: 'mailto:mburakaltiparmak@gmail.com' },
    { icon: faInstagram, className: ' w-[25px] h-[25px]', link: 'https://instagram.com/phantasticum_' }
  ];

  return (
    <div className={darkMode ? "bg-[#252128] text-[#8F88FF]" : "bg-white text-[#4731D3]" } id="contact-container">
      <section id="contact-section">
        <label id="contact-title">
          <h2>{t("14")}</h2>
        </label>
        <label id="contact-paragraph">
          <p id="anchor-contact" className={darkMode?"text-white":"text-black"}>{t("15")}</p>
        </label>
        <label id="contact-mail">
          <a className='text-[16px] underline' href="mailto:mburakaltiparmak@gmail.com">mburakaltiparmak@gmail.com</a>
        </label>
        <label id="contact-img">
          <div className='ICONSSS flex flex-wrap gap-5'>
            {icons.map((iconObject, index) => (
              <a key={index} href={iconObject.link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={iconObject.icon} className={iconObject.className} />
              </a>
            ))}
          </div>
        </label>
      </section>
    </div>
  );
};

export default Contact;
