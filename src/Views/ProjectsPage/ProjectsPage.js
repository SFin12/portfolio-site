import React from "react";
import Card from "../../components/Card/Card";
import "./ProjectPage.scss";
import data from "./projects.json";

function ProjectsPage() {
    console.log(data);
    return (
        <React.Fragment>
            <div className="projects-container pt-5" id="projects-page">
                <h1 className="page-title">Projects</h1>
                <div className="d-flex flex-wrap justify-content-center h-100">
                    {data.map((project, i) => {
                        return (
                            <div
                                className="d-flex justify-content-center"
                                style={{ zIndex: "100" }}
                                key={"projectsKey" + i}
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
