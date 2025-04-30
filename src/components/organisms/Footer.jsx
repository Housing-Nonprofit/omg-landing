import React from "react";
import logo from "./../../assets/webwave_logo_white.png";


const Footer = () => {
  return (
    
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
    <aside>
    <img
            className="size-10"
            src={logo}
            alt=""
          />
      <p className="font-bold">
        Webwave Solutions
      </p>
      <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
    </aside>
  </footer>
  );
};

export default Footer;
