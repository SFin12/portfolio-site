import React from "react";
import Card from "../../components/Card/Card";
import { CSSTransition } from "react-transition-group";

import "./ProjectPage.scss";
const data = require("./projects.json");

function ProjectsPage() {
    console.log(data);
    return (
        <React.Fragment>
            <div className="d-flex full-page align-items-center">
                <div className="d-flex flex-wrap justify-content-center">
                    {data.map((project, i) => {
                        return (
                            <CSSTransition
                                key={project + i}
                                classNames="page-transition"
                                timeout={1000}
                            >
                                <Card
                                    title={project.title}
                                    image={project.image}
                                    description={project.description}
                                    link={project.link}
                                />
                            </CSSTransition>
                        );
                    })}
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProjectsPage;
