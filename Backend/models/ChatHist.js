const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatHistSchema = new Schema({
  // User information
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // Chat details
  timestamp: {
    type: Date,
    default: () => Date.now(),
  },
  prompt: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ChatHist", chatHistSchema);