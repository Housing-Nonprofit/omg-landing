import React from "react";
import getLanguage from "../../functions/Languajes";

const HowToStep = ({ element }) => {
  let baseClass = "flex flex-col md:flex-row gap-8 items-center";
  let imageClass = "w-full flex md:w-[55%] lg:w-[50%]";
  let textClass ="self-start w-full md:max-w-[50%] md:pt-5 lg:pt-10 lg:pl-10 xl:pt-15";
  let descClass = "md:text-sm sm:text-sm xl:text-lg";
  if (element.direction == 1) {
    baseClass = baseClass + " md:flex-row-reverse";
    imageClass = imageClass + " justify-start";
    textClass = textClass + " md:pl-[5%] lg:pl-[5%] xl:pl-[12%]";
    descClass = descClass + " max-w-[90%]";
  } else {
    imageClass = imageClass + " justify-end";
    descClass = descClass + " lg:max-w-[70%] md:max-w-[90%] lg:max-w-[70%]";
  }
  return (
    <div id={element.name} className={baseClass}>
      <div className={imageClass}>
        <img
          src={element.image}
          alt="Design"
          className="w-full lg:w-full xl:w-10/12 aspect-[3/2] rounded-2xl bg-blue-50 object-cover justify-center"
        />
      </div>
      <div className={textClass}>
        <div className="badge badge-secondary mb-2 px-5 py-3">
          {element.badge}
        </div>
        <h3 className="text-xl xl:text-2xl font-semibold mb-2">{element.title}</h3>
        <p className={descClass}>{element.description}</p>
      </div>
    </div>
  );
};

export default function HowItWorks({ lang }) {
  const language = getLanguage(lang);
  const content = language.explainer;

  return (
    <section id="how-it-works" className="pt-15 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl/16 md:text-4xl/18 font-bold line text-center">
            {content.title}
          </h2>
          <p className="text-base text-gray-600 m-auto portrait:ml-5 portrait:mr-5 text-center pb-5 mb-10">{content.subtitle}</p>
        </div>

        <div className="flex flex-col gap-16">
          {content.elements.map((element) => {
            return <HowToStep element={element} />;
          })}
        </div>
      </div>
    </section>
  );
}
