import React, { Component } from 'react';
import './App.css';
import Header from './Header/header.js';
import Footer from './Footer/Footer.js';
import Block from './Block/Block.js'





class App extends Component {
  render() {
    return (
      <div className="App">
        <Header backColor="green" width="100%" height="200px"></Header>
        <Block float="left" backColor="purple" width="33%"/>
        <Block float="left" backColor="yellow" width="33%"/>
        <Block float="left" backColor="orange" width="33%"/>
        <Footer backColor="pink" width="100%" height="200px"></Footer>

      </div>
    );
  }
}

export default App;
