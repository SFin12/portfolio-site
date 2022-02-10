import React from "react";
import Card from "../../components/Card/Card";
import { CSSTransition } from "react-transition-group";
import "./ProjectPage.scss";
const data = require("./projects.json");

function ProjectsPage() {
    console.log(data);
    return (
        <React.Fragment>
            <div className="projects-container">
                <div className="d-flex flex-wrap justify-content-center ">
                    {data.map((project, i) => {
                        return (
                            <Card
                                title={project.title}
                                image={project.image}
                                description={project.description}
                                link={project.link}
                            />
                        );
                    })}
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProjectsPage;
