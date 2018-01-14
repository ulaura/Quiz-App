import React from 'react';

import AnswerForm from './AnswerForm';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answers: [],
      answerCount: 1,
      correctAnswer: ""
    };
  }

  handleChange = (e) => {
    const { value, name, index } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleAnswer = (e) => {
    const { value, id } = e.target;
    const arr = this.state.answers.slice();
    arr[id] = value;
    this.setState({
      answers: arr
    });
  }

  renderAnswers = () => {
    const answers = [];
    for (let i = 0; i < this.state.answerCount; i++) {
      answers.push(
        <div key={i}>
          <label>{`Answer - ${i + 1}`}</label>
          <input onChange={this.handleChange} type="text" id={i} value={this.state.answers[i]} />
        </div>
      );
    }
    return answers;
  }

  render() {
    console.log("Question:", this.state);
    const state = this.state;
    return (
      <div>
        <label htmlFor="question">{this.props.label}</label>
        <input
          onChange={() => this.props.handleChange(state, this.props.index)}
          type="text" name="question"
          value={this.state.question}
        />
        {this.renderAnswers()}
      </div>
    )
  }
}

export default QuestionForm;