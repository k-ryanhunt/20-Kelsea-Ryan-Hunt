import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import project2 from "../images/projectTwo.png";
import project1 from "../images/projectOne.png";
import timedGame from "../images/timedQuiz.png";
import workDay from "../images/scheduler.png";
import pwGenerator from "../images/generator.png";
import weatherDash from "../images/weatherDashboard.png";
import teamGenerator from "../images/Team.png";
import eCommerceFiller from "../images/GRAVE.jpg";
import logo from "../images/logo512.png";

const portfolio = () => {
  return (
    <div>
      <div class="container">
        <div class="col s4">
          <div class="card large hoverable">
            <div class="card-image">
              <img src={project2} alt="Screenshot of my first group project" />
            </div>
            <div class="card-content">
              <h1>tripr</h1>
            </div>
            <div class="card-action">
              <a href="https://github.com/k-ryanhunt/Project-2-Travel-Green">
                <i class="material-icons" id="icon">
                  code
                </i>
              </a>
              <a href="https://tripr-project2.herokuapp.com/">
                <i class="material-icons" id="icon">
                  personal_video
                </i>
              </a>
              <a href="https://github.com/k-ryanhunt">
                <i class="material-icons" id="icon">
                  person_add
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="col s4">
          <div class="card large hoverable">
            <div class="card-image">
              <img src={project1} alt="Screenshot of my first group project" />
            </div>
            <div class="card-content">
              <h1>Post Covid Concerts</h1>
            </div>
            <div class="card-action">
              <a href="https://github.com/k-ryanhunt/Project-One-Concert-Finder">
                <i class="material-icons" id="icon">
                  code
                </i>
              </a>
              <a href="https://baystaub.github.io/concerts-in-covid/">
                <i class="material-icons" id="icon">
                  personal_video
                </i>
              </a>
              <a href="https://github.com/k-ryanhunt">
                <i class="material-icons" id="icon">
                  person_add
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="col s4">
          <div class="card large hoverable">
            <div class="card-image">
              <img src={timedGame} alt="Screenshot of HS screen" />
              <span class="card-title"></span>
            </div>
            <div class="card-content">
              <h1>Timed Quiz</h1>
            </div>
            <div class="card-action">
              <a href="https://github.com/k-ryanhunt/Timed-Quiz">
                <i class="material-icons" id="icon">
                  code
                </i>
              </a>
              <a href="https://k-ryanhunt.github.io/Timed-Quiz/">
                <i class="material-icons" id="icon">
                  personal_video
                </i>
              </a>
              <a href="https://github.com/k-ryanhunt">
                <i class="material-icons" id="icon">
                  person_add
                </i>
              </a>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="col s4">
            <div class="card large hoverable">
              <div class="card-image">
                <img src={workDay} alt="Screenshot of Work Day Scheduler" />
                <span class="card-title"></span>
              </div>
              <div class="card-content">
                <h1>Day Planner</h1>
              </div>
              <div class="card-action">
                <a href="https://github.com/k-ryanhunt/Day-Planner">
                  <i class="material-icons" id="icon">
                    code
                  </i>
                </a>
                <a href="https://k-ryanhunt.github.io/Day-Planner/">
                  <i class="material-icons" id="icon">
                    personal_video
                  </i>
                </a>
                <a href="https://github.com/k-ryanhunt">
                  <i class="material-icons" id="icon">
                    person_add
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="col s4">
            <div class="card large hoverable">
              <div class="card-image">
                <img src={pwGenerator} alt="Password generator" />
                <span class="card-title"></span>
              </div>
              <div class="card-content">
                <h1>Password Generator</h1>
              </div>
              <div class="card-action">
                <a href="https://github.com/k-ryanhunt/Password-Generator">
                  <i class="material-icons" id="icon">
                    code
                  </i>
                </a>
                <a href="https://k-ryanhunt.github.io/Password-Generator/">
                  <i class="material-icons" id="icon">
                    personal_video
                  </i>
                </a>
                <a href="https://github.com/k-ryanhunt">
                  <i class="material-icons" id="icon">
                    person_add
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="col s4">
          <div class="card large hoverable">
            <div class="card-image">
              <img src={weatherDash} alt="Screenshot of Weather Dashboard" />
              <span class="card-title"></span>
            </div>
            <div class="card-content">
              <h1>Weather Dashboard</h1>
            </div>
            <div class="card-action">
              <a href="https://github.com/k-ryanhunt/Weather-Dashboard">
                <i class="material-icons" id="icon">
                  code
                </i>
              </a>
              <a href="https://k-ryanhunt.github.io/Weather-Dashboard/">
                <i class="material-icons" id="icon">
                  personal_video
                </i>
              </a>
              <a href="https://github.com/k-ryanhunt">
                <i class="material-icons" id="icon">
                  person_add
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="col s4">
          <div class="card large hoverable">
            <div class="card-image">
              <img
                src={teamGenerator}
                alt="Screenshot of Team being generated"
              />
              <span class="card-title"></span>
            </div>
            <div class="card-content">
              <h1>Team Generator</h1>
            </div>
            <div class="card-action">
              <a href="https://github.com/k-ryanhunt/Team-Profile-Generator">
                <i class="material-icons" id="icon">
                  code
                </i>
              </a>
              <a href="https://github.com/k-ryanhunt">
                <i class="material-icons" id="icon">
                  personal_video
                </i>
              </a>
              <a href="https://github.com/k-ryanhunt">
                <i class="material-icons" id="icon">
                  person_add
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="col s4">
          <div class="card large hoverable">
            <div class="card-image">
              <img src={eCommerceFiller} alt="Fall Mountains in Colorado" />
              <span class="card-title"></span>
            </div>
            <div class="card-content">
              <h1>E-Commerce Back End</h1>
            </div>
            <div class="card-action">
              <a href="https://github.com/k-ryanhunt">
                <i class="material-icons" id="icon">
                  code
                </i>
              </a>
              <a href="https://github.com/k-ryanhunt">
                <i class="material-icons" id="icon">
                  personal_video
                </i>
              </a>
              <a href="https://github.com/k-ryanhunt/E-Commerce-Back-End">
                <i class="material-icons" id="icon">
                  person_add
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        class="center-block"
        id="pic"
        src={logo}
        alt="profile pic"
        width="15%"
        height="auto"
      />
    </div>
  );
};
export default portfolio;
