import React, { useEffect } from "react";
import "./contact.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
export function Contact() {
  document.body.style.backgroundColor = "#F5F1EE"
  document.body.style.minHeight = "100vh";
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <React.Fragment>
      <h2 className="contactH2" >Kontakta mig</h2>
      <div className="contactInfo">
        <span className="location">Göteborg</span>
        <span className="phone"><a href="tel:+46761364241">076-1364241</a></span>
        <span className="email"><a href="mailto:milab.code@gmail.com">milab.code@gmail.com</a></span>
      </div>
    </React.Fragment>
  );
}
