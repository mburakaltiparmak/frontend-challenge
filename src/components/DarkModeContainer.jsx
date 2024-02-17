import React, { useState } from "react";
import {useDarkModeSwitch} from "./DarkModeSwitch";
import { useDarkMode } from "./DarkMode";
const DarkModeContainer = (props) => {
const {darkMode,darkModeHandler}=useDarkMode();
  /*const [isChecked, setIsChecked] = useState(darkMode);*/
  /*
  const {darkModeHandler} = useDarkModeSwitch();
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    darkModeHandler(); 
  };
*/
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        data-testid="darkMode-toggle"
        checked={darkMode}
        onChange={darkModeHandler}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className={darkMode ? "ms-3 text-[#CBF281] text-[12px] font-bold" : "ms-3 text-[#4731D3] text-[12px] font-bold" }>
          {darkMode ? 'DARK MODE' : 'LIGHT MODE'}
        </span>
    </label>
  );
};

export default DarkModeContainer;
