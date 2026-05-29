import {
  Code,
  Shield,
  Lightbulb,
  BrainCircuit,
  Cpu,
  Globe,
  MonitorSmartphone,
  Utensils,
  HandHeart,
  FileUser,
  Banknote,
  Scissors,
} from "lucide-react";
import Team from "../media/kniht-team.jpg";
import Vision from "../media/kniht-vision.jpg";
import Tami from "../media/tamiuganda.png";
import GN from "../media/gnassociates.png";
import Anita from "../media/anita-s-kitchen.png";
import Marlan from "../media/marlansunisex.png";

import CandyKProject from "../media/candyk_luxe_cosmetics_ecommerce_project.png";
import GNAssociates from "../media/gnassociates.png";
import AnitaKitchen from "../media/anita-s-kitchen.png";
import TamiUganda from "../media/tami-uganda-project.png";
import MarlanUnisex from "../media/marlansunisex.png";
import MigaddeCatholicParish from "../media/migadde-catholic-parish-hero-section.png";
import KnihtdigitalSolutions from "../media/knihtdigitalsolutions-hero-section.png";
import Slisuganda from "../media/slisuganda-hero-section.png";
import Stawi from "../media/stawihopeofafrica-hero-section.png";

export const aboutContent = [
  {
    img: Team,
    title: "Our Team",
    desc: "A diverse group of experts passionate about technology and innovation.",
  },
  {
    img: Vision,
    title: "Our Vision",
    desc: "To empower businesses with cutting-edge digital solutions.",
  },
];
export const servicesContent = [
  {
    title: "Consultancy",
    description:
      "Expert advice for digital transformation, strategy, and business growth.",
    icon: Lightbulb,
  },
  {
    title: "AI",
    description:
      "Use AI to enhance your business processes and customer experiences.",
    icon: BrainCircuit,
  },
  {
    title: "Web & Mobile Dev",
    description: "Custom web and mobile applications tailored to your needs.",
    icon: Code,
  },
  {
    title: "Cyber Security",
    description:
      "Protect your business with our security solutions and audits.",
    icon: Shield,
  },
  {
    title: "Blockchain",
    description: "Innovative blockchain solutions for modern enterprises.",
    icon: Cpu,
  },
];
export const portfolioContent = [
  {
    icon: FileUser,
    img: CandyKProject,
    title: "Candy K Luxe Cosmetics",
    desc: "A sophisticated e-commerce storefront for Candy Kluxe Cosmetics, crafted to showcase premium beauty products and deliver a seamless, high-end shopping experience.",
    link: "https://candykluxecosmetics.vercel.app/",
  },
  {
    icon: FileUser,
    img: AnitaKitchen,
    title: "Anita's Kitchen",
    desc: "An inviting digital interface for Anita’s Kitchen, highlighting their culinary offerings and streamlining the customer ordering process.",
    link: "https://anita-s-kitchen.vercel.app/",
  },
  {
    icon: FileUser,
    img: KnihtdigitalSolutions,
    title: "KNiHT Digital Solutions",
    desc: "A modern, high-performance portfolio site for KNiHT Digital Solutions, showcasing innovative tech services and a commitment to digital excellence.",
    link: "https://knihtdigitalsolutions.vercel.app/",
  },
  {
    icon: FileUser,
    img: MarlanUnisex,
    title: "Marlan's Unisex Beauty Salon",
    desc: "An elegant, user-friendly booking and showcase platform for Marlan’s Unisex Beauty Salon, designed to elevate the brand and simplify the client experience.",
    link: "https://marlan-sunisexbeautysalon.vercel.app/",
  },
  {
    icon: FileUser,
    img: Slisuganda,
    title: "SLIS uganda",
    desc: "A digital ecosystem for SLIS Uganda, meticulously crafted to showcase their commitment to change and to provide an interactive space for community action and collaboration.",
    link: "https://slisuganda.org/",
  },
  {
    icon: FileUser,
    img: TamiUganda,
    title: "TAMI Uganda",
    desc: "A comprehensive educational hub for TAMI Uganda, facilitating access to professional management training and fostering organizational excellence across Africa.",
    link: "https://tamiuganda.org/",
  },
  {
    icon: FileUser,
    img: GNAssociates,
    title: "GN Associates",
    desc: "A professional digital presence for GN Associates, highlighting their expertise in financial risk management, corporate governance, and strategic advisory services for institutional growth and sustainability.",
    link: "https://gnassociatesug.com/",
  },
  {
    icon: FileUser,
    img: Stawi,
    title: "STAWI Hope of Africa",
    desc: "A compelling digital platform for Stawi Hope of Africa, dedicated to showcasing their community-led initiatives in child development, sustainable agriculture, and holistic empowerment.",
    link: "https://stawihopeofafrica.org/",
  },
  {
    icon: FileUser,
    img: MigaddeCatholicParish,
    title: "Migadde Catholic Parish",
    desc: "A welcoming digital home for Migadde Catholic Parish, serving as a vital communication bridge for parish events, liturgical schedules, and community outreach.",
    link: "https://migaddecatholicparish.org/",
  },
];
export const newsContent = [
  {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    title: "AI Integration Success",
    desc: "How we helped a client successfully integrate AI into their workflow.",
  },
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
    title: "Cybersecurity Best Practices",
    desc: "Top tips to keep your business secure in the digital age.",
  },
];

export const footerData = {
  company: {
    heading: "KNiHT Digital Solutions",
    tagline:
      "Empowering businesses with innovative digital solutions and expert guidance.",
    email: "knihtdigitalsolutions@gmail.com",
    phone: "+256 792 332655",
    address: "kampala, Uganda",
  },
  quickLinks: [
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "News", href: "/news" },
    { title: "Contact", href: "/contact" },
  ],
  socialLinks: [
    { network: "github", url: "https://www.github.com/knihtdigitalsolutions" },
    {
      network: "linkedin",
      url: "https://www.linkedin.com/company/kniht-digital-solutions/",
    },
    { network: "x", url: "https://x.com/knihttech" },
  ],
};

// Mock data simulating the latest videos fetched from the Gemini API
export const youtubeData = [
  {
    title:
      "UG Quantum Computing In 5 Minutes | Quantum Computing Explained | Quantum Computer | Simplilearn ",
    url: "https://www.youtube.com/watch?v=X8MZWCGgIb8",
  },
];
