import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='oktHeader'>
            <span className="oktTitle">Nature Theater of Oklahoma</span>
            <ul className="mainNav">
                <li>Home</li>
                <li>We are OK</li>
                <li>OK Theater</li>
                <li>OK Radio</li>
                <li>OK Books</li>
            </ul>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
