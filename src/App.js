import React, { Component } from 'react';
import './App.css';
import Header from './Header/header.js';
import Footer from './Footer/Footer.js';
import Block from './Block/Block.js'
import BlockRow from './BlockRow/BlockRow.js'





class App extends Component {
  render() {
    return (
      <div className="App">
        <Header backColor="green" width="100%" height="200px"></Header>
        <Block  backColor="purple" width="33%"/>
        <Block  backColor="yellow" width="33%"/>
        <Block  backColor="orange" width="33%"/>
        <BlockRow/>
        <Footer backColor="pink" width="100%" height="200px"></Footer>
      </div>
    );
  }
}

export default App;
