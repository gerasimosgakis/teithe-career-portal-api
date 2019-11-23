// const db = require("./db_connect");

// module.exports.main = async () => {
//   try {
//     const result = await db.getAll("posts");
//     return {
//       statusCode: 200,
//       body: JSON.stringify(result)
//     };
//   } catch (e) {
//     return {
//       statusCode: e.statusCode || 500,
//       body: "ERROR: Could not find posts: " + e
//     };
//   }
// };

const db = require("./db_connect");

module.exports.main = async () => {
  const sql = "SELECT * FROM posts ORDER BY created_at DESC";
  try {
    const result = await db.query(sql);
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      body: "ERROR: Could not find posts: " + e
    };
  }
};

// const result = await db.query(sql, event.pathParameters.id);
