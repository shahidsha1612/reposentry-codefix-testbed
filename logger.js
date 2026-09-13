function reportError(err) {
  console.error("Error reported:", err && err.message ? err.message : err);
}

module.exports = { reportError };
