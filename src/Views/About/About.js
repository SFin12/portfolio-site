import React from "react";
import BluredContainer from "../../components/Containers/BluredContainer";

function About(props) {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-center">
                <h2 style={{ fontWeight: "500", color: "black" }}>About Me</h2>
            </div>
            <div className="d-flex flex-wrap justify-content-around">
                <BluredContainer
                    title={"About Me"}
                    description={
                        <div>
                            <p>
                                I majored in Kinesiology at California State
                                University of Sacramento. I finished my teaching
                                credential in 2008 and attained a science
                                authorization. Since then, I have been teaching
                                and coaching mainly at the high school level. A
                                few years ago I was introduced to coding.
                            </p>
                            <p>
                                After completing a python 3 course at
                                Codecademy, I started considering going all in
                                on a carreer change to software development.
                                After working through Codecademy's full stack
                                carreer path and taking Udemy courses on the
                                side, I decided to go to a coding bootcamp. I
                                chose Nucamp's full stack bootcamp in the fall
                                of 2021 and completed the course with honors in
                                January 2022. I was honored to have my portfolio
                                project "Coach's Clipboard" featured as a
                                project spotlight for Nucamp after graduation. I
                                have a lot to learn and continue to build and
                                practice react and other technologies related to
                                programming. Currently I am most comfortable
                                with javaScript and React but continue to
                                practice Node.js and MongoDb.
                            </p>
                        </div>
                    }
                />
                <BluredContainer
                    title={"Experience"}
                    description={<p>I plan on testing</p>}
                />
            </div>
        </React.Fragment>
    );
}

export default About;
