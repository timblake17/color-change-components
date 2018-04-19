import React, { Component } from 'react';

class Block extends Component {

  constructor(){
  super();

  this.state = {
    color:'blue'
};
}

componentDidMount() {
  setInterval(() => {
    const color = ['red','black','yellow','purple','orange']
    let newColor = color[Math.floor(Math.random()*color.length)]
    this.setState({ color:[newColor] })
  }, 1000);
}

 ///create a state array
 ///push new color into array ever three seconds
 ///if state array has color change property

  render() {

    const style = {
      width: this.props.width,
      backgroundColor: this.state.color,
      height: this.props.height,
      float:this.props.float
    }

    return (
        <div style={style} className="block">
          <h1>Block</h1>
        </div>
    );
  }
}




export default Block;
