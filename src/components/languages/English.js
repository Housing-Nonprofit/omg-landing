import React from "react";
import webdev from "./../../assets/webdev.png";
import software from "./../../assets/software.png";
import database from "./../../assets/database.png";
import cloud from "./../../assets/cloud.png";
import cyber from "./../../assets/cyber.png";
import ai from "./../../assets/ai.png";
import dashboard from "./../../assets/dashboard.webp";
import deployment from "./../../assets/deployment.png";
import maintenance from "./../../assets/maintenance.webp";

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
    cta: "Get Started",
    link: "how-it-works",
}

const Services = {
    title: "Our Services",
    subtitle: "We provide a wide range of services designed to satisfy your needs.",
    list: [
        [
            {
                title: "Website Development",
                desc: "We design and build responsive websites, landing pages, and blogs that showcase your brand and engage visitors from the moment they arrive. Our streamlined development process ensures fast load times, easy content management, and seamless user experiences across every device.",
                img: webdev,
            },
            {
                title: "Web Application Development",
                desc: "We build dynamic, scalable web applications that streamline your business processes and deliver rich, interactive user experiences. From single-page apps to complex dashboards, our solutions integrate seamlessly with your existing systems and scale as your needs grow.",
                img: dashboard,
            },
            {
                title: "Database Management",
                desc: "We design robust, scalable database schemas on multiple database systems such as PostgreSQL and MongoDB, and implement efficient management practices that optimize performance, ensure data integrity, and streamline maintenance.",
                img: database,
            }
        ],
        [
            {
                title: "Cloud Management",
                desc: "We architect and manage cloud infrastructures on platforms like Google Cloud and Digital Ocean. Our team optimizes resource utilization, enforces security best practices, and provides continuous monitoring and support.",
                img: cloud,
            },
            {
                title: "AI Integration",
                desc: "We connect your applications to AI services like GPT, chatbots, and other ready-made tools to improve user interactions and automate routine tasks. By using existing APIs, we set up secure, maintainable integrations that fit right into your current workflow.",
                img: ai,
            },
            {
                title: "Security Analysis",
                desc: "We implement and provide advice on comprehensive cybersecurity strategies including regular vulnerability scanning, secure system configurations and strict access controls to safeguard your infrastructure and protect sensitive data.",
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
                "We analyze your requirements and familiarize with any existing infrastructure to design the solution that works best for your business. We always choose widely available and supported frameworks to make sure your product can stay up to date, and be compatible with new tools and technologies.",
            image: software,
            direction: 0
        },
        {
            badge: "Deploy",
            title: "Streamlined Deployment",
            description:
                "We choose the best deployment path for your software, focusing on reliability and affordability. We have experience deploying and managing applications big and small on multiple cloud infrastructure platforms such as Google Cloud and Digital Ocean.",
            image: deployment,
            direction: 1
        },
        {
            badge: "Maintain",
            title: "Real-Time Support",
            description:
                "For us, deploying your software is only the beginning. We offer real-time support to make sure your software runs smoothly, is always accessible and up to date. Our maintenance services are designed to guarantee the best user experience, and deal with any potential operational issues that may arise.",
            image: maintenance,
            direction: 0
        }
    ]
};

const EnglishBase = {
    code: "EN",
    opposite: "ES",
    menu: TopMenu,
    hero: Hero,
    services: Services,
    explainer: Explainer
}

export default EnglishBase