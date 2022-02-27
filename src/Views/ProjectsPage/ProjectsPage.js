import React from "react";
import Card from "../../components/Card/Card";
import { CSSTransition } from "react-transition-group";
import "./ProjectPage.scss";
const data = require("./projects.json");

function ProjectsPage() {
    console.log(data);
    return (
        <React.Fragment>
            <div className="projects-container" id="projects-page">
                <div className="d-flex flex-wrap justify-content-center h-100">
                    <h1>Projects</h1>
                    {data.map((project, i) => {
                        return (
                            <div
                                className="d-flex justify-content-center"
                                style={{ zIndex: "100" }}
                            >
                                <Card
                                    title={project.title}
                                    image={project.image}
                                    description={project.description}
                                    link={project.link}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProjectsPage;
