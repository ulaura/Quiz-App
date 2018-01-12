import React from 'react';
import TestChild from './TestChild';

// This may be a little confusing at first but try and build it out for yourself and it will make some sense
// you can always slack me and I'll help you out.


// Define class component
// We need React Component Object to add the *React* functionality
class Test extends React.Component {
  // The constructor allows us to set our initial state
  constructor(){
    super();
    // set the state of the component
    this.state = {
      tucker: 0,
      jess: 0
    }
  }
  // We use the arrow function here so we don't have to worry about having to bind *this* in the constructor
  // I'm taking a name and id parameter in this function.
  // So I'm passing this method down into the children components
  // When the components are clicked on I'll pass the values from inside their scope into here.
  clickHandler = (name, id) => {
    this.setState({
      [name]: id + 1
    })
  }

  render(){
    console.log(this.state);
    return(
      <div>
      {/* {...this.state} is a bit of overkill but I wanted to show you that you can use the spread parameter to pass all of state in as props */}
        <TestChild {...this.state} name="tucker" onClick={this.clickHandler} />
        <TestChild {...this.state} name="jess" onClick={this.clickHandler} />
      </div>
    )
  }
}


export default Test;