"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/cart.js":
/*!*************************!*\
  !*** ./context/cart.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartProvider\": () => (/* binding */ CartProvider),\n/* harmony export */   \"useCartState\": () => (/* binding */ useCartState),\n/* harmony export */   \"useCartDispatch\": () => (/* binding */ useCartDispatch)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/commerce */ \"./lib/commerce.js\");\n\n\n\nconst CartStateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CartDispatchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst SET_CART = \"SET_CART\";\nconst initialState = {\n    total_items: 0,\n    total_unique_items: 0,\n    line_items: []\n};\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case SET_CART:\n            return {\n                ...state,\n                ...action.payload\n            };\n        default:\n            throw new Error(`Unknown action: ${action.type}`);\n    }\n};\nconst CartProvider = ({ children  })=>{\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getCart();\n    }, []);\n    const setCart = (payload)=>dispatch({\n            type: SET_CART,\n            payload\n        })\n    ;\n    const getCart = async ()=>{\n        try {\n            const cart = await _lib_commerce__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cart.retrieve();\n            setCart(cart);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartDispatchContext.Provider, {\n        value: {\n            setCart\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartStateContext.Provider, {\n            value: state,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/davidpadilla/Desktop/next-js/ngt-app/context/cart.js\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/davidpadilla/Desktop/next-js/ngt-app/context/cart.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, undefined));\n};\nconst useCartState = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartStateContext)\n;\nconst useCartDispatch = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartDispatchContext)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2NhcnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXNFO0FBQ2hDO0FBRXRDLEtBQUssQ0FBQ0ssZ0JBQWdCLGlCQUFHTCxvREFBYTtBQUN0QyxLQUFLLENBQUNNLG1CQUFtQixpQkFBR04sb0RBQWE7QUFDekMsS0FBSyxDQUFDTyxRQUFRLEdBQUcsQ0FBVTtBQUMzQixLQUFLLENBQUNDLFlBQVksR0FBRyxDQUFDO0lBQ2xCQyxXQUFXLEVBQUUsQ0FBQztJQUNkQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3JCQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQ2xCLENBQUM7QUFFRCxLQUFLLENBQUNDLE9BQU8sSUFBSUMsS0FBSyxFQUFFQyxNQUFNLEdBQUssQ0FBQztJQUNoQyxNQUFNLENBQUNBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNkLElBQUksQ0FBQ1IsUUFBUTtZQUNULE1BQU0sQ0FBQyxDQUFDO21CQUFJTSxLQUFLO21CQUFLQyxNQUFNLENBQUNFLE9BQU87WUFBQyxDQUFDOztZQUV0QyxLQUFLLENBQUMsR0FBRyxDQUFDQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUVILE1BQU0sQ0FBQ0MsSUFBSTs7QUFFMUQsQ0FBQztBQUVNLEtBQUssQ0FBQ0csWUFBWSxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQzNDLEtBQUssTUFBRU4sS0FBSyxNQUFFTyxRQUFRLE1BQUluQixpREFBVSxDQUFDVyxPQUFPLEVBQUVKLFlBQVk7SUFFMURMLGdEQUFTLEtBQU8sQ0FBQztRQUNia0IsT0FBTztJQUNYLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxLQUFLLENBQUNDLE9BQU8sSUFBSU4sT0FBTyxHQUFLSSxRQUFRLENBQUMsQ0FBQztZQUFDTCxJQUFJLEVBQUVSLFFBQVE7WUFBRVMsT0FBTztRQUFDLENBQUM7O0lBQ2pFLEtBQUssQ0FBQ0ssT0FBTyxhQUFlLENBQUM7UUFDekIsR0FBRyxDQUFDLENBQUM7WUFDRCxLQUFLLENBQUNFLElBQUksR0FBRyxLQUFLLENBQUNuQixtRUFBc0I7WUFFekNrQixPQUFPLENBQUNDLElBQUk7UUFDaEIsQ0FBQyxDQUFDLEtBQUssRUFBRUUsR0FBRyxFQUFFLENBQUM7WUFDWEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUc7UUFDbkIsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLDZFQUNEbkIsbUJBQW1CLENBQUNzQixRQUFRO1FBQUNDLEtBQUssRUFBRSxDQUFDO1lBQUNQLE9BQU87UUFBQyxDQUFDOzhGQUMzQ2pCLGdCQUFnQixDQUFDdUIsUUFBUTtZQUFDQyxLQUFLLEVBQUdoQixLQUFLO3NCQUNuQ00sUUFBUTs7Ozs7Ozs7Ozs7QUFJekIsQ0FBQztBQUVNLEtBQUssQ0FBQ1csWUFBWSxPQUFTNUIsaURBQVUsQ0FBQ0csZ0JBQWdCOztBQUN0RCxLQUFLLENBQUMwQixlQUFlLE9BQVM3QixpREFBVSxDQUFDSSxtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZ3QtYXBwLy4vY29udGV4dC9jYXJ0LmpzPzdjZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VDb250ZXh0LCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgY29tbWVyY2UgZnJvbSBcIi4uL2xpYi9jb21tZXJjZVwiXG5cbmNvbnN0IENhcnRTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5jb25zdCBDYXJ0RGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuY29uc3QgU0VUX0NBUlQgPSBcIlNFVF9DQVJUXCI7XG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdG90YWxfaXRlbXM6IDAsXG4gICAgdG90YWxfdW5pcXVlX2l0ZW1zOiAwLFxuICAgIGxpbmVfaXRlbXM6IFtdLFxufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBTRVRfQ0FSVDpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGFjdGlvbjogJHthY3Rpb24udHlwZX1gKTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRDYXJ0KCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgc2V0Q2FydCA9IChwYXlsb2FkKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFNFVF9DQVJULCBwYXlsb2FkIH0pO1xuICAgIGNvbnN0IGdldENhcnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBjYXJ0ID0gYXdhaXQgY29tbWVyY2UuY2FydC5yZXRyaWV2ZSgpXG5cbiAgICAgICAgICAgIHNldENhcnQoY2FydClcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FydERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzZXRDYXJ0IH19PlxuICAgICAgICAgICAgPENhcnRTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyBzdGF0ZSB9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvQ2FydFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgPC9DYXJ0RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQ2FydFN0YXRlID0gKCkgPT4gdXNlQ29udGV4dChDYXJ0U3RhdGVDb250ZXh0KTtcbmV4cG9ydCBjb25zdCB1c2VDYXJ0RGlzcGF0Y2ggPSAoKSA9PiB1c2VDb250ZXh0KENhcnREaXNwYXRjaENvbnRleHQpOyJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlUmVkdWNlciIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJjb21tZXJjZSIsIkNhcnRTdGF0ZUNvbnRleHQiLCJDYXJ0RGlzcGF0Y2hDb250ZXh0IiwiU0VUX0NBUlQiLCJpbml0aWFsU3RhdGUiLCJ0b3RhbF9pdGVtcyIsInRvdGFsX3VuaXF1ZV9pdGVtcyIsImxpbmVfaXRlbXMiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsIkVycm9yIiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsImdldENhcnQiLCJzZXRDYXJ0IiwiY2FydCIsInJldHJpZXZlIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDYXJ0U3RhdGUiLCJ1c2VDYXJ0RGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/cart.js\n");

