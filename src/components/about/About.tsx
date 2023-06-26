import React, { useEffect, useRef, useState } from "react";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";
import JobbText from "./JobbText";
import MkmediaText from "./MkmediaText";
import DfText from "./DfText";
import AboutText from "./AboutText";
import Funfact from "./Funfact";

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

  const [showExpandLia, setShowExpandLia] = useState(true);
  const [showExpandLiaText, setShowExpandLiaText] = useState(false);

  const expandTwo = () => {
    setShowExpandTwo(false);
    setShowExpandTextTwo(true);
    expandNot();
    expandNotLia();
  };
  const expandNotTwo = () => {
    setShowExpandTwo(true);
    setShowExpandTextTwo(false);
  };
  const expand = () => {
    setShowExpand(false);
    setShowExpandText(true);
    expandNotLia();
    expandNotTwo();
  };
  const expandNot = () => {
    setShowExpand(true);
    setShowExpandText(false);
  };
  const expandLia = () => {
    setShowExpandLia(false);
    setShowExpandLiaText(true);
    expandNot();
    expandNotTwo();
  };
  const expandNotLia = () => {
    setShowExpandLia(true);
    setShowExpandLiaText(false);
  };
  const containerRef = useRef<HTMLLIElement | null>(null);

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
                  {" "}<JobbText />{" "}
                  <span
                    className="material-symbols-outlined expandmobile"
                    onClick={expandNotTwo}
                  >
                    close
                  </span>{" "}
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
          <li className="period container" ref={containerRef}>
            <span className="periodDot">2022</span>
            <h3 className="periodText">
              MKmedia produktion AB <br /> LIA - 10 veckor
            </h3>
            {showExpand
              ? <span
                  className="material-symbols-outlined expand"
                  onClick={expand}
                >
                  expand_more
                </span>
              : <span
                  className="material-symbols-outlined expand"
                  onClick={expandNot}
                >
                  expand_less
                </span>}
            {showExpandText
              ? <p className="expandLiaText expandtext">
                  <MkmediaText />{" "}
                  <span
                    className="material-symbols-outlined expandmobile"
                    onClick={expandNot}
                  >
                    close
                  </span>
                </p>
              : <div />}
          </li>
          <li className="period">
            <span className="periodDot">2022</span>
            <h3 className="periodText">
              Dear Friends <br /> LIA - 4 månader
            </h3>
            {showExpandLia
              ? <span
                  className="material-symbols-outlined expand "
                  onClick={expandLia}
                >
                  expand_more
                </span>
              : <span
                  className="material-symbols-outlined expand"
                  onClick={expandNotLia}
                >
                  expand_less
                </span>}
            {showExpandLiaText
              ? <p className="expandLiaText expandtext">
                  <DfText />
                  <br />
                  <span
                    className="material-symbols-outlined expandmobile"
                    onClick={expandNotLia}
                  >
                    close
                  </span>
                </p>
              : <div />}
          </li>
          <li className="period">
            <span className="periodDot">NU</span>
            <h3 className="periodText">
              Söker min första jobb som <br />Frond End Developer
            </h3>
          </li>
        </ul>
        <AboutText />
        <Funfact />
        <div className="lineImage" />
        <img
          className="cvImage"
          src="./cvbild.jpg"
          width="300px"
          alt="Milica"
        />
      </div>
    </React.Fragment>
  );
}
