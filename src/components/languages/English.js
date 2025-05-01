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
    subtitle: "We harness cutting-edge web technologies to craft custom software, websites, and applications that perfectly align with your vision. Our expert team delivers stunning design, seamless performance, and scalable solutions that propel your business forward.",
    cta: "Get in Touch",
    link: "/contact",
}

const Services = {
    title: "Our Services",
    subtitle: "",
    list: [
        [
            {
                title:"Website Development",
                desc:"We design and build responsive websites, landing pages, and blogs that showcase your brand and engage visitors from the moment they arrive. Our streamlined development process ensures fast load times, easy content management, and seamless user experiences across every device.",
                img:webdev,
            },
            {
                title:"Web Applications",
                desc:"We build dynamic, scalable web applications that streamline your business processes and deliver rich, interactive user experiences. From single-page apps to complex dashboards, our solutions integrate seamlessly with your existing systems and scale as your needs grow.",
                img:software,
            },
            {
                title:"Database Management",
                desc:"We design robust, scalable database schemas on multiple database systems such as PosrgreSQL and MongoDB, and implement efficient management practices that optimize performance, ensure data integrity, and streamline maintenance.",
                img:database,
            }
        ],
        [
            {
                title:"Cloud Management",
                desc:"We architect and manage cloud infrastructures on platforms like Google Cloud and Digital Ocean. Our team optimizes resource utilization, enforces security best practices, and provides continuous monitoring and support.",
                img:cloud,
            },
            {
                title:"AI Integrations",
                desc:"We connect your applications to AI services like GPT, chatbots, and other ready-made tools to improve user interactions and automate routine tasks. By using existing APIs, we set up secure, maintainable integrations that fit right into your current workflow.",
                img:ai,
            },
            {
                title:"CyberSecurity",
                desc:"We implement and provide advice on comprehensive cybersecurity strategies including regular vulnerability scanning, secure system configurations and strict access controls to safeguard your infrastructure and protect sensitive data.",
                img:cyber,
            },
        ]
    ]
}

const EnglishBase = {
    code: "EN",
    opposite: "ES",
    menu: TopMenu,
    hero: Hero,
    services: Services
}

export default EnglishBase