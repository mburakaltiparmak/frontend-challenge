import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    // ilk açılışta localstorage okuyoruz
    const localVal = JSON.parse(localStorage.getItem(key));
    if (localVal === null) {
      // boşsa default değeri, localStorage'a atıyoruz
      // aynı değeri dönüyoruz
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    } else {
      // localstorage boş değilse
      // localStorage'da depolanan değeri dönüyoruz
      return localVal;
    }
  });
  // value değiştiğinde localstorage'a yazıyoruz
  // ve yeni değeri dönüyoruz
  const setLocalStorage = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };
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

  return [value, setLocalStorage];
}
