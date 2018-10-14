import React, { Component } from 'react';
import PeriodicTableChart from './components/PeriodicTableChart';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="App">
        <h1 className="title">Periodic Table</h1>
        <PeriodicTableChart />
      </div>
    );
  }
}

export default App;
