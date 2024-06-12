import style from "./Header.module.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Element } from 'react-scroll';
// import image from "../../assets/icon.png";
const Header = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Element name="about" className={style.container} id="about">
      <div className={style.headerColumns}>
        {/* <div className={style.column}> */}
          {/* <div className={style.columnText}> */}
            <h1 className={style.title}>{t("header.title1")}</h1>
            <h3 style={{fontWeight: '600', letterSpacing: "1px"}}>{t("header.title2")}</h3>
            <h2 className={style.colorText}>{t("header.title3")}</h2>
            <h4>{t("header.title4")}</h4>
          {/* </div> */}
        {/* </div> */}
        {/* <div className={style.column}>
          <img className={style.columnImg} src={image} alt="image" />
        </div> */}
      </div>
    </Element>
  );
};

export default Header;
