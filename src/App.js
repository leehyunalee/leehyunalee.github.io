import React, { Component } from 'react';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="main-title">
          <span className="main-title-letter">P</span>
          <span className="main-title-letter">O</span>
          <span className="main-title-letter">R</span>
          <span className="main-title-letter">T</span>
          <span className="main-title-letter">F</span>
          <span className="main-title-letter">O</span>
          <span className="main-title-letter">L</span>
          <span className="main-title-letter">I</span>
          <span className="main-title-letter">O</span>
        </h1>
        <Footer />
      </div>
    );
  }
}

export default App;
