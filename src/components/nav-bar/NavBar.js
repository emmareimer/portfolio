import React from 'react';
// import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
  return (

    <Navbar bg="light" expand="lg" sticky="top">
    <div className="container-fluid">
      <h3>Emma Reimer</h3>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#about-me">About Me</Dropdown.Item>
              <Dropdown.Item href="#projects">Projects</Dropdown.Item>
              <Dropdown.Item href="#skillz">Skills</Dropdown.Item>
              <Dropdown.Item href="#contact-me">Contact</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    </div>
  </Navbar>
  );
};


export default NavBar;
