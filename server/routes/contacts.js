const express = require("express");
const router = express.Router();
const store = require("../store/contacts");
const auth = require("../middleware/auth");

router.get("/", auth, function (req, res) {
  const resource = store.getContacts();
  res.send(resource);
});

module.exports = router;
