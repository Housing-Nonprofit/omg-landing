import React from "react";

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

const SpanishBase = {
    opposite: "en",
    menu: TopMenu,
    hero: Hero
}

export default SpanishBase