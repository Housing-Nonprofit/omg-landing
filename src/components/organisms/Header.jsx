import React from "react";
import { LangSwitch } from "../atoms/ModeSwitch";
import logo from "./../../assets/OM_logo.png";
import getLanguage from "../functions/Languajes";
import { goToElement } from "../functions/Navigation";


const Header = ({ onChangeLanguage, lang }) => {
  const language = getLanguage(lang)
  const menu = language.menu

  return (
    <>
      <div className="navbar shadow-sm h-[6dvh] w-full md:max-w-7xl m-auto md:px-5">
        <div className="navbar-start w-full">
          <img
            className="size-10 portrait:m-auto"
            src={logo}
            alt=""
          />
          <a className="ml-5 font-semibold text-xl portrait:hidden" href="/">Owners Media Group</a>
        </div>
        <div className="navbar-end portrait:hidden">
          <ul className="menu menu-vertical lg:menu-horizontal">
            {menu.map((item) => {
              return (
                <li key={item.title}>
                  <button onClick={() => goToElement(item.url)}>{item.title}</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
