import React from "react";

export const CTA = () => {

  const textClass = "text-sm text-gray-600 m-auto mt-5 max-w-[80%] md:text-base md:max-w-xl lg:max-w-2xl lg:text-lg"
  return (
    <div id="call-to-action" className="pt-30 pb-15 m-auto text-center">
      <h2 className="text-2xl md:text-5xl/18 lg:text-6xl/18 pb-0 md:pb-0 font-bold">
        Start your project today
      </h2>
      <p className={textClass}>
        Let us help you build the project your business needs to achieve its growth potential and 
        get ahead of the competition.
      </p>
      <p className={textClass}>
        We deliver tailor-made solutions that drive measurable results. Our team relies on industry best practices to ensure timely, on-budget delivery.
      </p>
      <button
        className="btn btn-primary bg-gradient-to-br from-primary to-accent  text-white transition-transform btn-xl delay-100 ease-in-out duration-100 hover:scale-110 hover:btn-accent mt-10 text-base sm:text-lg"
        onClick={() => goToElement(content.link)}
      >
        Get In Touch
      </button>
    </div>
  );
};
