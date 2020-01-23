const db = require("./db_connect");

module.exports.main = async event => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };

  // const sql = `
  // SELECT p.*, CAST(COUNT(l.post_id) AS int) AS likes
  // FROM posts p
  // LEFT JOIN likes l
  // ON p.id=l.post_id
  // GROUP BY p.id, l.post_id
  // ORDER BY p.created_at DESC
  // `;

  const sql = `select job_id from fav_jobs where user_id = $1`;

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
      body: "ERROR: Could not find jobs: " + e
    };
  }
};
