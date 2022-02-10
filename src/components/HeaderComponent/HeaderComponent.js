import "./HeaderComponent.scss";
import { useNavigate } from "react-router-dom";

function HeaderComponent() {
    const navigate = useNavigate();

    return (
        <div className="main">
            <header className="App-header overlay">
                <div className="hover-trigger">
                    <div
                        className="small-container"
                        onClick={() => navigate("/main")}
                    >
                        <div>
                            <h2>Sean Finegan</h2>
                            <div className="subtitle">
                                Full Stack Web Developer
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cover"></div>
            </header>
        </div>
    );
}

export default HeaderComponent;

// style={{ fontSize: 20 }}
