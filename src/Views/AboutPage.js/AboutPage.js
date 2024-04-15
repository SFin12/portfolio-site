import React from "react"
import BluredContainer from "../../components/Containers/BluredContainer"
import "./AboutPage.scss"
import CredlyBadge from "../../components/Other/CredlyBadge"

function AboutPage(props) {
  return (
    <React.Fragment>
      <section className="about-page pt-5" id="about-page">
        <div className="d-flex justify-content-center">
          <h1 className="page-title pt-2">About Me</h1>
        </div>
        <div className="about-container d-flex flex-wrap justify-content-around m-4 ">
          <BluredContainer
            title={""}
            description={
              <div className="text-start">
                <p>I'm a full stack developer with a passion for learning and creating. I'm currently working as a freelance developer working on a web / mobile applications. I'm always looking for new opportunities.</p>
                <p>Since starting to code in 2019 and graduating from a full stack bootcamp (Nucamp), I've published a Chrome web extension, built web apps, web pages, PWA's, data models and simple games.</p>
                <p>I've had the opportunity to do contract work with Yard To Fork LLC, Hidden Mountain Data, and Aura Technology.</p>
                <p>
                  Technologies I've recently utilizized include <strong>JavaScript, React, Redux, Firebase, Postgresql, Nest.js, Node, Primsa,</strong> DBT, SQL and Vue / Nuxt. I've also had experience with AWS, Google Cloud Platform and Google Apps Script. Recently, I obtained an AWS
                  Solutions Architect Associate certification.{" "}
                </p>
                <div className="flex-center">
                <CredlyBadge />
                </div>
                <p>One of the most interesting projects I've worked on was building an automation tool for Hidden Mountain Data to speed up their proposal process using various AI technologies and API's including Google API's and OpenAi API's.</p>
              </div>
            }
          />
        </div>
      </section>
    </React.Fragment>
  )
}

export default AboutPage
