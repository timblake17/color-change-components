import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    const style = {
      width: this.props.width,
      backgroundColor: this.props.backColor,
      height: this.props.height
    }
    return (
        <header style={style} className="Header-main">
          <h1>Header</h1>
        </header>

    );
  }
}

export default Header;
