const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rules: {
    type: Object,
    required: true,
  },
  members: {
    type: [String],
    required: true,
  },
});

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
