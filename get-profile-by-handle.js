// const db = require("./db_connect");

// module.exports.main = async event => {
//   const headers = {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Credentials": true
//   };
//   const sql = "select * from profiles where handle = $1";
//   try {
//     const result = await db.query(sql, event.pathParameters.handle);
//     return {
//       statusCode: 200,
//       headers,
//       body: JSON.stringify(result)
//     };
//   } catch (e) {
//     return {
//       statusCode: e.statusCode || 500,
//       headers,
//       body: "ERROR: Could not find profile: " + e
//     };
//   }
// };
