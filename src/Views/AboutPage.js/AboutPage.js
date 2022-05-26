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
                        title={"Past"}
                        description={
                            <div>
                                <p>
                                    I majored in Kinesiology at California State
                                    University of Sacramento. I finished my
                                    teaching credential in 2008 and attained a
                                    science authorization. Since then, I have
                                    been teaching and coaching primarily at the
                                    high school level. The past two years I have
                                    been the Department Chair for the PE
                                    department. As a department, working as a
                                    team was vital. We often had to team teach
                                    and share facilities, working out scheduling
                                    for up to six classes in the same period. We
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
                                    After completing a Python 3 course at
                                    Codecademy in 2020, I started considering a
                                    carreer change to software development.
                                    After working through Codecademy's Full
                                    Stack career path, I decided to go all in
                                    and enroll in a coding bootcamp. I chose
                                    Nucamp's Full Stack program in the fall of
                                    2021 and graduated with honors in January
                                    2022. I was honored to have my portfolio
                                    project "Coach's Clipboard" featured during
                                    graduation and as a project spotlight for
                                    Nucamp. I am most comfortable with
                                    JavaScript and React but also have some
                                    experience with React Native, Bootstrap,
                                    Node.js, and MongoDb. I am currently taking
                                    courses in advanced CSS/SASS,
                                    Node.js/MongoDb and JavaScript through
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
                                    is to transition into a Front End or Full
                                    Stack Web Developer and continue to dive
                                    deeper into programming concepts including
                                    data structures and algorithms. Within the
                                    next year I also plan on learning more about
                                    mobile development, React Native, and
                                    Next.js as well as becoming more familiar
                                    with backend languages and technologies. An
                                    ideal job would challenge me to grow more in
                                    the field while providing some support from
                                    more experienced developers.
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
