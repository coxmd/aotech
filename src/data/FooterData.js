import twitterLogo from "../assets/twitter.png";
import facebookLogo from "../assets/facebook.png";
import instagramLogo from "../assets/instagram.png";
import youtubeLogo from "../assets/youtube.png";

export const logoButtonData = [
  {
    id: 0,
    source: twitterLogo,
    link: "https://twitter.com",
    title: "Link for twitter",
  },
  {
    id: 1,
    source: facebookLogo,
    link: "https://www.facebook.com",
    title: "Link for facebook",
  },
  {
    id: 2,
    source: youtubeLogo,
    link: "https://www.youtube.com",
    title: "Link for youtube",
  },
  {
    id: 3,
    source: instagramLogo,
    link: "https://www.instagram.com/",
    title: "Link for instagram",
  },
];

export const footerBottomOptions = [
  {
    id: 0,
    heading: "",
    options: [
      { text: "Terms Of Service", link: "terms-of-service" },
      { text: "Privacy Policy", link: "privacy-policy" },
      { text: "Manage Cookies", link: "cookie-policy" },
    ],
  },
];

export const collapsibleFooterData = [
  {
    id: 0,
    heading: { text: "Industries We Serve" },
    options: [
      { text: "Beauty & Skincare", link: "#" },
      { text: "Consumer Electronics", link: "#" },
      { text: "Entertainment & Media", link: "#" },
      { text: "Fashion & Footwear", link: "#" },
      { text: "Sports Equipment & Apparel", link: "#" },
      { text: "Gaming", link: "#" },
      { text: "Franchises & Retailers", link: "#" },
      { text: "Travel", link: "#" },
    ],
  },
  {
    id: 1,
    heading: { text: "Services" },
    options: [
      { text: "UX & UI Design", link: "ux-ui-design" },
      { text: "UI Development", link: "ui-development" },
      { text: "Fullstack App development", link: "full-app-development" },
      { text: "Mobile App development", link: "mobile-app-development" },
      { text: "Quality Assurance", link: "quality-assurance" },
      { text: "SEO Optimization", link: "seo-optimization" },
    ],
  },
  {
    id: 2,
    heading: { text: "About" },
    options: [
      { text: "Who we are", link: "about-us" },
      { text: "Why Choose Us", link: "why-choose-us" },
      { text: "How We Work", link: "how-we-work" },
    ],
  },
  {
    id: 3,
    heading: { text: "Careers" },
    options: [
      { text: "Digital Marketing Jobs", link: "#" },
      { text: "Design Jobs", link: "#" },
      { text: "Development Jobs", link: "#" },
    ],
  },
];

export const addressData = {
  addressDetails: ["1600 Amphitheatre", "Parkway Mountain View", "CA 94043"],
  phone: "+16502530000",
  email: "welcome@weblab.com",
};
