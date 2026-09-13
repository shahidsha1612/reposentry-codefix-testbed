// Example file download handler
const fs = require("fs");
const path = require("path");

const UPLOADS_DIR = path.join(__dirname, "uploads");

function getUploadedFile(filename) {
  const filePath = path.join(UPLOADS_DIR, filename);
  return fs.readFileSync(filePath, "utf8");
}

module.exports = { getUploadedFile };
