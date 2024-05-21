// import style from "./Nav.module.css";
import { useTranslation } from "react-i18next";
import style from "./Nav.module.css";
// import { useState } from "react";
import "aos/dist/aos.css";
const Nav = () => {
  const [t, i18n] = useTranslation("global");

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <a
                className={`${style.navItems} nav-link`}
                aria-current="page"
                href="#"
              >
                {t("nav.home")}
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className={`${style.navItems} nav-link`} href="#">
                {t("nav.about")}
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className={`${style.navItems} nav-link`} href="#">
                {t("nav.skills")}
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className={`${style.navItems} nav-link`} href="#">
                {t("nav.projects")}
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className={`${style.navItems} nav-link`} href="#">
                {t("nav.contact")}
              </a>
            </li>
            <div className={`${style.langItem} mx-3`}>
              
              <li className="nav-item">
                <a
                  style={{ cursor: "pointer" }}
                  className={`${style.navItems} nav-link`}
                  onClick={() => handleLanguageChange("en")}
                >
                  EN
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ cursor: "pointer" }}
                  className={`${style.navItems} nav-link`}
                  onClick={() => handleLanguageChange("es")}
                >
                  ES
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
