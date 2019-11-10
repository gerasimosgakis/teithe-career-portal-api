const db = require("./db_connect");
const uuid = require("uuid/v1");

module.exports.main = async event => {
  const data = JSON.parse(event.body);
  data.id = uuid();

  try {
    const result = await db.insert("experiences", data);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Experience created!" + result,
        data
      })
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      body: "Could not create experience " + e
    };
  }
};
