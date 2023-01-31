//react
import { React, useRef, useEffect, useContext } from "react";

// components
import Hero from "../../components/hero/Hero";
import PlainButton from "../../components/plainButton/PlainButton";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import PlainDescriptionBox from "../../components/plainDescriptionBox/PlainDescriptionBox";
import ImageDescBtn from "../../components/imageDescBtn/ImageDescBtn";
import Showcase from "../../components/showcase/Showcase";
import HeadingDescBtn from "../../components/headingDescBtn/HeadingDescBtn";
import Testimonial from "../../components/testimonial/Testimonial";
import Form from "../../components/form/Form";
import SubscribeMailingList from "../../components/subscribeMailingList/SubscribeMailingList";

// styles
import styles from "./Home.module.css";

//context
import { NavbarThemeContext } from "../../contexts/NavbarThemeContext";
import { FormReducerContextProvider } from "../../contexts/FormReducerContext";
import { MediaQueryContext } from "../../contexts/MediaQueryContext";

//custom hook
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useMultipleIntersectionObserver from "../../hooks/useMultipleIntersectionObserver";

//data
import { industryExpertSectionData } from "../../data/ImageDescriptionData";
import { ourServicesData } from "../../data/ShowcaseDescriptionData";
import { testimonialData } from "../../data/TestimonialData";
import { selectBoxData } from "../../data/FormData";

// image source
import hero from "../../assets/hero.webp";
import formImage from "../../assets/form.webp";
import engineer from "../../assets/engineer.webp";
import OnlyDesignDiv from "../../components/onlyDesignDiv/OnlyDesignDiv";

export default function Home() {
  //create a ref for the hero image
  const heroRef = useRef();
  const servicesRefs = useRef([]);

  const { allEntries: servicesEntries, observer } =
    useMultipleIntersectionObserver(servicesRefs, 0.3);

  //use custom observer hook to decide if hero image is fully visible on the viewport
  const { entry: heroEntry } = useIntersectionObserver(heroRef, 0.8);

  //extract value from the context
  const { setHeroVisible } = useContext(NavbarThemeContext);
  const { mediaQueryState } = useContext(MediaQueryContext);

  //animations based on if the services are intersecting on the screen

  useEffect(() => {
    if (servicesEntries) {
      servicesEntries.forEach((entry) => {
        if (entry.isIntersecting === true) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }
  }, [servicesEntries]);

  // based on entries data toggle navbar background color theme
  useEffect(() => {
    if (heroEntry !== null) {
      heroEntry.isIntersecting ? setHeroVisible(true) : setHeroVisible(false);
    }
  }, [heroEntry, setHeroVisible]);

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
              toUrl={"#signup-form"}
              external={true}
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
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maiores itaque qui consequuntur aut unde, fugiat deleniti."
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
                extraClass={single.extraClass}
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

        <div className={styles["desktop-center"]}>
          <PlainDescriptionBox description="Veniam saepe ipsum rerum expedita, iste enim unde quas delectus hic amet impedit sit deserunt explicabo:" />
        </div>

        <div className={styles["our-services__services"]}>
          {ourServicesData.map((single, i) => {
            return (
              <div key={single.id}>
                <div
                  ref={(el) => (servicesRefs.current[i] = el)}
                  className={`${styles["our-services__service-container"]} ${
                    single.reverse
                      ? styles["our-services__service-container-reverse"]
                      : "default class"
                  }`}
                >
                  <Showcase imageSource={single.imageSource} />
                  <HeadingDescBtn
                    heading={single.title}
                    description={single.description}
                    list={single.list}
                    button={
                      <PlainButton
                        toUrl={single.link}
                        buttonText={single.buttonText}
                        rightArrow={false}
                      />
                    }
                  />
                </div>
                {mediaQueryState.computerScreenMatches &&
                  i !== ourServicesData.length - 1 && <OnlyDesignDiv />}
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles["testimonial"]}>
        <SectionTitle
          title={
            <>
              What Clients Say<span className="highlighted">.</span>
            </>
          }
        />

        <PlainDescriptionBox description="Enim unde quas delectus hic amet impedit sit deserunt explicabo!" />

        <div className={styles["testimonial__all-testimonials"]}>
          {testimonialData.map((single) => {
            return (
              <Testimonial
                key={single.id}
                imageSource={single.imageSource}
                personName={single.personName}
                oneLiner={single.oneLiner}
                details={single.details}
                extraClass={single.extraClass}
              />
            );
          })}
        </div>
      </section>

      <section id={"signup-form"} className={styles["form-section"]}>
        <SectionTitle
          title={
            <>
              Get Free consultation<span className="highlighted">.</span>
            </>
          }
        />
        <PlainDescriptionBox description="Perspiciatis nemo officia commodi saepe laudantium  tempora." />
        <FormReducerContextProvider>
          <Form additionalData={{ selectBoxData }} imageSource={formImage} />
        </FormReducerContextProvider>
      </section>

      <section className={styles["subscribe-mailing-list"]}>
        <SubscribeMailingList imageSource={engineer} />
      </section>
    </div>
  );
}
