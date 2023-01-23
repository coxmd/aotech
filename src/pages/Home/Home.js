//react
import { useRef, useEffect, useContext } from "react";

// components
import Hero from "../../components/hero/Hero";
import PlainButton from "../../components/plainButton/PlainButton";

// styles
import styles from "./Home.module.css";

//context
import { NavbarThemeContext } from "../../contexts/NavbarThemeContext";

//custom hook
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

// image source
import hero from "../../assets/hero.webp";

export default function Home() {
  const heroRef = useRef();
  const { entries } = useIntersectionObserver(heroRef, 1);
  const { setHeroVisible } = useContext(NavbarThemeContext);

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
          buttonText={"Get Started"}
        />{" "}
      </section>

      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quod
        placeat sint expedita corporis, enim ea fuga veritatis, aperiam itaque
        est labore quia quas culpa, optio sequi eius aliquid harum magnam
        nesciunt totam voluptatum! Debitis eaque et maiores necessitatibus
        mollitia odio corrupti aliquid dignissimos voluptatem, voluptatibus,
        doloremque, sunt molestiae ut perferendis alias perspiciatis fugit
        architecto porro hic facilis tempora qui rem. Pariatur placeat
        repudiandae commodi tempore numquam nihil quis a accusantium nam,
        distinctio, veniam excepturi error incidunt blanditiis, magnam tempora
        praesentium aliquid vero asperiores accusamus maiores cum eos. Voluptate
        possimus suscipit ullam iste consectetur labore ad, sint nihil totam
        molestiae provident corrupti, nemo illum magni facilis expedita ex.
        Impedit, dicta sunt repellendus quod rerum error labore nobis,
        reprehenderit asperiores eveniet neque! Eligendi ut illum perspiciatis
        accusamus ducimus cupiditate corporis voluptates. Quod excepturi itaque
        nihil aut? Cum dicta fugiat ad corrupti repellat blanditiis quidem
        aperiam omnis quaerat magnam architecto et illo inventore eligendi
        consectetur repellendus, libero ratione praesentium perferendis officiis
        ipsam harum quis at repudiandae. Quisquam natus accusantium fuga
        debitis! Cum, iste consectetur voluptatum ad neque aliquid, illo porro
        vitae doloribus ipsa deserunt? Optio earum similique at fugit modi
        dolorum fugiat, ducimus officiis animi accusamus quia est quasi. Eius
        molestiae placeat quasi quaerat quam! Facere dignissimos fugit ut
        voluptates voluptas sequi velit rem quae quam dolor rerum dolores totam,
        praesentium ipsam! Eos accusamus maiores dignissimos est at similique
        earum totam! Itaque officia placeat temporibus et nisi distinctio at
        numquam? Nam quae commodi ducimus ipsa deserunt debitis officia placeat
        alias reiciendis. Rem corrupti ullam odio officiis at fugit animi
        eligendi ducimus alias dolores amet velit excepturi voluptatem pariatur
        cum, commodi iusto eaque est praesentium voluptate veritatis doloremque,
        aut repellendus enim? Quae facilis, ullam iste dolor, illum vero
        laudantium, dolore excepturi autem nemo nesciunt accusamus odio! Cumque
        nesciunt dolores voluptate animi eaque iusto veritatis libero id eius at
        obcaecati nobis, ad quasi, dolore officia tenetur corrupti amet unde
        praesentium asperiores? Quis esse iste neque ea. Sunt, corporis illo!
        Veritatis voluptatibus cumque perspiciatis accusantium. Dolor, ea? Ad
        fugit natus rerum ratione mollitia veritatis earum nam reiciendis eius
        laborum ab repellendus facere eaque animi molestiae adipisci, minus,
        quis eligendi, itaque quia consequuntur? Expedita eos, officia aliquid
        quasi saepe qui rem commodi impedit explicabo, illo, illum enim
        dignissimos cumque repellat nostrum ipsum error minus eveniet laboriosam
        vero incidunt id placeat? Provident obcaecati deleniti, explicabo sint
        neque, nisi aliquid aliquam tempora dignissimos eligendi, quidem ab
        veniam quisquam consequatur quae culpa ut corporis! Minima dolor,
        tempore perspiciatis sequi recusandae voluptatibus id ab sit rerum
        commodi officia pariatur natus quo saepe ducimus labore nostrum voluptas
        earum in rem provident illo odio asperiores. In, quidem? Quos molestias
        vitae eum deleniti obcaecati consequuntur vero! Nisi quidem
        reprehenderit similique mollitia totam dolor commodi vitae eos itaque.
        Fugit cupiditate nulla veritatis quo assumenda tempora explicabo
        possimus exercitationem nihil inventore architecto laboriosam
        repudiandae, cumque enim laudantium dignissimos. Autem veniam quod nam
        ipsum saepe beatae voluptates quibusdam sit magnam perferendis aut
        debitis quas nisi voluptatem officia animi odio tempore neque adipisci
        omnis, similique eum est.
      </h1>
    </div>
  );
}
