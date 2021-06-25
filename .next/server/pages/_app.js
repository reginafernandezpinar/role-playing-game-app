(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/app/slices/inhabitants-slice.ts":
/*!*********************************************!*\
  !*** ./src/app/slices/inhabitants-slice.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inhabitantsSlice": function() { return /* binding */ inhabitantsSlice; },
/* harmony export */   "setInhabitants": function() { return /* binding */ setInhabitants; },
/* harmony export */   "setSelectedID": function() { return /* binding */ setSelectedID; },
/* harmony export */   "setSearch": function() { return /* binding */ setSearch; },
/* harmony export */   "selectInhabitants": function() { return /* binding */ selectInhabitants; },
/* harmony export */   "selectSearch": function() { return /* binding */ selectSearch; },
/* harmony export */   "selectFilteredInhabitants": function() { return /* binding */ selectFilteredInhabitants; },
/* harmony export */   "selectSelectedInhabitant": function() { return /* binding */ selectSelectedInhabitant; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  data: [],
  loading: true,
  selectedID: null,
  search: null
};
const inhabitantsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "inhabitants",
  initialState,
  reducers: {
    setInhabitants: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    setSelectedID: (state, action) => {
      state.selectedID = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  }
});
const {
  setInhabitants,
  setSelectedID,
  setSearch
} = inhabitantsSlice.actions; // Selectors

const selectInhabitants = state => state.inhabitants;
const selectSearch = state => state.inhabitants.search;
const selectFilteredInhabitants = state => {
  const {
    inhabitants
  } = state;
  const {
    search,
    data
  } = inhabitants;

  if (search) {
    return _objectSpread(_objectSpread({}, inhabitants), {}, {
      data: data.filter(e => e.name.toLowerCase().includes(search.toLowerCase()))
    });
  } else {
    return inhabitants;
  }
};
const selectSelectedInhabitant = state => state.inhabitants.data.find(inhab => inhab.id === state.inhabitants.selectedID);
/* harmony default export */ __webpack_exports__["default"] = (inhabitantsSlice.reducer);

/***/ }),

/***/ "./src/app/store.ts":
/*!**************************!*\
  !*** ./src/app/store.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeStore": function() { return /* binding */ makeStore; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slices_inhabitants_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/inhabitants-slice */ "./src/app/slices/inhabitants-slice.ts");


function makeStore() {
  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
      inhabitants: _slices_inhabitants_slice__WEBPACK_IMPORTED_MODULE_1__.default
    }
  });
}
const store = makeStore();
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./src/styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/store */ "./src/app/store.ts");

