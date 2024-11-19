import React from "react";
import "./styles/navigationBar.css";

const NavigationBar = () => {
    return (
        <div className="navigation-bar" id="navigation-bar">
            <button className="button-link">Обо мне</button>
            <button className="button-link">Опыт работы</button>
            <button className="button-link">Навыки</button>
            <button className="button-link">Образование</button>
            <button className="button-link">Прочее</button>
            <button className="button-link">Контакты</button>
        </div>
    );
}

export default NavigationBar;