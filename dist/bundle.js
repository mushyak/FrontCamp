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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _NewsApp = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

"use strict";

window.onload = function () {
  var app = new _NewsApp.default();
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: TypeError: Cannot read property 'bindings' of null\n    at Scope.moveBindingTo (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\@babel\\traverse\\lib\\scope\\index.js:921:13)\n    at convertBlockScopedToVar (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\babel-plugin-transform-es2015-block-scoping\\lib\\index.js:139:13)\n    at PluginPass.VariableDeclaration (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\babel-plugin-transform-es2015-block-scoping\\lib\\index.js:26:9)\n    at newFn (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\@babel\\traverse\\lib\\visitors.js:223:21)\n    at NodePath._call (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\@babel\\traverse\\lib\\path\\context.js:64:19)\n    at NodePath.call (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\@babel\\traverse\\lib\\path\\context.js:38:17)\n    at NodePath.visit (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\@babel\\traverse\\lib\\path\\context.js:99:12)\n    at TraversalContext.visitQueue (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\@babel\\traverse\\lib\\context.js:139:18)\n    at TraversalContext.visitQueue (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\@babel\\traverse\\lib\\context.js:145:21)\n    at TraversalContext.visitQueue (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\@babel\\traverse\\lib\\context.js:145:21)\n    at TraversalContext.visitMultiple (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\@babel\\traverse\\lib\\context.js:93:17)\n    at TraversalContext.visit (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\@babel\\traverse\\lib\\context.js:178:19)\n    at Function.traverse.node (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\@babel\\traverse\\lib\\index.js:76:17)\n    at NodePath.visit (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\@babel\\traverse\\lib\\path\\context.js:106:18)\n    at TraversalContext.visitQueue (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\@babel\\traverse\\lib\\context.js:139:18)\n    at TraversalContext.visitSingle (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\@babel\\traverse\\lib\\context.js:98:19)\n    at TraversalContext.visit (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\@babel\\traverse\\lib\\context.js:180:19)\n    at Function.traverse.node (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\@babel\\traverse\\lib\\index.js:76:17)\n    at traverse (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\@babel\\traverse\\lib\\index.js:46:12)\n    at transformFile (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\@babel\\core\\lib\\transformation\\index.js:107:27)\n    at runSync (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\@babel\\core\\lib\\transformation\\index.js:35:3)\n    at transformSync (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\@babel\\core\\lib\\transform-sync.js:15:38)\n    at Object.transform (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\@babel\\core\\lib\\transform.js:20:65)\n    at transpile (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\babel-loader\\lib\\index.js:55:20)\n    at Object.module.exports (D:\\DOCUMENTS\\trainings\\FrontCamp\\mushyak.github.io\\node_modules\\babel-loader\\lib\\index.js:179:20)");

/***/ })
/******/ ]);