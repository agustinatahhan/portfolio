import { useTranslation } from "react-i18next";
import style from "./Nav.module.css";
import { useState } from "react";
import "aos/dist/aos.css";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  const [t, i18n] = useTranslation("global");

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
  };
  return (
    <nav className={style.nav}>
      <div className={style.navContainerElements}>
        <div className={`${style.navIcons} ${style.column}`}>
          <div>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-code"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                strokeWidth="1.2"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 8l-4 4l4 4" />
                <path d="M17 8l4 4l-4 4" />
                <path d="M14 4l-4 16" />
              </svg>
            </a>
          </div>
          <div>
            <ul>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => handleLanguageChange("en")}
                >
                  EN
                </a>
              </li>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => handleLanguageChange("es")}
                >
                  ES
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${style.navLinks} ${style.column}`}>
          <ul>
            <li>
              <ScrollLink to="about" smooth={true} duration={100}>{t("nav.about")}</ScrollLink>
            </li>
            {/* <li>
              <ScrollLink to="home" smooth={true} duration={100}>{t("nav.about")}</ScrollLink>
            </li> */}

            <li>
              <ScrollLink to="skills" smooth={true} duration={100}>{t("nav.skills")}</ScrollLink>
            </li>
            <li>
              <ScrollLink to="experience" smooth={true} duration={100}>{t("nav.experience")}</ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={100}>{t("nav.contact")}</ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
