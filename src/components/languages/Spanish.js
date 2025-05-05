import React from "react";
import webdev from "./../../assets/webdev.png";
import software from "./../../assets/software.png";
import database from "./../../assets/database.png";
import cloud from "./../../assets/cloud.png";
import cyber from "./../../assets/cyber.png";
import ai from "./../../assets/ai.png";
import deployment from "./../../assets/deployment.png";
import maintenance from "./../../assets/maintenance.webp";

const TopMenu = [
    {
        title: "Inicio",
        url: "/"
    },
    {
        title: "Servicios",
        url: "services"
    },
    {
        title: "Contáctanos",
        url: "contact"
    }
]

const Hero = {
    title: "Transforma Tu Negocio Con Soluciones Personalizadas",
    subtitle: "Nuestro equipo de desarolladores cuenta con mas de 10 años de experiencia construyendo soluciones personalizadas de alta calidad, utilizando tecnologías modernas enfocados en proporcionar lo que tu negocio necesita.",
    cta: "Empecemos",
    link: "how-it-works",
}

const Services = {
    title: "Nuestros Servicios",
    subtitle: "",
    list: [
        [
            {
                title: "Desarrollo de Sitios Web",
                desc: "Creamos sitios web responsivos, landing pages y blogs que reflejan tu marca y captan la atención desde el primer clic, con carga rápida, optimización SEO y gestión de contenido sencilla en cualquier dispositivo.",
                img: webdev,
            },
            {
                title: "Desarrollo de Aplicaciones Web",
                desc: "Desarrollamos aplicaciones web dinámicas y escalables, desde SPAs hasta paneles de control, que se integran con tus sistemas existentes, optimizan el rendimiento y se adaptan a medida que crece tu negocio.",
                img: software,
            },
            {
                title: "Bases de Datos",
                desc: "Diseñamos esquemas de bases de datos robustos en diferentes sistemas como PostgreSQL y MongoDB y optimizamos consultas para garantizar rendimiento, integridad de datos y facilidad de mantenimiento, incorporando estrategias de respaldo y replicación automática.",
                img: database,
            }
        ],
        [
            {
                title: "Infraestructura en la Nube",
                desc: "Implementamos diversas infraestructuras en plataformas como Google Cloud y Digital Ocean, asegurando escalabilidad, seguridad, monitoreo continuo y operación ininterrumpida de tus servicios.",
                img: cloud,
            },
            {
                title: "Integraciones IA",
                desc: "Conectamos tu software a servicios de IA como GPT y chatbots mediante APIs existentes, mejorando la interacción, personalizando respuestas y automatizando tareas rutinarias.",
                img: ai,
            },
            {
                title: "Ciberseguridad",
                desc: "Aplicamos escaneos de vulnerabilidades, configuraciones seguras, segmentación de redes, MFA y controles de acceso, junto a políticas de seguridad y monitoreo constante para proteger tus sistemas y datos.",
                img: cyber,
            },
        ]
    ]
}

const Explainer = {
    title: "Build the software you need",
    subtitle: "From concept to maintenance, Webwave Solutions delivers end-to-end software excellence.",
    elements: [
        {
            badge: "Design",
            title: "Tailored Design",
            description:
                "Texto acá",
            image: software,
            direction: 0
        },
        {
            badge: "Deploy",
            title: "Streamlined Deployment",
            description:
                "Texto acá",
            image: deployment,
            direction: 1
        },
        {
            badge: "Maintain",
            title: "Real-Time Support",
            description:
                "Texto acá",
            image: maintenance,
            direction: 0
        }
    ]
};

const SpanishBase = {
    code: "ES",
    opposite: "EN",
    menu: TopMenu,
    hero: Hero,
    services: Services,
    explainer: Explainer
}

export default SpanishBase