/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/app/reducers/inhabitants-reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/reducers/inhabitants-reducer.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inhabitantsSlice\": function() { return /* binding */ inhabitantsSlice; },\n/* harmony export */   \"setInhabitants\": function() { return /* binding */ setInhabitants; },\n/* harmony export */   \"selectInhabitants\": function() { return /* binding */ selectInhabitants; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n  data: [],\n  loading: false\n};\nconst inhabitantsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"inhabitants\",\n  initialState,\n  reducers: {\n    // Use the PayloadAction type to declare the contents of `action.payload`\n    setInhabitants: (state, action) => {\n      state.data = action.payload;\n    }\n  }\n});\nconst {\n  setInhabitants\n} = inhabitantsSlice.actions;\nconst selectInhabitants = state => state.inhabitants;\n/* harmony default export */ __webpack_exports__[\"default\"] = (inhabitantsSlice.reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQtdHlwZXNjcmlwdC8uL3NyYy9hcHAvcmVkdWNlcnMvaW5oYWJpdGFudHMtcmVkdWNlci50cz8xMDE3Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImRhdGEiLCJsb2FkaW5nIiwiaW5oYWJpdGFudHNTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0SW5oYWJpdGFudHMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwic2VsZWN0SW5oYWJpdGFudHMiLCJpbmhhYml0YW50cyIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFTQSxNQUFNQSxZQUE4QixHQUFHO0FBQ3JDQyxNQUFJLEVBQUUsRUFEK0I7QUFFckNDLFNBQU8sRUFBRTtBQUY0QixDQUF2QztBQUtPLE1BQU1DLGdCQUFnQixHQUFHQyw2REFBVyxDQUFDO0FBQzFDQyxNQUFJLEVBQUUsYUFEb0M7QUFFMUNMLGNBRjBDO0FBRzFDTSxVQUFRLEVBQUU7QUFDUjtBQUNBQyxrQkFBYyxFQUFFLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFxRDtBQUNuRUQsV0FBSyxDQUFDUCxJQUFOLEdBQWFRLE1BQU0sQ0FBQ0MsT0FBcEI7QUFDRDtBQUpPO0FBSGdDLENBQUQsQ0FBcEM7QUFXQSxNQUFNO0FBQUVIO0FBQUYsSUFBcUJKLGdCQUFnQixDQUFDUSxPQUE1QztBQUVBLE1BQU1DLGlCQUFpQixHQUFJSixLQUFELElBQy9CQSxLQUFLLENBQUNLLFdBREQ7QUFHUCwrREFBZVYsZ0JBQWdCLENBQUNXLE9BQWhDIiwiZmlsZSI6Ii4vc3JjL2FwcC9yZWR1Y2Vycy9pbmhhYml0YW50cy1yZWR1Y2VyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgSW5oYWJpdGFudCB9IGZyb20gXCIuLi8uLi90eXBlcy9pbmhhYml0YW50XCI7XG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluaGFiaXRhbnRzU3RhdGUge1xuICBkYXRhOiBJbmhhYml0YW50W107XG4gIGxvYWRpbmc6IGJvb2xlYW47XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5oYWJpdGFudHNTdGF0ZSA9IHtcbiAgZGF0YTogW10sXG4gIGxvYWRpbmc6IGZhbHNlLFxufTtcblxuZXhwb3J0IGNvbnN0IGluaGFiaXRhbnRzU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiaW5oYWJpdGFudHNcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIC8vIFVzZSB0aGUgUGF5bG9hZEFjdGlvbiB0eXBlIHRvIGRlY2xhcmUgdGhlIGNvbnRlbnRzIG9mIGBhY3Rpb24ucGF5bG9hZGBcbiAgICBzZXRJbmhhYml0YW50czogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248QXJyYXk8SW5oYWJpdGFudD4+KSA9PiB7XG4gICAgICBzdGF0ZS5kYXRhID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBzZXRJbmhhYml0YW50cyB9ID0gaW5oYWJpdGFudHNTbGljZS5hY3Rpb25zO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0SW5oYWJpdGFudHMgPSAoc3RhdGU6IEFwcFN0YXRlKSA9PlxuICBzdGF0ZS5pbmhhYml0YW50cztcblxuZXhwb3J0IGRlZmF1bHQgaW5oYWJpdGFudHNTbGljZS5yZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/reducers/inhabitants-reducer.ts\n");

