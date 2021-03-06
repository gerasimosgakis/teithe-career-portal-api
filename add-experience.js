const db = require("./db_connect");
const uuid = require("uuid/v1");

module.exports.main = async event => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };
  const data = JSON.parse(event.body);
  data.id = uuid();

  try {
    const result = await db.insert("experiences", data);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "Experience created!" + result,
        data
      })
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      headers,
      body: "Could not create experience " + e
    };
  }
};
