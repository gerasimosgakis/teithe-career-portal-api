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
/******/ 	return __webpack_require__(__webpack_require__.s = "./search-users.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./search-users.js":
/*!*************************!*\
  !*** ./search-users.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const db = __webpack_require__(/*! ./db_connect */ "./db_connect.js");

module.exports.main = async event => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };
  const data = JSON.parse(event.body);
  const {
    name,
    handle,
    company,
    status,
    skills,
    githubusername,
    current,
    graduate_date_before,
    graduate_date_after,
    school,
    degree
  } = data;

  const sql = `
      SELECT DISTINCT profiles.id,
      profiles.name,
      profiles.handle,
      profiles.avatar,
      profiles.company,
      profiles.website,
      profiles.location,
      profiles.status,
      profiles.bio,
      profiles.githubusername,
      profiles.linkedin,
      profiles.skills 
      FROM profiles, educations
      WHERE profiles.id = educations.user_id
      AND (LOWER(profiles.name) LIKE $1 OR $1 IS NULL)
      AND (LOWER(profiles.handle) LIKE $2 OR $2 IS NULL)
      AND (LOWER(profiles.company) LIKE $3 OR $3 IS NULL)
      AND (LOWER(profiles.status) LIKE $4 OR $4 IS NULL)
      AND (LOWER(profiles.skills) LIKE $5 OR $5 IS NULL)
      AND (LOWER(profiles.githubusername) LIKE $6 OR $6 IS NULL)
      AND (educations.current = $7 OR $7 IS NULL)
      AND (educations.end_date <= $8 OR $8 IS NULL)
      AND (educations.end_date >= $9 OR $9 IS NULL)
      AND (LOWER(educations.school) LIKE $10 OR $10 IS NULL)
      AND (LOWER(educations.degree) LIKE $11 OR $11 IS NULL)
      ORDER BY profiles.id
    `;

  try {
    const result = await db.query(sql, name ? `%${name}%` : null, handle ? `%${handle}%` : null, company ? `%${company}%` : null, status ? `%${status}%` : null, skills ? `%${skills}%` : null, githubusername ? `%${githubusername}%` : null, current, graduate_date_before, graduate_date_after, school ? `%${school.toLowerCase()}%` : null, degree ? `%${degree}%` : null);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(result)
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      headers,
      body: "ERROR: Could not find users: " + e
    };
  }
};

/***/ }),

/***/ "postgresql-easy":
/*!**********************************!*\
  !*** external "postgresql-easy" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("postgresql-easy");

/***/ })

/******/ })));
//# sourceMappingURL=search-users.js.map