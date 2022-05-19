import React from 'react';
import phone from './phone.png'
import linkedin from './linkedin.png'
import mailIcon from './mail.png'
import githubIcon from './github.png'

const Footer = () => {
    return (
        <footer>
                    <a href="tel:13097069070">
                        <img src={phone} alt="phone icon"></img>
                    </a>

                    <a href="https://www.linkedin.com/in/emmareimer/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="pink linkedin logo" target="_blank" rel="noopener noreferrer"></img>
                    </a>

                    <a href="mailto:emmareimerworks@gmail.com">
                        <img src={mailIcon} alt="email me logo"></img>
                    </a>

                    <a href="https://github.com/emmareimer" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="pink github logo"></img>
                    </a>


        </footer>
    );
};

export default Footer;