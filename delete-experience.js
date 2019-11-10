// const db = require("./db_connect");

// module.exports.main = async (event, context, callback) => {
//   try {
//     const result = await db.delete("experiences", event.pathParameters.id);
//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         message: "Experience deleted!" + result,
//         id: event.pathParameters.id
//       })
//     };
//   } catch (error) {
//     return {
//       statusCode: error.statusCode || 500,
//       body: "Could not delete experience",
//       error
//     };
//   }
// };

const db = require("./db_connect");

module.exports.main = async event => {
  const sql = "DELETE from experiences where id = $1";¬
  try {
    const result = await db.query(sql, event.pathParameters.id);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Experience deleted!" + result,
        id: event.pathParameters.id
      })
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      body: "ERROR: Could not delete experience: " + e
    };
  }
};
