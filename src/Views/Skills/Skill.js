import React from "react";
import "./Skills.scss";

function Skill({ src, alt, type, rating, description }) {
    return (
        <div className="skill">
            <div className="icon-wrapper">
                <img src={src} alt={alt} />
            </div>
            <div className="bar-container">
                <div className="bar">
                    <div className="blur"></div>
                    <div className={`bar-fill rating-${rating}`}>{type}</div>
                </div>
            </div>
        </div>
    );
}

export default Skill;
