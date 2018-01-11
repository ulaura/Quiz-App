const express = require('express');
const Router = express.Router();
const DB = require('../models');

// GET - send back all quizes and populate the questions
Router.get('/all', (req, res) => {
  DB.Quiz.find({})
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    })
})

// GET - send back all quizes and populate the questions
Router.get('/all/populated', (req, res) => {
  DB.Quiz.find({}).populate({path: 'questions', model: 'Question'})
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    })
})

// POST - create a new quiz with questions
// @params 
  // title - String
  // questions - Array
Router.post('/create', (req, res) => {
  // Create quiz
  const quiz = new DB.Quiz({
    title: req.body.title
  });
  // extract questions from the body
  const { questions } = req.body;
  // for storing the question promises
  let promisedQuestions;
  // check for questions
  if (questions.length > 0) {
    // loop and store the promised questions in an array
    promisedQuestions = questions.map(item => {
      // return the promised question
      return DB.Questions.create(item);
    });
  }

  // Wait for all promises to resolve
  Promise.all(promisedQuestions)
    .then(data => {
      // store all the ids
      data.forEach(item => {
        quiz.questions.push(item._id);
      });
      // add the ids to the quiz object
      // quiz.questions = ids;
      // save the new quiz
      quiz.save()
        .then(quiz => {
          res.send("Quiz saved successfully!");
        })
        .catch(err => {
          console.log(err)
          res.send("Failed to save quiz.");
        });
    })
    .catch(err => {
      console.log(err);
      res.send("Error saving questions");
    })

});

module.exports = Router;