// Example file download handler
const fs = require("fs");
const path = require("path");

const UPLOADS_DIR = path.join(__dirname, "uploads");

function getUploadedFile(filename) {
  const filePath = path.join(UPLOADS_DIR, filename);
  const resolvedPath = path.resolve(filePath);
  const resolvedUploadsDir = path.resolve(UPLOADS_DIR) + path.sep;
  if (!resolvedPath.startsWith(resolvedUploadsDir)) {
    throw new Error("Invalid filename");
  }
  return fs.readFileSync(resolvedPath, "utf8");
}

module.exports = { getUploadedFile };
