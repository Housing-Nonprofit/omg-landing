import React, { useState, useEffect } from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import Hero from "../../organisms/HomePage/Hero";
import HomePageServicesList from "../../organisms/HomePage/Services";
import HowItWorks from "../../organisms/HomePage/HowItWoks";
import "./HomePage.scss";
import { CTA } from "../../organisms/HomePage/CTA";
import ContactSection from "../../organisms/HomePage/ContactForm";
import TechnologiesSection from "../../organisms/HomePage/Technologies";

function HomePage({ updateLanguage, lang }) {
  return (
    <>
      <Header onChangeLanguage={updateLanguage} lang={lang} />
      <Hero lang={lang} />
      <HowItWorks lang={lang} />
      <CTA />
      <HomePageServicesList lang={lang} />
      <TechnologiesSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default HomePage;
