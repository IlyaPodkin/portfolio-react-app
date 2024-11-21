import React from "react";
import "./../styles/modal-page.css";
import BarsInformation from "./ExperienceComponets/BarsInformation";
import XFiveInformation from "./ExperienceComponets/XFiveInformation";
import UnknownInformation from "./ExperienceComponets/UnknownInformation";

const ModalPage = ({ isVisible, closeModalWindow, modalContent }) => {

    const handleOverlayClick = (event) => {
        if (event.target.className === "modal show") {
            closeModalWindow();
        }
    };

    const renderContent = () => {
        switch (modalContent) {
            case "bars":
                return <BarsInformation />;
            case "x5":
                return <XFiveInformation />;
            case "unknown":
                return <UnknownInformation />;
            default:
                return <p>Информация еще не добавлена</p>;
        }
    };

    return (
        <div className={`modal ${isVisible ? "show" : ""}`} onClick={handleOverlayClick}>
            <div className="modal-content">
                <span className="close-btn" onClick={closeModalWindow}>&times;</span>
                {renderContent()}
            </div>
        </div>
    );
};

export default ModalPage;