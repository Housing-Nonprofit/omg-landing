import React from "react";
import logo from "./../../assets/OM_logo.png";


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
        Owners Media Group
      </p>
      <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
    </aside>
  </footer>
  );
};

export default Footer;
