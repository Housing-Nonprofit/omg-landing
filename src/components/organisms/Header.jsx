import React from "react";
import { LangSwitch } from "../atoms/ModeSwitch";
import logo from "./../../assets/webwave_logo_black.png";


const Header = ({ menu, onChangeLanguage, lang }) => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <img
            className="size-10"
            src={logo}
            alt=""
          />
          <a className="btn btn-ghost text-xl">Webwave Solutions</a>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-vertical lg:menu-horizontal">
            {menu.map((item) => {
              return (
                <li key={item.title}>
                  <a href={item.url}>{item.title}</a>
                </li>
              );
            })}
          </ul>
          < LangSwitch onChangeLanguage={onChangeLanguage} lang={lang} />
        </div>
      </div>
    </>
  );
};

export default Header;