/***/ }),

/***/ "./src/app/store.ts":
/*!**************************!*\
  !*** ./src/app/store.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeStore\": function() { return /* binding */ makeStore; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_inhabitants_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/inhabitants-reducer */ \"./src/app/reducers/inhabitants-reducer.ts\");\n\n\nfunction makeStore() {\n  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n      inhabitants: _reducers_inhabitants_reducer__WEBPACK_IMPORTED_MODULE_1__.default\n    }\n  });\n}\nconst store = makeStore();\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQtdHlwZXNjcmlwdC8uL3NyYy9hcHAvc3RvcmUudHM/NThkYiJdLCJuYW1lcyI6WyJtYWtlU3RvcmUiLCJjb25maWd1cmVTdG9yZSIsInJlZHVjZXIiLCJpbmhhYml0YW50cyIsImluaGFiaXRhbnRzUmVkdWNlciIsInN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTtBQUVPLFNBQVNBLFNBQVQsR0FBcUI7QUFDMUIsU0FBT0MsZ0VBQWMsQ0FBQztBQUNwQkMsV0FBTyxFQUFFO0FBQUVDLGlCQUFXLEVBQUVDLGtFQUFrQkE7QUFBakM7QUFEVyxHQUFELENBQXJCO0FBR0Q7QUFFRCxNQUFNQyxLQUFLLEdBQUdMLFNBQVMsRUFBdkI7QUFhQSwrREFBZUssS0FBZiIsImZpbGUiOiIuL3NyYy9hcHAvc3RvcmUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSwgVGh1bmtBY3Rpb24sIEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmltcG9ydCBpbmhhYml0YW50c1JlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnMvaW5oYWJpdGFudHMtcmVkdWNlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN0b3JlKCkge1xuICByZXR1cm4gY29uZmlndXJlU3RvcmUoe1xuICAgIHJlZHVjZXI6IHsgaW5oYWJpdGFudHM6IGluaGFiaXRhbnRzUmVkdWNlciB9LFxuICB9KTtcbn1cblxuY29uc3Qgc3RvcmUgPSBtYWtlU3RvcmUoKTtcblxuZXhwb3J0IHR5cGUgQXBwU3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBzdG9yZS5nZXRTdGF0ZT47XG5cbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoO1xuXG5leHBvcnQgdHlwZSBBcHBUaHVuazxSZXR1cm5UeXBlID0gdm9pZD4gPSBUaHVua0FjdGlvbjxcbiAgUmV0dXJuVHlwZSxcbiAgQXBwU3RhdGUsXG4gIHVua25vd24sXG4gIEFjdGlvbjxzdHJpbmc+XG4+O1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/store.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/store */ \"./src/app/store.ts\");\n\nvar _jsxFileName = \"/Users/usuario/Desktop/Regina/axa/role-playing-game-app/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n    store: _app_store__WEBPACK_IMPORTED_MODULE_3__.default,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQtdHlwZXNjcmlwdC8uL3NyYy9wYWdlcy9fYXBwLnRzeD84NTQ4Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUdBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUFtRDtBQUNqRCxzQkFDRSw4REFBQyxpREFBRDtBQUFVLFNBQUssRUFBRUMsK0NBQWpCO0FBQUEsMkJBQ0UsOERBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRUQsK0RBQWVGLEtBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcblxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL2FwcC9zdG9yZSdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function() {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();