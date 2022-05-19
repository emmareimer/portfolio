import React from 'react';
// import { Link } from 'react-router-dom';
import me from "./me.jpeg"

const Header = () => {
  return (

    <header>
        <h1 id="hey">
            Hey, I'm Emma and I'm a full-stack developer.
        </h1>
        <a href="#about-me">
            <img src={me} alt="pic of me" id="bio-pic"></img>
        </a> 
    </header>

  );
};


export default Header;
