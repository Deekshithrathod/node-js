const db = require("./db");
const url = require("url");

function handleGetRequest(req) {
  const parseURL = url.parse(req.url, true);
  if (parseURL.query.city) {
    return db.filter((item) => item.city === parseURL.query.city);
  }
  return db;
}

module.exports = handleGetRequest;
