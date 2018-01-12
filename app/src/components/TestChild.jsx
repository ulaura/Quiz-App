import React from 'react';

const TestChild = (props) => {
  const id = props[props.name];
  return(
    <div>
    {/* Here we call the method passed down through our props to change our parents state */}
      <h1 onClick={() => props.onClick(props.name, id)}>{props.name} {props[props.name]}</h1>
    </div>
  )
}

export default TestChild;