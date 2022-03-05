import React from "react";
import "./SideDrawer.scss";
import { PillButton } from "../Buttons/PillButton";
import { SideDrawerButton } from "../Buttons/SideDrawerButton";

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
            name: "Home",
            to: "header",
            background: "salmon",
            textColor: "white",
        },
        {
            name: "Projects",
            to: "projects-page",
            background: "salmon",
            textColor: "white",
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
                <SideDrawerButton
                    name={link.name}
                    to={link.to}
                    close={handleClose}
                    background={link.background}
                    textColor={link.textColor}
                />
            ))}
        </nav>
    );
};

export default sideDrawer;
