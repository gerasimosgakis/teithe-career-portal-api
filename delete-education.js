const db = require("./db_connect");

module.exports.main = async event => {
  const sql = "DELETE from educations where id = $1";
  try {
    const result = await db.query(sql, event.pathParameters.id);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Education deleted!" + result,
        id: event.pathParameters.id
      })
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      body: "ERROR: Could not delete education: " + e
    };
  }
};
