const express = require("express");
const router = express.Router();
const isAuthenticated = require("../Middleware/isAuthenticated");

// * get profile
router.get("/profile", isAuthenticated, (req, res) => {
  res.send(req.user);
});

module.exports = router;
