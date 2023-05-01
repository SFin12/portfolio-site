import React from "react";

import "./Toolbar.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
const Toolbar = (props) => (
    <>
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className="toolbar__toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>

                <div className="toolbar__logo">
                    Sean Finegan{" "}
                    <span className="full-stack"> - Full Stack Developer</span>
                </div>
                {/* <div className="spacer" /> */}
                <div className="toolbar_navigation-items">
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </nav>
        </header>
    </>
);

export default Toolbar;
