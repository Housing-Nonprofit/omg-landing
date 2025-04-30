import React from "react";
import Header from "../organisms/Header"
import Footer from '../organisms/Footer';
import Hero from "../organisms/Hero";
import Services from "../organisms/Services"

function HomePage ({ language }) {

  return (
    <>
    <Header menu={language.menu} lang={language.opposite} />
    <Hero content={language.hero} />
    <Services />
    <Footer />
    </>
  );
};

export default HomePage
