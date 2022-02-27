import React from "react";
import "./SideDrawer.scss";
import { LinkButton } from "../Buttons/LinkButton";

const sideDrawer = (props) => {
    let drawerClasses = "side-drawer";
    if (props.show) {
        drawerClasses = "side-drawer open";
    }

    function handleClose() {
        props.close();
    }

    const pageLinks = [
        {
            name: "Projects",
            to: "projects-page",
        },
        {
            name: "Skills",
            to: "skills-page",
        },
        {
            name: "About",
            to: "about-page",
        },
        {
            name: "Contact",
            to: "contact-page",
        },
    ];

    return (
        <nav className={drawerClasses}>
            {pageLinks.map((link, i) => (
                <div
                    className="d-flex flex-column align-items-center p-4"
                    key={"linkKey" + i}
                >
                    <LinkButton
                        name={link.name}
                        to={link.to}
                        close={handleClose}
                    />
                </div>
            ))}
        </nav>
    );
};

export default sideDrawer;