/***/ }),

/***/ "./lib/commerce.js":
/*!*************************!*\
  !*** ./lib/commerce.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chec/commerce.js */ \"@chec/commerce.js\");\n/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new (_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default())(\"pk_40769c961215c41bfa554c69da65d2d82faa11b81ff1e\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29tbWVyY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBRTNDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FBQ0QsMERBQVcsQ0FBQ0Usa0RBQTJDO0FBRTFFLGlFQUFlRCxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZ3QtYXBwLy4vbGliL2NvbW1lcmNlLmpzPzc1NGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbW1lcmNlU0RLIGZyb20gXCJAY2hlYy9jb21tZXJjZS5qc1wiO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQ29tbWVyY2VTREsocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0hFQ19QVUJMSUNfQVBJX0tFWSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiXSwibmFtZXMiOlsiQ29tbWVyY2VTREsiLCJjbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQ0hFQ19QVUJMSUNfQVBJX0tFWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/commerce.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/cart */ \"./context/cart.js\");\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_cart__WEBPACK_IMPORTED_MODULE_1__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/davidpadilla/Desktop/next-js/ngt-app/pages/_app.js\",\n            lineNumber: 6,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/davidpadilla/Desktop/next-js/ngt-app/pages/_app.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThDO0FBRS9CLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckQsTUFBTSw2RUFDREgsdURBQVk7OEZBQ1JFLFNBQVM7ZUFBS0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHcEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ndC1hcHAvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FydFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvY2FydFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FydFByb3ZpZGVyPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0NhcnRQcm92aWRlcj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJDYXJ0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@chec/commerce.js":
/*!************************************!*\
  !*** external "@chec/commerce.js" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@chec/commerce.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();