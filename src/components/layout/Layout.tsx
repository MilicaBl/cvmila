import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./layout.css";

export function Layout() {
  document.body.style.minHeight = "100vh";
  useEffect(() => {
    AOS.init();
  }, []);
  const [ShowMenu, setShowMenu] = useState(false);
  const openMenu = () => {
    setShowMenu(true);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <React.Fragment>
      <nav className="nav">
        <button
          onClick={openMenu}
          className="menuButton"
          aria-label="Open Main Menu"
        >
          <span className="line1" />
          <span className="line2" />
          <span className="line3" />
        </button>
  
        {ShowMenu
          ? <div className="menu">
              <span className="material-symbols-outlined" onClick={closeMenu}>
                close
              </span>
              <ul
                className="navList"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <li onClick={closeMenu}>
                  <NavLink to={"/about"}>Om mig</NavLink>
                </li>
                <li onClick={closeMenu}>
                  <NavLink to={"/competencies"}>Kompetenser</NavLink>
                </li>
                <li onClick={closeMenu}>
                  <NavLink to={"/myprojects"}>Mina projekt</NavLink>
                </li>
                <li onClick={closeMenu}>
                  <NavLink to={"/contact"}>Kontakt</NavLink>
                </li>
              </ul>
            </div>
          : <div />}
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <span className="signature">
          <NavLink to={""}>Milica Blagojevic</NavLink>
        </span>
      </footer>
    </React.Fragment>
  );
}
