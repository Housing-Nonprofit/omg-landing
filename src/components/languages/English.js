import React from "react";
import webdev from "./../../assets/webdev.png";
import software from "./../../assets/software.png";
import database from "./../../assets/database.png";
import cloud from "./../../assets/cloud.png";
import cyber from "./../../assets/cyber.png";
import ai from "./../../assets/ai.png";

const TopMenu = [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "Services",
        url: "/services"
    },
    {
        title: "Contact",
        url: "/contact"
    }
]

const Hero = {
    title: "Transform Your Business with Custom Software",
    subtitle: "We provide custom high-quality solutions tailored to the needs of your business.",
    cta: "Get Started",
    link: "/contact",
}

const Services = [
    [
        {
            title:"Website Development",
            desc:"",
            img:webdev,
        },
        {
            title:"Web Applications",
            desc:"",
            img:software,
        },
        {
            title:"Database Management",
            desc:"",
            img:database,
        }
    ],
    [
        {
            title:"Cloud Management",
            desc:"",
            img:cloud,
        },
        {
            title:"AI Integrations",
            desc:"",
            img:ai,
        },
        {
            title:"CyberSecurity",
            desc:"",
            img:cyber,
        },
    ]
]

const EnglishBase = {
    opposite: "ES",
    menu: TopMenu,
    hero: Hero,
    services: Services
}

export default EnglishBase