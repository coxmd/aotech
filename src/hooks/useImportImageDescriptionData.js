//image source
import industryStandard from "../assets/industry-standard.webp";
import industryExperts from "../assets/industry-experts.webp";

export default function useImportImageDescriptionData() {
  const industryExpertSectionData = [
    {
      id: 0,
      description:
        "Amet consectetur adipisicing elit. Facilis minima suscipit amet voluptatum iste! Nesciunt assumenda magni accusamus laboriosam voluptatum, quae adipisci neque sequi quam, reiciendis repudiandae. Similique totam eum eaque nisi.",
      imageSource: industryStandard,
      buttonPresent: true,
      rightArrow: false,
      buttonText: "Maintain Industry standards",
      toUrl: "industry-standards",
    },
    {
      id: 1,
      description:
        "Nobis eligendi suscipit distinctio et non, deleniti ducimus, sit neque, doloribus culpa quibusdam voluptatem nam! Delectus atque, dolore error veritatis reprehenderit inventore, deleniti quo officia perspiciatis modi et harum. Debitis assumenda sint.",
      imageSource: industryExperts,
      buttonPresent: true,
      rightArrow: false,
      buttonText: "Industry Expert Enginners",
      toUrl: "industry-experts",
    },
  ];
  return { industryExpertSectionData };
}
