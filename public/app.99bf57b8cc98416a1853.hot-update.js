webpackHotUpdate("app",{

/***/ "./src/store/plugin/WebSockPlugin.js":
/*!*******************************************!*\
  !*** ./src/store/plugin/WebSockPlugin.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createWebSocketPlugin; });\n/* harmony import */ var C_Users_sks89_OneDrive_Desktop_VueChain_node_modules_babel_runtime_helpers_builtin_es6_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/builtin/es6/classCallCheck */ \"./node_modules/@babel/runtime/helpers/builtin/es6/classCallCheck.js\");\n/* harmony import */ var C_Users_sks89_OneDrive_Desktop_VueChain_node_modules_babel_runtime_helpers_builtin_es6_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/builtin/es6/createClass */ \"./node_modules/@babel/runtime/helpers/builtin/es6/createClass.js\");\n\n\n\n//import { ADD_BLOCK } from \"../../classes/protocol\";\n// class RequestHandler {\n//     constructor(){\n//     }\n// }\n// class ResponseHandler {\n//     constructor() {\n//     }\n// }\nvar WebSockPlugin =\n/*#__PURE__*/\nfunction () {\n  function WebSockPlugin(url, store) {\n    Object(C_Users_sks89_OneDrive_Desktop_VueChain_node_modules_babel_runtime_helpers_builtin_es6_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, WebSockPlugin);\n\n    this._websocket = new WebSocket(url);\n    this._websocket.onopen = this.onopen();\n    this._websocket.onmessage = this.onmessage();\n    this._store = store;\n  }\n\n  Object(C_Users_sks89_OneDrive_Desktop_VueChain_node_modules_babel_runtime_helpers_builtin_es6_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(WebSockPlugin, [{\n    key: \"onopen\",\n    value: function onopen() {\n      return function () {//\n      };\n    }\n  }, {\n    key: \"onmessage\",\n    value: function onmessage() {\n      var _this = this;\n\n      return function (event) {\n        var data = JSON.parse(event.data);\n\n        switch (data.type) {\n          case \"GET_ALL_BLOCK\":\n            _this._store.commit(\"setBlockchain\", data.obj);\n\n            break;\n\n          case \"ADD_BLOCK\":\n            _this._store.commit(\"addBlock\", data.obj);\n\n            break;\n        }\n      };\n    }\n  }, {\n    key: \"subscribeAction\",\n    value: function subscribeAction() {\n      var _this2 = this;\n\n      return function (action, state) {\n        console.log(action.type); //console.log(action.payload);\n\n        switch (action.type) {\n          case \"RequestBlockchainSync\":\n            _this2._websocket.send(JSON.stringify({\n              type: \"GET_ALL_BLOCK\"\n            }));\n\n            break;\n\n          case \"RequestAddBlock\":\n            _this2._websocket.send(JSON.stringify({\n              type: \"ADD_BLOCK\",\n              obj: {\n                data: action.payload\n              }\n            }));\n\n            break;\n\n          case \"saveTodb\":\n        }\n      };\n    }\n  }]);\n\n  return WebSockPlugin;\n}();\n\nfunction createWebSocketPlugin(url) {\n  return function (store) {\n    var websocket = new WebSockPlugin(url, store);\n    store.subscribeAction(websocket.subscribeAction());\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcGx1Z2luL1dlYlNvY2tQbHVnaW4uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcGx1Z2luL1dlYlNvY2tQbHVnaW4uanM/ZTFhZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7IEFERF9CTE9DSyB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL3Byb3RvY29sXCI7XG5cblxuLy8gY2xhc3MgUmVxdWVzdEhhbmRsZXIge1xuLy8gICAgIGNvbnN0cnVjdG9yKCl7XG5cbi8vICAgICB9XG5cblxuXG4vLyB9XG5cbi8vIGNsYXNzIFJlc3BvbnNlSGFuZGxlciB7XG4vLyAgICAgY29uc3RydWN0b3IoKSB7XG5cbi8vICAgICB9XG4vLyB9XG5cblxuY2xhc3MgV2ViU29ja1BsdWdpbiB7XG5cbiAgICBjb25zdHJ1Y3Rvcih1cmwsc3RvcmUpIHtcbiAgICAgICAgdGhpcy5fd2Vic29ja2V0ID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuXG4gICAgICAgIHRoaXMuX3dlYnNvY2tldC5vbm9wZW4gPSB0aGlzLm9ub3BlbigpO1xuICAgICAgICB0aGlzLl93ZWJzb2NrZXQub25tZXNzYWdlID0gdGhpcy5vbm1lc3NhZ2UoKTtcblxuICAgICAgICB0aGlzLl9zdG9yZSA9IHN0b3JlO1xuICAgIH1cblxuICAgIG9ub3Blbigpe1xuICAgICAgICByZXR1cm4gKCk9PiB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9ubWVzc2FnZSgpIHtcbiAgICAgICAgcmV0dXJuIChldmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuXG4gICAgICAgICAgICBzd2l0Y2goZGF0YS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkdFVF9BTExfQkxPQ0tcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RvcmUuY29tbWl0KFwic2V0QmxvY2tjaGFpblwiLGRhdGEub2JqKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkFERF9CTE9DS1wiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdG9yZS5jb21taXQoXCJhZGRCbG9ja1wiLGRhdGEub2JqKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgc3Vic2NyaWJlQWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKGFjdGlvbiwgc3RhdGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi50eXBlKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpO1xuICAgICAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICAgICAgICAgICAgICBjYXNlIFwiUmVxdWVzdEJsb2NrY2hhaW5TeW5jXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHt0eXBlOlwiR0VUX0FMTF9CTE9DS1wifSkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiUmVxdWVzdEFkZEJsb2NrXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6XCJBRERfQkxPQ0tcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmo6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOmFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNhdmVUb2RiXCI6XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICBcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVdlYlNvY2tldFBsdWdpbiAodXJsKSB7XG5yZXR1cm4gc3RvcmUgPT4ge1xuICAgICAgICBjb25zdCB3ZWJzb2NrZXQgPSBuZXcgV2ViU29ja1BsdWdpbih1cmwsc3RvcmUpO1xuXG4gICAgICAgIHN0b3JlLnN1YnNjcmliZUFjdGlvbih3ZWJzb2NrZXQuc3Vic2NyaWJlQWN0aW9uKCkpO1xuICAgIH07XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFVQTtBQUNBOzs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQVpBO0FBZUE7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/plugin/WebSockPlugin.js\n");

/***/ })

})