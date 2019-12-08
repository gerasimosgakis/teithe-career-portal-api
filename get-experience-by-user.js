const db = require("./db_connect");

module.exports.main = async event => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };
  const sql = `
  SELECT * 
  FROM experiences
  WHERE user_id = $1
  ORDER BY end_date DESC`;
  try {
    const result = await db.query(sql, event.pathParameters.userid);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(result)
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      headers,
      body: "ERROR: Could not find experience: " + e
    };
  }
};
