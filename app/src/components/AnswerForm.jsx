import React from 'react';

const AnswerForm = (props) => {
  const {id} = props;
  return (
    <div key={id}>
      <label htmlFor={`answer-${id + 1}`}>{`Answer - ${id + 1}`}</label>
      <input onChange={props.handleChange} type="text" id={id} name={`answer-${id + 1}`} value={props.data} />
    </div>
  )
}

export default AnswerForm;