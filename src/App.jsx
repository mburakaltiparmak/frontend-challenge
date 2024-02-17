import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';
import React, { useEffect,useState } from 'react';
import './App.css'
import axios from 'axios';
import useLocalStorage from './hooks/useLocalStorage';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

function App() {
  
  

  
  const {t,i18n} = useTranslation();
//Dark Mode Stateleri
//header
/*
const [headerClass, setHeaderClass] = useState("");
  const [buttonClass,setButtonClass]=useState("");
 //skills
  const [skillsClass,setSkillsClass]=useState("");
  const [logoClass,setLogoClass]=useState("")
//profile
  const [profileClass,setProfileClass]=useState("");
//project
  const [projectClass,setProjectClass]=useState("");
  const [sectionClass,setSectionClass]=useState("");
  const [textClass,setTextClass]=useState("");
  const [buttonProjectClass,setButtonProjectClass]=useState("");
  const [anchorClass,setAnchorClass]=useState("");
//contact
  const [contactClass,setContactClass]=useState("");
//
  const [darkModeFromServer, setDarkModeFromServer] = useState(false);

 useEffect(() => {
    const updateHeaderClass = () => {
      if (darkMode) {
        setHeaderClass("dark-header");
        setButtonClass("dark-button");
        setSkillsClass("dark-skills");
        setLogoClass("dark-logo");
        setProfileClass("dark-profile");
        setProjectClass("dark-project");
        setSectionClass("dark-section");
        setTextClass("dark-text");
        setButtonProjectClass("dark-button-projects");
        setAnchorClass("dark-anchor");
        setContactClass("dark-contact");
      } else {
        setHeaderClass("light-header");
        setButtonClass("light-button");
        setSkillsClass("light-skills");
        setLogoClass("light-logo");
        setProfileClass("light-profile");
        setProjectClass("light-project");
        setSectionClass("light-section");
        setTextClass("light-text");
        setButtonProjectClass("light-button-projects");
        setAnchorClass("light-anchor");
        setContactClass("light-contact");
      }
    };

    updateHeaderClass();
  }, [darkMode]);


  

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
    sendDarkMode(!darkMode); 
  };

  const sendDarkMode = (darkMode) => {
    axios.post('https://65c2b9b1f7e6ea59682baba9.mockapi.io/challenge/darkmode', { darkMode })
      .then((response) => {
        console.log('Dark mode state gönderimi başarılı', response.data);
      })
      .catch((error) => {
        console.error('Dark mode hatası', error);
      });
  };

  const fetchDarkModeState = () => {
    axios.get('https://65c2b9b1f7e6ea59682baba9.mockapi.io/challenge/darkmode')
      .then((response) => {
        const darkModeSituation = response.data;
        console.log("Dark Mode : ", darkModeSituation);
        setDarkModeFromServer(darkModeSituation);
      })
      .catch((error) => {
        console.error('Dark mode alınırken hata oluştu.', error);
      });
  };
*/
  return (
    
      <div
        id="main-container">
        <Header  t={t}/>
        <Skills t={t} />
        <Profile t={t} />
        <Projects t={t} />
        <Contact t={t} />
      </div>
    
  )
}

export default App;
