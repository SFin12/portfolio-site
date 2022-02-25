import React from "react";
import Skill from "./Skill";
import "./Skills.scss";

function Skills(props) {
    return (
        <React.Fragment>
            <div className="skills-container d-flex flex-column">
                <div className="d-flex w-100 justify-content-center">
                    <div className="d-flex w-50 justify-content-between">
                        <div>
                            <h4>Learning</h4>
                            <div id="learning"></div>
                        </div>
                        <div>
                            <h4>Familiar</h4>
                            <div id="familiar"></div>
                        </div>
                        <div>
                            <h4>Proficient</h4>
                            <div id="proficient"></div>
                        </div>
                    </div>
                </div>
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    type="JavaScript"
                    rating={8}
                />
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                    type="React"
                    rating={7}
                />
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                    alt="Redux"
                    type="Redux"
                    rating={5}
                />
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="Html"
                    type="Html"
                    rating={6}
                />
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="CSS"
                    type="CSS"
                    rating={6}
                />
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                    alt="Sass"
                    type="Sass"
                    rating={3}
                />
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
                    alt="Node"
                    type="Node"
                    rating={4}
                />
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                    alt="npm"
                    type="Npm"
                    rating={5}
                />
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    alt="Python"
                    type="Python"
                    rating={5}
                />
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                    alt="Firebase"
                    type="Firebase"
                    rating={3}
                />
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    alt="Git"
                    type="Git / Github"
                    rating={5}
                />
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                    alt="Visual Studio Code"
                    type="Visual Studio Code"
                    rating={6}
                />
            </div>
        </React.Fragment>
    );
}

export default Skills;
