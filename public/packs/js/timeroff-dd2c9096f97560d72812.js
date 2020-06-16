/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/timeroff.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/timeroff.js":
/*!******************************************!*\
  !*** ./app/javascript/packs/timeroff.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/kotya/SMBD3/app/javascript/packs/timeroff.js: Expected corresponding JSX closing tag for <p> (11:35)\n\n   9 |         <div className=\"identifyEmoji\"><GenerateEmoji /></div>\n  10 |         <div className=\"countdown\">\n> 11 |           <p className=\"time\">00:00</div>\n     |                                    ^\n  12 |           <p className=\"sign\">Осталось</p>\n  13 |         </div>\n  14 |       </div>\n    at Object.raise (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:7013:17)\n    at Object.jsxParseElementAt (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:4078:16)\n    at Object.jsxParseElementAt (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:4046:32)\n    at Object.jsxParseElementAt (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:4046:32)\n    at Object.jsxParseElement (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:4104:17)\n    at Object.parseExprAtom (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:4111:19)\n    at Object.parseExprSubscripts (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:9219:23)\n    at Object.parseMaybeUnary (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:9199:21)\n    at Object.parseExprOps (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:9067:23)\n    at Object.parseMaybeConditional (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:9040:23)\n    at Object.parseMaybeAssign (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:9000:21)\n    at Object.parseParenAndDistinguishExpression (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:9782:28)\n    at Object.parseExprAtom (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:9560:21)\n    at Object.parseExprAtom (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:4116:20)\n    at Object.parseExprSubscripts (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:9219:23)\n    at Object.parseMaybeUnary (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:9199:21)\n    at Object.parseExprOps (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:9067:23)\n    at Object.parseMaybeConditional (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:9040:23)\n    at Object.parseMaybeAssign (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:9000:21)\n    at Object.parseExpression (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:8950:23)\n    at Object.parseReturnStatement (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:11027:28)\n    at Object.parseStatementContent (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:10706:21)\n    at Object.parseStatement (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:10658:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:11234:25)\n    at Object.parseBlockBody (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:11221:10)\n    at Object.parseBlock (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:11205:10)\n    at Object.parseFunctionBody (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:10220:24)\n    at Object.parseFunctionBodyAndFinish (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:10190:10)\n    at Object.parseMethod (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:10160:10)\n    at Object.pushClassMethod (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:11638:30)");

/***/ })

/******/ });
//# sourceMappingURL=timeroff-dd2c9096f97560d72812.js.map