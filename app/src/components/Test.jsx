import React from 'react';
import TestChild from './TestChild';

class Test extends React.Component {
  constructor(){
    super();
    this.state = {
      tucker: 0,
      jess: 0
    }
  }
  clickHandler = (name, id) => {
    this.setState({
      [name]: id + 1
    })
  }

  render(){
    console.log(this.state);
    return(
      <div>
        <TestChild {...this.state} name="tucker" onClick={this.clickHandler} />
        <TestChild {...this.state} name="jess" onClick={this.clickHandler} />
      </div>
    )
  }
}


export default Test;