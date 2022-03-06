import React from "react";
import Contact from "../../components/Contact/Contact";
import "./ContactPage.scss";

function ContactPage(props) {
    return (
        <React.Fragment>
            <section className="contact-page" id="contact-page">
                <h1 className="page-title">Contact</h1>
                <div className="d-flex justify-content-center m-4">
                    <Contact />
                </div>
                <div className="d-flex justify-content-center mb-4 mx-5 px-5">
                    <div className="social-icon">
                        <a href="https://github.com/SFin12">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                alt="Github Icon"
                                id="github-icon"
                            />
                        </a>
                    </div>
                    <div className="social-icon">
                        <a href="https://my.indeed.com/p/seanf-xf7txcg">
                            <img
                                src={require("/Users/sean/Dev/portfolioSite/portfolio-site/src/assets/indeed.png")}
                                alt="Indeed Icon"
                                id="indeed-icon"
                            />
                        </a>
                    </div>
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/sean-finegan-9a5949220/">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                                alt="LinkedIn Icon"
                                id="linkedIn-icon"
                            />
                        </a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default ContactPage;
