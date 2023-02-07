//image source
import help from "../assets/help.png";
import contact from "../assets/contact.png";

export const navigationOptions = [
  {
    id: "main",
    options: [
      { text: "Home", id: 0, nextMenu: undefined, link: "" },
      { text: "Services", id: 1, nextMenu: "services", link: undefined },
      { text: "About", id: 2, nextMenu: "about", link: undefined },
      { text: "Blog", id: 3, nextMenu: undefined, link: "blog" },
      { text: "Careers", id: 4, nextMenu: "careers", link: undefined },
      // { text: "Contact", id: 5, nextMenu: undefined, link: "contact" },
    ],
  },
  {
    id: "services",
    heading: { text: "Services", link: undefined },
    options: [
      {
        text: "UX & UI Design",
        id: 0,
        nextMenu: undefined,
        link: "ux-ui-design",
      },
      {
        text: "UI Development",
        id: 1,
        nextMenu: undefined,
        link: "ui-development",
      },
      {
        text: "Fullstack App development",
        id: 2,
        nextMenu: undefined,
        link: "full-app-development",
      },
      {
        text: "Mobile App development",
        id: 3,
        nextMenu: undefined,
        link: "mobile-app-development",
      },
      {
        text: "Quality Assurance",
        id: 4,
        nextMenu: undefined,
        link: "quality-assurance",
      },
      {
        text: "SEO Optimization",
        id: 5,
        nextMenu: undefined,
        link: "seo-optimization",
      },
    ],
  },
  {
    id: "about",
    heading: { text: "About", link: undefined },
    options: [
      { text: "Who we are", id: 0, nextMenu: undefined, link: "about-us" },
      {
        text: "Why Choose Us",
        id: 1,
        nextMenu: undefined,
        link: "why-choose-us",
      },
      {
        text: "How We Work",
        id: 2,
        nextMenu: undefined,
        link: "how-we-work",
      },
    ],
  },
  {
    id: "careers",
    heading: { text: "Careers", link: undefined },
    options: [
      {
        text: "Digital Marketing",
        id: 0,
        nextMenu: undefined,
        link: "careers/digital-marketing",
      },
      {
        text: "Design",
        id: 1,
        nextMenu: undefined,
        link: "careers/design",
      },
      {
        text: "Development",
        id: 2,
        nextMenu: undefined,
        link: "careers/development",
      },
    ],
  },
];

export const notFinishedPaths = [
  "blog",
  "careers",
  "contact",
  "ux-ui-design",
  "ui-development",
  "full-app-development",
  "mobile-app-development",
  "quality-assurance",
  "seo-optimization",
  "about-us",
  "why-choose-us",
  "how-we-work",
  "careers/digital-marketing",
  "careers/design",
  "careers/development",
  "help",
];

export const additionalButtons = [
  {
    id: 0,
    buttonText: "Employee Login",
  },
];

export const textButtonWithImageInfoArray = [
  { text: "Contact", imageSource: contact, id: 0, toUrl: "contact" },
  { text: "Help", imageSource: help, id: 1, toUrl: "help" },
];
