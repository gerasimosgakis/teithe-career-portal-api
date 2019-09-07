const db = require("./db_connect");

module.exports.main = async event => {
  try {
    const result = await db.getById("profiles", event.pathParameters.id);
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      body: "ERROR: Could not find profile: " + e
    };
  }
};
