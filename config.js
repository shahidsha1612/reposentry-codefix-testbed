// Example auth configuration
const ADMIN_SESSION_TOKEN = process.env.ADMIN_SESSION_TOKEN;

function isAdmin(token) {
  return token === ADMIN_SESSION_TOKEN;
}

module.exports = { ADMIN_SESSION_TOKEN, isAdmin };
