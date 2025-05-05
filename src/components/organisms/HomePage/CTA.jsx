import React from "react";

export const CTA = () => {
  return (
    <div id="call-to-action" className="pt-30 pb-15 m-auto text-center">
      <h2 className="text-6xl/18 pb-5 font-bold portrait:text-5xl/14 portrait:px-5">
        Start your project today
      </h2>
      <p className="text-base text-gray-600 max-w-[30%] portrait:max-w-[80%] m-auto">
        Let us help you build the project your business needs to achieve its growth potential and 
        get ahead of the competition.
      </p>
      <p className="text-base text-gray-600 max-w-[30%] portrait:max-w-[80%] m-auto mt-5">
        We deliver tailor-made solutions that drive measurable results. Our team relies on industry best practices to ensure timely, on-budget delivery.
      </p>
      <button
        className="btn btn-primary bg-gradient-to-br from-primary to-accent  text-white transition-transform btn-xl delay-100 ease-in-out duration-100 hover:scale-110 hover:btn-accent mt-10"
        onClick={() => goToElement(content.link)}
      >
        Get In Touch
      </button>
    </div>
  );
};
