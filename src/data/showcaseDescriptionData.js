//image source
import uxDesign from "../assets/ux-design.webp";
import uiDesign from "../assets/ui-design.webp";
import fullstack from "../assets/fullstack.webp";
import mobileApp from "../assets/mobile-app.webp";
import qualityAssurance from "../assets/quality-assurance.webp";
import seo from "../assets/seo.webp";

export const ourServicesData = [
  {
    id: 0,
    title: "UX & UI Design",
    imageSource: uxDesign,
    description:
      "Our UX & UI Design service focuses on creating intuitive, user-centered digital experiences. We combine aesthetics with functionality to design interfaces that are visually appealing, easy to navigate, and aligned with your brand identity.",
    list: [
      "User research and analysis",
      "Information architecture",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing",
      "Responsive design",
    ],
    buttonText: "Learn More",
    link: "design",
    reverse: false,
  },
  {
    id: 1,
    title: "UI Development",
    imageSource: uiDesign,
    description:
      "Our UI Development service transforms design concepts into responsive, interactive, and visually stunning user interfaces. We use cutting-edge technologies to create seamless, high-performance front-end solutions that enhance user engagement and satisfaction.",
    list: [
      "Responsive web design",
      "Cross-browser compatibility",
      "Performance optimization",
    ],
    buttonText: "Learn More",
    link: "dev",
    reverse: true,
  },
  {
    id: 2,
    title: "Fullstack App Development",
    imageSource: fullstack,
    description:
      "Our Fullstack App Development service offers end-to-end solutions for building robust, scalable, and high-performance applications. We handle both front-end and back-end development to deliver seamless and efficient digital experiences.",
    list: [
      "Front-end and back-end development",
      "Database design and management",
      "API development and integration",
    ],
    buttonText: "Learn More",
    link: "full-app-development",
    reverse: false,
  },
  {
    id: 3,
    title: "Mobile App Development",
    imageSource: mobileApp,
    description:
      "Our Mobile App Development service provides end-to-end solutions for creating high-quality mobile applications. We focus on delivering seamless user experiences, robust performance, and innovative features to meet your business needs.",
    list: [
      "Native and cross-platform development",
      "User-friendly interface design",
      "Performance optimization",
    ],
    buttonText: "Learn More",
    link: "mobile-app-development",
    reverse: true,
  },
  {
    id: 4,
    title: "Quality Assurance",
    imageSource: qualityAssurance,
    description:
      "Our Quality Assurance service ensures that your software meets the highest standards of quality and reliability. We use comprehensive testing methodologies to identify and resolve issues, ensuring a seamless user experience.",
    list: [
      "Functional testing",
      "Performance testing",
      "Security testing",
      "Usability testing",
      "Compatibility testing",
      "Automated testing",
    ],
    buttonText: "Learn More",
    link: "quality-assurance",
    reverse: false,
  },
  {
    id: 5,
    title: "SEO Optimization",
    imageSource: seo,
    description:
      "Our SEO Optimization service enhances your online visibility and drives organic traffic to your website. We use proven strategies and techniques to improve your search engine rankings and ensure your content reaches the right audience.",
    list: [
      "Keyword research and analysis",
      "On-page optimization",
      "Off-page optimization",
      "Content creation and optimization",
      "Technical SEO",
      "Performance tracking and reporting",
    ],
    buttonText: "Learn More",
    link: "seo-optimization",
    reverse: true,
  },
];
