const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const stateProgramSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true,
    unique: true,
  },
  programs: [programSchema],
  suggestions: [String],
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('StateProgram', stateProgramSchema);
