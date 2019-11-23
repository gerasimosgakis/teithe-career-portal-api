const db = require("./db_connect");
const uuid = require("uuid/v1");

module.exports.main = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  data.id = uuid();
  data.created_at = Date.now();
  console.log(data);

  try {
    const result = await db.insert("posts", data);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Post created!" + result,
        data
      })
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      body: "Could not create post " + e
    };
  }
};
