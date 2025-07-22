const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
 dotenv.config();

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Route
app.get("/", (req, res) => {
  res.render("index"); // ✅ This file should be views/index.ejs
});

// Listen for Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;