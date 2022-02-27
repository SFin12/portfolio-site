import React from "react";
import "./SkillsPage.scss";

function Skill({ src, alt, type, rating, fill, description }) {
    return (
        <div className="skill">
            <div className="icon-wrapper">
                <img src={src} alt={alt} style={{ backgroundColor: fill }} />
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
