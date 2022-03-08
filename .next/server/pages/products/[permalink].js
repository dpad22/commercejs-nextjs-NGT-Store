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
exports.id = "pages/products/[permalink]";
exports.ids = ["pages/products/[permalink]"];
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

/***/ "./pages/products/[permalink].js":
/*!***************************************!*\
  !*** ./pages/products/[permalink].js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"default\": () => (/* binding */ ProductPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/commerce */ \"./lib/commerce.js\");\n/* harmony import */ var _context_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/cart */ \"./context/cart.js\");\n\n\n\n\nasync function getStaticProps({ params  }) {\n    const { permalink  } = params;\n    const product = await _lib_commerce__WEBPACK_IMPORTED_MODULE_2__[\"default\"].products.retrieve(permalink, {\n        type: 'permalink'\n    });\n    return {\n        props: {\n            product\n        }\n    };\n}\nasync function getStaticPaths() {\n    const { data: products  } = await _lib_commerce__WEBPACK_IMPORTED_MODULE_2__[\"default\"].products.list();\n    return {\n        paths: products.map((product)=>({\n                params: {\n                    permalink: product.permalink\n                }\n            })\n        ),\n        fallback: false\n    };\n}\nfunction ProductPage({ product  }) {\n    const { setCart  } = (0,_context_cart__WEBPACK_IMPORTED_MODULE_3__.useCartDispatch)();\n    const addToCart = ()=>_lib_commerce__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cart.add(product.id).then(({ cart  })=>setCart(cart)\n        )\n    ;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: product.name\n            }, void 0, false, {\n                fileName: \"/Users/davidpadilla/Desktop/next-js/ngt-app/pages/products/[permalink].js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: product.price.formatted_with_symbol\n            }, void 0, false, {\n                fileName: \"/Users/davidpadilla/Desktop/next-js/ngt-app/pages/products/[permalink].js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: addToCart,\n                children: \"Add to Cart\"\n            }, void 0, false, {\n                fileName: \"/Users/davidpadilla/Desktop/next-js/ngt-app/pages/products/[permalink].js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davidpadilla/Desktop/next-js/ngt-app/pages/products/[permalink].js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9bcGVybWFsaW5rXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2dCO0FBQ1M7QUFFM0MsZUFBZUcsY0FBYyxDQUFDLENBQUNDLENBQUFBLE1BQU0sR0FBQyxFQUFFLENBQUM7SUFDNUMsS0FBSyxDQUFDLENBQUNDLENBQUFBLFNBQVMsR0FBQyxHQUFHRCxNQUFNO0lBRTFCLEtBQUssQ0FBQ0UsT0FBTyxHQUFHLEtBQUssQ0FBQ0wsdUVBQTBCLENBQUNJLFNBQVMsRUFBRSxDQUFDO1FBQ3pESSxJQUFJLEVBQUUsQ0FBVztJQUNyQixDQUFDO0lBRUQsTUFBTSxDQUFDLENBQUM7UUFDSkMsS0FBSyxFQUFFLENBQUM7WUFDSkosT0FBTztRQUNYLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUVNLGVBQWVLLGNBQWMsR0FBRyxDQUFDO0lBQ3BDLEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksRUFBRUwsUUFBUSxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUNOLG1FQUFzQjtJQUV2RCxNQUFNLENBQUMsQ0FBQztRQUNKYSxLQUFLLEVBQUVQLFFBQVEsQ0FBQ1EsR0FBRyxFQUFFVCxPQUFPLElBQU0sQ0FBQztnQkFDL0JGLE1BQU0sRUFBRSxDQUFDO29CQUNMQyxTQUFTLEVBQUVDLE9BQU8sQ0FBQ0QsU0FBUztnQkFDaEMsQ0FBQztZQUNMLENBQUM7O1FBQ0RXLFFBQVEsRUFBRSxLQUFLO0lBQ25CLENBQUM7QUFDTCxDQUFDO0FBRWMsUUFBUSxDQUFDQyxXQUFXLENBQUMsQ0FBQ1gsQ0FBQUEsT0FBTyxHQUFDLEVBQUUsQ0FBQztJQUM1QyxLQUFLLENBQUMsQ0FBQ1ksQ0FBQUEsT0FBTyxHQUFDLEdBQUdoQiw4REFBZTtJQUNqQyxLQUFLLENBQUNpQixTQUFTLE9BQ1hsQiw4REFBaUIsQ0FBQ0ssT0FBTyxDQUFDZ0IsRUFBRSxFQUFFQyxJQUFJLEVBQUUsQ0FBQ0gsQ0FBQUEsSUFBSSxHQUFDLEdBQUtGLE9BQU8sQ0FBQ0UsSUFBSTs7O0lBRS9ELE1BQU0sNkVBQ0RwQix1REFBYzs7d0ZBQ1Z5QixDQUFFOzBCQUFFbkIsT0FBTyxDQUFDb0IsSUFBSTs7Ozs7O3dGQUVoQkMsQ0FBQzswQkFBRXJCLE9BQU8sQ0FBQ3NCLEtBQUssQ0FBQ0MscUJBQXFCOzs7Ozs7d0ZBQ3RDQyxDQUFNO2dCQUFDQyxPQUFPLEVBQUVaLFNBQVM7MEJBQUUsQ0FBVzs7Ozs7Ozs7Ozs7O0FBR25ELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZ3QtYXBwLy4vcGFnZXMvcHJvZHVjdHMvW3Blcm1hbGlua10uanM/ZjU2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNvbW1lcmNlIGZyb20gJy4uLy4uL2xpYi9jb21tZXJjZSdcbmltcG9ydCB7dXNlQ2FydERpc3BhdGNofSBmcm9tICcuLi8uLi9jb250ZXh0L2NhcnQnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zfSkge1xuICAgIGNvbnN0IHtwZXJtYWxpbmt9ID0gcGFyYW1zXG5cbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgY29tbWVyY2UucHJvZHVjdHMucmV0cmlldmUocGVybWFsaW5rLCB7XG4gICAgICAgIHR5cGU6ICdwZXJtYWxpbmsnXG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwcm9kdWN0LFxuICAgICAgICB9LFxuICAgIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgICBjb25zdCB7IGRhdGE6IHByb2R1Y3RzIH0gPSBhd2FpdCBjb21tZXJjZS5wcm9kdWN0cy5saXN0KCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRoczogcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoe1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgcGVybWFsaW5rOiBwcm9kdWN0LnBlcm1hbGlua1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkpLFxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdFBhZ2Uoe3Byb2R1Y3R9KSB7XG4gICAgY29uc3Qge3NldENhcnR9ID0gdXNlQ2FydERpc3BhdGNoKClcbiAgICBjb25zdCBhZGRUb0NhcnQgPSAoKSA9PiBcbiAgICAgICAgY29tbWVyY2UuY2FydC5hZGQocHJvZHVjdC5pZCkudGhlbigoe2NhcnR9KSA9PiBzZXRDYXJ0KGNhcnQpKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxoMT57cHJvZHVjdC5uYW1lfTwvaDE+XG5cbiAgICAgICAgICAgIDxwPntwcm9kdWN0LnByaWNlLmZvcm1hdHRlZF93aXRoX3N5bWJvbH08L3A+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZFRvQ2FydH0+QWRkIHRvIENhcnQ8L2J1dHRvbj5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiY29tbWVyY2UiLCJ1c2VDYXJ0RGlzcGF0Y2giLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInBlcm1hbGluayIsInByb2R1Y3QiLCJwcm9kdWN0cyIsInJldHJpZXZlIiwidHlwZSIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJkYXRhIiwibGlzdCIsInBhdGhzIiwibWFwIiwiZmFsbGJhY2siLCJQcm9kdWN0UGFnZSIsInNldENhcnQiLCJhZGRUb0NhcnQiLCJjYXJ0IiwiYWRkIiwiaWQiLCJ0aGVuIiwiRnJhZ21lbnQiLCJoMSIsIm5hbWUiLCJwIiwicHJpY2UiLCJmb3JtYXR0ZWRfd2l0aF9zeW1ib2wiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/[permalink].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/products/[permalink].js"));
module.exports = __webpack_exports__;

})();