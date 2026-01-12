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
    img: Tami,
    title: "TAMI Uganda",
    desc: "A website designed for the Transafrican Management Institute (TAMI). By Nuwabiine Mbiine & Munyumya Allan",
    link: "https://tamiuganda.org/",
  },
  {
    icon: Banknote,
    img: GN,
    title: "GN ASSOCIATES",
    desc: "Designed for GN Associates, a finance company in Uganda. By Nuwabiine Mbiine",
    link: "https://gnassociatesug.com/",
  },
  {
    icon: HandHeart,
    img: Team,
    title: "STAWI Uganda",
    desc: "A website designed for Stawi Uganda. By Nuwabiine Mbiine",
    link: "https://www.stawiuganda.org/",
  },
  {
    icon: Utensils,
    img: Anita,
    title: "Anita's Kitchen",
    desc: "A website designed for Anita's Kitchen, a catering company in Uganda. By Nuwabiine Mbiine",
    link: "https://anita-s-kitchen.vercel.app/",
  },
  {
    icon: Scissors,
    img: Marlan,
    title: "Anita's Kitchen",
    desc: "A website designed for Anita's Kitchen, a catering company in Uganda. By Nuwabiine Mbiine",
    link: "https://anita-s-kitchen.vercel.app/",
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
    { network: "github", url: "https://www.github.com/knihttech" },
    {
      network: "linkedin",
      url: "https://www.linkedin.com/company/kniht-digital-solutions/",
    },
    { network: "x", url: "https://x.com/knihttech" },
  ],
};

// Mock data simulating the latest videos fetched from the Gemini API
export const mockYoutubeData = [
  {
    title: "The Future of AI in Web Dev (Latest)",
    url: "https://www.youtube.com/watch?v=ai_future",
  },
  {
    title: "Cloud Migration: A Step-by-Step Guide",
    url: "https://www.youtube.com/watch?v=cloud_guide",
  },
  {
    title: "Q3 Product Update & Features",
    url: "https://www.youtube.com/watch?v=q3_update",
  },
];
