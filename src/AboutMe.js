import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">About Me</h2>
            <div className="job-text">
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

// return (
//   <div>
//     <div className='AboutMe'>
//     <h2>About Me</h2>
//     <p>Hi, I am Jonathan and I am a Front-End focused web developer located in Middle Tennessee with a passion for design. Some more things about me are that I love to do automotive work, and I am a very hands on person.  
//     </p>
//   </div>
//   </div>
// );
