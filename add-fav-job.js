const db = require("./db_connect");
const uuid = require("uuid/v1");

module.exports.main = async (event, context, callback) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };
  const data = JSON.parse(event.body);
  data.id = uuid();

  try {
    const result = await db.insert("fav_jobs", data);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "Job added to favorites!" + result,
        data
      })
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      headers,
      body: "Could not add job to favorites " + e
    };
  }
};
