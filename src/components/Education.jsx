import React from "react";
import "./../styles/edication.css";
import FirstEdication from "./../images/УдГУ.png";
import SecondEdication from "./../images/ИжГТУ.png";
import ModalPage from "./ModalPage";
import { useState } from "react";



const Education = () => {
    // Получение состояния наполнения контента модального окна (есть/пусто)
    const [isModalWindow, setIsModalWindow] = useState(false);
    // Получение состояния модального окна (открыто/закрыто)
    const [modalContent, setModalContent] = useState(null);

    const openModalWindow = (content) => {
        setModalContent(content);
        setIsModalWindow(true);
    }
    const closeModalWindow = () => {
        setIsModalWindow(false);
    }

    return (
        <div className="education-content-container" id="education">
            <div className="header-container">
                <h2>Образование</h2>
            </div>
            <div className="education-container">
                <div className="circle-container">
                    <div className="work-container">
                        <span className="yaers-work">УдГУ</span>
                        <button className="circle" id="circle1" onClick={() => openModalWindow("firstEdication")}>
                            <img className="company" id="first-edication" src={FirstEdication} alt="Company 1" />
                            <span className="detailed-information">Подробнее</span></button>
                        <ul className="list-of-professions">
                            <li>Среднее профессиональное образование</li>
                            <li>Какой-то там сертификат</li>
                        </ul>
                    </div>
                    <div className="work-container">
                        <span className="yaers-work">ИжГТУ</span>
                        <button className="circle" id="circle2" onClick={() => openModalWindow("secondEdication")}>
                            <img className="company" id="second-edication" src={SecondEdication} alt="Company 2" />
                            <span className="detailed-information">Подробнее</span></button>
                        <ul className="list-of-professions">
                            <li>Высшее образование</li>
                        </ul>
                    </div>
                </div>
                <ModalPage isVisible={isModalWindow} closeModalWindow={closeModalWindow} modalContent={modalContent} />
            </div>
        </div>
    );
};

export default Education;