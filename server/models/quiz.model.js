const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Question = require('./question.model');

const quizSchema = new Schema({
  title: {
    type: String,
    required: true
  }, 
  questions: {type: [Schema.Types.ObjectId], ref: 'Question'}
});

module.exports = mongoose.model('Quiz', quizSchema);