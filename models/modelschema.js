const mongoose = require('mongoose');

const bmiSchema = new mongoose.Schema({
  age:Number,
  height: Number,
  weight: Number,
  bmi: Number,
  category: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BMI', bmiSchema);
