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
    className: "jsx-3844436096"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3844436096"
  }, "Record Moment \uD83D\uDE1B"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3844436096"
  }, getMoment().map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: index,
      className: "jsx-3844436096" + " " + "moment-wrap"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3844436096" + " " + "title"
    }, item.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3844436096" + " " + "moment-info"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      icon: "icon-location",
      height: "20",
      width: "20"
    }), "\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3844436096"
    }, item.location), "\xA0\xA0\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      icon: "icon-date",
      height: "20",
      width: "20"
    }), "\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3844436096"
    }, item.time)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3844436096" + " " + "image-wrap"
    }, item.images.map(function (image, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: image,
        key: index,
        alt: "",
        className: "jsx-3844436096" + " " + "image-item"
      });
    })));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3844436096"
  }, ".title.jsx-3844436096{font-size:20px;}.moment-wrap.jsx-3844436096{width:800px;}.image-wrap.jsx-3844436096{margin-top:10px;margin-bottom:30px;}.image-item.jsx-3844436096{height:200px;width:200px;margin-right:5px;}.moment-info.jsx-3844436096{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:10px;color:#666666;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib2ZmeS9Eb2N1bWVudHMvY29kZS9oZWxsby1uZXh0L3BhZ2VzL21vbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRmtCLEFBRzBCLEFBR0gsQUFHSSxBQUlILEFBS0EsWUFYZixDQU9jLEVBVmQsQ0FNcUIsU0FLRixVQUpuQixPQUtBLGdDQUdxQiw2RkFDSCxnQkFDRixjQUNoQiIsImZpbGUiOiIvVXNlcnMvYm9mZnkvRG9jdW1lbnRzL2NvZGUvaGVsbG8tbmV4dC9wYWdlcy9tb21lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2ljb24nXG5cbmZ1bmN0aW9uIGdldE1vbWVudCAoKSB7XG4gIHJldHVybiBbXG4gICAgeyB0aXRsZTogJ3RvZGF5IHRvZGF5dG9kYXl0b2RheXRvZGF5dG9kYXl0b2RheXRvZGF5JywgXG4gICAgICBsb2NhdGlvbjogJ0d1YW5nWmhvdScsIFxuICAgICAgaW1hZ2VzOiBbXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJywgXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJywgXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJ1xuICAgICAgICBdLFxuICAgICAgdGltZTogJzIwMTEtMDEtMDInXG4gICAgfSxcbiAgICB7IHRpdGxlOiAndG9kYXkgdG9kYXl0b2RheXRvZGF5dG9kYXl0b2RheXRvZGF5dG9kYXknLCBcbiAgICAgIGxvY2F0aW9uOiAnR3VhbmdaaG91JywgXG4gICAgICBpbWFnZXM6IFtcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLCBcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLCBcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnXG4gICAgICAgIF0sXG4gICAgICB0aW1lOiAnMjAxMS0wMS0wMidcbiAgICB9LFxuICAgIHsgdGl0bGU6ICd0b2RheSB0b2RheXRvZGF5dG9kYXl0b2RheXRvZGF5dG9kYXl0b2RheScsIFxuICAgICAgbG9jYXRpb246ICdHdWFuZ1pob3UnLCBcbiAgICAgIGltYWdlczogW1xuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsIFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsIFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZycsXG4gICAgICAgICdodHRwczovL2NoZW5mZW5neXVhbi5jb20vcGhvdG9zL3RoZS1zbm93eS13ZXN0LWxha2UvdGh1bWJuYWlscy90aGUtc25vd3ktd2VzdC1sYWtlLTEuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2hlbmZlbmd5dWFuLmNvbS9waG90b3MvdGhlLXNub3d5LXdlc3QtbGFrZS90aHVtYm5haWxzL3RoZS1zbm93eS13ZXN0LWxha2UtMS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jaGVuZmVuZ3l1YW4uY29tL3Bob3Rvcy90aGUtc25vd3ktd2VzdC1sYWtlL3RodW1ibmFpbHMvdGhlLXNub3d5LXdlc3QtbGFrZS0xLmpwZydcbiAgICAgICAgXSxcbiAgICAgIHRpbWU6ICcyMDExLTAxLTAyJ1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+UmVjb3JkIE1vbWVudCDwn5ibPC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGdldE1vbWVudCgpLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm1vbWVudC13cmFwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPntpdGVtLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9tZW50LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgIDxJY29uIGljb249XCJpY29uLWxvY2F0aW9uXCIgaGVpZ2h0PVwiMjBcIiB3aWR0aD1cIjIwXCI+PC9JY29uPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5sb2NhdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxJY29uIGljb249XCJpY29uLWRhdGVcIiBoZWlnaHQ9XCIyMFwiIHdpZHRoPVwiMjBcIj48L0ljb24+XG4gICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLnRpbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utd3JhcFwiPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2UtaXRlbVwiIHNyYz17aW1hZ2V9IGtleT17aW5kZXh9IGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5tb21lbnQtd3JhcCB7XG4gICAgICAgICAgd2lkdGg6IDgwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbWFnZS13cmFwIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdlLWl0ZW0ge1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5tb21lbnQtaW5mbyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgY29sb3I6ICM2NjY2NjY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/boffy/Documents/code/hello-next/pages/moment.js */"));
}

/***/ })

})
//# sourceMappingURL=moment.js.7bf84e5a0ea9452dae94.hot-update.js.map