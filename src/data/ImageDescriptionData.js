//image source
import industryStandard from "../assets/industry-standard.webp";
import industryExperts from "../assets/industry-experts.webp";

export const industryExpertSectionData = [
  {
    id: 0,
    description:
      "Our commitment to maintaining industry standards ensures that we deliver cutting-edge IT solutions. We stay up-to-date with the latest technologies, best practices, and compliance requirements to provide reliable and efficient services to our clients.",
    imageSource: industryStandard,
    buttonPresent: true,
    rightArrow: false,
    buttonText: "Maintain Industry standards",
    toUrl: "industry-standards",
    extraClass: ["darkbutton"],
  },
  {
    id: 1,
    description:
      "Our team of industry expert engineers brings decades of IT experience to every project. With specialized knowledge in cutting-edge technologies and best practices, we deliver innovative solutions tailored to meet your unique business challenges and drive digital transformation.",
    imageSource: industryExperts,
    buttonPresent: true,
    rightArrow: false,
    buttonText: "Industry Expert Enginners",
    toUrl: "industry-experts",
    extraClass: [],
  },
];
