const fs = require("fs");

const getUserByEmail = (email) => {
  const rawdata = fs.readFileSync(__dirname + "/users.json");
  const users = JSON.parse(rawdata);
  return users.find((user) => user.email === email);
};

module.exports = {
  getUserByEmail,
};
