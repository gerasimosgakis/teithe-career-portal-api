const db = require("./db_connect");

module.exports.main = async event => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };

  const data = JSON.parse(event.body);

  try {
    const result = await db.insert("profiles", data);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ result, data })
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      headers,
      body: "Could not create profile " + e
    };
  }
};
