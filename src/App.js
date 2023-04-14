import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

// Components
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';
import AboutMe from './AboutMe';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <header>
          <div className='Name'>
            <p>Jonathan Jobe</p>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">About Me</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main content */}
        <main>
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;