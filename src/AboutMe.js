import React from 'react';
import './AboutMe.css';
import Seth from './Images/Seth.jpg'
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa'
import Contact from './Contact';

function AboutMe() {
  return (
    <div>
      <section id="text" className="aboutme">
        <div className='Name'>
          <h1>Jonathan Jobe</h1>
          <div class="contacts">
              <ul>
                <li>
                <Link to='/Contact'>
                  <a href="s3thjobe@gmail.com">Email</a>
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/jjobe5989">Github</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/jonathan-jobe-661368266/">LinkedIn</a>
                </li>
              </ul>
              <ul>
              <li>
                  <p>(615) 801-6330</p>
                </li>
              </ul>
            </div>
          </div>
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

            {/* <div class="contacts">
              <ul>
                <li>
                <Link to='/Contact'>
                  <a href="s3thjobe@gmail.com">Email</a>
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/jjobe5989" target="_blank">Github</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/jonathan-jobe-661368266/" target="_blank">LinkedIn</a>
                </li>
              </ul>
              <ul>
              <li>
                  <p>(615) 801-6330</p>
                </li>
              </ul>
            </div> */}


          </div>
      </section>


    </div>
  );
}

export default AboutMe;
