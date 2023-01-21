export default function useImportNavigationMenuData() {
  const navigationOptions = [
    {
      id: "main",
      options: [
        { text: "Home", id: 0, nextMenu: undefined, link: "" },
        { text: "Services", id: 1, nextMenu: "services", link: undefined },
        { text: "About", id: 2, nextMenu: "about", link: undefined },
        { text: "Blog", id: 3, nextMenu: undefined, link: "blog" },
        { text: "Careers", id: 4, nextMenu: undefined, link: "careers" },
        { text: "Contact", id: 5, nextMenu: undefined, link: "contact" },
      ],
    },
    {
      id: "services",
      heading: { text: "Services", link: undefined },
      options: [
        { text: "UX Design", id: 0, nextMenu: undefined, link: "ux-design" },
        {
          text: "Software Development",
          id: 1,
          nextMenu: undefined,
          link: "development",
        },
        {
          text: "Software Quality Assurance",
          id: 2,
          nextMenu: undefined,
          link: "quality-assurance",
        },
        {
          text: "SEO Optimization",
          id: 3,
          nextMenu: undefined,
          link: "seo",
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
          link: "why",
        },
        {
          text: "How We Work",
          id: 2,
          nextMenu: undefined,
          link: "how-we-work",
        },
      ],
    },
  ];

  return { navigationOptions };
}
