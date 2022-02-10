import ProjectsPage from "../ProjectsPage/ProjectsPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import React from "react";
import "./Main.scss";

function Main() {
    let location = useLocation();

    return (
        <React.Fragment>
            <div className="topbar"></div>
            <div className="main-background">
                <div>
                    <ProjectsPage />
                </div>
            </div>
            <div className="fade-in"></div>
        </React.Fragment>
    );
}

export default Main;
