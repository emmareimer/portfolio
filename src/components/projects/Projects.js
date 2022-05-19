import React from "react";

const Projects = () => {
    return (
        <div>
        <h1 id="projects">Projects</h1>
            <article className="project-carousel">


            <div className="projectDivs">
                <a href="https://palabra-2.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <div class="other-projects project-1 opacity">
                        <div className="other-projects-label label-1">Palabra: Word of the Day App</div>
                    </div>
                </a>
            </div>

            <div className="projectDivs">
                <a href="https://emmareimer.github.io/weather_dashboard/" target="_blank" rel="noopener noreferrer">
                    <div class="other-projects project-2 opacity">
                        <div className="other-projects-label label-2">Weather Dashboard</div>
                    </div>
                </a>
            </div>

            <div className="projectDivs">
                <a href="https://emmareimer.github.io/javascript_fundamentals_quiz/" target="_blank" rel="noopener noreferrer">
                    <div class="other-projects project-3 opacity">
                        <div className="other-projects-label label-3">Javascript Quiz</div>
                    </div>
                </a>
            </div>

            <div className="projectDivs">
                <a href="https://emmareimer.github.io/day_planner/" target="_blank" rel="noopener noreferrer">
                    <div class="other-projects project-1 opacity">
                        <div className="other-projects-label label-1">Day Planner</div>
                    </div>
                </a>
            </div>

            </article>
        </div>
        
    );
};

export default Projects;