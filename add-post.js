const db = require("./db_connect");
const uuid = require("uuid/v1");

module.exports.main = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  data.id = uuid();
  data.created_at = new Date();
  console.log(data);

  try {
    const result = await db.insert("posts", data);
    return {
      statusCode: 200,
      body: "Post created!" + result
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      body: "Could not create post " + e
    };
  }
};
