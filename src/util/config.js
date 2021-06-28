const path = require("path");

const config = Object.freeze({
  uploadPath: path.join(__dirname, "../../", "uploads"),
});

module.exports = config;
