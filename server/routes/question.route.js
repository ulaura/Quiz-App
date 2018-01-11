const express = require('express');
const Router = express.Router();
const DB = require('../models');

Router.post('/create', (req, res) => {
  DB.Questions.create(req.body)
    .then(question => {
      console.log(question);
      res.send("Successfully created question!");
    })
    .catch(err => {
      console.log(err);
      res.send("Question creation failed.");
    });
  
});

module.exports = Router;