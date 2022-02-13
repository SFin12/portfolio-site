import React from "react";
import "./SideDrawer.scss";
import { LinkButton } from "../Buttons/LinkButton";

const sideDrawer = (props) => {
    let drawerClasses = "side-drawer";
    if (props.show) {
        drawerClasses = "side-drawer open";
    }
    return (
        <nav className={drawerClasses}>
            <div className="d-flex flex-column align-items-center p-4">
                <LinkButton name="Skills" to="/skills" />
            </div>
        </nav>
    );
};

export default sideDrawer;
