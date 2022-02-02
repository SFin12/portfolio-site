import HomePage from "./Views/HomePage/HomePage";
import ProjectsPage from "./Views/ProjectsPage/ProjectsPage";
import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
    let location = useLocation();

    return (
        <div className="App">
            <main>
                <TransitionGroup>
                    <CSSTransition
                        key={location.pathname}
                        classNames="page-transition"
                        timeout={2000}
                    >
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route
                                path="projectsPage"
                                element={<ProjectsPage />}
                            />
                            {/* <Route path="contact" element={<Contact />} />
                    <Route path="resume" element={<Resume />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="about" element={<About />} /> */}
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
            </main>
        </div>
    );
}

export default App;
