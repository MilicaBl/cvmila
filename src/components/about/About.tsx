import React, { useEffect, useState } from "react";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";
class Period {
  year: string;
  content: string;
  constructor(year: string, content: string) {
    this.year = year;
    this.content = content;
  }
}
export function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  document.body.style.backgroundColor = "#EBE6E3";
  document.body.style.minHeight = "700vh";

  const [w, setW] = useState(window.innerWidth);
  const [offset, setOffset] = useState(w / 2 - 132);
  const [showExpand, setShowExpand] = useState(true);
  const [showExpandTwo, setShowExpandTwo] = useState(true);

  const [showExpandText, setShowExpandText] = useState(false);
  const [showExpandTextTwo, setShowExpandTextTwo] = useState(false);

  const expandTwo = () => {
    setShowExpandTwo(false);
    setShowExpandTextTwo(true);
  };
  const expandNotTwo = () => {
    setShowExpandTwo(true);
    setShowExpandTextTwo(false);
  };
  const expand = () => {
    setShowExpand(false);
    setShowExpandText(true);
  };
  const expandNot = () => {
    setShowExpand(true);
    setShowExpandText(false);
  };

  useEffect(() => {
    function handleResize() {
      setW(window.innerWidth);
      setOffset(w / 2 - (window.pageYOffset + 132));
    }
    console.log("min", w);
    console.log(offset);
    window.addEventListener("resize", handleResize);
  });

  useEffect(
    () => {
      const onScroll = () => setOffset(w / 2 - (window.pageYOffset + 132));
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });

      return () => window.removeEventListener("scroll", onScroll);
    },
    [w]
  );

  return (
    <React.Fragment>
      <div
        className="offsetContainer"
        style={{ left: offset }}
        data-aos="fade-left"
        data-aos-duration="1200"
      >
        <h2 className="aboutH2">Vem är Mila?</h2>
        <ul className="timeLine">
          <li className="line" />
          <li className="period">
            <span className="periodDot">2013</span>
            <h3 className="periodText">
              Hår & Makeup stylist <br /> Burgårdens utbildningscentrum, <br />{" "}
              Göteborg
            </h3>
          </li>
          <li className="period">
            <span className="periodDot">2018-2021</span>
            <h3 className="periodText">
              Säljare<br />DEICHMAN SKO AB
            </h3>
            {showExpandTwo
              ? <span
                  className="material-symbols-outlined expand "
                  onClick={expandTwo}
                >
                  expand_more
                </span>
              : <span
                  className="material-symbols-outlined expand "
                  onClick={expandNotTwo}
                >
                  expand_less
                </span>}
            {showExpandTextTwo
              ? <p className="expandJobbText expandtext">
                  <span>Augusti 2018 till Juli 2021</span>
                  <br />
                  <span>Vikarierade som biträdande butikschef i 6 månader</span>
                  <br />
                  <span>Vikarierade som dekoratör i 1 år</span>
                  <br />
                  Utförde alla förekommande butiks arbetsuppgifter.<br />
                  Jag lärde mig mycket om att ta snabba beslut när <br />
                  det behövs och lösa de flesta problem som dyker <br />
                  upp under en arbetsdag. Jag bidrog med en god<br />
                  arbetsmoral och härlig stämmning i butiken.
                </p>
              : <div />}
          </li>
          <li className="period">
            <span className="periodDot">2021-2023</span>
            <h3 className="periodText">
              Front End Developer <br /> Medieinstitutet
            </h3>
          </li>
          <li className="period">
            <span className="periodDot">2022</span>
            <h3 className="periodText">Reste runt i Mexico</h3>
          </li>
          <li className="period">
            <span className="periodDot">2022</span>
            <h3 className="periodText">
              MKmedia produktion AB <br /> LIA - 10 veckor
            </h3>
            {showExpand
              ? <span
                  className="material-symbols-outlined expand "
                  onClick={expand}
                >
                  expand_more
                </span>
              : <span
                  className="material-symbols-outlined expand "
                  onClick={expandNot}
                >
                  expand_less
                </span>}
            {showExpandText
              ? <p className="expandLiaText expandtext">
                  <span>November 2022 till december 2022</span>
                  <br />
                  Lärde mig mycket om hur det fungerar på en webbyrå.<br />
                  Jag fick jobba mycket med Wordpress(ACF),Twig och lite
                  jQuerry.<br />
                  Redan första veckan fick jag en kunds gammla sida att snygga
                  till och <br />
                  mobilanpassa vilket var superkul att få jobba direkt med
                  skarpa projekt.<br />
                  Jag lärde mig uppdatera serviceavtal. De använde inte react
                  och ville
                  <br />
                  veta mer om det så jag höll i en "react presentation" för de
                  vilket var<br />
                  så roligt och utmanande.
                </p>
              : <div />}
          </li>
          <li className="period">
            <span className="periodDot">NU</span>
            <h3 className="periodText">Söker min andra LIA</h3>
          </li>
        </ul>
        <article>
          <h3>Om mig</h3>
          <p>
            Enligt mig själv och andra som känner mig väl <br />är jag en
            effektiv och ansvarsfull person som <br />fungerar mycket väl när
            det gäller att jobba på <br /> egen hand eller i team.
          </p>
          <p>
            Efter 5 år i handel branchen kände jag mig redo<br /> för nya
            utmaningar. Jag valde att utbilda mig till<br /> en Front End
            utvecklare då jag alltid har haft <br />intresse för webbsidor och
            applikationer.<br />Intresset fångade den kreativa delen som jag{" "}
            <br /> som besökaren såg men efter 2 år av utbildningen <br />insåg
            jag att jag är en bra problemlösare och att <br />
            utbildningen passar mig perfekt.
          </p>
          <div className="lineFunFacts" />
        </article>
        <article className="funFacts">
          <h3>Lite mer om mig</h3>
          <ul>
            <li>
              Jag älskar att resa och har besökt 20+ länder.<br /> Mitt mål är
              att resa världen runt
            </li>
            <li>Gillar fotografi</li>
            <li>Favoritmat -sushi</li>
            <li>Intresserad av inredning</li>
            <li>Har en katt Noel</li>
          </ul>
        </article>
        <div className="lineImage" />
        <img className="cvImage" src="./cv-color2.jpg" width="300px" alt="Milica" />
      </div>
    </React.Fragment>
  );
}
