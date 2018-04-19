import React, { Component } from 'react';
import Block from '../Block/Block.js';


class BlockRow extends Component {



 ///create a state array
 ///push new color into array ever three seconds
 ///if state array has color change property

  render() {



    return (
        <div className="block-row">
          <Block  backColor="purple" width="33%"/>
          <Block  backColor="yellow" width="33%"/>
          <Block  backColor="orange" width="33%"/>
        </div>
    );
  }
}

export default BlockRow;
