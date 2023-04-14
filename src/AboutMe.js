import React from 'react';
import './AboutMe.css';
import Seth from './Images/Seth.jpg'

function AboutMe() {
  return (
    <div>
      <section id="text" className="aboutme">
        <div className='Name'>
          <h1>Jonathan Jobe</h1>
          <div className="flex-row">
            <h2 className="section-Title second-border Title">About Me</h2>
            <img
            src={Seth}
            className="my-2"
            style={{ width: "100%" }}
            alt="Seth"
             />
              <p>
                Hi, I am Jonathan and I am a Front-End focused web developer located in Middle Tennessee with a passion for design. Some more things about me are that I love to do automotive work, and I am a very hands on person.
              </p>

        
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
