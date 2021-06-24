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
  loading: false,
  selectedID: null,
  search: null
};
const inhabitantsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "inhabitants",
  initialState,
  reducers: {
    setInhabitants: (state, action) => {
      state.data = action.payload;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQtdHlwZXNjcmlwdC8uL3NyYy9hcHAvc2xpY2VzL2luaGFiaXRhbnRzLXNsaWNlLnRzIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC10eXBlc2NyaXB0Ly4vc3JjL2FwcC9zdG9yZS50cyIsIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQtdHlwZXNjcmlwdC8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQtdHlwZXNjcmlwdC9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQtdHlwZXNjcmlwdC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0LXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJkYXRhIiwibG9hZGluZyIsInNlbGVjdGVkSUQiLCJzZWFyY2giLCJpbmhhYml0YW50c1NsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRJbmhhYml0YW50cyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldFNlbGVjdGVkSUQiLCJzZXRTZWFyY2giLCJhY3Rpb25zIiwic2VsZWN0SW5oYWJpdGFudHMiLCJpbmhhYml0YW50cyIsInNlbGVjdFNlYXJjaCIsInNlbGVjdEZpbHRlcmVkSW5oYWJpdGFudHMiLCJmaWx0ZXIiLCJlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlbGVjdFNlbGVjdGVkSW5oYWJpdGFudCIsImZpbmQiLCJpbmhhYiIsImlkIiwicmVkdWNlciIsIm1ha2VTdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwiaW5oYWJpdGFudHNSZWR1Y2VyIiwic3RvcmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9w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Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgSW5oYWJpdGFudCB9IGZyb20gXCIuLi8uLi90eXBlcy9pbmhhYml0YW50XCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEluaGFiaXRhbnRzU3RhdGUge1xyXG4gIGRhdGE6IEluaGFiaXRhbnRbXTtcclxuICBsb2FkaW5nOiBib29sZWFuO1xyXG4gIHNlbGVjdGVkSUQ6IG51bWJlcjtcclxuICBzZWFyY2g6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBJbmhhYml0YW50c1N0YXRlID0ge1xyXG4gIGRhdGE6IFtdLFxyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG4gIHNlbGVjdGVkSUQ6IG51bGwsXHJcbiAgc2VhcmNoOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaGFiaXRhbnRzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJpbmhhYml0YW50c1wiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0SW5oYWJpdGFudHM6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEFycmF5PEluaGFiaXRhbnQ+PikgPT4ge1xyXG4gICAgICBzdGF0ZS5kYXRhID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0U2VsZWN0ZWRJRDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikgPT4ge1xyXG4gICAgICBzdGF0ZS5zZWxlY3RlZElEID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0U2VhcmNoOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmcgfCBudWxsPikgPT4ge1xyXG4gICAgICBzdGF0ZS5zZWFyY2ggPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRJbmhhYml0YW50cywgc2V0U2VsZWN0ZWRJRCwgc2V0U2VhcmNoIH0gPSBpbmhhYml0YW50c1NsaWNlLmFjdGlvbnM7XHJcblxyXG4vLyBTZWxlY3RvcnNcclxuZXhwb3J0IGNvbnN0IHNlbGVjdEluaGFiaXRhbnRzID0gKHN0YXRlOiBBcHBTdGF0ZSkgPT5cclxuICBzdGF0ZS5pbmhhYml0YW50cztcclxuZXhwb3J0IGNvbnN0IHNlbGVjdFNlYXJjaCA9IChzdGF0ZTogQXBwU3RhdGUpID0+XHJcbiAgc3RhdGUuaW5oYWJpdGFudHMuc2VhcmNoO1xyXG5leHBvcnQgY29uc3Qgc2VsZWN0RmlsdGVyZWRJbmhhYml0YW50cyA9IChzdGF0ZTogQXBwU3RhdGUpID0+IHtcclxuICBjb25zdCB7IGluaGFiaXRhbnRzIH0gPSBzdGF0ZTtcclxuICBjb25zdCB7IHNlYXJjaCwgZGF0YSB9ID0gaW5oYWJpdGFudHM7XHJcbiAgaWYgKHNlYXJjaCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uaW5oYWJpdGFudHMsXHJcbiAgICAgIGRhdGE6IGRhdGEuZmlsdGVyKGUgPT4gZS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpKSxcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGluaGFiaXRhbnRzO1xyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3Qgc2VsZWN0U2VsZWN0ZWRJbmhhYml0YW50ID0gKHN0YXRlOiBBcHBTdGF0ZSkgPT4gXHJcbiAgc3RhdGUuaW5oYWJpdGFudHMuZGF0YS5maW5kKGluaGFiID0+IGluaGFiLmlkID09PSBzdGF0ZS5pbmhhYml0YW50cy5zZWxlY3RlZElEKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmhhYml0YW50c1NsaWNlLnJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBUaHVua0FjdGlvbiwgQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmltcG9ydCBpbmhhYml0YW50c1JlZHVjZXIgZnJvbSBcIi4vc2xpY2VzL2luaGFiaXRhbnRzLXNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN0b3JlKCkge1xyXG4gIHJldHVybiBjb25maWd1cmVTdG9yZSh7XHJcbiAgICByZWR1Y2VyOiB7IGluaGFiaXRhbnRzOiBpbmhhYml0YW50c1JlZHVjZXIgfSxcclxuICB9KTtcclxufVxyXG5cclxuY29uc3Qgc3RvcmUgPSBtYWtlU3RvcmUoKTtcclxuXHJcbmV4cG9ydCB0eXBlIEFwcFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+O1xyXG5cclxuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2g7XHJcblxyXG5leHBvcnQgdHlwZSBBcHBUaHVuazxSZXR1cm5UeXBlID0gdm9pZD4gPSBUaHVua0FjdGlvbjxcclxuICBSZXR1cm5UeXBlLFxyXG4gIEFwcFN0YXRlLFxyXG4gIHVua25vd24sXHJcbiAgQWN0aW9uPHN0cmluZz5cclxuPjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9hcHAvc3RvcmUnXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==