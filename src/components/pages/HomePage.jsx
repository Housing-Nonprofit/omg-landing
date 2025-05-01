import React, { useState, useEffect } from "react";
import Header from "../organisms/Header"
import Footer from '../organisms/Footer';
import Hero from "../organisms/Hero";
import HomePageServicesList from "../organisms/HomePageServices"
import EnglishBase from "../languages/English"
import SpanishBase from "../languages/Spanish"

function HomePage ({ updateLanguage, lang }) {

  return (
    <>
    <Header onChangeLanguage={updateLanguage} lang={lang} />
    <Hero lang={lang} />
    <HomePageServicesList lang={lang} />
    <Footer />
    </>
  );
};

export default HomePage
