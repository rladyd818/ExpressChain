webpackHotUpdate("app",{

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _plugin_WebSockPlugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugin/WebSockPlugin */ \"./src/store/plugin/WebSockPlugin.js\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar websocketPlugin = Object(_plugin_WebSockPlugin__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"ws://\" + location.hostname + \":3000\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Store({\n  state: {\n    name: \"\",\n    blockchain: [],\n    connectedPeer: [],\n    user: {}\n  },\n  mutations: {\n    setBlockchain: function setBlockchain(state, blockchain) {\n      state.blockchain = blockchain;\n    },\n    addBlock: function addBlock(state, block) {\n      state.blockchain.push(block);\n    },\n    setUser: function setUser(state, payload) {\n      state.user = payload;\n    },\n    ClearLogin: function ClearLogin(state) {\n      state.user = {};\n      console.log('로그아웃');\n      console.log(state.user);\n    }\n  },\n  actions: {\n    RequestBlockchainSync: function RequestBlockchainSync() {},\n    RequestAddBlock: function RequestAddBlock(state, data) {},\n    ResponseBlockchainSync: function ResponseBlockchainSync(_ref, blockchain) {\n      var commit = _ref.commit;\n      commit(\"setBlockchain\", blockchain);\n    },\n    ResponseAddBlock: function ResponseAddBlock() {},\n    saveTodb: function saveTodb() {}\n  },\n  getters: {\n    getBlockChain: function getBlockChain(state) {\n      return state.blockchain;\n    }\n  },\n  plugins: [websocketPlugin]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanM/NDM2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcbmltcG9ydCBjcmVhdGVXZWJTb2NrZXRQbHVnaW4gZnJvbSBcIi4vcGx1Z2luL1dlYlNvY2tQbHVnaW5cIjtcblxuVnVlLnVzZShWdWV4KVxuXG5cbmNvbnN0IHdlYnNvY2tldFBsdWdpbiA9IGNyZWF0ZVdlYlNvY2tldFBsdWdpbihcIndzOi8vXCIrbG9jYXRpb24uaG9zdG5hbWUrXCI6MzAwMFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuICBzdGF0ZToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgYmxvY2tjaGFpbjogW10sXG4gICAgY29ubmVjdGVkUGVlcjogW10sXG4gICAgdXNlcjoge30sXG4gIH0sXG4gIG11dGF0aW9uczoge1xuICAgIHNldEJsb2NrY2hhaW4oc3RhdGUsIGJsb2NrY2hhaW4pIHtcbiAgICAgICAgc3RhdGUuYmxvY2tjaGFpbiA9IGJsb2NrY2hhaW47XG4gICAgfSxcbiAgICBhZGRCbG9jayhzdGF0ZSwgYmxvY2spIHtcbiAgICAgICAgc3RhdGUuYmxvY2tjaGFpbi5wdXNoKGJsb2NrKTtcbiAgICB9LFxuICAgIHNldFVzZXIoc3RhdGUsIHBheWxvYWQpe1xuICAgICAgc3RhdGUudXNlciA9IHBheWxvYWQ7XG4gICAgfSxcbiAgICBDbGVhckxvZ2luKHN0YXRlKXtcbiAgICAgIHN0YXRlLnVzZXIgPSB7fTtcbiAgICAgIGNvbnNvbGUubG9nKCfroZzqt7jslYTsm4MnKTtcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnVzZXIpO1xuICAgIH1cbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIFJlcXVlc3RCbG9ja2NoYWluU3luYygpIHtcbiAgICB9LFxuICAgIFJlcXVlc3RBZGRCbG9jayhzdGF0ZSwgZGF0YSkge1xuICAgIH0sXG4gICAgUmVzcG9uc2VCbG9ja2NoYWluU3luYyh7Y29tbWl0fSwgYmxvY2tjaGFpbikge1xuICAgICAgICBjb21taXQoXCJzZXRCbG9ja2NoYWluXCIsIGJsb2NrY2hhaW4pO1xuICAgIH0sXG4gICAgUmVzcG9uc2VBZGRCbG9jaygpe1xuXG4gICAgfSxcbiAgICBzYXZlVG9kYigpIHtcbiAgICB9XG5cbiAgfSxcbiAgZ2V0dGVyczoge1xuICAgIGdldEJsb2NrQ2hhaW46IHN0YXRlID0+IHN0YXRlLmJsb2NrY2hhaW5cbiAgfSxcbiAgcGx1Z2luczpbd2Vic29ja2V0UGx1Z2luXVxufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBWEE7QUFlQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUF6Q0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/index.js\n");

/***/ })

})