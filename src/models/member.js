const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  teams: {
    type: [String],
  },
});

const Member = mongoose.model('Member', memberSchema);
module.exports = Member;
