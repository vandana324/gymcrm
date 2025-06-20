const express = require('express');
const router = express.Router();
const BMI = require('../models/modelschema');

router.post('/calculate', async (req, res) => {
  try {
    const { height, weight, age } = req.body;

    if (!height || !weight || !age) {
      return res.status(400).json({ error: "Height, weight, and age are required." });
    }

    const heightInMeters = height / 100; // convert cm to meters
    const bmi = +(weight / (heightInMeters ** 2)).toFixed(2);

    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi >= 18.5 && bmi <= 24.9) category = 'Normal';
    else if (bmi >= 25 && bmi <= 29.9) category = 'Overweight';   
    else category = 'Obese';

    const newEntry = new BMI({ height, weight, age, bmi, category });
    await newEntry.save();

    res.status(201).json({ bmi, category });
  } catch (error) {
    console.error('BMI calculation error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
