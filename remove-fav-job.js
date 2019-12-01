const db = require("./db_connect");

module.exports.main = async event => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };
  const sql = "DELETE from fav_jobs where job_id = $1";
  try {
    const result = await db.query(sql, event.pathParameters.jobid);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "Job removed!" + result,
        id: event.pathParameters.id
      })
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      headers,
      body: "ERROR: Could not remove job: " + e
    };
  }
};
