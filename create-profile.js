const db = require("./db_connect");
const uuid = require("uuid/v1");

module.exports.main = async (event, context, callback) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };
  // context.callbackWaitsForEmptyEventLoop = false;

  const data = JSON.parse(event.body);
  console.log(data);
  // data.id = uuid();
  // db.insert("profiles", data)
  //   .then(res => {
  //     callback(null, {
  //       statusCode: 200,
  //       body: "Profile Created!" + res
  //     });
  //   })
  //   .catch(e => {
  //     callback(null, {
  //       statusCode: e.statusCode || 500,
  //       body: "Could not create profile " + e
  //     });
  //   });

  // db.insert("profiles", data)
  //   .then(res => {
  //     return { statusCode: 200, body: "Profile Created!" + res };
  //   })
  //   .catch(e => {
  //     return {
  //       statusCode: e.statusCode || 500,
  //       body: "Could not create profile " + e
  //     };
  //   });

  try {
    const result = await db.insert("profiles", data);
    return {
      statusCode: 200,
      headers,
      body: "Profile created!" + result
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      headers,
      body: "Could not create profile " + e
    };
  }
};
