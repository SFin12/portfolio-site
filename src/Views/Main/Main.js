import ProjectsPage from "../ProjectsPage/ProjectsPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import React, { useState } from "react";
import "./Main.scss";
import Toolbar from "../../components/Toolbar/Toolbar";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Backdrop from "../../components/Backdrop/Backdrop";
import sideDrawer from "../../components/SideDrawer/SideDrawer";

function Main() {
    let location = useLocation();
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    function drawerToggleClickHandler() {
        setSideDrawerOpen(!sideDrawerOpen);
    }

    let sideDrawer;
    let backdrop;

    if (sideDrawerOpen) {
        backdrop = <Backdrop drawerClickHandler={drawerToggleClickHandler} />;
    }

    return (
        <React.Fragment>
            <div style={{ height: "100%" }}>
                <div className="topbar"></div>
                <Toolbar drawerClickHandler={drawerToggleClickHandler} />
                <SideDrawer show={sideDrawerOpen} />
                {backdrop}
                <div className="main-background">
                    <div>
                        <Routes>
                            <Route path="/" element={<ProjectsPage />} />
                        </Routes>
                    </div>
                </div>
                <div className="fade-in-overlay"></div>
            </div>
        </React.Fragment>
    );
}

export default Main;