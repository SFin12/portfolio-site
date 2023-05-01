import React from "react";
import BluredContainer from "../../components/Containers/BluredContainer";
import "./AboutPage.scss";

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
                                <p>
                                    I am a father of three, a teacher, tech,
                                    boardgame and sports enthusiast.
                                </p>
                                <p>
                                    Since starting to code in 2019 and graduating from a full stack bootcamp
                                    (Nucamp), I've published a Chrome web extension, built web apps, web pages, PWA's, data models and simple games. 
                                </p>
                                <p>I've had the opportunity to work with Armored Coatings to build their
                                    company website, intern
                                    with Onsite Analytics and do contract work with several other
                                    companies (Yard To Fork LLC and Hidden Mountain Data).</p>
                                <p>
                                    Technologies I've recently utilizized include <strong>JavaScript, React, Redux, Firebase</strong>, DBT, SQL, 
                                    and Google Bigquery.{" "}{" "}
                                    I have worked more on the
                                    front end with MUI, React Bootstrap, Typescript, raw CSS / SASS and vanilla JavaScript but also have experience with Node.js / Express, Python, and SQL. I'm currently working on an automation tool to help a startup speed up their proposal process using various API's including Google API's and OpenAi API's.
                                </p>
                            
                            </div>
                        }
                    />
                </div>
            </section>
        </React.Fragment>
    );
}

export default AboutPage;
