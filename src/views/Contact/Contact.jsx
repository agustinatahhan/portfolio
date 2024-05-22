import style from "./Contact.module.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
    const { t } = useTranslation("global");

    useEffect(() => {
      AOS.init();
    }, []);
  
    return(
        <div className={style.container}>
      <h2 className={style.titleExperience}>{t("contact.title")}</h2>
        </div>
    )
}

export default Contact;