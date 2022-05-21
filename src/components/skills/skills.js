import React from "react";
import hTmL from "./html.png"
import cssPic from "./css.png"
import jsPic from "./js.png"
import git from "./git.png"
import node from "./node.png"
import mysql from "./mysql-logo.png"
import reactLogo from "./react.png"
import mdb from "./mdb.webp"
import graphQL from "./graphql.webp"
import apolloPic from "./apollo.png"
import expressjsPic from "./expressjs.png"
import githubLogo from "./githublogo.png"
import jwtLogo from "./jwt.png"
import reduxLogo from "./redux.png"

const Skills = () => {
    return (
        <div id="skillDiv">
            <div><h1 id="skillsInPics">Skills</h1></div>
            <div id="skills">
                <img src={hTmL} alt="html logo" className="skillpic" />
                <img src={cssPic} alt="css logo" className="skillpic" />
                <img src={jsPic} alt="javascript logo" className="skillpic" />
                <img src={git} alt="git logo" className="skillpic" />
                <img src={node} alt="node logo" className="skillpic" />
                <img src={mysql} alt="mysql logo" className="skillpic" />
                <img src={reactLogo}alt="react logo" className="skillpic" />
                <img src={mdb} alt="mongodb logo" className="skillpic" />
                <img src={graphQL}alt="graph ql logo" className="skillpic" />
                <img src={apolloPic} alt="apollo logo" className="skillpic" />
                <img src={expressjsPic} alt="expressjs logo" className="skillpic" />
                <img src={githubLogo} alt="github logo" className="skillpic" />
                <img src={jwtLogo} alt="jwt logo" className="skillpic" />
                <img src={reduxLogo} alt="redux logo" className="skillpic" />
            </div>
        </div>
    );
};

export default Skills;