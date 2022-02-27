import "./HeaderComponent.scss";
import { HashLink } from "react-router-hash-link";

function HeaderComponent() {
    return (
        <div className="main">
            <header className="App-header overlay">
                <div className="hover-trigger">
                    <HashLink smooth to="/#main" className="small-container">
                        <div>
                            <h2>Sean Finegan</h2>
                            <div className="subtitle">
                                Full Stack Web Developer
                            </div>
                        </div>
                    </HashLink>
                </div>
                <div className="cover"></div>
            </header>
        </div>
    );
}

export default HeaderComponent;

// style={{ fontSize: 20 }}
