import React from "react";
import BluredContainer from "../../components/Containers/BluredContainer";
import "./AboutPage.scss";

function AboutPage(props) {
    return (
        <React.Fragment>
            <section className="about-page pt-5" id="about-page">
                <div className="d-flex justify-content-center">
                    <h1 className="page-title">About Me</h1>
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
                                    {" "}
                                    I've built web apps, web pages and simple
                                    games using{" "}
                                    <strong>JavaScript, Python </strong> and the{" "}
                                    <strong>MERN</strong> stack. I'm currently
                                    working with two companies (Armored Coatings
                                    and Yard To Fork) on their websites and web
                                    apps and love the process of creating,
                                    building, and refining projects.{" "}
                                </p>
                                <p>
                                    Since graduating from a full stack bootcamp
                                    (Nucamp) I have mainly been working on the
                                    front end with <strong>React</strong> and{" "}
                                    <strong>Firebase</strong> for projects. I'm
                                    looking forward to continued growth and
                                    exploration in the world of programming.
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
