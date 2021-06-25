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

/***/ "./src/app/slices/inhabitants-slice.ts":
/*!*********************************************!*\
  !*** ./src/app/slices/inhabitants-slice.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inhabitantsSlice\": function() { return /* binding */ inhabitantsSlice; },\n/* harmony export */   \"setInhabitants\": function() { return /* binding */ setInhabitants; },\n/* harmony export */   \"setSelectedID\": function() { return /* binding */ setSelectedID; },\n/* harmony export */   \"setSearch\": function() { return /* binding */ setSearch; },\n/* harmony export */   \"selectInhabitants\": function() { return /* binding */ selectInhabitants; },\n/* harmony export */   \"selectSearch\": function() { return /* binding */ selectSearch; },\n/* harmony export */   \"selectFilteredInhabitants\": function() { return /* binding */ selectFilteredInhabitants; },\n/* harmony export */   \"selectSelectedInhabitant\": function() { return /* binding */ selectSelectedInhabitant; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  data: [],\n  loading: true,\n  selectedID: null,\n  search: null\n};\nconst inhabitantsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"inhabitants\",\n  initialState,\n  reducers: {\n    setInhabitants: (state, action) => {\n      state.data = action.payload;\n      state.loading = false;\n    },\n    setSelectedID: (state, action) => {\n      state.selectedID = action.payload;\n    },\n    setSearch: (state, action) => {\n      state.search = action.payload;\n    }\n  }\n});\nconst {\n  setInhabitants,\n  setSelectedID,\n  setSearch\n} = inhabitantsSlice.actions; // Selectors\n\nconst selectInhabitants = state => state.inhabitants;\nconst selectSearch = state => state.inhabitants.search;\nconst selectFilteredInhabitants = state => {\n  const {\n    inhabitants\n  } = state;\n  const {\n    search,\n    data\n  } = inhabitants;\n\n  if (search) {\n    return _objectSpread(_objectSpread({}, inhabitants), {}, {\n      data: data.filter(e => e.name.toLowerCase().includes(search.toLowerCase()))\n    });\n  } else {\n    return inhabitants;\n  }\n};\nconst selectSelectedInhabitant = state => state.inhabitants.data.find(inhab => inhab.id === state.inhabitants.selectedID);\n/* harmony default export */ __webpack_exports__[\"default\"] = (inhabitantsSlice.reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQtdHlwZXNjcmlwdC8uL3NyYy9hcHAvc2xpY2VzL2luaGFiaXRhbnRzLXNsaWNlLnRzPzY4NTciXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiZGF0YSIsImxvYWRpbmciLCJzZWxlY3RlZElEIiwic2VhcmNoIiwiaW5oYWJpdGFudHNTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0SW5oYWJpdGFudHMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRTZWxlY3RlZElEIiwic2V0U2VhcmNoIiwiYWN0aW9ucyIsInNlbGVjdEluaGFiaXRhbnRzIiwiaW5oYWJpdGFudHMiLCJzZWxlY3RTZWFyY2giLCJzZWxlY3RGaWx0ZXJlZEluaGFiaXRhbnRzIiwiZmlsdGVyIiwiZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzZWxlY3RTZWxlY3RlZEluaGFiaXRhbnQiLCJmaW5kIiwiaW5oYWIiLCJpZCIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVdBLE1BQU1BLFlBQThCLEdBQUc7QUFDckNDLE1BQUksRUFBRSxFQUQrQjtBQUVyQ0MsU0FBTyxFQUFFLElBRjRCO0FBR3JDQyxZQUFVLEVBQUUsSUFIeUI7QUFJckNDLFFBQU0sRUFBRTtBQUo2QixDQUF2QztBQU9PLE1BQU1DLGdCQUFnQixHQUFHQyw2REFBVyxDQUFDO0FBQzFDQyxNQUFJLEVBQUUsYUFEb0M7QUFFMUNQLGNBRjBDO0FBRzFDUSxVQUFRLEVBQUU7QUFDUkMsa0JBQWMsRUFBRSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsS0FBcUQ7QUFDbkVELFdBQUssQ0FBQ1QsSUFBTixHQUFhVSxNQUFNLENBQUNDLE9BQXBCO0FBQ0FGLFdBQUssQ0FBQ1IsT0FBTixHQUFnQixLQUFoQjtBQUNELEtBSk87QUFLUlcsaUJBQWEsRUFBRSxDQUFDSCxLQUFELEVBQVFDLE1BQVIsS0FBMEM7QUFDdkRELFdBQUssQ0FBQ1AsVUFBTixHQUFtQlEsTUFBTSxDQUFDQyxPQUExQjtBQUNELEtBUE87QUFRUkUsYUFBUyxFQUFFLENBQUNKLEtBQUQsRUFBUUMsTUFBUixLQUFpRDtBQUMxREQsV0FBSyxDQUFDTixNQUFOLEdBQWVPLE1BQU0sQ0FBQ0MsT0FBdEI7QUFDRDtBQVZPO0FBSGdDLENBQUQsQ0FBcEM7QUFpQkEsTUFBTTtBQUFFSCxnQkFBRjtBQUFrQkksZUFBbEI7QUFBaUNDO0FBQWpDLElBQStDVCxnQkFBZ0IsQ0FBQ1UsT0FBdEUsQyxDQUVQOztBQUNPLE1BQU1DLGlCQUFpQixHQUFJTixLQUFELElBQy9CQSxLQUFLLENBQUNPLFdBREQ7QUFFQSxNQUFNQyxZQUFZLEdBQUlSLEtBQUQsSUFDMUJBLEtBQUssQ0FBQ08sV0FBTixDQUFrQmIsTUFEYjtBQUVBLE1BQU1lLHlCQUF5QixHQUFJVCxLQUFELElBQXFCO0FBQzVELFFBQU07QUFBRU87QUFBRixNQUFrQlAsS0FBeEI7QUFDQSxRQUFNO0FBQUVOLFVBQUY7QUFBVUg7QUFBVixNQUFtQmdCLFdBQXpCOztBQUNBLE1BQUliLE1BQUosRUFBWTtBQUNWLDJDQUNLYSxXQURMO0FBRUVoQixVQUFJLEVBQUVBLElBQUksQ0FBQ21CLE1BQUwsQ0FBWUMsQ0FBQyxJQUFJQSxDQUFDLENBQUNkLElBQUYsQ0FBT2UsV0FBUCxHQUFxQkMsUUFBckIsQ0FBOEJuQixNQUFNLENBQUNrQixXQUFQLEVBQTlCLENBQWpCO0FBRlI7QUFJRCxHQUxELE1BS087QUFDTCxXQUFPTCxXQUFQO0FBQ0Q7QUFDRixDQVhNO0FBWUEsTUFBTU8sd0JBQXdCLEdBQUlkLEtBQUQsSUFDdENBLEtBQUssQ0FBQ08sV0FBTixDQUFrQmhCLElBQWxCLENBQXVCd0IsSUFBdkIsQ0FBNEJDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxFQUFOLEtBQWFqQixLQUFLLENBQUNPLFdBQU4sQ0FBa0JkLFVBQXBFLENBREs7QUFJUCwrREFBZUUsZ0JBQWdCLENBQUN1QixPQUFoQyIsImZpbGUiOiIuL3NyYy9hcHAvc2xpY2VzL2luaGFiaXRhbnRzLXNsaWNlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgSW5oYWJpdGFudCB9IGZyb20gXCIuLi8uLi90eXBlcy9pbmhhYml0YW50XCI7XG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluaGFiaXRhbnRzU3RhdGUge1xuICBkYXRhOiBJbmhhYml0YW50W107XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIHNlbGVjdGVkSUQ6IG51bWJlcjtcbiAgc2VhcmNoOiBzdHJpbmc7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5oYWJpdGFudHNTdGF0ZSA9IHtcbiAgZGF0YTogW10sXG4gIGxvYWRpbmc6IHRydWUsXG4gIHNlbGVjdGVkSUQ6IG51bGwsXG4gIHNlYXJjaDogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBpbmhhYml0YW50c1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcImluaGFiaXRhbnRzXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRJbmhhYml0YW50czogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248QXJyYXk8SW5oYWJpdGFudD4+KSA9PiB7XG4gICAgICBzdGF0ZS5kYXRhID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICBzZXRTZWxlY3RlZElEOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSA9PiB7XG4gICAgICBzdGF0ZS5zZWxlY3RlZElEID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgICBzZXRTZWFyY2g6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZyB8IG51bGw+KSA9PiB7XG4gICAgICBzdGF0ZS5zZWFyY2ggPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHNldEluaGFiaXRhbnRzLCBzZXRTZWxlY3RlZElELCBzZXRTZWFyY2ggfSA9IGluaGFiaXRhbnRzU2xpY2UuYWN0aW9ucztcblxuLy8gU2VsZWN0b3JzXG5leHBvcnQgY29uc3Qgc2VsZWN0SW5oYWJpdGFudHMgPSAoc3RhdGU6IEFwcFN0YXRlKSA9PlxuICBzdGF0ZS5pbmhhYml0YW50cztcbmV4cG9ydCBjb25zdCBzZWxlY3RTZWFyY2ggPSAoc3RhdGU6IEFwcFN0YXRlKSA9PlxuICBzdGF0ZS5pbmhhYml0YW50cy5zZWFyY2g7XG5leHBvcnQgY29uc3Qgc2VsZWN0RmlsdGVyZWRJbmhhYml0YW50cyA9IChzdGF0ZTogQXBwU3RhdGUpID0+IHtcbiAgY29uc3QgeyBpbmhhYml0YW50cyB9ID0gc3RhdGU7XG4gIGNvbnN0IHsgc2VhcmNoLCBkYXRhIH0gPSBpbmhhYml0YW50cztcbiAgaWYgKHNlYXJjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5pbmhhYml0YW50cyxcbiAgICAgIGRhdGE6IGRhdGEuZmlsdGVyKGUgPT4gZS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpKSxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGluaGFiaXRhbnRzO1xuICB9XG59XG5leHBvcnQgY29uc3Qgc2VsZWN0U2VsZWN0ZWRJbmhhYml0YW50ID0gKHN0YXRlOiBBcHBTdGF0ZSkgPT4gXG4gIHN0YXRlLmluaGFiaXRhbnRzLmRhdGEuZmluZChpbmhhYiA9PiBpbmhhYi5pZCA9PT0gc3RhdGUuaW5oYWJpdGFudHMuc2VsZWN0ZWRJRCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgaW5oYWJpdGFudHNTbGljZS5yZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/slices/inhabitants-slice.ts\n");

