import React from "react";
import getLanguage from "../../functions/Languajes";
import herobg from "../../../assets/herobg.png";
import { goToElement } from "../../functions/Navigation";


const Hero = ({ lang }) => {
  const language = getLanguage(lang);
  const content = language.hero;

  return (
    <div
      className="hero relative min-h-[94dvh] md:min-h-[800px] bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      {/* DaisyUI overlay with 60% white tint */}
      <div className="hero-overlay bg-white/60" />

      <div className="hero-content text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="lg:text-6xl portrait:text-5xl font-bold leading-tight text-secondary">
            {content.title}
          </h1>
          <p className="py-8 max-w-3xl mx-auto text-lg leading-relaxed">
            {content.subtitle}
          </p>
          <button className="btn btn-primary btn-xl bg-gradient-to-br from-primary to-accent  text-white transition-transform delay-100 ease-in-out duration-100 hover:scale-110 hover:btn-accent" onClick={() => goToElement(content.link)}>
            {content.cta}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
