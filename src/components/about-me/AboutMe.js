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

        

            <div id="bio" >
                <p>
                    Originally from Bloomington, IL, Emma moved to Denver in early 2017. With a strong background in sales, marketing, and property and business management, Emma joined a small tech startup, Proximity, in 2019, whose focus was providing exceptional workplace management software. Emma excelled at her customer success role and quickly moved to the Senior Customer Success Advisor Tier II role. In this role she was able to use her analytical mindset, her ability to troubleshoot, and her knowledge of the front-end and back-end of the software to find resolutions to customer issues and maintain a very high rate of customer satisfaction. <br /><br />
                </p>
                <p>
                    Currently enrolled in Denver University's full-stack coding program, Emma is set to graduate June 14, 2022. She likes seeing small parts come together to create <i>something</i> out of nothing. Emma's favorite part about development is day-dreaming a concept and creating the roadmap to watch that project come in to fruition. She believes that there is always something new to learn and puts emphasis on writing clean, readable, and scalable code. <br /><br />
                </p>
                <p>
                    Beyond the skills Emma learned in the bootcamp, she also learned that she really can do anything she sets her mind to and if she doesn't know something, she will learn it. Emma believes in transparency, vulnerability, kindness, and empathy above all. But don't get it twisted, she's a force to be reckoned with. <br /><br />
                </p>
            </div>
            </div>

                <div id="quote">
                    <p id="scarletBegonias">
                        the kindest thing my father ever said to me - <br/>
                        <em>women like you drown oceans</em> <br/>
                        -Rupi Kaur <br/><br/>
                        And drown them, I shall.
                    </p>
                </div>

    </div>
    );
};

export default AboutMe;