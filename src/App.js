import HomePage from "./Views/HomePage/HomePage";
import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Main from "./Views/Main/Main";

function App() {
    let location = useLocation();

    return (
        <div className="App" id="home">
            <main>
                <TransitionGroup>
                    <CSSTransition
                        key={location.pathname}
                        classNames="page-transition"
                        timeout={2000}
                    >
                        <HomePage />
                    </CSSTransition>
                </TransitionGroup>
            </main>
            <section>
                <Main />
            </section>
        </div>
    );
}

export default App;
