const db = require("./db_connect");

module.exports.main = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  console.log(data, event.pathParameters.id);
  try {
    const result = await db.updateById(
      "profiles",
      event.pathParameters.id,
      data
    );
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Profile created!" + result, data })
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      body: "Could not create profile " + e
    };
  }
};
