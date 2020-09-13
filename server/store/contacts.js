const fs = require("fs");

const getContacts = (token) => {
  const rawdata = fs.readFileSync(__dirname + "/contacts.json");
  const contacts = JSON.parse(rawdata);
  return contacts;
};

module.exports = {
  getContacts,
};
