import React from "react"
import Card from "../../components/Card/Card"
import BluredContainer from "../../components/Containers/BluredContainer"
import "./ProjectPage.scss"
import data from "./projects.json"

function ProjectsPage() {
  return (
    <React.Fragment>
      <div className="projects-container pt-5" id="projects-page">
        <h1 className="page-title pt-2">Projects</h1>
        {/* "d-flex flex-wrap justify-content-center h-100" */}
        <div className="cards-container">
          <div className="card-container p-2">
            <BluredContainer
              title={"Highlighted Projects"}
              description={
                <div className="text-start">
                      <strong>SiteWalk</strong>
                  <p>
                    <strong>Description: </strong> Web / Mobile app for Aura Technology. Allows managers to manage employees and locations. Managers can create and manage security routes for employees to follow on the associated mobile app. Built with React, React Native, Nest.js, Google Maps, and PostgreSQL.
                  </p>
                  <strong>Hidden Mountan Data</strong>
                  <p>
                    <strong>Description: </strong>In-house automated proposal tool using Google Apps Script, Google API's and OpenAI API's.
                  </p>
                  <strong>Yard To Fork LLC</strong>
                  <p>
                    <strong>Description: </strong>Customer and admin facing PWA that allows customers to communicate, research and select plants for their gardens. The admin side allows admin to update and view customer data.
                  </p>

              
                </div>
              }
            />
          </div>
          {data.map((project, i) => {
            return (
              <div className="card-container" style={{ zIndex: "100" }} key={"projectsKey" + i}>
                <Card title={project.title} image={project.image} description={project.description} link={project.link} />
              </div>
            )
          })}

          
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProjectsPage
