const mongoose = require('mongoose');

module.exports = app => {
  const db = app.libs.db;
  const Schema = mongoose.Schema;

  const PersonSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, index: { unique: true } },
    age: { type: Number },
    genre: { type: String },
    location: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true }
    }
  });

  return db.model('persons', PersonSchema);
}
