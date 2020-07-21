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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./build/assets/src/scripts/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/assets/src/scripts/modules/Math/add.mjs":
/*!*******************************************************!*\
  !*** ./build/assets/src/scripts/modules/Math/add.mjs ***!
  \*******************************************************/
/*! exports provided: add */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\nconst reducer = (accumulator, currentValue) => accumulator + currentValue; // This is the function done with the .reduce method on the array\r\n\r\n// Basic Maths module\r\nfunction add() {\r\n    // console.log(arguments);\r\n    var arr = Array.prototype.slice.call(arguments);\r\n    return arr.reduce(reducer, 5); // The 5 here is the initial value used\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9hc3NldHMvc3JjL3NjcmlwdHMvbW9kdWxlcy9NYXRoL2FkZC5tanM/ZDdjMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEsMEVBQTBFOztBQUUxRTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyIsImZpbGUiOiIuL2J1aWxkL2Fzc2V0cy9zcmMvc2NyaXB0cy9tb2R1bGVzL01hdGgvYWRkLm1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlZHVjZXIgPSAoYWNjdW11bGF0b3IsIGN1cnJlbnRWYWx1ZSkgPT4gYWNjdW11bGF0b3IgKyBjdXJyZW50VmFsdWU7IC8vIFRoaXMgaXMgdGhlIGZ1bmN0aW9uIGRvbmUgd2l0aCB0aGUgLnJlZHVjZSBtZXRob2Qgb24gdGhlIGFycmF5XHJcblxyXG4vLyBCYXNpYyBNYXRocyBtb2R1bGVcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGFyZ3VtZW50cyk7XHJcbiAgICB2YXIgYXJyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuICAgIHJldHVybiBhcnIucmVkdWNlKHJlZHVjZXIsIDUpOyAvLyBUaGUgNSBoZXJlIGlzIHRoZSBpbml0aWFsIHZhbHVlIHVzZWRcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./build/assets/src/scripts/modules/Math/add.mjs\n");

/***/ }),

/***/ "./build/assets/src/scripts/modules/Math/math.mjs":
/*!********************************************************!*\
  !*** ./build/assets/src/scripts/modules/Math/math.mjs ***!
  \********************************************************/
/*! exports provided: Calc, MathAdd */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Calc\", function() { return Calc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MathAdd\", function() { return MathAdd; });\nvar Calc = function (start) {\r\n    var self = this;\r\n\r\n    this.add = function(x) {\r\n        start = start + x;\r\n        return start;\r\n    }\r\n\r\n    this.multiply = function(x) {\r\n        start = start * x;\r\n        return start;\r\n    }\r\n\r\n    this.equals = function() {\r\n        return start;\r\n    }\r\n}\r\n\r\nfunction MathAdd(x,y) {\r\n    return new Calc(x).add(y);\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9hc3NldHMvc3JjL3NjcmlwdHMvbW9kdWxlcy9NYXRoL21hdGgubWpzP2UwMTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EiLCJmaWxlIjoiLi9idWlsZC9hc3NldHMvc3JjL3NjcmlwdHMvbW9kdWxlcy9NYXRoL21hdGgubWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBDYWxjID0gZnVuY3Rpb24gKHN0YXJ0KSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5hZGQgPSBmdW5jdGlvbih4KSB7XHJcbiAgICAgICAgc3RhcnQgPSBzdGFydCArIHg7XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubXVsdGlwbHkgPSBmdW5jdGlvbih4KSB7XHJcbiAgICAgICAgc3RhcnQgPSBzdGFydCAqIHg7XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXF1YWxzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWF0aEFkZCh4LHkpIHtcclxuICAgIHJldHVybiBuZXcgQ2FsYyh4KS5hZGQoeSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./build/assets/src/scripts/modules/Math/math.mjs\n");

/***/ }),

/***/ "./build/assets/src/scripts/modules/Math/multiply.mjs":
/*!************************************************************!*\
  !*** ./build/assets/src/scripts/modules/Math/multiply.mjs ***!
  \************************************************************/
