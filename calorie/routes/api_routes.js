const express = require("express");
const router = express.Router();
const { createAndCalculate ,getAllEntries } = require("../controller/api_controller");

router.post("/cal", createAndCalculate);
router.get("/cal", getAllEntries);

module.exports = router;
