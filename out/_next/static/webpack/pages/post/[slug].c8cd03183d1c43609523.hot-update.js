webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./src/pages/post/[slug].tsx":
/*!***********************************!*\
  !*** ./src/pages/post/[slug].tsx ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Shared/components/Layout */ "./src/shared/components/Layout/index.tsx");
/* harmony import */ var _Interfaces_meta_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Interfaces/meta-tags */ "./src/interfaces/meta-tags.ts");
/* harmony import */ var _Shared_components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Shared/components/Card */ "./src/shared/components/Card/index.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Other\\Projects\\1-p\\blog\\src\\pages\\post\\[slug].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var renderCards = function renderCards(suggestions) {
  return suggestions.map(function (suggestion, index) {
    return __jsx(_Shared_components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      info: suggestion,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }
    });
  });
};

var PostPage = function PostPage(props) {
  var _props$article, _props$article2, _props$article2$heroI, _props$article3;

  var postMetaTags = {
    canonical: "".concat(process.env.DOMAIN_PUBLIC),
    description: "".concat(props === null || props === void 0 ? void 0 : (_props$article = props.article) === null || _props$article === void 0 ? void 0 : _props$article.description),
    // contentful does not set the http or https before an image link, so we need to add it ourselves
    image: "https:".concat(props === null || props === void 0 ? void 0 : (_props$article2 = props.article) === null || _props$article2 === void 0 ? void 0 : (_props$article2$heroI = _props$article2.heroImage) === null || _props$article2$heroI === void 0 ? void 0 : _props$article2$heroI.url),
    robots: "".concat(_Interfaces_meta_tags__WEBPACK_IMPORTED_MODULE_3__["RobotsContent"].follow, ",").concat(_Interfaces_meta_tags__WEBPACK_IMPORTED_MODULE_3__["RobotsContent"].index),
    title: "".concat(props === null || props === void 0 ? void 0 : (_props$article3 = props.article) === null || _props$article3 === void 0 ? void 0 : _props$article3.title),
    type: _Interfaces_meta_tags__WEBPACK_IMPORTED_MODULE_3__["PageType"].article
  };
  return __jsx(_Shared_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    metaTags: postMetaTags,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "post-container",
    id: "post-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "post-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, props.article.title), __jsx("div", {
    className: "author",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Written by ", props.article.author.name))), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "markdown",
    source: props.article.body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "suggestions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, renderCards(props.suggestedArticles)));
}; // PostPage.getInitialProps = async ({ query }) => {
//   const contentfulService = new ContentfulService();
//   const { post } = query;
//   const article = await contentfulService.getPostBySlug(post);
//   const tags =
//     article && article.tags ? article.tags.map((tag: any) => tag.sys.id) : [];
//   const suggestedArticles = await contentfulService.fetchSuggestions(
//     tags,
//     article?.slug
//   );
//   return { article, suggestedArticles };
// };


_c = PostPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (PostPage);

var _c;

$RefreshReg$(_c, "PostPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3QvW3NsdWddLnRzeCJdLCJuYW1lcyI6WyJyZW5kZXJDYXJkcyIsInN1Z2dlc3Rpb25zIiwibWFwIiwic3VnZ2VzdGlvbiIsImluZGV4IiwiUG9zdFBhZ2UiLCJwcm9wcyIsInBvc3RNZXRhVGFncyIsImNhbm9uaWNhbCIsInByb2Nlc3MiLCJlbnYiLCJET01BSU5fUFVCTElDIiwiZGVzY3JpcHRpb24iLCJhcnRpY2xlIiwiaW1hZ2UiLCJoZXJvSW1hZ2UiLCJ1cmwiLCJyb2JvdHMiLCJSb2JvdHNDb250ZW50IiwiZm9sbG93IiwidGl0bGUiLCJ0eXBlIiwiUGFnZVR5cGUiLCJhdXRob3IiLCJuYW1lIiwiYm9keSIsInN1Z2dlc3RlZEFydGljbGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7O0FBT0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsV0FBRDtBQUFBLFNBQ2xCQSxXQUFXLENBQUNDLEdBQVosQ0FBZ0IsVUFBQ0MsVUFBRCxFQUFrQkMsS0FBbEI7QUFBQSxXQUNkLE1BQUMsK0RBQUQ7QUFBTSxTQUFHLEVBQUVBLEtBQVg7QUFBa0IsVUFBSSxFQUFFRCxVQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGM7QUFBQSxHQUFoQixDQURrQjtBQUFBLENBQXBCOztBQUtBLElBQU1FLFFBQThCLEdBQUcsU0FBakNBLFFBQWlDLENBQUNDLEtBQUQsRUFBa0I7QUFBQTs7QUFDdkQsTUFBTUMsWUFBc0IsR0FBRztBQUM3QkMsYUFBUyxZQUFLQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsYUFBakIsQ0FEb0I7QUFFN0JDLGVBQVcsWUFBS04sS0FBTCxhQUFLQSxLQUFMLHlDQUFLQSxLQUFLLENBQUVPLE9BQVosbURBQUssZUFBZ0JELFdBQXJCLENBRmtCO0FBRzdCO0FBQ0FFLFNBQUssa0JBQVdSLEtBQVgsYUFBV0EsS0FBWCwwQ0FBV0EsS0FBSyxDQUFFTyxPQUFsQiw2RUFBVyxnQkFBZ0JFLFNBQTNCLDBEQUFXLHNCQUEyQkMsR0FBdEMsQ0FKd0I7QUFLN0JDLFVBQU0sWUFBS0MsbUVBQWEsQ0FBQ0MsTUFBbkIsY0FBNkJELG1FQUFhLENBQUNkLEtBQTNDLENBTHVCO0FBTTdCZ0IsU0FBSyxZQUFLZCxLQUFMLGFBQUtBLEtBQUwsMENBQUtBLEtBQUssQ0FBRU8sT0FBWixvREFBSyxnQkFBZ0JPLEtBQXJCLENBTndCO0FBTzdCQyxRQUFJLEVBQUVDLDhEQUFRLENBQUNUO0FBUGMsR0FBL0I7QUFVQSxTQUNFLE1BQUMsaUVBQUQ7QUFBUSxZQUFRLEVBQUVOLFlBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFnQyxNQUFFLEVBQUMsZ0JBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtELEtBQUssQ0FBQ08sT0FBTixDQUFjTyxLQUFuQixDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBZWQsS0FBSyxDQUFDTyxPQUFOLENBQWNVLE1BQWQsQ0FBcUJDLElBQXBDLENBREYsQ0FGRixDQURGLEVBT0UsTUFBQyxxREFBRDtBQUFlLGFBQVMsRUFBQyxVQUF6QjtBQUFvQyxVQUFNLEVBQUVsQixLQUFLLENBQUNPLE9BQU4sQ0FBY1ksSUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBREYsRUFVRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOEJ6QixXQUFXLENBQUNNLEtBQUssQ0FBQ29CLGlCQUFQLENBQXpDLENBVkYsQ0FERjtBQWNELENBekJELEMsQ0EyQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7S0ExQ01yQixROztBQWlGU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uYzhjZDAzMTgzZDFjNDM2MDk1MjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAU2hhcmVkL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBDb250ZW50ZnVsU2VydmljZSB9IGZyb20gXCIuLi8uLi9jb3JlL2NvbnRlbnRmdWxcIjtcblxuaW1wb3J0IHsgQmxvZ1Bvc3QgfSBmcm9tIFwiQEludGVyZmFjZXMvcG9zdFwiO1xuaW1wb3J0IHsgTWV0YVRhZ3MsIFBhZ2VUeXBlLCBSb2JvdHNDb250ZW50IH0gZnJvbSBcIkBJbnRlcmZhY2VzL21ldGEtdGFnc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIkBTaGFyZWQvY29tcG9uZW50cy9DYXJkXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFydGljbGU6IEJsb2dQb3N0O1xuICBzdWdnZXN0ZWRBcnRpY2xlczogQmxvZ1Bvc3RbXTtcbn07XG5cbmNvbnN0IHJlbmRlckNhcmRzID0gKHN1Z2dlc3Rpb25zOiBhbnkpID0+XG4gIHN1Z2dlc3Rpb25zLm1hcCgoc3VnZ2VzdGlvbjogYW55LCBpbmRleDogYW55KSA9PiAoXG4gICAgPENhcmQga2V5PXtpbmRleH0gaW5mbz17c3VnZ2VzdGlvbn0gLz5cbiAgKSk7XG5cbmNvbnN0IFBvc3RQYWdlOiBOZXh0UGFnZTxQcm9wcywgYW55PiA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgcG9zdE1ldGFUYWdzOiBNZXRhVGFncyA9IHtcbiAgICBjYW5vbmljYWw6IGAke3Byb2Nlc3MuZW52LkRPTUFJTl9QVUJMSUN9YCxcbiAgICBkZXNjcmlwdGlvbjogYCR7cHJvcHM/LmFydGljbGU/LmRlc2NyaXB0aW9ufWAsXG4gICAgLy8gY29udGVudGZ1bCBkb2VzIG5vdCBzZXQgdGhlIGh0dHAgb3IgaHR0cHMgYmVmb3JlIGFuIGltYWdlIGxpbmssIHNvIHdlIG5lZWQgdG8gYWRkIGl0IG91cnNlbHZlc1xuICAgIGltYWdlOiBgaHR0cHM6JHtwcm9wcz8uYXJ0aWNsZT8uaGVyb0ltYWdlPy51cmx9YCxcbiAgICByb2JvdHM6IGAke1JvYm90c0NvbnRlbnQuZm9sbG93fSwke1JvYm90c0NvbnRlbnQuaW5kZXh9YCxcbiAgICB0aXRsZTogYCR7cHJvcHM/LmFydGljbGU/LnRpdGxlfWAsXG4gICAgdHlwZTogUGFnZVR5cGUuYXJ0aWNsZSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgbWV0YVRhZ3M9e3Bvc3RNZXRhVGFnc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtY29udGFpbmVyXCIgaWQ9XCJwb3N0LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtaGVhZGVyXCI+XG4gICAgICAgICAgPGgxPntwcm9wcy5hcnRpY2xlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3JcIj5cbiAgICAgICAgICAgIDxwPldyaXR0ZW4gYnkge3Byb3BzLmFydGljbGUuYXV0aG9yLm5hbWV9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFJlYWN0TWFya2Rvd24gY2xhc3NOYW1lPVwibWFya2Rvd25cIiBzb3VyY2U9e3Byb3BzLmFydGljbGUuYm9keX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWdnZXN0aW9uc1wiPntyZW5kZXJDYXJkcyhwcm9wcy5zdWdnZXN0ZWRBcnRpY2xlcyl9PC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG4vLyBQb3N0UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4vLyAgIGNvbnN0IGNvbnRlbnRmdWxTZXJ2aWNlID0gbmV3IENvbnRlbnRmdWxTZXJ2aWNlKCk7XG5cbi8vICAgY29uc3QgeyBwb3N0IH0gPSBxdWVyeTtcbi8vICAgY29uc3QgYXJ0aWNsZSA9IGF3YWl0IGNvbnRlbnRmdWxTZXJ2aWNlLmdldFBvc3RCeVNsdWcocG9zdCk7XG5cbi8vICAgY29uc3QgdGFncyA9XG4vLyAgICAgYXJ0aWNsZSAmJiBhcnRpY2xlLnRhZ3MgPyBhcnRpY2xlLnRhZ3MubWFwKCh0YWc6IGFueSkgPT4gdGFnLnN5cy5pZCkgOiBbXTtcblxuLy8gICBjb25zdCBzdWdnZXN0ZWRBcnRpY2xlcyA9IGF3YWl0IGNvbnRlbnRmdWxTZXJ2aWNlLmZldGNoU3VnZ2VzdGlvbnMoXG4vLyAgICAgdGFncyxcbi8vICAgICBhcnRpY2xlPy5zbHVnXG4vLyAgICk7XG5cbi8vICAgcmV0dXJuIHsgYXJ0aWNsZSwgc3VnZ2VzdGVkQXJ0aWNsZXMgfTtcbi8vIH07XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe1xuICBwYXJhbXMsXG4gIHByZXZpZXcgPSBmYWxzZSxcbn06IHtcbiAgcGFyYW1zOiBhbnk7XG4gIHByZXZpZXc6IGJvb2xlYW47XG59KSB7XG4gIGNvbnN0IGNvbnRlbnRmdWxTZXJ2aWNlID0gbmV3IENvbnRlbnRmdWxTZXJ2aWNlKCk7XG4gIGNvbnNvbGUubG9nKHBhcmFtcylcbiAgY29uc3QgYXJ0aWNsZSA9IGF3YWl0IGNvbnRlbnRmdWxTZXJ2aWNlLmdldFBvc3RCeVNsdWcocGFyYW1zLnNsdWcpO1xuXG4gIGNvbnN0IHRhZ3MgPVxuICAgIGFydGljbGUgJiYgYXJ0aWNsZS50YWdzID8gYXJ0aWNsZS50YWdzLm1hcCgodGFnOiBhbnkpID0+IHRhZy5zeXMuaWQpIDogW107XG5cbiAgY29uc3Qgc3VnZ2VzdGVkQXJ0aWNsZXMgPSBhd2FpdCBjb250ZW50ZnVsU2VydmljZS5mZXRjaFN1Z2dlc3Rpb25zKFxuICAgIHRhZ3MsXG4gICAgYXJ0aWNsZT8uc2x1Z1xuICApO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByZXZpZXcsXG4gICAgICBhcnRpY2xlLFxuICAgICAgc3VnZ2VzdGVkQXJ0aWNsZXMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBjb250ZW50ZnVsU2VydmljZSA9IG5ldyBDb250ZW50ZnVsU2VydmljZSgpO1xuICBjb25zdCBkYXRhID0gY29udGVudGZ1bFNlcnZpY2UuZ2V0QmxvZ1Bvc3RFbnRyaWVzKCk7XG4gIGNvbnN0IGFsbFBvc3QgPSBkYXRhICYmIGRhdGEuZW50cmllcyA/IGRhdGEuZW50cmllcyA6IFtdO1xuICByZXR1cm4ge1xuICAgIHBhdGhzOiBhbGxQb3N0Lm1hcCgoeyBzbHVnIH0pID0+IGAvcG9zdHMvJHtzbHVnfWApLFxuICAgIGZhbGxiYWNrOiB0cnVlLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=