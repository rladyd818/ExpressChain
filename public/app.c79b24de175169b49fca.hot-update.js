webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_sks89_OneDrive_Desktop_VueChain_node_modules_babel_runtime_helpers_builtin_es6_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/builtin/es6/objectSpread */ \"./node_modules/@babel/runtime/helpers/builtin/es6/objectSpread.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      logout: ''\n    };\n  },\n  computed: Object(C_Users_sks89_OneDrive_Desktop_VueChain_node_modules_babel_runtime_helpers_builtin_es6_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__[\"mapState\"])({\n    nickname: function nickname(state) {\n      return state.user.nickname;\n    }\n  })),\n  methods: Object(C_Users_sks89_OneDrive_Desktop_VueChain_node_modules_babel_runtime_helpers_builtin_es6_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__[\"mapMutations\"])(['setUser']), Object(vuex__WEBPACK_IMPORTED_MODULE_4__[\"mapMutations\"])(['ClearLogin']), {\n    //clear in server user session\n    clearSession: function clearSession() {\n      var _this = this;\n\n      this.$http.post(\"/api/clearSession\").then(function (response) {\n        _this.setUser(response.data);\n\n        _this.$cookies.remove('user');\n      });\n    }\n  }),\n  //load to server user session \n  created: function created() {\n    var _this2 = this;\n\n    console.log(this.$cookies.get('user'));\n\n    if (this.$cookies.get('user') === null) {\n      this.$http.get(\"/api/checkUser\").then(function (response) {\n        _this2.setUser(response.data);\n      });\n    } else {\n      this.setUser(this.$cookies.get('user'));\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0FwcC52dWU/MjM0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJhcHBcIj5cbiAgICA8ZGl2IGNsYXNzPVwibmF2XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICA8aDE+Q2hhaW5TbW9rZTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhclwiPlxuICAgICAgICA8IS0tPHVsPlxuICAgICAgICAgIDxsaT48cm91dGVyLWxpbmsgdGFnPVwiYVwiIHRvPVwiL1wiPkhvbWU8L3JvdXRlci1saW5rPjwvbGk+XG4gICAgICAgICAgPGxpPjxyb3V0ZXItbGluayB0YWc9XCJhXCIgdG89XCIvYWJvdXRcIj5BYm91dDwvcm91dGVyLWxpbms+PC9saT5cbiAgICAgICAgPC91bD4gLS0+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+PHJvdXRlci1saW5rIHRhZz1cImFcIiB0bz1cIi9cIj5Ib21lPC9yb3V0ZXItbGluaz48L2xpPlxuICAgICAgICAgIDxsaT48cm91dGVyLWxpbmsgdGFnPVwiYVwiIHRvPVwiL2xvZ2luL3NpZ251cFwiPnt7IG5pY2tuYW1lID8gXCJcIiA6IFwiU2lnblVwXCIgfX08L3JvdXRlci1saW5rPjwvbGk+XG4gICAgICAgICAgPGxpPjxyb3V0ZXItbGluayB0YWc9XCJhXCIgdG89XCIvbG9naW5cIj57eyBuaWNrbmFtZSA/IG5pY2tuYW1lIDogXCJMb2cgaW5cIiB9fTwvcm91dGVyLWxpbms+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgPC9kaXY+XG4gICAgPHJvdXRlci12aWV3Lz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwQWN0aW9ucywgbWFwTXV0YXRpb25zIH0gZnJvbSBcInZ1ZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nb3V0OicnXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcFN0YXRlKHtcbiAgICAgIG5pY2tuYW1lOiBzdGF0ZSA9PiBzdGF0ZS51c2VyLm5pY2tuYW1lLFxuICAgIH0pXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBNdXRhdGlvbnMoWydzZXRVc2VyJ10pLFxuICAgIC4uLm1hcE11dGF0aW9ucyhbJ0NsZWFyTG9naW4nXSksXG4gICAgLy9jbGVhciBpbiBzZXJ2ZXIgdXNlciBzZXNzaW9uXG4gICAgY2xlYXJTZXNzaW9uOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuJGh0dHAucG9zdChcIi9hcGkvY2xlYXJTZXNzaW9uXCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5zZXRVc2VyKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB0aGlzLiRjb29raWVzLnJlbW92ZSgndXNlcicpO1xuICAgICAgfSlcbiAgICB9LFxuICB9LFxuICAvL2xvYWQgdG8gc2VydmVyIHVzZXIgc2Vzc2lvbiBcbiAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuJGNvb2tpZXMuZ2V0KCd1c2VyJykpO1xuICAgICAgaWYodGhpcy4kY29va2llcy5nZXQoJ3VzZXInKSA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLiRodHRwLmdldChcIi9hcGkvY2hlY2tVc2VyXCIpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFVzZXIocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRVc2VyKHRoaXMuJGNvb2tpZXMuZ2V0KCd1c2VyJykpO1xuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules\\\\.cache\\\\vue-loader\",\"cacheIdentifier\":\"3c8e0560-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"3c8e0560-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { attrs: { id: \"app\" } },\n    [\n      _c(\"div\", { staticClass: \"nav\" }, [\n        _vm._m(0),\n        _c(\"div\", { staticClass: \"navbar\" }, [\n          _c(\"ul\", [\n            _c(\n              \"li\",\n              [\n                _c(\"router-link\", { attrs: { tag: \"a\", to: \"/\" } }, [\n                  _vm._v(\"Home\")\n                ])\n              ],\n              1\n            ),\n            _c(\n              \"li\",\n              [\n                _c(\n                  \"router-link\",\n                  { attrs: { tag: \"a\", to: \"/login/signup\" } },\n                  [_vm._v(_vm._s(_vm.nickname ? \"\" : \"SignUp\"))]\n                )\n              ],\n              1\n            ),\n            _c(\n              \"li\",\n              [\n                _c(\"router-link\", { attrs: { tag: \"a\", to: \"/login\" } }, [\n                  _vm._v(_vm._s(_vm.nickname ? _vm.nickname : \"Log in\"))\n                ])\n              ],\n              1\n            )\n          ])\n        ])\n      ]),\n      _c(\"router-view\")\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"logo\" }, [\n      _c(\"h1\", [_vm._v(\"ChainSmoke\")])\n    ])\n  }\n]\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXNcXFxcLmNhY2hlXFxcXHZ1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiM2M4ZTA1NjAtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiYTViZDkwJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9BcHAudnVlPzhiZDYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgYXR0cnM6IHsgaWQ6IFwiYXBwXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2XCIgfSwgW1xuICAgICAgICBfdm0uX20oMCksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2YmFyXCIgfSwgW1xuICAgICAgICAgIF9jKFwidWxcIiwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0YWc6IFwiYVwiLCB0bzogXCIvXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJIb21lXCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdGFnOiBcImFcIiwgdG86IFwiL2xvZ2luL3NpZ251cFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5uaWNrbmFtZSA/IFwiXCIgOiBcIlNpZ25VcFwiKSldXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0YWc6IFwiYVwiLCB0bzogXCIvbG9naW5cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLm5pY2tuYW1lID8gX3ZtLm5pY2tuYW1lIDogXCJMb2cgaW5cIikpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF9jKFwicm91dGVyLXZpZXdcIilcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dvXCIgfSwgW1xuICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiQ2hhaW5TbW9rZVwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules\\\\.cache\\\\vue-loader\",\"cacheIdentifier\":\"3c8e0560-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&\n");

/***/ })

})