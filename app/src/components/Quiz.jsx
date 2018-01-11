import React from 'react';
import Axios from 'axios';

const Answer = (props) => {
  console.log(props);
  return (
    <li>{props.answer}</li>
  )
}

const Question = (props) => {
  const {question, answers} = props.data;
  // console.log(question);
  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {answers.length !== 0 &&
          answers.map(answer => {
            return <Answer answer={answer}/>
          })
        }
      </ul>
    </div>
  )
}

const SingleQuiz = (props) => {
  return(
    <div>
      <h1>{props.quiz.title}</h1>
      { props.quiz.questions.length !== 0 &&
        props.quiz.questions.map(question => {
          return <Question data={question} />
        })
      }
    </div>
  )
}


class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      quiz: []
    }
  }

  componentWillMount() {
    Axios.get('http://localhost:8000/quiz/all/populated')
      .then(res => {
        console.log(res.data);
        this.setState({
          quiz: res.data
        });
      });
  }

  render() {
    return (
      <div>
        <h1>This is the Quiz page breeeeh</h1>
        {this.state.quiz.length !== 0 &&
          this.state.quiz.map(quiz => {
            return <SingleQuiz key={quiz._id} quiz={quiz} />
          })
        }
      </div>
    );
  }
}

export default Quiz;