// const db = require("./db_connect");

// module.exports.main = async () => {
//   const sql = "SELECT * FROM posts ORDER BY created_at DESC";
//   try {
//     const result = await db.query(sql);
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
  const sql = `
  SELECT p.*, count(l.post_id) AS likes
  FROM posts p
  LEFT JOIN likes l
  ON p.id=l.post_id
  GROUP BY p.id, l.post_id
  ORDER BY p.created_at DESC
  `;
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
