import { DARK_MODE, DIL_DEGISTIR } from "../actions/actions";
const initialState = {
  darkMode: null,
  lang: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE: {
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    }
    case DIL_DEGISTIR: {
      return {
        ...state,
        lang: action.payload,
      };
    }
    default:
      return state;
  }
};
export default reducer;
