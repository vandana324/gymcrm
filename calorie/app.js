require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const api_Routes = require("./routes/api_routes");
const cors = require("cors");
const PORT = process.env.PORT || 5005;

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", api_Routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
