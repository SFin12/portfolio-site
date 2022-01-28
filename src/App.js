import HomePage from "./Views/HomePage/HomePage";
import ProjectsPage from "./Views/ProjectsPage/ProjectsPage";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="projectsPage" element={<ProjectsPage />} />
                    {/* <Route path="contact" element={<Contact />} />
                    <Route path="resume" element={<Resume />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="about" element={<About />} /> */}
                </Routes>
            </main>
        </div>
    );
}

export default App;
