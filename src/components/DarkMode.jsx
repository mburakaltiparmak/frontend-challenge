import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../store/actions/actions';
import useLocalStorage from '../hooks/useLocalStorage';
import axios from 'axios';
   export const useDarkMode = () => {
        const [darkModeLocal, setDarkModeLocal] = useLocalStorage('darkmode', "");
        /*const [darkMode,setDarkMode]=useState(darkModeLocal);*/
        const darkMode=useSelector(state=>state.darkMode);
        const dispatch=useDispatch();

        const darkModeHandler = () => {
        const newDarkMode = !darkMode;
          dispatch(toggleDarkMode());
          setDarkModeLocal(darkMode);
          console.log("dark mode çalıştı",newDarkMode);
          sendDarkMode(darkMode);
        }
        const sendDarkMode = (newDarkMode) => {
            axios.post('https://65c2b9b1f7e6ea59682baba9.mockapi.io/challenge/darkmode', { darkMode:newDarkMode })
              .then((response) => {
                console.log('Dark mode state gönderimi başarılı', response.data);
              })
              .catch((error) => {
                console.error('Dark mode hatası', error);
              });
          };
          /*
          useEffect(() => {
            
            setDarkMode(darkModeLocal);
          }, [darkModeLocal]);
        */
          useEffect(() => {
    
            fetchDarkModeState();
          }, []);
          const fetchDarkModeState = () => {
            axios.get('https://65c2b9b1f7e6ea59682baba9.mockapi.io/challenge/darkmode')
              .then((response) => {
                const darkModeSituation = response.data;
                console.log("Dark Mode : ", darkModeSituation);
                
              })
              .catch((error) => {
                console.error('Dark mode alınırken hata oluştu.', error);
              });
          };
        return {darkMode,darkModeHandler};
    }
