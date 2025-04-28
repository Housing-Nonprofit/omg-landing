import React from "react";
import Button from "./../atoms/Button";

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Webwave Solutions</a>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-vertical lg:menu-horizontal">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
