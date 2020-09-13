const express = require("express");
const router = express.Router();
const store = require("../store/users");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const validate = require("../middleware/validation");

// const schema = Joi.object({
//   email: Joi.string().required(),
//   password: Joi.string().required(),
// });

router.post("/", (req, res) => {
  //Implement remember me
  const { email, password } = req.body;
  console.log("Hey!");
  const user = store.getUserByEmail(email);
  if (!user || user.password !== password) {
    return res.status(400).send({ error: "Invalid email or password." });
  }

  const token = jwt.sign(
    { userId: user.id, email: user.email, name: user.name },
    "jwtPrivateKey"
  );
  res.send(token);
});

module.exports = router;
