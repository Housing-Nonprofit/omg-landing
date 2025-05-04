import React from "react";
import software from "../../../assets/software.png";
import deployment from "../../../assets/deployment.png";
import maintenance from "../../../assets/maintenance.webp";
import getLanguage from "../../functions/Languajes";

export default function HowItWorks({ lang }) {
  const language = getLanguage(lang);
  const content = language.explainer;

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl/18 font-bold">{content.title}</h2>
          <p className="text-base text-gray-600">{content.subtitle}</p>
        </div>

        <div className="flex flex-col gap-16">
          {/* Design */}
          <div
            id="design-block"
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="w-full flex justify-end">
              <img
                src={software}
                alt="Design"
                className="w-4/5 aspect-[3/2] rounded-2xl bg-blue-50 object-cover justify-end"
              />
            </div>
            <div className="self-start max-w-[60%] pt-10 pl-10">
              <div className="badge badge-secondary mb-2">
                {content.design.badge}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {content.design.title}
              </h3>
              <p>{content.design.description}</p>
            </div>
          </div>

          {/* Deploy */}
          <div
            id="deploy-block"
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="self-start max-w-[60%] ml-auto pt-10 pr-5">
              <div className="badge badge-secondary mb-2">
                {content.deploy.badge}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {content.deploy.title}
              </h3>
              <p>{content.deploy.description}</p>
            </div>
            <div className="w-full flex justify-start">
              <img
                src={deployment}
                alt="Deploy"
                className="w-4/5 aspect-[3/2] rounded-2xl bg-blue-50 object-cover justify-start"
              />
            </div>
          </div>

          {/* Maintain */}
          <div
            id="maintain-block"
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="w-full flex justify-end">
              <img
                src={maintenance}
                alt="Maintain"
                className="w-4/5 aspect-[3/2] rounded-2xl bg-blue-50 object-cover justify-end"
              />
            </div>
            <div className="self-start max-w-[60%] pt-10 pl-10">
              <div className="badge badge-secondary mb-2">
                {content.maintain.badge}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {content.maintain.title}
              </h3>
              <p>{content.maintain.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
