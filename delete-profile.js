const db = require("./db_connect");

module.exports.main = async (event, context, callback) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };
  console.log(data, event.pathParameters.id);
  try {
    const result = await db.delete("profiles", event.pathParameters.id);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "Profile deleted!" + result,
        id: event.pathParameters.id
      })
    };
  } catch (error) {
    return {
      statusCode: e.statusCode || 500,
      headers,
      body: "Could not delete profile",
      error
    };
  }
};
