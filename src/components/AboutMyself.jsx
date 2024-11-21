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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                    omnis itaque aspernatur quis? Voluptate voluptates earum animi aut non!
                    Iure perferendis autem animi similique in reiciendis eum nihil illum,
                    natus accusamus omnis commodi corrupti nulla! Dolores esse ea enim odio!
                    Repudiandae voluptates modi magni iure repellendus nam perspiciatis, harum dolore.
                </p>
            </div>
        </div>
    );
}

export default AboutMyself;