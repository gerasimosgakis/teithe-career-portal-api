// const db = require("./db_connect");
// const uuid = require("uuid/v1");

// module.exports.main = async (event, context, callback) => {
//   const data = JSON.parse(event.body);
//   data.id = uuid();
//   console.log(data);

//   try {
//     const result = await db.insert("likes", data);
//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         message: "Like added!" + result,
//         data
//       })
//     };
//   } catch (e) {
//     return {
//       statusCode: e.statusCode || 500,
//       body: "Could not add like " + e
//     };
//   }
// };

const db = require("./db_connect");
const uuid = require("uuid/v1");

module.exports.main = async (event, context, callback) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };
  const data = JSON.parse(event.body);
  data.id = uuid();
  console.log(data);

  const sqlCount = `
    SELECT COUNT(*)
    FROM likes
    WHERE likes.user_id = $1
  `;

  const sqlRemove = `
    DELETE FROM likes
    WHERE likes.user_id = $1
  `;

  try {
    const queryResult = await db.query(sqlCount, data.user_id);
    console.log(parseInt(queryResult[0].count));
    try {
      const result =
        parseInt(queryResult[0].count) <= 0
          ? await db.insert("likes", data)
          : await db.query(sqlRemove, data.user_id);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          message: "Likes updated!" + result,
          action: parseInt(queryResult[0].count) <= 0 ? "added" : "removed",
          data
        })
      };
    } catch (e) {
      return {
        statusCode: e.statusCode || 500,
        headers,
        body: "Could not add like " + e
      };
    }
  } catch (error) {
    console.log(error);
  }
};
