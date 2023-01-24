//react
import { useRef, useEffect, useContext } from "react";

// components
import Hero from "../../components/hero/Hero";
import PlainButton from "../../components/plainButton/PlainButton";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import PlainDescriptionBox from "../../components/plainDescriptionBox/PlainDescriptionBox";
import ImageDescBtn from "../../components/imageDescBtn/ImageDescBtn";

// styles
import styles from "./Home.module.css";

//image source

//context
import { NavbarThemeContext } from "../../contexts/NavbarThemeContext";

//custom hook
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

//data
import { industryExpertSectionData } from "../../data/ImageDescriptionData";

// image source
import hero from "../../assets/hero.webp";

export default function Home() {
  //create a ref for the hero image
  const heroRef = useRef();
  //use custom observer hook to decide if hero image is fully visible on the viewport
  const { entries } = useIntersectionObserver(heroRef, 1);
  //extract value from the context
  const { setHeroVisible } = useContext(NavbarThemeContext);
  //extract data from hook

  // based on entries data toggle navbar background color theme
  useEffect(() => {
    if (entries !== null) {
      entries.isIntersecting ? setHeroVisible(true) : setHeroVisible(false);
    }
  }, [entries, setHeroVisible]);

  return (
    <div className={styles["home"]}>
      <section ref={heroRef} className={styles["hero"]}>
        <Hero
          imageSource={hero}
          shortIntroduction={"Welcome"}
          heading={"Truly the best expertise for your digital growth"}
          subheading={
            "Technological solutions that integrete human touch with digital proficiency."
          }
          button={
            <PlainButton
              toUrl={"#"}
              buttonText={"Get started"}
              rightArrow={false}
            />
          }
        />
      </section>
      <section className={styles["industry-expert"]}>
        <div className={styles["industry-expert__heading-and-description"]}>
          <SectionTitle
            title={
              <>
                Industry Experts<span className="highlighted">.</span>
              </>
            }
          />

          <PlainDescriptionBox
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maiores itaque qui consequuntur aut unde, fugiat deleniti"
            }
          />
        </div>

        <div className={styles["industry-expert__image-descriptions"]}>
          {industryExpertSectionData.map((single) => {
            return (
              <ImageDescBtn
                key={single.id}
                toUrl={single.toUrl}
                imageSource={single.imageSource}
                buttonPresent={single.buttonPresent}
                rightArrow={single.rightArrow}
                buttonText={single.buttonText}
                description={single.description}
              />
            );
          })}
        </div>
      </section>

      <section className={styles["our-services"]}>
        <SectionTitle
          title={
            <>
              Our Services<span className="highlighted">.</span>
            </>
          }
        />

        <PlainDescriptionBox description="Veniam saepe ipsum rerum expedita, iste enim unde quas delectus hic amet impedit sit deserunt explicabo! Nesciunt, doloribus quibusdam nisi in sequi est eum maxime ut:" />
      </section>
    </div>
  );
}
