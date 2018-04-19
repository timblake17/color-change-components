import React, { Component } from 'react';

class Block extends Component {
  render() {
    const style = {
      width: this.props.width,
      backgroundColor: this.props.backColor,
      height: this.props.height,
      float:this.props.float
    }
    return (
        <div style={style} className="Header-main">
          <h1>Block</h1>
        </div>
    );
  }
}

export default Block;
