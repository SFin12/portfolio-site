import React from "react";
import "./Skills.scss";

function Skills(props) {
    return (
        <React.Fragment>
            <div className="skills-container d-flex flex-column">
                <div className="skill">
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        alt="javascript"
                    />
                    <p>javascript</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Skills;
