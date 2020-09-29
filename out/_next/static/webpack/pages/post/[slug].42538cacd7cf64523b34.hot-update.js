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
  var postMetaTags = {
    canonical: "".concat(process.env.DOMAIN_PUBLIC),
    description: "".concat(props === null || props === void 0 ? void 0 : props.article.description),
    // contentful does not set the http or https before an image link, so we need to add it ourselves
    image: "https:".concat(props === null || props === void 0 ? void 0 : props.article.heroImage.url),
    robots: "".concat(_Interfaces_meta_tags__WEBPACK_IMPORTED_MODULE_3__["RobotsContent"].follow, ",").concat(_Interfaces_meta_tags__WEBPACK_IMPORTED_MODULE_3__["RobotsContent"].index),
    title: "".concat(props === null || props === void 0 ? void 0 : props.article.title),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3QvW3NsdWddLnRzeCJdLCJuYW1lcyI6WyJyZW5kZXJDYXJkcyIsInN1Z2dlc3Rpb25zIiwibWFwIiwic3VnZ2VzdGlvbiIsImluZGV4IiwiUG9zdFBhZ2UiLCJwcm9wcyIsInBvc3RNZXRhVGFncyIsImNhbm9uaWNhbCIsInByb2Nlc3MiLCJlbnYiLCJET01BSU5fUFVCTElDIiwiZGVzY3JpcHRpb24iLCJhcnRpY2xlIiwiaW1hZ2UiLCJoZXJvSW1hZ2UiLCJ1cmwiLCJyb2JvdHMiLCJSb2JvdHNDb250ZW50IiwiZm9sbG93IiwidGl0bGUiLCJ0eXBlIiwiUGFnZVR5cGUiLCJhdXRob3IiLCJuYW1lIiwiYm9keSIsInN1Z2dlc3RlZEFydGljbGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7O0FBT0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsV0FBRDtBQUFBLFNBQ2xCQSxXQUFXLENBQUNDLEdBQVosQ0FBZ0IsVUFBQ0MsVUFBRCxFQUFrQkMsS0FBbEI7QUFBQSxXQUNkLE1BQUMsK0RBQUQ7QUFBTSxTQUFHLEVBQUVBLEtBQVg7QUFBa0IsVUFBSSxFQUFFRCxVQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGM7QUFBQSxHQUFoQixDQURrQjtBQUFBLENBQXBCOztBQUtBLElBQU1FLFFBQThCLEdBQUcsU0FBakNBLFFBQWlDLENBQUNDLEtBQUQsRUFBa0I7QUFDdkQsTUFBTUMsWUFBc0IsR0FBRztBQUM3QkMsYUFBUyxZQUFLQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsYUFBakIsQ0FEb0I7QUFFN0JDLGVBQVcsWUFBS04sS0FBTCxhQUFLQSxLQUFMLHVCQUFLQSxLQUFLLENBQUVPLE9BQVAsQ0FBZUQsV0FBcEIsQ0FGa0I7QUFHN0I7QUFDQUUsU0FBSyxrQkFBV1IsS0FBWCxhQUFXQSxLQUFYLHVCQUFXQSxLQUFLLENBQUVPLE9BQVAsQ0FBZUUsU0FBZixDQUF5QkMsR0FBcEMsQ0FKd0I7QUFLN0JDLFVBQU0sWUFBS0MsbUVBQWEsQ0FBQ0MsTUFBbkIsY0FBNkJELG1FQUFhLENBQUNkLEtBQTNDLENBTHVCO0FBTTdCZ0IsU0FBSyxZQUFLZCxLQUFMLGFBQUtBLEtBQUwsdUJBQUtBLEtBQUssQ0FBRU8sT0FBUCxDQUFlTyxLQUFwQixDQU53QjtBQU83QkMsUUFBSSxFQUFFQyw4REFBUSxDQUFDVDtBQVBjLEdBQS9CO0FBVUEsU0FDRSxNQUFDLGlFQUFEO0FBQVEsWUFBUSxFQUFFTixZQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBZ0MsTUFBRSxFQUFDLGdCQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLRCxLQUFLLENBQUNPLE9BQU4sQ0FBY08sS0FBbkIsQ0FERixFQUVFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWVkLEtBQUssQ0FBQ08sT0FBTixDQUFjVSxNQUFkLENBQXFCQyxJQUFwQyxDQURGLENBRkYsQ0FERixFQU9FLE1BQUMscURBQUQ7QUFBZSxhQUFTLEVBQUMsVUFBekI7QUFBb0MsVUFBTSxFQUFFbEIsS0FBSyxDQUFDTyxPQUFOLENBQWNZLElBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURGLEVBVUU7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThCekIsV0FBVyxDQUFDTSxLQUFLLENBQUNvQixpQkFBUCxDQUF6QyxDQVZGLENBREY7QUFjRCxDQXpCRCxDLENBMkJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0tBMUNNckIsUTs7QUFpRlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW3NsdWddLjQyNTM4Y2FjZDdjZjY0NTIzYjM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiQFNoYXJlZC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgQ29udGVudGZ1bFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vY29yZS9jb250ZW50ZnVsXCI7XG5cbmltcG9ydCB7IEJsb2dQb3N0IH0gZnJvbSBcIkBJbnRlcmZhY2VzL3Bvc3RcIjtcbmltcG9ydCB7IE1ldGFUYWdzLCBQYWdlVHlwZSwgUm9ib3RzQ29udGVudCB9IGZyb20gXCJASW50ZXJmYWNlcy9tZXRhLXRhZ3NcIjtcbmltcG9ydCBDYXJkIGZyb20gXCJAU2hhcmVkL2NvbXBvbmVudHMvQ2FyZFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBhcnRpY2xlOiBCbG9nUG9zdDtcbiAgc3VnZ2VzdGVkQXJ0aWNsZXM6IEJsb2dQb3N0W107XG59O1xuXG5jb25zdCByZW5kZXJDYXJkcyA9IChzdWdnZXN0aW9uczogYW55KSA9PlxuICBzdWdnZXN0aW9ucy5tYXAoKHN1Z2dlc3Rpb246IGFueSwgaW5kZXg6IGFueSkgPT4gKFxuICAgIDxDYXJkIGtleT17aW5kZXh9IGluZm89e3N1Z2dlc3Rpb259IC8+XG4gICkpO1xuXG5jb25zdCBQb3N0UGFnZTogTmV4dFBhZ2U8UHJvcHMsIGFueT4gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHBvc3RNZXRhVGFnczogTWV0YVRhZ3MgPSB7XG4gICAgY2Fub25pY2FsOiBgJHtwcm9jZXNzLmVudi5ET01BSU5fUFVCTElDfWAsXG4gICAgZGVzY3JpcHRpb246IGAke3Byb3BzPy5hcnRpY2xlLmRlc2NyaXB0aW9ufWAsXG4gICAgLy8gY29udGVudGZ1bCBkb2VzIG5vdCBzZXQgdGhlIGh0dHAgb3IgaHR0cHMgYmVmb3JlIGFuIGltYWdlIGxpbmssIHNvIHdlIG5lZWQgdG8gYWRkIGl0IG91cnNlbHZlc1xuICAgIGltYWdlOiBgaHR0cHM6JHtwcm9wcz8uYXJ0aWNsZS5oZXJvSW1hZ2UudXJsfWAsXG4gICAgcm9ib3RzOiBgJHtSb2JvdHNDb250ZW50LmZvbGxvd30sJHtSb2JvdHNDb250ZW50LmluZGV4fWAsXG4gICAgdGl0bGU6IGAke3Byb3BzPy5hcnRpY2xlLnRpdGxlfWAsXG4gICAgdHlwZTogUGFnZVR5cGUuYXJ0aWNsZSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgbWV0YVRhZ3M9e3Bvc3RNZXRhVGFnc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtY29udGFpbmVyXCIgaWQ9XCJwb3N0LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtaGVhZGVyXCI+XG4gICAgICAgICAgPGgxPntwcm9wcy5hcnRpY2xlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3JcIj5cbiAgICAgICAgICAgIDxwPldyaXR0ZW4gYnkge3Byb3BzLmFydGljbGUuYXV0aG9yLm5hbWV9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFJlYWN0TWFya2Rvd24gY2xhc3NOYW1lPVwibWFya2Rvd25cIiBzb3VyY2U9e3Byb3BzLmFydGljbGUuYm9keX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWdnZXN0aW9uc1wiPntyZW5kZXJDYXJkcyhwcm9wcy5zdWdnZXN0ZWRBcnRpY2xlcyl9PC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG4vLyBQb3N0UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4vLyAgIGNvbnN0IGNvbnRlbnRmdWxTZXJ2aWNlID0gbmV3IENvbnRlbnRmdWxTZXJ2aWNlKCk7XG5cbi8vICAgY29uc3QgeyBwb3N0IH0gPSBxdWVyeTtcbi8vICAgY29uc3QgYXJ0aWNsZSA9IGF3YWl0IGNvbnRlbnRmdWxTZXJ2aWNlLmdldFBvc3RCeVNsdWcocG9zdCk7XG5cbi8vICAgY29uc3QgdGFncyA9XG4vLyAgICAgYXJ0aWNsZSAmJiBhcnRpY2xlLnRhZ3MgPyBhcnRpY2xlLnRhZ3MubWFwKCh0YWc6IGFueSkgPT4gdGFnLnN5cy5pZCkgOiBbXTtcblxuLy8gICBjb25zdCBzdWdnZXN0ZWRBcnRpY2xlcyA9IGF3YWl0IGNvbnRlbnRmdWxTZXJ2aWNlLmZldGNoU3VnZ2VzdGlvbnMoXG4vLyAgICAgdGFncyxcbi8vICAgICBhcnRpY2xlPy5zbHVnXG4vLyAgICk7XG5cbi8vICAgcmV0dXJuIHsgYXJ0aWNsZSwgc3VnZ2VzdGVkQXJ0aWNsZXMgfTtcbi8vIH07XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe1xuICBwYXJhbXMsXG4gIHByZXZpZXcgPSBmYWxzZSxcbn06IHtcbiAgcGFyYW1zOiBhbnk7XG4gIHByZXZpZXc6IGJvb2xlYW47XG59KSB7XG4gIGNvbnN0IGNvbnRlbnRmdWxTZXJ2aWNlID0gbmV3IENvbnRlbnRmdWxTZXJ2aWNlKCk7XG4gIGNvbnNvbGUubG9nKHBhcmFtcylcbiAgY29uc3QgYXJ0aWNsZSA9IGF3YWl0IGNvbnRlbnRmdWxTZXJ2aWNlLmdldFBvc3RCeVNsdWcocGFyYW1zLnNsdWcpO1xuXG4gIGNvbnN0IHRhZ3MgPVxuICAgIGFydGljbGUgJiYgYXJ0aWNsZS50YWdzID8gYXJ0aWNsZS50YWdzLm1hcCgodGFnOiBhbnkpID0+IHRhZy5zeXMuaWQpIDogW107XG5cbiAgY29uc3Qgc3VnZ2VzdGVkQXJ0aWNsZXMgPSBhd2FpdCBjb250ZW50ZnVsU2VydmljZS5mZXRjaFN1Z2dlc3Rpb25zKFxuICAgIHRhZ3MsXG4gICAgYXJ0aWNsZT8uc2x1Z1xuICApO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByZXZpZXcsXG4gICAgICBhcnRpY2xlLFxuICAgICAgc3VnZ2VzdGVkQXJ0aWNsZXMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBjb250ZW50ZnVsU2VydmljZSA9IG5ldyBDb250ZW50ZnVsU2VydmljZSgpO1xuICBjb25zdCBkYXRhID0gY29udGVudGZ1bFNlcnZpY2UuZ2V0QmxvZ1Bvc3RFbnRyaWVzKCk7XG4gIGNvbnN0IGFsbFBvc3QgPSBkYXRhICYmIGRhdGEuZW50cmllcyA/IGRhdGEuZW50cmllcyA6IFtdO1xuICByZXR1cm4ge1xuICAgIHBhdGhzOiBhbGxQb3N0Lm1hcCgoeyBzbHVnIH0pID0+IGAvcG9zdHMvJHtzbHVnfWApLFxuICAgIGZhbGxiYWNrOiB0cnVlLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=