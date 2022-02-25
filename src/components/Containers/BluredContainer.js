import React from "react";
import "./BluredContainer.scss";

function BluredContainer({ title, description }) {
    return (
        <React.Fragment>
            <div className="blured-Container">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </React.Fragment>
    );
}

export default BluredContainer;
