import React from "react";
import Button from "../../atoms/Button";
import getLanguage from "../../functions/Languajes";

const HomePageServiceCard = ({ title, text, image }) => {
  return (
    <div className="card bg-base-100 lg:w-9 shadow-sm sm:flex-1 m-5">
      <figure>
        <img
          className="h-75"
          src={
            image
              ? image
              : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{title ? title : "Card Title"}</h2>
        <p className="text-base">
          {text
            ? text
            : "Text goes here"}
        </p>
      </div>
    </div>
  );
};

const ServiceCardContainer = props => {
  return (
    <div className="flex lg:flex-row flex-col md:flex-col lg:max-w-7xl m-auto justify-around">{props.children}</div>
  );
};

const HomePageServicesList = ({ lang }) => {

  const language = getLanguage(lang)
  const services = language.services

  return (
    <>
      <div className="services mt-10">
        <h1 className="text-4xl/18 font-bold line text-center">{services.title}</h1>
        <p className="text-base text-gray-600 ml-auto text-center">{services.subtitle}</p>
        {services.list.map((group, index) => {
          return (
            <ServiceCardContainer key={index}>
            {group.map((service, index) => {
              return (
                <HomePageServiceCard key={index} title={service.title} text={service.desc} image={service.img} />
              )
            })}
          </ServiceCardContainer>
          )
        })}
      </div>
    </>
  );
};

export default HomePageServicesList;
