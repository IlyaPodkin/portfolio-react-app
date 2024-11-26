import React from "react";
import { Link } from "react-scroll"; // Импортируем Link из react-scroll
import "./../styles/navigation-bar.css";

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <Link to="about-me" smooth={true} duration={500} offset={-200} spy={true} activeClass="active-link" className="button-link">Обо мне</Link>
      <Link to="experience" smooth={true} duration={500} offset={-200} spy={true} activeClass="active-link" className="button-link">Опыт работы</Link>
      <Link to="skills" smooth={true} duration={500} offset={-200} spy={true} activeClass="active-link" className="button-link">Навыки</Link>
      <Link to="education" smooth={true} duration={500} offset={-200} spy={true} activeClass="active-link" className="button-link">Образование</Link>
      <Link to="other" smooth={true} duration={500} offset={-200} spy={true} activeClass="active-link" className="button-link">Прочее</Link>
      <Link to="contacts" smooth={true} duration={500} offset={-200} spy={true} activeClass="active-link" className="button-link">Контакты</Link>
    </div>
  );
};

export default NavigationBar;
