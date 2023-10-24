import React from "react";
import "./SkillsPage.scss";

function Skill({ src, alt, type, rating, fill, description, i, style }) {

    return (
        <div className="skill">
          <div>{type}</div>
            <div className="icon-wrapper">
              {i ? i : 
                <img src={src} alt={alt} style={{ backgroundColor: fill, ...style}}/>
              }
            </div>
         
        </div>
    );
}

export default Skill;
