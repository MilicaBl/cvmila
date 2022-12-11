import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import "./home.css";
export function Home() {
    document.body.style.backgroundColor = "#F8F5F3"
    document.body.style.minHeight = "100vh";
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <React.Fragment>
      <div className="headerFlex" data-aos="fade-up"data-aos-duration="1200">
        <h1>Mila</h1>
        <h2>Creative Developer</h2>
      </div>
    </React.Fragment>
  );
}
