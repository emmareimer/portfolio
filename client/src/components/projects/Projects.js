import React from "react";
import palabra from "./palabrav2.png"
import weatherDash from "./weather-dashboard.png"
import jsQuiz from "./javascript_quiz.png"
import dayPlanner from "./day_planner.png"

const Projects = () => {
    return (
        <div>
            <h1 id="projects">Projects</h1>

            <div className="projectDivs">
                <h2>Palabra: Word of the Day App</h2>
                <a href="https://palabra-2.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src={palabra} alt="palabra word of the day app" className="projectPics"></img>
                </a>
            </div>

            <div className="projectDivs">
                <h2>Weather Dashboard</h2>
                <a href="https://emmareimer.github.io/weather_dashboard/" target="_blank" rel="noopener noreferrer">
                    <img src={weatherDash} alt="palabra word of the day app" className="projectPics"></img>
                </a>
            </div>

            <div className="projectDivs">
                <h2>Javascript Fundamentals Quiz</h2>
                <a href="https://emmareimer.github.io/javascript_fundamentals_quiz/" target="_blank" rel="noopener noreferrer">
                    <img src={jsQuiz} alt="javascript quiz" className="projectPics"></img>
                </a>
            </div>

            <div className="projectDivs">
                <h2>Day Planner</h2>
                <a href="https://emmareimer.github.io/day_planner/" target="_blank" rel="noopener noreferrer">
                    <img src={dayPlanner} alt="day planner app" className="projectPics"></img>
                </a>
            </div>
        </div>
    );
};

export default Projects;