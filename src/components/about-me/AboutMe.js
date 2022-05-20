import React from "react";
import headshot from "./headshot.png"

const AboutMe = () => {
    return (
    <div>
        <h1 id="about-me">About Emma</h1>
        
        <div id="about-me-section">
            <div>
                <img src={headshot} alt="headshot" className="headshot" />
            </div>

        

            <div id="bio">
                <p>
                    Originally from Bloomington, IL, Emma moved to Denver in early 2017. With her background in sales, marketing, and property and business management, Emma joined a small tech startup, Proximity, in 2019, whose focus was providing exceptional workplace management software. Emma's current title is Senior Customer Success Advisor, Tier II. She works directly with the client side and back end of the software to be able to resolve customer issues. <br /><br />
                </p>
                <p>
                    Currently enrolled in Denver University's full-stack coding program, Emma is set to graduate June 14, 2022.. She likes seeing small parts come together to create <i>something</i> out of nothing. Emma's favorite part about coding is developing the logic for a new project and troubleshooting to watch that project come in to fruition. She believes that there is always something new to learn and puts emphasis on writing clean, readable, and scalable code. <br /><br />
                </p>
                <p>
                    Beyond the skills Emma learned in the bootcamp, she also learned that she really can do anything she sets her mind to and if she doesn't know something, she will learn it. She's really a force to be reckoned with... but whoever is writing this might be a little biased. <br /><br />
                </p>
            </div>
            </div>
    </div>
    );
};

export default AboutMe;