// Example auth configuration
const ADMIN_SESSION_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbi10ZXN0LWZpeHR1cmUifQ.abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJ";

function isAdmin(token) {
  return token === ADMIN_SESSION_TOKEN;
}

module.exports = { ADMIN_SESSION_TOKEN, isAdmin };
