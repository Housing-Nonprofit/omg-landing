import React, { useState, useEffect } from "react";
import Header from "../../organisms/Header"
import Footer from '../../organisms/Footer';
import Hero from "../../organisms/HomePage/Hero";
import HomePageServicesList from "../../organisms/HomePage/Services"
import EnglishBase from "../../languages/English"
import SpanishBase from "../../languages/Spanish"
import HowItWorks from "../../organisms/HomePage/HowItWoks";
import "./HomePage.scss"
import { CTA } from "../../organisms/HomePage/CTA";

function HomePage ({ updateLanguage, lang }) {

  return (
    <>
    <Header onChangeLanguage={updateLanguage} lang={lang} />
    <Hero lang={lang} />
    < HowItWorks />
    < CTA />
    <HomePageServicesList lang={lang} />
    <Footer />
    </>
  );
};

export default HomePage
