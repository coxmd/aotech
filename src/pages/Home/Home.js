// components
import Hero from "../../components/hero/Hero";
import PlainButton from "../../components/plainButton/PlainButton";

// styles
import styles from "./Home.module.css";

// image source
import hero from "../../assets/hero.webp";

export default function Home() {
  return (
    <div className={styles["home"]}>
      <section className={styles["hero"]}>
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
          buttonText={"Get Started"}
        />{" "}
      </section>
    </div>
  );
}
