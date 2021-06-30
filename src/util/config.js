const path = require("path");

const config = Object.freeze({
  uploadPath: path.join(__dirname, "../../", "uploads"),
  imageUploadPath: path.join(__dirname, "../../uploads/", "images"),
});

module.exports = config;
