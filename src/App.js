import React, { Component } from 'react';
import LandingPage from '@pages/LandingPage';
import AboutPage from '@pages/AboutPage';
import PortfolioPage from '@pages/PortfolioPage';
import ParallaxBackground from '@components/ParallaxBackground';
import ScrollTop from '@components/ScrollTop';
import ThemeSwitcher from '@components/ThemeSwitcher';
import Browser from '@components/Browser';
import Footer from '@components/Footer';

class App extends Component {

  render() {
    return (
      <div className="dev-landing-page">
        <ThemeSwitcher>
          <Browser except firefox>
            <ParallaxBackground />
          </Browser>
          <LandingPage />
          <AboutPage />
          <PortfolioPage />
          <ScrollTop />
          <Footer />
        </ThemeSwitcher>
      </div>
    );
  }
}

export default App;







// below is stuff that populated when I created this React App
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
  // render() {
    // return (
      // <div className="App">
        // <header className="App-header">
          // <img src={logo} className="App-logo" alt="logo" />
          // <p>
            // Edit <code>src/App.js</code> and save to reload.
          // </p>
          // <a
            // className="App-link"
            // href="https://reactjs.org"
            // target="_blank"
            // rel="noopener noreferrer"
          // >
            // Learn React
          // </a>
        // </header>
      // </div>
    // );
  // }
// }

// export default App;
