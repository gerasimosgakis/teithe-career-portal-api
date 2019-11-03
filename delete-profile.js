const db = require("./db_connect");

module.exports.main = async (event, context, callback) => {
  console.log(data, event.pathParameters.id);
  try {
    const result = await db.delete("profiles", event.pathParameters.id);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Profile deleted!" + result,
        id: event.pathParameters.id
      })
    };
  } catch (error) {
    return {
      statusCode: e.statusCode || 500,
      body: "Could not delete profile",
      error
    };
  }
};
