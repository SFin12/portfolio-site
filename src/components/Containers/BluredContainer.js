import React from "react";
import "./BluredContainer.scss";

function BluredContainer({ title, description }) {
    return (
        <React.Fragment>
            <div className="blured-container">
                <h2>{title}</h2>
                {description}
            </div>
        </React.Fragment>
    );
}

export default BluredContainer;
