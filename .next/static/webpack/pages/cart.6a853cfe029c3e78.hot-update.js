"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CartPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/cart */ \"./context/cart.js\");\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction CartItem(param) {\n    var name = param.name, quantity = param.quantity, line_total = param.line_total;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/davidpadilla/Desktop/next-js/ngt-app/pages/cart.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: quantity\n            }, void 0, false, {\n                fileName: \"/Users/davidpadilla/Desktop/next-js/ngt-app/pages/cart.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: line_total.formatted_with_symbol\n            }, void 0, false, {\n                fileName: \"/Users/davidpadilla/Desktop/next-js/ngt-app/pages/cart.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davidpadilla/Desktop/next-js/ngt-app/pages/cart.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this));\n}\n_c = CartItem;\nfunction CartPage() {\n    var _this = this;\n    _s();\n    var ref = (0,_context_cart__WEBPACK_IMPORTED_MODULE_1__.useCartState)(), line_items = ref.line_items, subtotal = ref.subtotal;\n    // const isEmpty = line_items.length === 0;\n    console.log('cart length', line_items);\n    // if (isEmpty) return <p>Your cart is empty</p>;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Cart\"\n            }, void 0, false, {\n                fileName: \"/Users/davidpadilla/Desktop/next-js/ngt-app/pages/cart.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            line_items.map(function(item) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItem, _objectSpread({}, item), item.id, false, {\n                    fileName: \"/Users/davidpadilla/Desktop/next-js/ngt-app/pages/cart.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, _this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/davidpadilla/Desktop/next-js/ngt-app/pages/cart.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Sub Total:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/davidpadilla/Desktop/next-js/ngt-app/pages/cart.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    subtotal.formatted_with_symbol\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/davidpadilla/Desktop/next-js/ngt-app/pages/cart.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davidpadilla/Desktop/next-js/ngt-app/pages/cart.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this));\n};\n_s(CartPage, \"IBiFZSQVSWI7wDb+Rf07tlD22EI=\", false, function() {\n    return [\n        _context_cart__WEBPACK_IMPORTED_MODULE_1__.useCartState\n    ];\n});\n_c1 = CartPage;\nvar _c, _c1;\n$RefreshReg$(_c, \"CartItem\");\n$RefreshReg$(_c1, \"CartPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFbkNDLFFBQVEsQ0FBQyxLQUE0QixFQUFFLENBQUM7UUFBOUJDLElBQUksR0FBTCxLQUE0QixDQUEzQkEsSUFBSSxFQUFFQyxRQUFRLEdBQWYsS0FBNEIsQ0FBckJBLFFBQVEsRUFBRUMsVUFBVSxHQUEzQixLQUE0QixDQUFYQSxVQUFVO0lBQ3pDLE1BQU0sNkVBQ0RDLENBQUc7O3dGQUNDQyxDQUFDOzBCQUFFSixJQUFJOzs7Ozs7d0ZBQ1BJLENBQUM7MEJBQUVILFFBQVE7Ozs7Ozt3RkFDWEcsQ0FBQzswQkFBRUYsVUFBVSxDQUFDRyxxQkFBcUI7Ozs7Ozs7Ozs7OztBQUdoRCxDQUFDO0tBUlFOLFFBQVE7QUFVRixRQUFRLENBQUNPLFFBQVEsR0FBRyxDQUFDOzs7SUFDaEMsR0FBSyxDQUE0QlIsR0FBYyxHQUFkQSwyREFBWSxJQUFyQ1MsVUFBVSxHQUFlVCxHQUFjLENBQXZDUyxVQUFVLEVBQUVDLFFBQVEsR0FBS1YsR0FBYyxDQUEzQlUsUUFBUTtJQUU1QixFQUEyQztJQUMzQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBYSxjQUFFSCxVQUFVO0lBQ3JDLEVBQWlEO0lBRWpELE1BQU0sNkVBQ0RKLENBQUc7O3dGQUNDUSxDQUFFOzBCQUFDLENBQUk7Ozs7OztZQUVQSixVQUFVLENBQUNLLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUk7OEJBQ2pCLE1BQU0sK0RBQUxkLFFBQVEsb0JBQW1CYyxJQUFJLEdBQWpCQSxJQUFJLENBQUNDLEVBQUU7Ozs7Ozt3RkFHekJDLENBQUU7Ozs7O3dGQUVGWCxDQUFDOztnR0FDR1ksQ0FBTTtrQ0FBQyxDQUFVOzs7Ozs7b0JBQVMsQ0FBQztvQkFBQ1IsUUFBUSxDQUFDSCxxQkFBcUI7Ozs7Ozs7Ozs7Ozs7QUFJM0UsQ0FBQztHQXRCdUJDLFFBQVE7O1FBQ0tSLHVEQUFZOzs7TUFEekJRLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC5qcz9mNDUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQ2FydFN0YXRlfSBmcm9tICcuLi9jb250ZXh0L2NhcnQnXG5cbmZ1bmN0aW9uIENhcnRJdGVtKHtuYW1lLCBxdWFudGl0eSwgbGluZV90b3RhbH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+e25hbWV9PC9wPlxuICAgICAgICAgICAgPHA+e3F1YW50aXR5fTwvcD5cbiAgICAgICAgICAgIDxwPntsaW5lX3RvdGFsLmZvcm1hdHRlZF93aXRoX3N5bWJvbH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydFBhZ2UoKSB7XG4gICAgY29uc3QgeyBsaW5lX2l0ZW1zLCBzdWJ0b3RhbCB9ID0gdXNlQ2FydFN0YXRlKCk7XG5cbiAgICAvLyBjb25zdCBpc0VtcHR5ID0gbGluZV9pdGVtcy5sZW5ndGggPT09IDA7XG4gICAgY29uc29sZS5sb2coJ2NhcnQgbGVuZ3RoJywgbGluZV9pdGVtcylcbiAgICAvLyBpZiAoaXNFbXB0eSkgcmV0dXJuIDxwPllvdXIgY2FydCBpcyBlbXB0eTwvcD47XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPkNhcnQ8L2gxPlxuXG4gICAgICAgICAgICB7bGluZV9pdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8Q2FydEl0ZW0ga2V5PXtpdGVtLmlkfSB7Li4uaXRlbX0gLz5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICA8aHIgLz5cblxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5TdWIgVG90YWw6PC9zdHJvbmc+IHtzdWJ0b3RhbC5mb3JtYXR0ZWRfd2l0aF9zeW1ib2x9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbInVzZUNhcnRTdGF0ZSIsIkNhcnRJdGVtIiwibmFtZSIsInF1YW50aXR5IiwibGluZV90b3RhbCIsImRpdiIsInAiLCJmb3JtYXR0ZWRfd2l0aF9zeW1ib2wiLCJDYXJ0UGFnZSIsImxpbmVfaXRlbXMiLCJzdWJ0b3RhbCIsImNvbnNvbGUiLCJsb2ciLCJoMSIsIm1hcCIsIml0ZW0iLCJpZCIsImhyIiwic3Ryb25nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cart.js\n");

/***/ })

});