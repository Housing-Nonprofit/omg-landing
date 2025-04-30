import React from "react";

const Footer = () => {
  return (
    
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
    <aside>
    <img
            className="size-10"
            src="../src/assets/webwave_logo_white.png"
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