var _jsxFileName = "C:\\Users\\pablo\\Desktop\\REGINA\\PROGRAMACION\\Assesments\\axa\\role-playing-game-app\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _app_store__WEBPACK_IMPORTED_MODULE_3__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQtdHlwZXNjcmlwdC8uL3NyYy9hcHAvc2xpY2VzL2luaGFiaXRhbnRzLXNsaWNlLnRzIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC10eXBlc2NyaXB0Ly4vc3JjL2FwcC9zdG9yZS50cyIsIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQtdHlwZXNjcmlwdC8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQtdHlwZXNjcmlwdC9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQtdHlwZXNjcmlwdC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0LXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJkYXRhIiwibG9hZGluZyIsInNlbGVjdGVkSUQiLCJzZWFyY2giLCJpbmhhYml0YW50c1NsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRJbmhhYml0YW50cyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldFNlbGVjdGVkSUQiLCJzZXRTZWFyY2giLCJhY3Rpb25zIiwic2VsZWN0SW5oYWJpdGFudHMiLCJpbmhhYml0YW50cyIsInNlbGVjdFNlYXJjaCIsInNlbGVjdEZpbHRlcmVkSW5oYWJpdGFudHMiLCJmaWx0ZXIiLCJlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlbGVjdFNlbGVjdGVkSW5oYWJpdGFudCIsImZpbmQiLCJpbmhhYiIsImlkIiwicmVkdWNlciIsIm1ha2VTdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwiaW5oYWJpdGFudHNSZWR1Y2VyIiwic3RvcmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9w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Ozs7OztBQ2ZBLDhDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IEluaGFiaXRhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXMvaW5oYWJpdGFudFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbmhhYml0YW50c1N0YXRlIHtcclxuICBkYXRhOiBJbmhhYml0YW50W107XHJcbiAgbG9hZGluZzogYm9vbGVhbjtcclxuICBzZWxlY3RlZElEOiBudW1iZXI7XHJcbiAgc2VhcmNoOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5oYWJpdGFudHNTdGF0ZSA9IHtcclxuICBkYXRhOiBbXSxcclxuICBsb2FkaW5nOiB0cnVlLFxyXG4gIHNlbGVjdGVkSUQ6IG51bGwsXHJcbiAgc2VhcmNoOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaGFiaXRhbnRzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJpbmhhYml0YW50c1wiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0SW5oYWJpdGFudHM6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEFycmF5PEluaGFiaXRhbnQ+PikgPT4ge1xyXG4gICAgICBzdGF0ZS5kYXRhID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBzZXRTZWxlY3RlZElEOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSA9PiB7XHJcbiAgICAgIHN0YXRlLnNlbGVjdGVkSUQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBzZXRTZWFyY2g6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZyB8IG51bGw+KSA9PiB7XHJcbiAgICAgIHN0YXRlLnNlYXJjaCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldEluaGFiaXRhbnRzLCBzZXRTZWxlY3RlZElELCBzZXRTZWFyY2ggfSA9IGluaGFiaXRhbnRzU2xpY2UuYWN0aW9ucztcclxuXHJcbi8vIFNlbGVjdG9yc1xyXG5leHBvcnQgY29uc3Qgc2VsZWN0SW5oYWJpdGFudHMgPSAoc3RhdGU6IEFwcFN0YXRlKSA9PlxyXG4gIHN0YXRlLmluaGFiaXRhbnRzO1xyXG5leHBvcnQgY29uc3Qgc2VsZWN0U2VhcmNoID0gKHN0YXRlOiBBcHBTdGF0ZSkgPT5cclxuICBzdGF0ZS5pbmhhYml0YW50cy5zZWFyY2g7XHJcbmV4cG9ydCBjb25zdCBzZWxlY3RGaWx0ZXJlZEluaGFiaXRhbnRzID0gKHN0YXRlOiBBcHBTdGF0ZSkgPT4ge1xyXG4gIGNvbnN0IHsgaW5oYWJpdGFudHMgfSA9IHN0YXRlO1xyXG4gIGNvbnN0IHsgc2VhcmNoLCBkYXRhIH0gPSBpbmhhYml0YW50cztcclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5pbmhhYml0YW50cyxcclxuICAgICAgZGF0YTogZGF0YS5maWx0ZXIoZSA9PiBlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkpLFxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gaW5oYWJpdGFudHM7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBzZWxlY3RTZWxlY3RlZEluaGFiaXRhbnQgPSAoc3RhdGU6IEFwcFN0YXRlKSA9PiBcclxuICBzdGF0ZS5pbmhhYml0YW50cy5kYXRhLmZpbmQoaW5oYWIgPT4gaW5oYWIuaWQgPT09IHN0YXRlLmluaGFiaXRhbnRzLnNlbGVjdGVkSUQpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaGFiaXRhbnRzU2xpY2UucmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIFRodW5rQWN0aW9uLCBBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuaW1wb3J0IGluaGFiaXRhbnRzUmVkdWNlciBmcm9tIFwiLi9zbGljZXMvaW5oYWJpdGFudHMtc2xpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3RvcmUoKSB7XHJcbiAgcmV0dXJuIGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgIHJlZHVjZXI6IHsgaW5oYWJpdGFudHM6IGluaGFiaXRhbnRzUmVkdWNlciB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBzdG9yZSA9IG1ha2VTdG9yZSgpO1xyXG5cclxuZXhwb3J0IHR5cGUgQXBwU3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBzdG9yZS5nZXRTdGF0ZT47XHJcblxyXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaDtcclxuXHJcbmV4cG9ydCB0eXBlIEFwcFRodW5rPFJldHVyblR5cGUgPSB2b2lkPiA9IFRodW5rQWN0aW9uPFxyXG4gIFJldHVyblR5cGUsXHJcbiAgQXBwU3RhdGUsXHJcbiAgdW5rbm93bixcclxuICBBY3Rpb248c3RyaW5nPlxyXG4+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcbiIsImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5cclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xyXG5cclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL2FwcC9zdG9yZSdcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9