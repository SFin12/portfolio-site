import React from "react";
import "./SideDrawer.scss";

const sideDrawer = (props) => {
    let drawerClasses = "side-drawer";
    if (props.show) {
        drawerClasses = "side-drawer open";
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li>
                    <a href="/">Profile</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
            </ul>
        </nav>
    );
};

export default sideDrawer;
