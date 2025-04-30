import React, { useState, useEffect } from "react";
import Header from "../organisms/Header"
import Footer from '../organisms/Footer';
import Hero from "../organisms/Hero";
import Services from "../organisms/Services"
import EnglishBase from "../languages/English"
import SpanishBase from "../languages/Spanish"

function HomePage () {

  const [language, setLanguage] = useState(EnglishBase)
  const [currentLang, setCurrentLang] = useState("EN")

  function updateLanguage() {
    if (currentLang === "EN") {
      setLanguage(SpanishBase)
      setCurrentLang("ES")
    }
    else {
      setLanguage(EnglishBase)
      setCurrentLang("EN")
    }
  }


  return (
    <>
    <Header menu={language.menu} onChangeLanguage={updateLanguage} lang={currentLang} />
    <Hero content={language.hero} />
    <Services />
    <Footer />
    </>
  );
};

export default HomePage
