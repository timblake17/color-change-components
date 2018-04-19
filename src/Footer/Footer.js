import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const style = {
      width: this.props.width,
      backgroundColor: this.props.backColor,
      height: this.props.height
    }
    return (
        <footer style={style} className="Header-main">
          <h1>Footer</h1>
        </footer>

    );
  }
}

export default Footer;