/*! exports provided: multiply */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"multiply\", function() { return multiply; });\nfunction multiply (x, y) {\r\n    // Check that values have been supplied\r\n    if (typeof(x) !== \"number\" || typeof(y) !== \"number\") {\r\n        return \"Correct paramaters not defined, please supply two numbers\";\r\n    }\r\n    return x * y;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9hc3NldHMvc3JjL3NjcmlwdHMvbW9kdWxlcy9NYXRoL211bHRpcGx5Lm1qcz9hZmZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2J1aWxkL2Fzc2V0cy9zcmMvc2NyaXB0cy9tb2R1bGVzL01hdGgvbXVsdGlwbHkubWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5ICh4LCB5KSB7XHJcbiAgICAvLyBDaGVjayB0aGF0IHZhbHVlcyBoYXZlIGJlZW4gc3VwcGxpZWRcclxuICAgIGlmICh0eXBlb2YoeCkgIT09IFwibnVtYmVyXCIgfHwgdHlwZW9mKHkpICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiQ29ycmVjdCBwYXJhbWF0ZXJzIG5vdCBkZWZpbmVkLCBwbGVhc2Ugc3VwcGx5IHR3byBudW1iZXJzXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geCAqIHk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./build/assets/src/scripts/modules/Math/multiply.mjs\n");

/***/ }),

