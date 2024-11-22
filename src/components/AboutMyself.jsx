import React from "react";
import MyPhoto from "./../images/It`s me.jpg";
import "./../styles/about-myself.css";

const AboutMyself = () => {
    return (
        <div className="container-about-myself">
            <div className="basic-img">
                <img src={MyPhoto} alt="Фотография автора" />
            </div>
            <div className="basic-information">
                <h2>Обо мне</h2>
                <p>Ищу позицию C# разработчика или Full-stack разработчика, 
                    чтобы применить и развить навыки в разработке веб- и 
                    desktop-приложений, используя C#, ASP.NET Core, React и 
                    сопутствующие технологии.
                </p>
            </div>
        </div>
    );
}

export default AboutMyself;