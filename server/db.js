var mongoose = require('mongoose');

function db(database) {
  mongoose.connect(database, { useMongoClient: true }, ()=> console.log("Running"));
  mongoose.Promise = global.Promise;
}

module.exports = db;