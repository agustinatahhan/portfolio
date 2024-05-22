import style from "./Experience.module.css";
import { NavLink } from "react-router-dom";
import m4life from "../../assets/m4life.png";
import in2tires from "../../assets/in2tires.png";
const Experience = () => {
  return (
    <div className={style.container}>
      <h2 className={style.titleExperience}>Experience</h2>
      <div className={style.columnContainer}>
        <h2 className={`${style.titlesMobile}`}>Proyecto 1</h2>
        <NavLink to="" className={`${style.card}`}>
          {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
          </svg> */}
          <img src={in2tires} alt="image" />
          <div className={`${style.cardContent}`}>
            <p className={`${style.cardTitle}`}>Project Name</p>
            <p className={`${style.cardDescription}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </NavLink>
        <h2 className={`${style.titlesMobile}`}>Proyecto 2</h2>
        <NavLink to="" className={`${style.card}`}>
          <img src={m4life} alt="image" />

          {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
          </svg> */}
          <div className={`${style.cardContent}`}>
            <p className={`${style.cardTitle}`}>Project Name</p>
            <p className={`${style.cardDescription}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Experience;
