import React from "react";
import { LangSwitch } from "../atoms/ModeSwitch";
import logo from "./../../assets/webwave_logo_black.png";
import getLanguage from "../functions/Languajes";


const Header = ({ onChangeLanguage, lang }) => {
  const language = getLanguage(lang)
  const menu = language.menu

  return (
    <>
      <div className="navbar shadow-sm h-[6dvh]">
        <div className="navbar-start portrait:w-full">
          <img
            className="size-10 portrait:m-auto"
            src={logo}
            alt=""
          />
          <a className="ml-5 font-semibold text-xl portrait:hidden" href="/">Webwave Solutions</a>
        </div>
        <div className="navbar-end portrait:hidden">
          <ul className="menu menu-vertical lg:menu-horizontal">
            {menu.map((item) => {
              return (
                <li key={item.title}>
                  <a href={item.url}>{item.title}</a>
                </li>
              );
            })}
          </ul>
          < LangSwitch onChangeLanguage={onChangeLanguage} language={language.opposite} />
        </div>
      </div>
    </>
  );
};

export default Header;