/***/ }),

/***/ "./src/app/store.ts":
/*!**************************!*\
  !*** ./src/app/store.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeStore\": function() { return /* binding */ makeStore; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_inhabitants_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/inhabitants-slice */ \"./src/app/slices/inhabitants-slice.ts\");\n\n\nfunction makeStore() {\n  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n      inhabitants: _slices_inhabitants_slice__WEBPACK_IMPORTED_MODULE_1__.default\n    }\n  });\n}\nconst store = makeStore();\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQtdHlwZXNjcmlwdC8uL3NyYy9hcHAvc3RvcmUudHM/NThkYiJdLCJuYW1lcyI6WyJtYWtlU3RvcmUiLCJjb25maWd1cmVTdG9yZSIsInJlZHVjZXIiLCJpbmhhYml0YW50cyIsImluaGFiaXRhbnRzUmVkdWNlciIsInN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTtBQUVPLFNBQVNBLFNBQVQsR0FBcUI7QUFDMUIsU0FBT0MsZ0VBQWMsQ0FBQztBQUNwQkMsV0FBTyxFQUFFO0FBQUVDLGlCQUFXLEVBQUVDLDhEQUFrQkE7QUFBakM7QUFEVyxHQUFELENBQXJCO0FBR0Q7QUFFRCxNQUFNQyxLQUFLLEdBQUdMLFNBQVMsRUFBdkI7QUFhQSwrREFBZUssS0FBZiIsImZpbGUiOiIuL3NyYy9hcHAvc3RvcmUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSwgVGh1bmtBY3Rpb24sIEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmltcG9ydCBpbmhhYml0YW50c1JlZHVjZXIgZnJvbSBcIi4vc2xpY2VzL2luaGFiaXRhbnRzLXNsaWNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3RvcmUoKSB7XG4gIHJldHVybiBjb25maWd1cmVTdG9yZSh7XG4gICAgcmVkdWNlcjogeyBpbmhhYml0YW50czogaW5oYWJpdGFudHNSZWR1Y2VyIH0sXG4gIH0pO1xufVxuXG5jb25zdCBzdG9yZSA9IG1ha2VTdG9yZSgpO1xuXG5leHBvcnQgdHlwZSBBcHBTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPjtcblxuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2g7XG5cbmV4cG9ydCB0eXBlIEFwcFRodW5rPFJldHVyblR5cGUgPSB2b2lkPiA9IFRodW5rQWN0aW9uPFxuICBSZXR1cm5UeXBlLFxuICBBcHBTdGF0ZSxcbiAgdW5rbm93bixcbiAgQWN0aW9uPHN0cmluZz5cbj47XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/store.ts\n");

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