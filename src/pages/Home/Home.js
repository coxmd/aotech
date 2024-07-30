//react
import { React, useRef, useEffect } from "react";

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
import OnlyDesignDiv from "../../components/onlyDesignDiv/OnlyDesignDiv";

//context
import { FormContextProvider } from "../../contexts/FormContext";

//custom hook
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useMultipleIntersectionObserver from "../../hooks/useMultipleIntersectionObserver";
import useNavbarThemeContext from "../../hooks/useNavbarThemeContext";
import useMediaQueryContext from "../../hooks/useMediaQueryContext";

//data
import { ourServicesData } from "../../data/ShowCaseDescriptionData";
import { industryExpertSectionData } from "../../data/ImageDescriptionData";
import { testimonialData } from "../../data/TestimonialData";
import { selectBoxData } from "../../data/FormData";

// image source
import hero from "../../assets/hero.webp";
import formImage from "../../assets/form.webp";

// styles
import styles from "./Home.module.css";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { setHeroVisible } = useNavbarThemeContext();
  const { mediaQueryFinalState } = useMediaQueryContext();

  //create a ref for the hero image
  const heroRef = useRef();
  const servicesRefs = useRef([]);
  const testimonialSectionRef = useRef();
  const formSectionRef = useRef();

  //use custom observer hook to check if hero image is fully visible on the viewport
  const { entry: heroEntry } = useIntersectionObserver(heroRef, 0.8);

  //use custom observer hook to check if the services are becoming visible on the viewport
  const { allEntries: servicesEntries, observer: servicesObserver } =
    useMultipleIntersectionObserver(servicesRefs, 0.4);

  //use custom observer hook to check if testimonial section is becoming visible on the viewport
  const {
    entry: testimonialSectionEntry,
    observer: testimonialSectionObserver,
  } = useIntersectionObserver(testimonialSectionRef, 0);

  //use custom observer hook to check if form section is becoming visible on the viewport
  const { entry: formSectionEntry, observer: formSectionObserver } =
    useIntersectionObserver(formSectionRef, 0.3);

  // based on entries data toggle navbar background color theme
  useEffect(() => {
    if (heroEntry !== null) {
      heroEntry.isIntersecting ? setHeroVisible(true) : setHeroVisible(false);
    }

    return () => {
      setHeroVisible(null);
    };
  }, [heroEntry, setHeroVisible]);

  //animations based on if the services are intersecting on the screen
  useEffect(() => {
    if (servicesEntries) {
      servicesEntries.forEach((entry) => {
        if (entry.isIntersecting === true) {
          entry.target.classList.add("show-service");
          servicesObserver.unobserve(entry.target);
        }
      });
    }
  }, [servicesEntries, servicesObserver]);

  //animations based on if the testimonials are intersecting on the screen
  useEffect(() => {
    if (testimonialSectionEntry) {
      if (testimonialSectionEntry.isIntersecting === true) {
        testimonialSectionEntry.target.classList.add(
          "show-testimonial-section"
        );
        testimonialSectionObserver.unobserve(testimonialSectionEntry.target);
      }
    }
  }, [testimonialSectionEntry, testimonialSectionObserver]);

  //animations based on if the testimonials are intersecting on the screen
  useEffect(() => {
    if (formSectionEntry) {
      if (formSectionEntry.isIntersecting === true) {
        formSectionEntry.target.classList.add("show-form-section");
        formSectionObserver.unobserve(formSectionEntry.target);
      }
    }
  }, [formSectionEntry, formSectionObserver]);

  return (
    <div className={styles["home"]}>
      <section ref={heroRef} className={styles["hero"]}>
        <Hero
          imageSource={hero}
          shortIntroduction={"Welcome"}
          heading={"Truly the best expertise for your digital growth"}
          subheading={
            "Technological solutions that integrate human touch with digital proficiency."
          }
          button={
            <PlainButton
              // external={true}
              hashlink={true}
              toUrl={"signup-form"}
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
              "Our team of industry experts brings years of experience and cutting-edge knowledge to deliver innovative IT solutions tailored to your business needs."
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
          <PlainDescriptionBox description="We offer a comprehensive range of IT services to help your business thrive in the digital age, including:" />
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
                {(mediaQueryFinalState.largeTabletMatches ||
                  mediaQueryFinalState.computerScreenMatches) &&
                  i !== ourServicesData.length - 1 && <OnlyDesignDiv />}
              </div>
            );
          })}
        </div>
      </section>

      <section ref={testimonialSectionRef} className={styles["testimonial"]}>
        <SectionTitle
          title={
            <>
              What Clients Say<span className="highlighted">.</span>
            </>
          }
        />
        <div className={styles["desktop-center"]}>
          <PlainDescriptionBox description="Enim unde quas delectus hic amet impedit sit deserunt explicabo!" />
        </div>

        <div className={styles["testimonial__all-testimonials"]}>
          {testimonialData.map((single, i) => {
            // pass transition delay to each element dynamically based on the array index, so that they don't start the transition all at once, rather one by one
            return (
              <Testimonial
                key={single.id}
                imageSource={single.imageSource}
                personName={single.personName}
                oneLiner={single.oneLiner}
                details={single.details}
                extraClass={single.extraClass}
                extraInlineStyle={
                  mediaQueryFinalState.computerScreenMatches
                    ? {
                        transition: `all 0.4s ${0.2 + i * 0.3}s ease-out`,
                      }
                    : {
                        transition: `all 0.4s ease-out`,
                      }
                }
              />
            );
          })}
        </div>
      </section>

      {(mediaQueryFinalState.largeTabletMatches ||
        mediaQueryFinalState.computerScreenMatches) && <OnlyDesignDiv />}

      <section
        ref={formSectionRef}
        id={"signup-form"}
        className={styles["form-section"]}
      >
        <FormContextProvider>
          <Form
            additionalData={{ selectBoxData }}
            imageSource={formImage}
            sectionTitle={
              <SectionTitle
                title={
                  <>
                    Get Free consultation<span className="highlighted">.</span>
                  </>
                }
              />
            }
            description={
              <div className={styles["desktop-center"]}>
                <PlainDescriptionBox description="Get expert advice and personalized solutions with our free consultation service." />
              </div>
            }
          />
        </FormContextProvider>
      </section>

      <section className={styles["subscribe-mailing-list"]}>
        <SubscribeMailingList />
      </section>
    </div>
  );
}
