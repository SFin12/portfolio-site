import React from "react"
import Skill from "./Skill"
import gitHubIcon from '../../assets/github.svg';
import prismaIcon from '../../assets/prisma-icon.png';
import "./SkillsPage.scss"

function SkillsPage(props) {
  return (
    <React.Fragment>
      <div className="d-flex flex-column align-items-center mt-4 pt-5" id="skills-page">
        <h1 className="mt-3 page-title">Skills</h1>
       
        <div className="skills-container">
          <div className="proficient-container">
            <div id="proficient">
              <h3>Proficient</h3>
            </div>

            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" type="JavaScript" rating={8} />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Html" type="Html" rating={6} />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" type="CSS" rating={7} />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" type="React" rating={8} />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="Visual Studio Code" type="VS Code" rating={8} />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" type="Bootstrap" rating={7} />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" type="Firebase" rating={7} />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" type="Git / Github" rating={5} />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-plain.svg" alt="GitLab" type="GitLab" rating={4} />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind" type="Tailwind" rating={4} />
            <Skill src={prismaIcon} alt="Prisma" type="Prisma" rating={3} />
          </div>
          <div className="familiar-container">
            <div id="familiar">
              <h3>Familiar</h3>
            </div>
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="Typescript" type="Typescript" rating={4} />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="Node" type="Node" rating={5} />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" type="Python" rating={4} />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" type="Redux" rating={5} />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg" alt="Material UI" type="Material UI" rating={3} />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" type="Sass" rating={4} />
            {/* <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="npm" type="Npm" rating={6} /> */}
          
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-plain.svg" alt="SQL" type="SQL / Bigquery" rating={3} />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"  alt="Vue" type="Vue" rating={3} />
            <Skill alt="Next" type="Next" i={<i class="devicon-nextjs-line" style={{fontSize: '3rem', color:"white"}}></i>} rating={3} />
            <Skill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" alt="Nest.js" type="Nest.js" rating={3} />
        
     
          
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SkillsPage
