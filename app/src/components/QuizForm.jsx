import React from 'react';

import QuestionForm from './QuestionForm';

class CreateQuiz extends React.Component{
  constructor(){
    super();
    this.state ={
      title: "",
      questions: [{
        question: "",
        answers: [],
        answerCount: 2,
        correctAnswer: ""
      }],
      questionCount: 1
    }
  }

  handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleQuestion = (state, index) => {
    const arr = this.state.questions.slice();
    arr[index] = state;
    this.setState({
      questions: arr
    });
  }
  
  renderQuestions = () => {
    const arr = [];
    for(let i = 0; i < this.state.questionCount; i++){
      arr.push(<QuestionForm key={i} handleChange={this.handleQuestion} index={i} label="Question"/>);
    }
    return arr;
  }

  render(){
    console.log("Quiz:",this.state);
    return(
      <form>
        <label htmlFor="title">Title</label>
        <input onChange={this.handleChange} value={this.state.title} type="text" name="title" />
        {this.renderQuestions()}
      </form>
    )
  }
}

export default CreateQuiz;
