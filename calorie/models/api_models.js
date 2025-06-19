const mongoose = require("mongoose");

const apiSchema = new mongoose.Schema({
  activity: {
    type: String,
    enum: [
      'Sedentary',
      'Light',
      'Moderate',
      'Active',
      'Very Active',
      'Extra Active'
    ],
    required: true
  },

  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true
  },

  age: {
    type: Number,
    required: true,
    min: 0
  },

  weight: {
    type: Number,
    required: true,
    min: 0
  },

  height: {
    type: Number,
    required: true,
    min: 30
  }

}, { timestamps: true });

module.exports = mongoose.model("API", apiSchema);
