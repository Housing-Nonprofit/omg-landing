import React from "react";
import getLanguage from "../../functions/Languajes";

const HowToStep = ({ element }) => {
  let baseClass = "flex gap-8 items-center portrait:flex portrait:flex-col";
  let imageClass = "w-[50%] flex portrait:w-full";
  let textClass =
    "self-start max-w-[50%] pt-10 pl-10 portrait:pt-0 portrait:pl-0 portrait:max-w-full";
  let descClass = "portrait:w-full portrait:max-w-full";
  if (element.direction == 1) {
    baseClass = baseClass + " flex-row-reverse";
    imageClass = imageClass + " justify-start";
    textClass = textClass + " pl-[15%]";
    descClass = descClass + " max-w-[85%]";
  } else {
    imageClass = imageClass + " justify-end";
    descClass = descClass + " max-w-[70%]";
  }
  return (
    <div id="design-block" className={baseClass}>
      <div className={imageClass}>
        <img
          src={element.image}
          alt="Design"
          className="w-4/5 portrait:w-full aspect-[3/2] rounded-2xl bg-blue-50 object-cover justify-center"
        />
      </div>
      <div className={textClass}>
        <div className="badge badge-secondary mb-2 px-5 py-3">
          {element.badge}
        </div>
        <h3 className="text-xl font-semibold mb-2">{element.title}</h3>
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
          <h2 className="text-4xl/18 font-bold portrait:text-3xl/16">
            {content.title}
          </h2>
          <p className="text-base text-gray-600">{content.subtitle}</p>
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
