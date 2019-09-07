const db = require("./db_connect");

module.exports.main = async () => {
  try {
    const result = await db.getAll("profiles");
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      body: "ERROR: Could not find profiles: " + e
    };
  }
};
