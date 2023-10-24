import React from "react"
import BluredContainer from "../../components/Containers/BluredContainer"
import "./AboutPage.scss"

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
                <p>I'm a full stack developer with a passion for learning and creating. I'm currently working for Aura Technology as a freelance developer working on a web / mobile app. I'm always looking for new opportunities to learn and grow.</p>
                <p>Since starting to code in 2019 and graduating from a full stack bootcamp (Nucamp), I've published a Chrome web extension, built web apps, web pages, PWA's, data models and simple games.</p>
                <p>I've had the opportunity to intern with Onsite Analytics and do contract work with several other companies (Yard To Fork LLC and Hidden Mountain Data).</p>
                <p>
                  Technologies I've recently utilizized include <strong>JavaScript, React, Redux, Firebase</strong>, DBT, SQL, PostgreSQL, Nest.js, Node, Primsa, and Vue / Nuxt. I've also had experience experience with Google Cloud Platform and Google Apps Script.{" "}
                </p>
                <p>
                  One of the most interesting projects I've worked on was building an automation tool for Hidden Mountain Data to speed up their proposal process using various AI technologies and
                  API's including Google API's and OpenAi API's.
                </p>
              </div>
            }
          />
        </div>
      </section>
    </React.Fragment>
  )
}

export default AboutPage
