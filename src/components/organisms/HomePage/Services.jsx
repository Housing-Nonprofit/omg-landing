import React from "react";
import getLanguage from "../../functions/Languajes";

const HomePageServiceCard = ({ title, text, image }) => {
  return (
    <div className="card-side flex bg-base-100 shadow-sm m-5 md:m-2 md:card md:w-1/3">
      <figure className="w-full ml-5 m-auto md:ml-0 md:w-7/12 lg:w-2/3 lg:m-auto lg:h-65">
        <img
          className=""
          src={
            image
              ? image
              : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg md:text-base lg:text-lg">{title ? title : "Card Title"}</h2>
        <p className="text-base md:text-sm lg:text-base">
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
    <div className="flex flex-col md:flex-row md:max-w-7xl m-auto justify-around">{props.children}</div>
  );
};

const HomePageServicesList = ({ lang }) => {

  const language = getLanguage(lang)
  const services = language.services

  return (
    <>
      <div className="services pt-15" id="services">
        <h1 className="text-4xl/18 portrait:text-3xl/16 font-bold line text-center">{services.title}</h1>
        <p className="text-base text-gray-600 m-auto portrait:ml-5 portrait:mr-5 text-center pb-5">{services.subtitle}</p>
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
