import React from "react";
import "./SideDrawer.scss";
import { LinkButton } from "../Buttons/LinkButton";
import { HashLink } from "react-router-hash-link";

const sideDrawer = (props) => {
    let drawerClasses = "side-drawer";
    if (props.show) {
        drawerClasses = "side-drawer open";
    }
    return (
        <nav className={drawerClasses}>
            <div className="d-flex flex-column align-items-center p-4">
                <LinkButton name="Projects" to="projects-page" />
            </div>
            <div className="d-flex flex-column align-items-center p-4">
                <LinkButton name="Skills" to="skills-page" />
            </div>
            <div className="d-flex flex-column align-items-center p-4">
                <LinkButton name="About" to="about-page" />
            </div>
            <div className="d-flex flex-column align-items-center p-4">
                <LinkButton name="Contact" to="contact-page" />
            </div>
        </nav>
    );
};

export default sideDrawer;
