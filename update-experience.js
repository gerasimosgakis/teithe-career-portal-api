const db = require("./db_connect");

module.exports.main = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  try {
    const result = await db.updateById(
      "experiences",
      event.pathParameters.id,
      data
    );
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Experience updated!" + result,
        data
      })
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.statusCode || 500,
      body: "Could not update experience",
      error
    };
  }
};
