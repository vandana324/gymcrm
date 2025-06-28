const Business = require("../models/Business");

exports.createBusiness = async (req, res) => {
  try {
    const business = new Business(req.body);
    await business.save();
    res.status(201).json({ message: "Business created successfully", business });
  } catch (error) {
    res.status(500).json({ error: "Server error", detail: error.message });
  }
};
