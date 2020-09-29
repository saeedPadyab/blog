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
  var _props$article, _props$article2, _props$article2$heroI, _props$article3, _props$article4, _props$article5, _props$article5$autho, _props$article6;

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
  }, props === null || props === void 0 ? void 0 : (_props$article4 = props.article) === null || _props$article4 === void 0 ? void 0 : _props$article4.title), __jsx("div", {
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
  }, "Written by ", props === null || props === void 0 ? void 0 : (_props$article5 = props.article) === null || _props$article5 === void 0 ? void 0 : (_props$article5$autho = _props$article5.author) === null || _props$article5$autho === void 0 ? void 0 : _props$article5$autho.name))), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "markdown",
    source: props === null || props === void 0 ? void 0 : (_props$article6 = props.article) === null || _props$article6 === void 0 ? void 0 : _props$article6.body,
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
  }, renderCards(props.suggestedArticles ? props.suggestedArticles : [])));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3QvW3NsdWddLnRzeCJdLCJuYW1lcyI6WyJyZW5kZXJDYXJkcyIsInN1Z2dlc3Rpb25zIiwibWFwIiwic3VnZ2VzdGlvbiIsImluZGV4IiwiUG9zdFBhZ2UiLCJwcm9wcyIsInBvc3RNZXRhVGFncyIsImNhbm9uaWNhbCIsInByb2Nlc3MiLCJlbnYiLCJET01BSU5fUFVCTElDIiwiZGVzY3JpcHRpb24iLCJhcnRpY2xlIiwiaW1hZ2UiLCJoZXJvSW1hZ2UiLCJ1cmwiLCJyb2JvdHMiLCJSb2JvdHNDb250ZW50IiwiZm9sbG93IiwidGl0bGUiLCJ0eXBlIiwiUGFnZVR5cGUiLCJhdXRob3IiLCJuYW1lIiwiYm9keSIsInN1Z2dlc3RlZEFydGljbGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7O0FBT0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsV0FBRDtBQUFBLFNBQ2xCQSxXQUFXLENBQUNDLEdBQVosQ0FBZ0IsVUFBQ0MsVUFBRCxFQUFrQkMsS0FBbEI7QUFBQSxXQUNkLE1BQUMsK0RBQUQ7QUFBTSxTQUFHLEVBQUVBLEtBQVg7QUFBa0IsVUFBSSxFQUFFRCxVQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGM7QUFBQSxHQUFoQixDQURrQjtBQUFBLENBQXBCOztBQUtBLElBQU1FLFFBQThCLEdBQUcsU0FBakNBLFFBQWlDLENBQUNDLEtBQUQsRUFBa0I7QUFBQTs7QUFDdkQsTUFBTUMsWUFBc0IsR0FBRztBQUM3QkMsYUFBUyxZQUFLQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsYUFBakIsQ0FEb0I7QUFFN0JDLGVBQVcsWUFBS04sS0FBTCxhQUFLQSxLQUFMLHlDQUFLQSxLQUFLLENBQUVPLE9BQVosbURBQUssZUFBZ0JELFdBQXJCLENBRmtCO0FBRzdCO0FBQ0FFLFNBQUssa0JBQVdSLEtBQVgsYUFBV0EsS0FBWCwwQ0FBV0EsS0FBSyxDQUFFTyxPQUFsQiw2RUFBVyxnQkFBZ0JFLFNBQTNCLDBEQUFXLHNCQUEyQkMsR0FBdEMsQ0FKd0I7QUFLN0JDLFVBQU0sWUFBS0MsbUVBQWEsQ0FBQ0MsTUFBbkIsY0FBNkJELG1FQUFhLENBQUNkLEtBQTNDLENBTHVCO0FBTTdCZ0IsU0FBSyxZQUFLZCxLQUFMLGFBQUtBLEtBQUwsMENBQUtBLEtBQUssQ0FBRU8sT0FBWixvREFBSyxnQkFBZ0JPLEtBQXJCLENBTndCO0FBTzdCQyxRQUFJLEVBQUVDLDhEQUFRLENBQUNUO0FBUGMsR0FBL0I7QUFVQSxTQUNFLE1BQUMsaUVBQUQ7QUFBUSxZQUFRLEVBQUVOLFlBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFnQyxNQUFFLEVBQUMsZ0JBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtELEtBQUwsYUFBS0EsS0FBTCwwQ0FBS0EsS0FBSyxDQUFFTyxPQUFaLG9EQUFLLGdCQUFnQk8sS0FBckIsQ0FERixFQUVFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWVkLEtBQWYsYUFBZUEsS0FBZiwwQ0FBZUEsS0FBSyxDQUFFTyxPQUF0Qiw2RUFBZSxnQkFBZ0JVLE1BQS9CLDBEQUFlLHNCQUF3QkMsSUFBdkMsQ0FERixDQUZGLENBREYsRUFPRSxNQUFDLHFEQUFEO0FBQWUsYUFBUyxFQUFDLFVBQXpCO0FBQW9DLFVBQU0sRUFBRWxCLEtBQUYsYUFBRUEsS0FBRiwwQ0FBRUEsS0FBSyxDQUFFTyxPQUFULG9EQUFFLGdCQUFnQlksSUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBREYsRUFVRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3pCLFdBQVcsQ0FBQ00sS0FBSyxDQUFDb0IsaUJBQU4sR0FBMEJwQixLQUFLLENBQUNvQixpQkFBaEMsR0FBb0QsRUFBckQsQ0FEZCxDQVZGLENBREY7QUFnQkQsQ0EzQkQsQyxDQTZCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztLQTVDTXJCLFE7O0FBbUZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS42OTc0MjdiMmRjODg5Y2RhZjhiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIkBTaGFyZWQvY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IENvbnRlbnRmdWxTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2NvcmUvY29udGVudGZ1bFwiO1xuXG5pbXBvcnQgeyBCbG9nUG9zdCB9IGZyb20gXCJASW50ZXJmYWNlcy9wb3N0XCI7XG5pbXBvcnQgeyBNZXRhVGFncywgUGFnZVR5cGUsIFJvYm90c0NvbnRlbnQgfSBmcm9tIFwiQEludGVyZmFjZXMvbWV0YS10YWdzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiQFNoYXJlZC9jb21wb25lbnRzL0NhcmRcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgYXJ0aWNsZTogQmxvZ1Bvc3Q7XG4gIHN1Z2dlc3RlZEFydGljbGVzOiBCbG9nUG9zdFtdO1xufTtcblxuY29uc3QgcmVuZGVyQ2FyZHMgPSAoc3VnZ2VzdGlvbnM6IGFueSkgPT5cbiAgc3VnZ2VzdGlvbnMubWFwKChzdWdnZXN0aW9uOiBhbnksIGluZGV4OiBhbnkpID0+IChcbiAgICA8Q2FyZCBrZXk9e2luZGV4fSBpbmZvPXtzdWdnZXN0aW9ufSAvPlxuICApKTtcblxuY29uc3QgUG9zdFBhZ2U6IE5leHRQYWdlPFByb3BzLCBhbnk+ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCBwb3N0TWV0YVRhZ3M6IE1ldGFUYWdzID0ge1xuICAgIGNhbm9uaWNhbDogYCR7cHJvY2Vzcy5lbnYuRE9NQUlOX1BVQkxJQ31gLFxuICAgIGRlc2NyaXB0aW9uOiBgJHtwcm9wcz8uYXJ0aWNsZT8uZGVzY3JpcHRpb259YCxcbiAgICAvLyBjb250ZW50ZnVsIGRvZXMgbm90IHNldCB0aGUgaHR0cCBvciBodHRwcyBiZWZvcmUgYW4gaW1hZ2UgbGluaywgc28gd2UgbmVlZCB0byBhZGQgaXQgb3Vyc2VsdmVzXG4gICAgaW1hZ2U6IGBodHRwczoke3Byb3BzPy5hcnRpY2xlPy5oZXJvSW1hZ2U/LnVybH1gLFxuICAgIHJvYm90czogYCR7Um9ib3RzQ29udGVudC5mb2xsb3d9LCR7Um9ib3RzQ29udGVudC5pbmRleH1gLFxuICAgIHRpdGxlOiBgJHtwcm9wcz8uYXJ0aWNsZT8udGl0bGV9YCxcbiAgICB0eXBlOiBQYWdlVHlwZS5hcnRpY2xlLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBtZXRhVGFncz17cG9zdE1ldGFUYWdzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1jb250YWluZXJcIiBpZD1cInBvc3QtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1oZWFkZXJcIj5cbiAgICAgICAgICA8aDE+e3Byb3BzPy5hcnRpY2xlPy50aXRsZX08L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yXCI+XG4gICAgICAgICAgICA8cD5Xcml0dGVuIGJ5IHtwcm9wcz8uYXJ0aWNsZT8uYXV0aG9yPy5uYW1lfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxSZWFjdE1hcmtkb3duIGNsYXNzTmFtZT1cIm1hcmtkb3duXCIgc291cmNlPXtwcm9wcz8uYXJ0aWNsZT8uYm9keX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWdnZXN0aW9uc1wiPlxuICAgICAgICB7cmVuZGVyQ2FyZHMocHJvcHMuc3VnZ2VzdGVkQXJ0aWNsZXMgPyBwcm9wcy5zdWdnZXN0ZWRBcnRpY2xlcyA6IFtdKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuLy8gUG9zdFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xuLy8gICBjb25zdCBjb250ZW50ZnVsU2VydmljZSA9IG5ldyBDb250ZW50ZnVsU2VydmljZSgpO1xuXG4vLyAgIGNvbnN0IHsgcG9zdCB9ID0gcXVlcnk7XG4vLyAgIGNvbnN0IGFydGljbGUgPSBhd2FpdCBjb250ZW50ZnVsU2VydmljZS5nZXRQb3N0QnlTbHVnKHBvc3QpO1xuXG4vLyAgIGNvbnN0IHRhZ3MgPVxuLy8gICAgIGFydGljbGUgJiYgYXJ0aWNsZS50YWdzID8gYXJ0aWNsZS50YWdzLm1hcCgodGFnOiBhbnkpID0+IHRhZy5zeXMuaWQpIDogW107XG5cbi8vICAgY29uc3Qgc3VnZ2VzdGVkQXJ0aWNsZXMgPSBhd2FpdCBjb250ZW50ZnVsU2VydmljZS5mZXRjaFN1Z2dlc3Rpb25zKFxuLy8gICAgIHRhZ3MsXG4vLyAgICAgYXJ0aWNsZT8uc2x1Z1xuLy8gICApO1xuXG4vLyAgIHJldHVybiB7IGFydGljbGUsIHN1Z2dlc3RlZEFydGljbGVzIH07XG4vLyB9O1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtcbiAgcGFyYW1zLFxuICBwcmV2aWV3ID0gZmFsc2UsXG59OiB7XG4gIHBhcmFtczogYW55O1xuICBwcmV2aWV3OiBib29sZWFuO1xufSkge1xuICBjb25zdCBjb250ZW50ZnVsU2VydmljZSA9IG5ldyBDb250ZW50ZnVsU2VydmljZSgpO1xuICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuICBjb25zdCBhcnRpY2xlID0gYXdhaXQgY29udGVudGZ1bFNlcnZpY2UuZ2V0UG9zdEJ5U2x1ZyhwYXJhbXMuc2x1Zyk7XG5cbiAgY29uc3QgdGFncyA9XG4gICAgYXJ0aWNsZSAmJiBhcnRpY2xlLnRhZ3MgPyBhcnRpY2xlLnRhZ3MubWFwKCh0YWc6IGFueSkgPT4gdGFnLnN5cy5pZCkgOiBbXTtcblxuICBjb25zdCBzdWdnZXN0ZWRBcnRpY2xlcyA9IGF3YWl0IGNvbnRlbnRmdWxTZXJ2aWNlLmZldGNoU3VnZ2VzdGlvbnMoXG4gICAgdGFncyxcbiAgICBhcnRpY2xlPy5zbHVnXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJldmlldyxcbiAgICAgIGFydGljbGUsXG4gICAgICBzdWdnZXN0ZWRBcnRpY2xlcyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGNvbnRlbnRmdWxTZXJ2aWNlID0gbmV3IENvbnRlbnRmdWxTZXJ2aWNlKCk7XG4gIGNvbnN0IGRhdGEgPSBjb250ZW50ZnVsU2VydmljZS5nZXRCbG9nUG9zdEVudHJpZXMoKTtcbiAgY29uc3QgYWxsUG9zdCA9IGRhdGEgJiYgZGF0YS5lbnRyaWVzID8gZGF0YS5lbnRyaWVzIDogW107XG4gIHJldHVybiB7XG4gICAgcGF0aHM6IGFsbFBvc3QubWFwKCh7IHNsdWcgfSkgPT4gYC9wb3N0cy8ke3NsdWd9YCksXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==