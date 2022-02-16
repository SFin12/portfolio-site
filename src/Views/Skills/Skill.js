import React from "react";
import "./Skills.scss";

function Skill({ src, alt, type, rating, description }) {
    return (
        <div className="skill">
            <img src={src} alt={alt} />
            <div className="bar-container">
                <div className="bar">
                    <div className={`bar-fill rating-${rating}`}></div>
                </div>
            </div>
        </div>
    );
}

export default Skill;
