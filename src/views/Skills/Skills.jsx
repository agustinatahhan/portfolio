import style from "./Skills.module.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import react from "../../assets/react.png";
const Skills = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={style.container}>
      <h2 className={style.titleExperience}>{t("skills.title")}</h2>
     
    </div>
  );
};

export default Skills;
