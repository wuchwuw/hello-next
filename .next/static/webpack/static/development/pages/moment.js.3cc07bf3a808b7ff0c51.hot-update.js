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
    className: "jsx-1664733124"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1664733124"
  }, "Record Moment\uD83D\uDE1B"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1664733124"
  }, getMoment().map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: index,
      className: "jsx-1664733124" + " " + "moment-wrap"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1664733124" + " " + "title"
    }, item.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1664733124" + " " + "moment-info"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      icon: "icon-location",
      height: "20",
      width: "20"
    }), "\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-1664733124"
    }, item.location), "\xA0\xA0\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      icon: "icon-date",
      height: "20",
      width: "20"
    }), "\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-1664733124"
    }, item.time)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1664733124" + " " + "image-wrap"
    }, item.images.map(function (image, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: image,
        key: index,
        alt: "",
        className: "jsx-1664733124" + " " + "image-item"
      });
    })));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1664733124"
  }, ".title.jsx-1664733124{font-size:20px;}.moment-wrap.jsx-1664733124{width:600px;}.image-wrap.jsx-1664733124{margin-top:10px;margin-bottom:20px;}.image-item.jsx-1664733124{height:150px;width:150px;margin-right:5px;}.moment-info.jsx-1664733124{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:10px;color:#666666;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib2ZmeS9Eb2N1bWVudHMvY29kZS9oZWxsby1uZXh0L3BhZ2VzL21vbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRmtCLEFBRzBCLEFBR0gsQUFHSSxBQUlILEFBS0EsWUFYZixDQU9jLEVBVmQsQ0FNcUIsU0FLRixVQUpuQixPQUtBLGdDQUdxQiw2RkFDSCxnQkFDRixjQUNoQiIsImZpbGUiOiIvVXNlcnMvYm9mZnkvRG9jdW1lbnRzL2NvZGUvaGVsbG8tbmV4dC9wYWdlcy9tb21lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2ljb24nXG5cbmZ1bmN0aW9uIGdldE1vbWVudCAoKSB7XG4gIHJldHVybiBbXG4gICAgeyB0aXRsZTogJ3RvZGF5IHRvZGF5dG9kYXl0b2RheXRvZGF5dG9kYXl0b2RheXRvZGF5JywgXG4gICAgICBsb2NhdGlvbjogJ0d1YW5nWmhvdScsIFxuICAgICAgaW1hZ2VzOiBbXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJywgXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJywgXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJ1xuICAgICAgICBdLFxuICAgICAgdGltZTogJzIwMTEtMDEtMDInXG4gICAgfSxcbiAgICB7IHRpdGxlOiAndG9kYXkgdG9kYXl0b2RheXRvZGF5dG9kYXl0b2RheXRvZGF5dG9kYXknLCBcbiAgICAgIGxvY2F0aW9uOiAnR3VhbmdaaG91JywgXG4gICAgICBpbWFnZXM6IFtcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLCBcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLCBcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnXG4gICAgICAgIF0sXG4gICAgICB0aW1lOiAnMjAxMS0wMS0wMidcbiAgICB9LFxuICAgIHsgdGl0bGU6ICd0b2RheSB0b2RheXRvZGF5dG9kYXl0b2RheXRvZGF5dG9kYXl0b2RheScsIFxuICAgICAgbG9jYXRpb246ICdHdWFuZ1pob3UnLCBcbiAgICAgIGltYWdlczogW1xuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsIFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsIFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZydcbiAgICAgICAgXSxcbiAgICAgIHRpbWU6ICcyMDExLTAxLTAyJ1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+UmVjb3JkIE1vbWVudPCfmJs8L2gyPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZ2V0TW9tZW50KCkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibW9tZW50LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e2l0ZW0udGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb21lbnQtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cImljb24tbG9jYXRpb25cIiBoZWlnaHQ9XCIyMFwiIHdpZHRoPVwiMjBcIj48L0ljb24+XG4gICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLmxvY2F0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cImljb24tZGF0ZVwiIGhlaWdodD1cIjIwXCIgd2lkdGg9XCIyMFwiPjwvSWNvbj5cbiAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0udGltZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS13cmFwXCI+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZS1pdGVtXCIgc3JjPXtpbWFnZX0ga2V5PXtpbmRleH0gYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1vbWVudC13cmFwIHtcbiAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdlLXdyYXAge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2UtaXRlbSB7XG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1vbWVudC1pbmZvIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApXG59Il19 */\n/*@ sourceURL=/Users/boffy/Documents/code/hello-next/pages/moment.js */"));
}

/***/ })

})
//# sourceMappingURL=moment.js.3cc07bf3a808b7ff0c51.hot-update.js.map