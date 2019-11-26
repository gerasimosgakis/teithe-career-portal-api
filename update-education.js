const db = require("./db_connect");

module.exports.main = async (event, context, callback) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };
  const data = JSON.parse(event.body);
  try {
    const result = await db.updateById(
      "educations",
      event.pathParameters.id,
      data
    );
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "Education updated!" + result,
        data
      })
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.statusCode || 500,
      headers,
      body: "Could not update education",
      error
    };
  }
};
