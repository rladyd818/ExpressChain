webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_sks89_OneDrive_Desktop_VueChain_node_modules_babel_runtime_helpers_builtin_es6_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/builtin/es6/objectSpread */ \"./node_modules/@babel/runtime/helpers/builtin/es6/objectSpread.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      logout: ''\n    };\n  },\n  computed: Object(C_Users_sks89_OneDrive_Desktop_VueChain_node_modules_babel_runtime_helpers_builtin_es6_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__[\"mapState\"])({\n    nickname: function nickname(state) {\n      return state.user.nickname;\n    }\n  })),\n  methods: Object(C_Users_sks89_OneDrive_Desktop_VueChain_node_modules_babel_runtime_helpers_builtin_es6_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__[\"mapMutations\"])(['setUser']), Object(vuex__WEBPACK_IMPORTED_MODULE_4__[\"mapMutations\"])(['ClearLogin']), {\n    //clear in server user session\n    clearSession: function clearSession() {\n      var _this = this;\n\n      this.$http.post(\"/api/clearSession\").then(function (response) {\n        _this.setUser(response.data);\n\n        _this.$cookies.remove('user');\n      });\n    }\n  }),\n  //load to server user session \n  created: function created() {\n    var _this2 = this;\n\n    console.log(this.$cookies.get('user'));\n\n    if (this.$cookies.get('user') === null) {\n      this.$http.get(\"/api/checkUser\").then(function (response) {\n        _this2.setUser(response.data);\n      });\n    } else {\n      this.setUser(this.$cookies.get('user'));\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0FwcC52dWU/MjM0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJhcHBcIj5cbiAgICA8ZGl2IGNsYXNzPVwibmF2XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICA8aDE+Q2hhaW5TbW9rZTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhclwiPlxuICAgICAgICA8IS0tPHVsPlxuICAgICAgICAgIDxsaT48cm91dGVyLWxpbmsgdGFnPVwiYVwiIHRvPVwiL1wiPkhvbWU8L3JvdXRlci1saW5rPjwvbGk+XG4gICAgICAgICAgPGxpPjxyb3V0ZXItbGluayB0YWc9XCJhXCIgdG89XCIvYWJvdXRcIj5BYm91dDwvcm91dGVyLWxpbms+PC9saT5cbiAgICAgICAgPC91bD4gLS0+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+PHJvdXRlci1saW5rIHRhZz1cImFcIiB0bz1cIi9cIj5Ib21lPC9yb3V0ZXItbGluaz48L2xpPlxuICAgICAgICAgIDxyb3V0ZXItbGluayB0YWc9XCJhXCIgdG89XCIvbG9naW4vc2lnbnVwXCI+PGxpIGNsYXNzPVwicmVnYnV0XCI+c2lnbiBVcDwvbGk+PC9yb3V0ZXItbGluaz5cbiAgICAgICAgICA8bGk+PHJvdXRlci1saW5rIHRhZz1cImFcIiB0bz1cIi9sb2dpblwiPnt7IG5pY2tuYW1lID8gbmlja25hbWU6XCJMb2cgaW5cIiB9fTwvcm91dGVyLWxpbms+PC9saT5cbiAgICAgICAgICA8bGk+PHJvdXRlci1saW5rIEBjbGljay5uYXRpdmU9XCJjbGVhclNlc3Npb25cIiB0bz1cIi9cIj57eyBuaWNrbmFtZSA/IFwiTG9nIG91dFwiIDogbG9nb3V0IH19PC9yb3V0ZXItbGluaz48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgICA8cm91dGVyLXZpZXcvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zLCBtYXBNdXRhdGlvbnMgfSBmcm9tIFwidnVleFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2dvdXQ6JydcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwU3RhdGUoe1xuICAgICAgbmlja25hbWU6IHN0YXRlID0+IHN0YXRlLnVzZXIubmlja25hbWUsXG4gICAgfSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcE11dGF0aW9ucyhbJ3NldFVzZXInXSksXG4gICAgLi4ubWFwTXV0YXRpb25zKFsnQ2xlYXJMb2dpbiddKSxcbiAgICAvL2NsZWFyIGluIHNlcnZlciB1c2VyIHNlc3Npb25cbiAgICBjbGVhclNlc3Npb246IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy4kaHR0cC5wb3N0KFwiL2FwaS9jbGVhclNlc3Npb25cIilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFVzZXIocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHRoaXMuJGNvb2tpZXMucmVtb3ZlKCd1c2VyJyk7XG4gICAgICB9KVxuICAgIH0sXG4gIH0sXG4gIC8vbG9hZCB0byBzZXJ2ZXIgdXNlciBzZXNzaW9uIFxuICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy4kY29va2llcy5nZXQoJ3VzZXInKSk7XG4gICAgICBpZih0aGlzLiRjb29raWVzLmdldCgndXNlcicpID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuJGh0dHAuZ2V0KFwiL2FwaS9jaGVja1VzZXJcIilcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0VXNlcihyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFVzZXIodGhpcy4kY29va2llcy5nZXQoJ3VzZXInKSk7XG4gICAgfVxuICB9XG59XG48L3NjcmlwdD4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\n");

/***/ })

})