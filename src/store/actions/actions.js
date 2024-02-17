import axios from "axios";
import i18n, { resources } from "../../i18n";

export const DARK_MODE = "DARK_MODE";
export const DIL_DEGISTIR = "DIL_DEGISTIR";

export function toggleDarkMode() {
  return { type: DARK_MODE };
}

export function changeLanguage(lang) {
  return { type: DIL_DEGISTIR, payload: lang };
}

export function sendText() {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://65c2b9b1f7e6ea59682baba9.mockapi.io/challenge/text",
        resources
      );
      console.log("Metin gönderimi başarılı.", response.data);
      dispatch(getText());
    } catch (error) {
      console.error("Metin gönderimi başarısız.", error);
    }
  };
}

export function getText() {
  return async (dispatch, getState) => {
    try {
      const { lang } = getState();
      const response = await axios.get(
        "https://65c2b9b1f7e6ea59682baba9.mockapi.io/challenge/text"
      );
      console.log("Metin alma başarılı.", response.data);
      if (lang === "en") {
        dispatch({ type: "SET_TEXT", payload: response.data.en.translation });
      } else {
        dispatch({ type: "SET_TEXT", payload: response.data.tr.translation });
      }
    } catch (error) {
      console.error(error);
    }
  };
}
