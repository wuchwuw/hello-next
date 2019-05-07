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
    title: 'today todaytodaytodaytodaytodaytodaytoday',
    location: 'GuangZhou',
    images: ['https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg'],
    time: '2011-01-02'
  }, {
    title: 'today todaytodaytodaytodaytodaytodaytoday',
    location: 'GuangZhou',
    images: ['https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg'],
    time: '2011-01-02'
  }, {
    title: 'today todaytodaytodaytodaytodaytodaytoday',
    location: 'GuangZhou',
    images: ['https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg'],
    time: '2011-01-02'
  }];
}

function Blog() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2546380836"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-2546380836"
  }, "Record Moment\uD83D\uDE1B"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2546380836"
  }, getMoment().map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: index,
      className: "jsx-2546380836" + " " + "moment-wrap"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2546380836" + " " + "title"
    }, item.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2546380836" + " " + "moment-info"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      icon: "icon-location",
      height: "20",
      width: "20"
    }), "\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-2546380836"
    }, item.location), "\xA0\xA0\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      icon: "icon-date",
      height: "20",
      width: "20"
    }), "\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-2546380836"
    }, item.time)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2546380836" + " " + "image-wrap"
    }, item.images.map(function (image, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: image,
        key: index,
        alt: "",
        className: "jsx-2546380836" + " " + "image-item"
      });
    })));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2546380836"
  }, ".title.jsx-2546380836{font-size:20px;}.moment-wrap.jsx-2546380836{width:600px;}.image-wrap.jsx-2546380836{margin-top:10px;}.image-item.jsx-2546380836{height:150px;width:150px;margin-right:5px;}.moment-info.jsx-2546380836{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:10px;color:#666666;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib2ZmeS9Eb2N1bWVudHMvY29kZS9oZWxsby1uZXh0L3BhZ2VzL21vbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRmtCLEFBRzBCLEFBR0gsQUFHSSxBQUdILEFBS0EsWUFWZixDQU1jLEVBVGQsQ0FNQSxTQUltQixpQkFDbkIsZ0NBR3FCLDZGQUNILGdCQUNGLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9ib2ZmeS9Eb2N1bWVudHMvY29kZS9oZWxsby1uZXh0L3BhZ2VzL21vbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbidcblxuZnVuY3Rpb24gZ2V0TW9tZW50ICgpIHtcbiAgcmV0dXJuIFtcbiAgICB7IHRpdGxlOiAndG9kYXkgdG9kYXl0b2RheXRvZGF5dG9kYXl0b2RheXRvZGF5dG9kYXknLCBcbiAgICAgIGxvY2F0aW9uOiAnR3VhbmdaaG91JywgXG4gICAgICBpbWFnZXM6IFtcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLCBcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLCBcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnXG4gICAgICAgIF0sXG4gICAgICB0aW1lOiAnMjAxMS0wMS0wMidcbiAgICB9LFxuICAgIHsgdGl0bGU6ICd0b2RheSB0b2RheXRvZGF5dG9kYXl0b2RheXRvZGF5dG9kYXl0b2RheScsIFxuICAgICAgbG9jYXRpb246ICdHdWFuZ1pob3UnLCBcbiAgICAgIGltYWdlczogW1xuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsIFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsIFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZydcbiAgICAgICAgXSxcbiAgICAgIHRpbWU6ICcyMDExLTAxLTAyJ1xuICAgIH0sXG4gICAgeyB0aXRsZTogJ3RvZGF5IHRvZGF5dG9kYXl0b2RheXRvZGF5dG9kYXl0b2RheXRvZGF5JywgXG4gICAgICBsb2NhdGlvbjogJ0d1YW5nWmhvdScsIFxuICAgICAgaW1hZ2VzOiBbXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJywgXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJywgXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJ1xuICAgICAgICBdLFxuICAgICAgdGltZTogJzIwMTEtMDEtMDInXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5SZWNvcmQgTW9tZW508J+YmzwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBnZXRNb21lbnQoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJtb21lbnQtd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57aXRlbS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vbWVudC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwiaWNvbi1sb2NhdGlvblwiIGhlaWdodD1cIjIwXCIgd2lkdGg9XCIyMFwiPjwvSWNvbj5cbiAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ubG9jYXRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwiaWNvbi1kYXRlXCIgaGVpZ2h0PVwiMjBcIiB3aWR0aD1cIjIwXCI+PC9JY29uPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS50aW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlLWl0ZW1cIiBzcmM9e2ltYWdlfSBrZXk9e2luZGV4fSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAubW9tZW50LXdyYXAge1xuICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2Utd3JhcCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2UtaXRlbSB7XG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1vbWVudC1pbmZvIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApXG59Il19 */\n/*@ sourceURL=/Users/boffy/Documents/code/hello-next/pages/moment.js */"));
}

/***/ })

})
//# sourceMappingURL=moment.js.342227cf08e80fae9e22.hot-update.js.map