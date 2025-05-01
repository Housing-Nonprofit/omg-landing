import React from "react";
import webdev from "./../../assets/webdev.png";
import software from "./../../assets/software.png";
import database from "./../../assets/database.png";
import cloud from "./../../assets/cloud.png";
import cyber from "./../../assets/cyber.png";
import ai from "./../../assets/ai.png";

const TopMenu = [
    {
        title: "Inicio",
        url: "/es"
    },
    {
        title: "Servicios",
        url: "/servicios"
    },
    {
        title: "Contáctanos",
        url: "/contacto"
    }
]

const Hero = {
    title: "Transforma Tu Negocio Con Soluciones Personalizadas",
    subtitle: "Construimos soluciones personalizadas de alta calidad diseñadas a la medida de tu negocio.",
    cta: "Contáctanos",
    link: "/contacto",
}

const Services = [
    [
        {
            title:"Desarrollo de Sitios Web",
            desc:"",
            img:webdev,
        },
        {
            title:"Desarrollo de Aplicaciones Web",
            desc:"",
            img:software,
        },
        {
            title:"Bases de Datos",
            desc:"",
            img:database,
        }
    ],
    [
        {
            title:"Infraestructura en la Nube",
            desc:"",
            img:cloud,
        },
        {
            title:"Integraciones IA",
            desc:"",
            img:ai,
        },
        {
            title:"Ciberseguridad",
            desc:"",
            img:cyber,
        },
    ]
]

const SpanishBase = {
    opposite: "EN",
    menu: TopMenu,
    hero: Hero,
    services: Services
}

export default SpanishBase