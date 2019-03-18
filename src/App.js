import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1 style={headStyle}>Beers</h1>
        <Display/>
      </div>
    );
  }
}

const headStyle={
  color:"#12537F",
}

export default App;
