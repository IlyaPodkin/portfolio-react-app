import React from "react";
import "./../styles/places-of-work.css";
import Bars from "./../images/Барс.png";
import X5Group from "./../images/Х5.png";
import { useState } from "react";
import ModalPage from "./ModalPage";

const PlacesOfWork = () => {

    const [isModalWindow, setIsModalWindow] = useState(false);

    const [modalContent, setModalContent] = useState(null);

    const openModalWindow = (content) => {
        setModalContent(content);
        setIsModalWindow(true);
    }
    const closeModalWindow = () => {
        setIsModalWindow(false);
    }


    return (
        <>
            <div className="header-container">
                <h2>Опыт работы</h2>
            </div>
            <div className="circle-container">
                <div className="work-container">
                    <span className="yaers-work">2022-2023</span>
                    <button className="circle" id="circle1" onClick={() => openModalWindow("bars")}>
                        <img className="company" src={Bars} alt="Company 1" />
                        <span className="detailed-information">Подробнее</span></button>
                    <ul className="list-of-professions">
                        <li>Техническая поддержка</li>
                        <li>Специалист по сопровождению</li>
                        <li>Product manager</li>
                    </ul>
                </div>
                <div className="work-container">
                    <span className="yaers-work">2023-2024</span>
                    <button className="circle" id="circle2" onClick={() => openModalWindow("x5")}>
                        <img className="company" id="x5" src={X5Group} alt="Company 2" />
                        <span className="detailed-information">Подробнее</span></button>
                    <ul className="list-of-professions">
                        <li>Специалист по сопровождению</li>
                    </ul>
                </div>
                <div className="work-container">
                    <span className="yaers-work">????-????</span>
                    <button className="circle" id="circle3" onClick={() => openModalWindow("unknown")}><span className="indefinite">?</span>
                        <span className="detailed-information">Подробнее</span></button>
                    <ul className="list-of-professions">
                        <li>C# developer</li>
                        <li>full-stack developer (C#/JS)</li>
                    </ul>
                </div>
            </div>
            <ModalPage isVisible={isModalWindow} closeModalWindow={closeModalWindow} modalContent={modalContent}/>
        </>
    );
}

export default PlacesOfWork;