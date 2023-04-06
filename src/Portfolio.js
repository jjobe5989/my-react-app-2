import React from 'react';
import './Portfolio.css';
import GameBro from "./Images/GameBro.png";
import CodingQuiz from "./Images/CodingQuiz.png";
import WordOnTheStreet from "./Images/WordOnTheStreet.png"

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">My Work</h2>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://gamebrobysarj.herokuapp.com/api/login">
                {""}
                <img
                  src={GameBro}
                  className="my-2"
                  style={{ width: "50%" }}
                  alt="GameBro Project"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>GameBro</h4>
              <p>
                Game Bro is a full stack sports gaming calender where you can schedule private matches, tournaments, and more. With many API's created by our team, this process is made easy for Game Bro users. Also, our application is equipt with login, signup, and homepages that make usage easy. You can also enter your gamertag to be seen by other users, which simplifies the process even more.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://jjobe5989.github.io/Web-API-Code-Quiz/">
                {""}
                <img
                  src={CodingQuiz}
                  className="my-2"
                  style={{ width: "50%" }}
                  alt="GameBro Project"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Coding Quiz</h4>
              <p>
                The website itself is a 1:15 minute timed quiz about javascript. After the quiz you can save your score using your initials and try as many times as you want.
              </p>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://wotsproject.herokuapp.com/#/">
                {""}
                <img
                  src={WordOnTheStreet}
                  className="my-2"
                  style={{ width: "50%" }}
                  alt="GameBro Project"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Word On The Street</h4>
              <p>
                Word on the Street is a web-based chat application that allows users to join a chat room and chat with multiple users in real-time. The application provides users with the ability to send and receive text messages. Users can sign up and create an account, change their usernames and profile pictures, and view a list of all the users in the room,including their usernames and profile pictures. The chat application automatically saves chat history for each room, allowing users to view previous conversations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;