webpackHotUpdate("static/development/pages/moment.js",{

/***/ "./pages/moment.js":
/*!*************************!*\
  !*** ./pages/moment.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/icon */ "./components/icon.js");





function getMoment() {
  return [{
    title: 'today',
    location: 'GuangZhou',
    images: ['https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg'],
    time: '2011-01-02'
  }];
}

function Blog() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1695091275"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1695091275"
  }, "Record Moment\uD83D\uDE1B"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1695091275"
  }, getMoment().map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: index,
      className: "jsx-1695091275" + " " + "moment-wrap"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1695091275" + " " + "title"
    }, item.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1695091275" + " " + "moment-info"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      icon: "icon-location",
      height: "20",
      width: "20"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-1695091275"
    }, item.location), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      icon: "icon-date",
      height: "20",
      width: "20"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-1695091275"
    }, item.time)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1695091275" + " " + "image-wrap"
    }, item.images.map(function (image, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: image,
        key: index,
        alt: "",
        className: "jsx-1695091275" + " " + "image-item"
      });
    })));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1695091275"
  }, ".title.jsx-1695091275{font-size:18px;}.moment-wrap.jsx-1695091275{width:600px;}.image-wrap.jsx-1695091275{margin-top:10px;}.image-item.jsx-1695091275{height:150px;width:150px;margin-right:5px;}.moment-info.jsx-1695091275{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib2ZmeS9Eb2N1bWVudHMvY29kZS9oZWxsby1uZXh0L3BhZ2VzL21vbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRGtCLEFBRzBCLEFBR0gsQUFHSSxBQUdILEFBS0EsWUFWZixDQU1jLEVBVGQsQ0FNQSxTQUltQixpQkFDbkIsZ0NBR3FCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvYm9mZnkvRG9jdW1lbnRzL2NvZGUvaGVsbG8tbmV4dC9wYWdlcy9tb21lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2ljb24nXG5cbmZ1bmN0aW9uIGdldE1vbWVudCAoKSB7XG4gIHJldHVybiBbXG4gICAgeyB0aXRsZTogJ3RvZGF5JywgXG4gICAgICBsb2NhdGlvbjogJ0d1YW5nWmhvdScsIFxuICAgICAgaW1hZ2VzOiBbXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJywgXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJywgXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJ1xuICAgICAgICBdLFxuICAgICAgdGltZTogJzIwMTEtMDEtMDInXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5SZWNvcmQgTW9tZW508J+YmzwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBnZXRNb21lbnQoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJtb21lbnQtd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57aXRlbS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vbWVudC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwiaWNvbi1sb2NhdGlvblwiIGhlaWdodD1cIjIwXCIgd2lkdGg9XCIyMFwiPjwvSWNvbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLmxvY2F0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxJY29uIGljb249XCJpY29uLWRhdGVcIiBoZWlnaHQ9XCIyMFwiIHdpZHRoPVwiMjBcIj48L0ljb24+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS50aW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlLWl0ZW1cIiBzcmM9e2ltYWdlfSBrZXk9e2luZGV4fSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgICAubW9tZW50LXdyYXAge1xuICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2Utd3JhcCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2UtaXRlbSB7XG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1vbWVudC1pbmZvIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/boffy/Documents/code/hello-next/pages/moment.js */"));
}

/***/ })

})
//# sourceMappingURL=moment.js.9c4eb4660f1519d35a9e.hot-update.js.map