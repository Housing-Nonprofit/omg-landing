import React from "react";
import Button from "./../atoms/Button";
import webdev from "./../../assets/webdev.png";
import software from "./../../assets/software.png";
import database from "./../../assets/database.png";
import cloud from "./../../assets/cloud.png";
import cyber from "./../../assets/cyber.png";
import ai from "./../../assets/ai.png";

const ServiceCard = ({ title, text, image }) => {
  return (
    <div className="card bg-base-100 border-secondary lg:w-9 shadow-sm sm:flex-1 m-5">
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
        <h2 className="card-title">{title ? title : "Card Title"}</h2>
        <p>
          {text
            ? text
            : "A card component has a figure, a body part, and inside body there aretitle and actions parts"}
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

const Services = () => {
  return (
    <>
      <div className="services mt-10">
        <h1 className="text-4xl/18 font-bold line text-center">Our Services</h1>
        <ServiceCardContainer>
          <ServiceCard title="Website Development" image={webdev} />
          <ServiceCard title="Web Applications" image={software} />
          <ServiceCard title="Database Management" image={database} />
        </ServiceCardContainer>
        <ServiceCardContainer>
          <ServiceCard title="Cloud Management" image={cloud} />
          <ServiceCard title="AI Integrations" image={ai} />
          <ServiceCard title="CyberSecurity" image={cyber} />
        </ServiceCardContainer>
      </div>
    </>
  );
};

export default Services;