/***/ "./build/assets/src/scripts/scripts.js":
/*!*********************************************!*\
  !*** ./build/assets/src/scripts/scripts.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Math_add_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Math/add.mjs */ \"./build/assets/src/scripts/modules/Math/add.mjs\");\n/* harmony import */ var _modules_Math_multiply_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Math/multiply.mjs */ \"./build/assets/src/scripts/modules/Math/multiply.mjs\");\n/* harmony import */ var _modules_Math_math_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Math/math.mjs */ \"./build/assets/src/scripts/modules/Math/math.mjs\");\n// Import basic module\n\n\nconsole.log(Object(_modules_Math_multiply_mjs__WEBPACK_IMPORTED_MODULE_1__[\"multiply\"])(6, 4));\nconsole.log(Object(_modules_Math_add_mjs__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(5, 4, 3, 8));\n\nconsole.log(Object(_modules_Math_math_mjs__WEBPACK_IMPORTED_MODULE_2__[\"MathAdd\"])(3, 4));\nvar myCalc1 = new _modules_Math_math_mjs__WEBPACK_IMPORTED_MODULE_2__[\"Calc\"](3);\nmyCalc1.add(5);\nconsole.log(myCalc1.equals());\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  document.querySelector(\"[data-js-theme-switch]\").onchange = themeSwitch;\n  document.querySelector(\"[data-js-slider-weight]\").oninput = rangeSliderWeight;\n  document.querySelector(\"[data-js-slider-italic]\").oninput = rangeSliderItalic;\n});\nvar bodyThemeClass = \"theme--dark\";\nvar fontVariationWeight = 300;\nvar fontVariationItalic = 0;\n\nfunction themeSwitch(event) {\n  if (event.target.checked) {\n    document.querySelector(\"body\").classList.add(\"theme--dark\");\n  } else {\n    document.querySelector(\"body\").classList.remove(\"theme--dark\");\n  }\n} // Range slider \n\n\nfunction rangeSliderWeight(event) {\n  fontVariationWeight = event.target.value;\n  setFontVariationSettings();\n}\n\nfunction rangeSliderItalic(event) {\n  fontVariationItalic = event.target.value;\n  setFontVariationSettings();\n}\n\nfunction setFontVariationSettings() {\n  var contentWrapper = document.querySelector(\"[data-js-content-wrapper]\");\n  contentWrapper.style.fontVariationSettings = \"'wght' \" + fontVariationWeight + \", 'ital' \" + fontVariationItalic;\n}\n/*\r\n    Idea for modules:\r\n    HSLA Colour picker\r\n\r\n    Math \r\n\r\n\r\n\r\n*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9hc3NldHMvc3JjL3NjcmlwdHMvc2NyaXB0cy5qcz85MzA3Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJtdWx0aXBseSIsImFkZCIsIk1hdGhBZGQiLCJteUNhbGMxIiwiQ2FsYyIsImVxdWFscyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJvbmNoYW5nZSIsInRoZW1lU3dpdGNoIiwib25pbnB1dCIsInJhbmdlU2xpZGVyV2VpZ2h0IiwicmFuZ2VTbGlkZXJJdGFsaWMiLCJib2R5VGhlbWVDbGFzcyIsImZvbnRWYXJpYXRpb25XZWlnaHQiLCJmb250VmFyaWF0aW9uSXRhbGljIiwiZXZlbnQiLCJ0YXJnZXQiLCJjaGVja2VkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidmFsdWUiLCJzZXRGb250VmFyaWF0aW9uU2V0dGluZ3MiLCJjb250ZW50V3JhcHBlciIsInN0eWxlIiwiZm9udFZhcmlhdGlvblNldHRpbmdzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsMkVBQVEsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFwQjtBQUNBRixPQUFPLENBQUNDLEdBQVIsQ0FBWUUsaUVBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLENBQWY7QUFFQTtBQUVBSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsc0VBQU8sQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFuQjtBQUVBLElBQUlDLE9BQU8sR0FBRyxJQUFJQywyREFBSixDQUFTLENBQVQsQ0FBZDtBQUNBRCxPQUFPLENBQUNGLEdBQVIsQ0FBWSxDQUFaO0FBQ0FILE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxPQUFPLENBQUNFLE1BQVIsRUFBWjtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0FBQ3JERCxVQUFRLENBQUNFLGFBQVQsQ0FBdUIsd0JBQXZCLEVBQWlEQyxRQUFqRCxHQUE0REMsV0FBNUQ7QUFDQUosVUFBUSxDQUFDRSxhQUFULENBQXVCLHlCQUF2QixFQUFrREcsT0FBbEQsR0FBNERDLGlCQUE1RDtBQUNBTixVQUFRLENBQUNFLGFBQVQsQ0FBdUIseUJBQXZCLEVBQWtERyxPQUFsRCxHQUE0REUsaUJBQTVEO0FBQ0gsQ0FKRDtBQU1BLElBQUlDLGNBQWMsR0FBRyxhQUFyQjtBQUNBLElBQUlDLG1CQUFtQixHQUFHLEdBQTFCO0FBQ0EsSUFBSUMsbUJBQW1CLEdBQUcsQ0FBMUI7O0FBRUEsU0FBU04sV0FBVCxDQUFxQk8sS0FBckIsRUFBNEI7QUFDeEIsTUFBSUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE9BQWpCLEVBQTBCO0FBQ3RCYixZQUFRLENBQUNFLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JZLFNBQS9CLENBQXlDbkIsR0FBekMsQ0FBNkMsYUFBN0M7QUFDSCxHQUZELE1BR0s7QUFDREssWUFBUSxDQUFDRSxhQUFULENBQXVCLE1BQXZCLEVBQStCWSxTQUEvQixDQUF5Q0MsTUFBekMsQ0FBZ0QsYUFBaEQ7QUFDSDtBQUNKLEMsQ0FFRDs7O0FBQ0EsU0FBU1QsaUJBQVQsQ0FBMkJLLEtBQTNCLEVBQWtDO0FBQzlCRixxQkFBbUIsR0FBR0UsS0FBSyxDQUFDQyxNQUFOLENBQWFJLEtBQW5DO0FBRUFDLDBCQUF3QjtBQUMzQjs7QUFFRCxTQUFTVixpQkFBVCxDQUEyQkksS0FBM0IsRUFBa0M7QUFDOUJELHFCQUFtQixHQUFHQyxLQUFLLENBQUNDLE1BQU4sQ0FBYUksS0FBbkM7QUFFQUMsMEJBQXdCO0FBQzNCOztBQUVELFNBQVNBLHdCQUFULEdBQW9DO0FBQ2hDLE1BQUlDLGNBQWMsR0FBR2xCLFFBQVEsQ0FBQ0UsYUFBVCxDQUF1QiwyQkFBdkIsQ0FBckI7QUFFQWdCLGdCQUFjLENBQUNDLEtBQWYsQ0FBcUJDLHFCQUFyQixHQUE2QyxZQUFZWCxtQkFBWixHQUFrQyxXQUFsQyxHQUFnREMsbUJBQTdGO0FBQ0g7QUFFRCIsImZpbGUiOiIuL2J1aWxkL2Fzc2V0cy9zcmMvc2NyaXB0cy9zY3JpcHRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IGJhc2ljIG1vZHVsZVxyXG5pbXBvcnQge2FkZH0gZnJvbSAnLi9tb2R1bGVzL01hdGgvYWRkLm1qcyc7XHJcbmltcG9ydCB7bXVsdGlwbHl9IGZyb20gJy4vbW9kdWxlcy9NYXRoL211bHRpcGx5Lm1qcyc7XHJcblxyXG5jb25zb2xlLmxvZyhtdWx0aXBseSg2LCA0KSk7XHJcbmNvbnNvbGUubG9nKGFkZCg1LDQsMyw4KSk7XHJcblxyXG5pbXBvcnQge01hdGhBZGQsIENhbGN9IGZyb20gJy4vbW9kdWxlcy9NYXRoL21hdGgubWpzJztcclxuXHJcbmNvbnNvbGUubG9nKE1hdGhBZGQoMyw0KSk7XHJcblxyXG52YXIgbXlDYWxjMSA9IG5ldyBDYWxjKDMpO1xyXG5teUNhbGMxLmFkZCg1KTtcclxuY29uc29sZS5sb2cobXlDYWxjMS5lcXVhbHMoKSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1qcy10aGVtZS1zd2l0Y2hdXCIpLm9uY2hhbmdlID0gdGhlbWVTd2l0Y2g7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtanMtc2xpZGVyLXdlaWdodF1cIikub25pbnB1dCA9IHJhbmdlU2xpZGVyV2VpZ2h0O1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWpzLXNsaWRlci1pdGFsaWNdXCIpLm9uaW5wdXQgPSByYW5nZVNsaWRlckl0YWxpYztcclxufSk7XHJcblxyXG5sZXQgYm9keVRoZW1lQ2xhc3MgPSBcInRoZW1lLS1kYXJrXCI7XHJcbmxldCBmb250VmFyaWF0aW9uV2VpZ2h0ID0gMzAwO1xyXG5sZXQgZm9udFZhcmlhdGlvbkl0YWxpYyA9IDA7XHJcblxyXG5mdW5jdGlvbiB0aGVtZVN3aXRjaChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LmFkZChcInRoZW1lLS1kYXJrXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LnJlbW92ZShcInRoZW1lLS1kYXJrXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBSYW5nZSBzbGlkZXIgXHJcbmZ1bmN0aW9uIHJhbmdlU2xpZGVyV2VpZ2h0KGV2ZW50KSB7XHJcbiAgICBmb250VmFyaWF0aW9uV2VpZ2h0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgIHNldEZvbnRWYXJpYXRpb25TZXR0aW5ncygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByYW5nZVNsaWRlckl0YWxpYyhldmVudCkge1xyXG4gICAgZm9udFZhcmlhdGlvbkl0YWxpYyA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICBzZXRGb250VmFyaWF0aW9uU2V0dGluZ3MoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Rm9udFZhcmlhdGlvblNldHRpbmdzKCkge1xyXG4gICAgdmFyIGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWpzLWNvbnRlbnQtd3JhcHBlcl1cIik7XHJcbiAgICBcclxuICAgIGNvbnRlbnRXcmFwcGVyLnN0eWxlLmZvbnRWYXJpYXRpb25TZXR0aW5ncyA9IFwiJ3dnaHQnIFwiICsgZm9udFZhcmlhdGlvbldlaWdodCArIFwiLCAnaXRhbCcgXCIgKyBmb250VmFyaWF0aW9uSXRhbGljO1xyXG59XHJcblxyXG4vKlxyXG4gICAgSWRlYSBmb3IgbW9kdWxlczpcclxuICAgIEhTTEEgQ29sb3VyIHBpY2tlclxyXG5cclxuICAgIE1hdGggXHJcblxyXG5cclxuXHJcbiovIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./build/assets/src/scripts/scripts.js\n");

/***/ })

/******/ });