const API = require("../models/api_models");

// Activity multipliers based on level
const activityMultipliers = {
  // "Sedentary": 1.2,
  // "Light": 1.375,
  // "Moderate": 1.55,
  // "Very Active": 1.725,
  // "Extra Active": 1.9
  "Sedentary": 1.2,
  "Light": 1.375,
  "Moderate": 1.465,
  "Active": 1.55,
  "Very Active": 1.725,
  "Extra Active": 1.9
};

// POST: Create entry and calculate calories
exports.createAndCalculate = async (req, res) => {
  try {
    const { activity, gender, age, weight, height } = req.body;

    if (!activity || !gender || age == null || weight == null || height == null) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const multiplier = activityMultipliers[activity];
    if (!multiplier) {
      return res.status(400).json({ error: "Invalid activity level." });
    }

    // BMR Calculation
    let bmr;
    if (gender === "Male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "Female") {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
      return res.status(400).json({ error: "Unsupported gender." });
    }

    const calories = bmr * multiplier;

    const newEntry = new API({
      activity,
      gender,
      age,
      weight,
      height
    });

    await newEntry.save();


    res.status(201).json({
      message: "Data saved and calories calculated successfully.",
      calories: Math.round(calories),
      data: newEntry
    });

  } catch (error) {
    console.error("Error in createAndCalculate:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

// GET: Fetch all entries
exports.getAllEntries = async (req, res) => {
  try {
    const entries = await API.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(entries);
  } catch (err) {
    console.error("Error in getAllEntries:", err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};
