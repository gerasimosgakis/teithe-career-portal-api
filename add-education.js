// const db = require("./db_connect");
// const uuid = require("uuid/v1");

// module.exports.main = async event => {
//   const data = JSON.parse(event.body);
//   data.user_id = event.pathParameters.user;
//   data.id = uuid();

//   try {
//     const result = await db.insert("educations", data);
//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         message: "Education created!" + result,
//         data
//       })
//     };
//   } catch (e) {
//     return {
//       statusCode: e.statusCode || 500,
//       body: "Could not create education " + e
//     };
//   }
// };

const db = require("./db_connect");
const uuid = require("uuid/v1");

module.exports.main = async event => {
  const data = JSON.parse(event.body);
  data.id = uuid();

  try {
    const result = await db.insert("educations", data);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Education created!" + result,
        data
      })
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      body: "Could not create education " + e
    };
  }
};
