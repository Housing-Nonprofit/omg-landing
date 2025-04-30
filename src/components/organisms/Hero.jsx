import React from "react";

const Hero = ({ content }) => {
  return (
    <div className="hero bg-base-200 h-150">
      <div className="hero-content text-center">
        <div className="max-w-5xl">
          <h1 className="lg:text-6xl/18 portrait:text-5xl/14 font-bold line">{content.title}</h1>
          <p className="py-8 max-w-xl2 text-center m-auto text-lg/8">
           {content.subtitle}
          </p>
          <button className="btn btn-primary btn-xl">{content.cta}</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
