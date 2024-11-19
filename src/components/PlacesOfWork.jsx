import React from "react";
import "./../styles/places-of-work.css";
import Bars from "./../images/Барс.png";
import X5Group from "./../images/Х5.png";

const PlacesOfWork = () => {
    return (
        <div class="circle-container">
            <div>
                <span class="yaers-work">2022-2023</span>
                <button class="circle" id="circle1">
                    <img class="company" src={Bars} alt="Company 1" />
                    <span class="detailed-information">Подробнее</span></button>
            </div>
            <div>
                <span class="yaers-work">2023-2024</span>
                <button class="circle" id="circle2">
                    <img class="company" id="x5" src={X5Group} alt="Company 2" />
                    <span class="detailed-information">Подробнее</span></button>
            </div>
            <div>
                <span class="yaers-work">????-????</span>
                <button class="circle" id="circle3"><span class="indefinite">?</span>
                    <span class="detailed-information">Подробнее</span></button>
            </div>
        </div>
    );
}

export default PlacesOfWork;