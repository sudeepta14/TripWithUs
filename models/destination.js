var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DestSchema = new Schema({
  city: {
    type: String,
    required: true
  },
  activity: {
    type: String,
    required: true
  },
  budget: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('destination', DestSchema);
