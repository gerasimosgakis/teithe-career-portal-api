const db = require("./db_connect");

module.exports.main = async event => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };
  const sql = `
  UPDATE profiles
  SET cv_name = $2, cv_url = $3
  WHERE id = $1 
  `;
  try {
    const data = JSON.parse(event.body);
    const result = await db.query(
      sql,
      event.pathParameters.userid,
      data.cv_name,
      data.cv_url
    );
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "CV added" + result,
        id: event.pathParameters.id,
        cv: {
          cv_name: data.cv_name,
          cv_url: data.cv_url
        }
      })
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      headers,
      body: "ERROR: CV could not be added: " + e
    };
  }
};
