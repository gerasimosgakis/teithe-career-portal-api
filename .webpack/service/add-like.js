(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./add-like.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./add-like.js":
/*!*********************!*\
  !*** ./add-like.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

const db = __webpack_require__(/*! ./db_connect */ "./db_connect.js");
const uuid = __webpack_require__(/*! uuid/v1 */ "uuid/v1");

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
      const result = parseInt(queryResult[0].count) <= 0 ? await db.insert("likes", data) : await db.query(sqlRemove, data.user_id);
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

/***/ }),

/***/ "./config/db.js":
/*!**********************!*\
  !*** ./config/db.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  database: "postgres",
  host: "teithe-career-portal.cpss7xpeviml.us-east-1.rds.amazonaws.com",
  port: "5432",
  user: "master",
  password: "Passw0rd!"
};

/***/ }),

/***/ "./db_connect.js":
/*!***********************!*\
  !*** ./db_connect.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const PgConnection = __webpack_require__(/*! postgresql-easy */ "postgresql-easy");
const dbConfig = __webpack_require__(/*! ./config/db */ "./config/db.js");
const pg = new PgConnection(dbConfig);
module.exports = pg;

/***/ }),

/***/ "postgresql-easy":
/*!**********************************!*\
  !*** external "postgresql-easy" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("postgresql-easy");

/***/ }),

/***/ "uuid/v1":
/*!**************************!*\
  !*** external "uuid/v1" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v1");

/***/ })

/******/ })));
//# sourceMappingURL=add-like.js.map