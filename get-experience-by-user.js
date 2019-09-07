const db = require("./db_connect");

module.exports.main = async event => {
  const sql = "select * from experiences where user_id = $1";
  try {
    const result = await db.query(sql, event.pathParameters.userid);
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      body: "ERROR: Could not find experience: " + e
    };
  }
};
