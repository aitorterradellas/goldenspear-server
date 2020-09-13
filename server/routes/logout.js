const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Implement cookie delete
  res.send("Logout");
});
