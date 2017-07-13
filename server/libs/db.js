const mongoose = require('mongoose');
let single_connection;
let url = 'mongodb://localhost/person-location';

module.exports = app => {
  if(!single_connection) single_connection = mongoose.connect(url);

  return single_connection;
}
