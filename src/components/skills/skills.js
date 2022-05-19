import React from "react";
import hTmL from "./html.png"
import cssPic from "./css.png"
import jsPic from "./js.png"
import git from "./git.png"
import node from "./node.png"
import jquery from "./jquery.png"
import mysql from "./mysql-logo.png"
import bootstrapLogo from "./bootstrap.png"
import reactLogo from "./react.png"
import mdb from "./mdb.webp"
import graphQL from "./graphql.webp"

const Skills = () => {
    return (
        <div id="skills">
            <div><h1 id="skillsInPics">Skills</h1></div>
            <div>
            <img src={hTmL} alt="html logo" class="skillpic" />
            <img src={cssPic} alt="css logo" class="skillpic" />
            <img src={jsPic} alt="javascript logo" class="skillpic" />
            <img src={git} alt="git logo" class="skillpic" />
            <img src={node} alt="node logo" class="skillpic" />
            <img src={jquery} alt="jquery logo" class="skillpic" />
            <img src={mysql} alt="mysql logo" class="skillpic" />
            <img src={bootstrapLogo} alt="bootstrap logo" class="skillpic" />
            <img src={reactLogo}alt="react logo" class="skillpic" />
            <img src={mdb} alt="mongodb logo" class="skillpic" />
            <img src={graphQL}alt="graph ql logo" class="skillpic" />
            </div>
        </div>
    );
};

export default Skills;