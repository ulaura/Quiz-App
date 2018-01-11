
// Node_modules imports
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

// Locale imports
const db = require('./db');
db('mongodb://localhost/test');

// app.use statements
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// Constants
const PORT = process.env.PORT || 8000;

// Routes
const quizRouter = require('./routes/quiz.routes');
app.use('/quiz', quizRouter);
const questionRouter = require('./routes/question.route');
app.use('/question', questionRouter);

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});