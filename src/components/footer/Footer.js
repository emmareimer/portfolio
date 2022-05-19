import React from 'react';
import phone from './mobile-phone-8-xxl.png'
import linkedin from './linkedin-6-xxl.png'
import mailIcon from './telegram-2-xxl.png'
import githubIcon from './github-11-xxl.png'
import instagram from './instagram-xxl.png'

const Footer = () => {
    return (
        <footer>
            <div id="icons">
                    <a href="tel:13097069070">
                        <img src={phone} alt="phone icon" className="icons"></img>
                    </a>

                    <a href="https://www.linkedin.com/in/emmareimer/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="pink linkedin logo" target="_blank" rel="noopener noreferrer" className="icons"></img>
                    </a>

                    <a href="mailto:emmareimerworks@gmail.com">
                        <img src={mailIcon} alt="email me logo" className="icons"></img>
                    </a>

                    <a href="https://github.com/emmareimer" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="pink github logo" className="icons"></img>
                    </a>

                    <a href="https://instagram.com/ermarermer" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="instagram logo" className="icons"></img>
                    </a>
            </div>
        </footer>
    );
};

export default Footer;