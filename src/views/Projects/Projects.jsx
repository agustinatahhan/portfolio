import style from "./Projects.module.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={style.container}>
      <h2 className={style.titleExperience}>{(t("projects.title"))}</h2>
    </div>
  );
};

export default Projects;
