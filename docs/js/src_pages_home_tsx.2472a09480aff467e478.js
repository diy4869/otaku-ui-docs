"use strict";
(self["webpackChunkotaku_site"] = self["webpackChunkotaku_site"] || []).push([["src_pages_home_tsx"],{

/***/ "./src/App.module.scss":
/*!*****************************!*\
  !*** ./src/App.module.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"otaku-home":"otaku-home--fa657","otaku-header":"otaku-header--a1bce","otaku-title":"otaku-title--dde6e","github-star":"github-star--f134a","content":"content--b2233","sidebar":"sidebar--c2409","otaku-menu":"otaku-menu--ead06","otaku-menu-item":"otaku-menu-item--c12ce","active":"active--a9cea"});

/***/ }),

/***/ "./src/components/GithubStart/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/GithubStart/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * GitHub start 数组件
 */ 
var GitHubStart = function() {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        var script = document.createElement('script');
        script.src = 'https://buttons.github.io/buttons.js';
        document.body.appendChild(script);
        return function() {
            document.body.removeChild(script);
        };
    }, []);
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        className: "github-button",
        href: "https://github.com/diy4869/otaku-ui",
        "data-icon": "octicon-star",
        "data-show-count": "true",
        "aria-label": "Star diy4869/otaku-ui on GitHub"
    }, "Star"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GitHubStart);


/***/ }),

/***/ "./src/pages/home.tsx":
/*!****************************!*\
  !*** ./src/pages/home.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/index.js");
/* harmony import */ var otaku_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! otaku-ui */ "../otaku-ui/src/index.ts");
/* harmony import */ var _components_GithubStart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GithubStart */ "./src/components/GithubStart/index.tsx");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App.module.scss */ "./src/App.module.scss");
/* harmony import */ var _router_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../router/index */ "./src/router/index.tsx");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}






function Home() {
    var ref1 = _slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}), 2), data = ref1[0], setData = ref1[1];
    var processRouter = _router_index__WEBPACK_IMPORTED_MODULE_4__["default"].filter(function(item) {
        return item.children;
    }).reduce(function(router, current) {
        var ref;
        var result = (ref = current.children) === null || ref === void 0 ? void 0 : ref.map(function(children) {
            return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
                path: children.path,
                key: children.path,
                index: children.path === '/dev/introduce',
                element: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {
                    fallback: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "...")
                }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(children.component, null))
            }));
        });
        return router.concat(result);
    }, []);
    console.log(processRouter);
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: _App_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["otaku-home"]
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
        className: _App_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["otaku-header"]
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: _App_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["otaku-title"]
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "OTAKU-UI")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_1__.Space, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
        to: "/playground"
    }, "Playground"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_GithubStart__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("aside", {
        className: _App_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].content
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("aside", {
        className: _App_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].sidebar
    }, _router_index__WEBPACK_IMPORTED_MODULE_4__["default"].map(function(item) {
        var ref;
        return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
            className: _App_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].title
        }, item.title), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: _App_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["otaku-menu"]
        }, (ref = item.children) === null || ref === void 0 ? void 0 : ref.map(function(children) {
            return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
                className: function(param) {
                    var isActive = param.isActive;
                    var className = [
                        _App_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["otaku-menu-item"]
                    ];
                    return isActive ? className.concat(_App_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].active).join(' ') : className.join(' ');
                },
                to: children.path
            }, children.title));
        }))));
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("aside", {
        className: "main"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, processRouter)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("aside", {
        className: "anchor-container"
    }))))));
};


/***/ })

}]);
//# sourceMappingURL=src_pages_home_tsx.2472a09480aff467e478.js.map