import React, { useState, useEffect } from "react";
import Header from "../organisms/Header"
import Footer from '../organisms/Footer';

function ServicesPage ({ updateLanguage, lang }) {

  return (
    <>
    <Header onChangeLanguage={updateLanguage} lang={lang} />
    <Footer />
    </>
  );
};

export default ServicesPage
