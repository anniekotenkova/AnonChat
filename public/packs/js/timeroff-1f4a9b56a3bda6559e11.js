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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/kotya/SMBD3/app/javascript/packs/timeroff.js: Unexpected token (8:4)\n\n   6 | \n   7 |   return (\n>  8 |     <div className=\"timer\">\n     |     ^\n   9 |       <div className=\"identifyEmoji\"><GenerateEmoji /></div>\n  10 |       <div className=\"countdown\">\n  11 |         <p className=\"time\">00:00</div>\n    at Object.raise (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:7013:17)\n    at Object.unexpected (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:8384:16)\n    at Object.parseIdentifierName (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:10325:18)\n    at Object.parseIdentifier (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:10303:23)\n    at Object.parseBindingAtom (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:8741:17)\n    at Object.parseMaybeDefault (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:8801:25)\n    at Object.parseAssignableListItem (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:8783:23)\n    at Object.parseBindingList (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:8775:24)\n    at Object.parseFunctionParams (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:11386:24)\n    at Object.parseMethod (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:10159:10)\n    at Object.pushClassMethod (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:11638:30)\n    at Object.parseClassMemberWithIsStatic (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:11555:12)\n    at Object.parseClassMember (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:11497:10)\n    at withTopicForbiddingContext (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:11452:14)\n    at Object.withTopicForbiddingContext (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:10533:14)\n    at Object.parseClassBody (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:11429:10)\n    at Object.parseClass (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:11403:22)\n    at Object.parseStatementContent (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:10700:21)\n    at Object.parseStatement (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:10658:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:11234:25)\n    at Object.parseBlockBody (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:11221:10)\n    at Object.parseTopLevel (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:10589:10)\n    at Object.parse (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:12192:10)\n    at parse (/Users/kotya/SMBD3/node_modules/@babel/parser/lib/index.js:12243:38)\n    at parser (/Users/kotya/SMBD3/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/kotya/SMBD3/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/kotya/SMBD3/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)");

/***/ })

/******/ });
//# sourceMappingURL=timeroff-1f4a9b56a3bda6559e11.js.map