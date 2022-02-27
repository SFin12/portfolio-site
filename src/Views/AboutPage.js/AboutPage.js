import React from "react";
import BluredContainer from "../../components/Containers/BluredContainer";
import "./AboutPage.scss";

function AboutPage(props) {
    return (
        <React.Fragment>
            <section className="about-page" id="about-page">
                <div className="d-flex justify-content-center">
                    <h1 style={{ fontWeight: "500", color: "black" }}>
                        About Me
                    </h1>
                </div>
                <div className="d-flex flex-wrap justify-content-around m-4">
                    <BluredContainer
                        title={"Past"}
                        description={
                            <div>
                                <p>
                                    I majored in Kinesiology at California State
                                    University of Sacramento. I finished my
                                    teaching credential in 2008 and attained a
                                    science authorization. Since then, I have
                                    been teaching physical education and
                                    coaching primarily at the high school level.
                                    The past two years I have been the
                                    Department Chair for the Physical Education
                                    department at a school with over 2000
                                    students. As a department, working as a team
                                    was vital. We often had to team teach and
                                    share facilities, working out scheduling for
                                    up to six classes in the same period. We
                                    collaborated regularly and created and
                                    modified curriculum over the years. I
                                    continued taking college courses including
                                    some technology courses. I was always
                                    interested in technology and automation. A
                                    few years ago I was introduced to coding.
                                </p>
                            </div>
                        }
                    />
                    <BluredContainer
                        title={"Present"}
                        description={
                            <div>
                                <p>
                                    After completing a python 3 course at
                                    Codecademy in 2020, I started considering a
                                    carreer change to software development.
                                    After working through Codecademy's full
                                    stack carreer path, I decided to go all in
                                    and enroll in a coding bootcamp. I chose
                                    Nucamp's full stack bootcamp in the fall of
                                    2021 and graduated with honors in January
                                    2022. I was honored to have my portfolio
                                    project "Coach's Clipboard" featured durning
                                    graduation and as a project spotlight for
                                    Nucamp. I am most comfortable with
                                    javaScript and React but also have some
                                    experience with React Native and
                                    Node.js/MongoDb. I am currently taking
                                    courses in advanced Css/Sass,
                                    node.js/MongoDb, and javaScript through
                                    Udemy.
                                </p>
                            </div>
                        }
                    />

                    <BluredContainer
                        title={"Future"}
                        description={
                            <div>
                                <p>
                                    I have a lot to learn as I continue to build
                                    and practice related technologies. My goal
                                    is to transition into a junior front end or
                                    full stack web developer and continue to
                                    dive deeper into programming concepts
                                    including data structures and algorithms.
                                    Within the next year I also plan on learning
                                    more about mobile development and React
                                    Native. I aslo plan on learning Next.js and
                                    C# within the next few years. An ideal job
                                    would challenge me to grow more in the field
                                    more providing some support from senior
                                    developers.
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
