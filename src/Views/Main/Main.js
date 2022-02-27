import ProjectsPage from "../ProjectsPage/ProjectsPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import React, { useState } from "react";
import "./Main.scss";
import Toolbar from "../../components/Toolbar/Toolbar";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Backdrop from "../../components/Backdrop/Backdrop";
import SkillsPage from "../SkillsPage/SkillsPage";
import AboutPage from "../AboutPage.js/AboutPage";
import ContactPage from "../ContactPage/ContactPage";

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
                <Toolbar drawerClickHandler={drawerToggleClickHandler} />
                <SideDrawer show={sideDrawerOpen} />
                {backdrop}
                <div className="main-background" id="main">
                    <div className="layer">
                        <Routes>
                            <Route path="/" element={<ProjectsPage />} />
                            <Route path="/skills" element={<SkillsPage />} />
                            <Route path="/about" element={<AboutPage />} />
                        </Routes>
                        <SkillsPage id="skills" />
                        <AboutPage />
                        <ContactPage />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Main;
