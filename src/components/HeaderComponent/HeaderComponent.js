import "./HeaderComponent.scss";
import { HashLink } from "react-router-hash-link";
import { useState } from "react"

function HeaderComponent() {

  const [background, setBackground] = useState('paper')

  function handleBackground(){
    setBackground((prev) => prev === 'paper' ? 'tech' : 'paper')
  }

    return (
        <div className={`main ${background}`}>
          <div className="secret-button" onClick={handleBackground}>Change Background</div>
            <header className="App-header overlay">
                <div className="hover-trigger">
                    <HashLink smooth to="/#main" className="small-container">
                        <div>
                            <h2>Sean Finegan</h2>
                            <div className="subtitle">Full Stack Web</div>
                            <div className="subtitle">Developer</div>
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
