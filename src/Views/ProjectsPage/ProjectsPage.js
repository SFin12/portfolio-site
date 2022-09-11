import React from "react";
import Card from "../../components/Card/Card";
import BluredContainer from "../../components/Containers/BluredContainer"
import "./ProjectPage.scss";
import data from "./projects.json";

function ProjectsPage() {
    console.log(data);
    return (
        <React.Fragment>
            <div className="projects-container pt-5" id="projects-page">
                <h1 className="page-title">Projects</h1>
                {/* "d-flex flex-wrap justify-content-center h-100" */}
                <div className="cards-container">
                    {data.map((project, i) => {
                        return (
                            <div
                                className="card-container"
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
                    

                    <div className="card-container p-2">
                      <BluredContainer title={'Other Projects'} description={
                                        <div className="text-start">
                      <strong>Yard To Fork LLC</strong>
                      <p><strong>Description: </strong>Customer and admin facing PWA that allows customers to communicate, research and choose plants for their gardens. The admin side streamlines customer information for employees and allows admin to update customer facing data. Currently being developed.</p>
                      <strong>Hidden Mountan Data</strong>
                      <p><strong>Description: </strong>Data warehouse project transforming data using SQL, DBT and Google Bigquery for data Analytics.</p>
                      <strong>Onsite Analytics</strong>
                      <p><strong>Description: </strong> Worked as an intern with other develpers problem solving and building company website and Features.</p>
                      </div>
                                      }
                                        />
                    </div>
               
                </div>
                
            </div>
        </React.Fragment>
    );
}

export default ProjectsPage;
