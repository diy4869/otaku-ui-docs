"use strict";
(self["webpackChunkotaku_site"] = self["webpackChunkotaku_site"] || []).push([["src_pages_playground_tsx"],{

/***/ "./src/pages/playground.scss":
/*!***********************************!*\
  !*** ./src/pages/playground.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/playground.tsx":
/*!**********************************!*\
  !*** ./src/pages/playground.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Playground)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _playground_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playground.scss */ "./src/pages/playground.scss");
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


function Playground(props) {
    var ref = _slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('console.log(1)\n\n'), 2), code = ref[0], setCode = ref[1];
    var ref1 = _slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('typescript'), 2), lang = ref1[0], setLang = ref1[1];
    var ref2 = _slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('loading'), 2), loading = ref2[0], setLoading = ref2[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        setCode(code);
        setLang(lang);
    }, [
        code,
        lang
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
        window.require.config({
            paths: {
                vs: 'https://typescript.azureedge.net/cdn/4.0.5/monaco/min/vs',
                // vs: 'https://unpkg.com/@typescript-deploys/monaco-editor@4.0.5/min/vs',
                sandbox: 'https://www.typescriptlang.org/js/sandbox'
            },
            // This is something you need for monaco to work
            ignoreDuplicateModules: [
                'vs/editor/editor.main'
            ]
        });
        window.require([
            'vs/editor/editor.main',
            'vs/language/typescript/tsWorker',
            'sandbox/index'
        ], function(main, _tsWorker, sandboxFactory) {
            var initialCode = "\ninterface ButtonProps {\n  type: 'primary' | 'success'\n}\n\nconst button: ButtonProps = {\n  type: 'danger'\n}\n";
            var isOK = main && window.ts && sandboxFactory;
            if (!isOK) {
                console.error('Could not get all the dependencies of sandbox set up!');
                console.error('main', !!main, 'ts', !!window.ts, 'sandbox', !!sandbox);
            } else {
                setLoading('');
            // twoslash(initialCode, 'tsx')
            }
            // Create a sandbox and embed it into the the div #monaco-editor-embed
            var sandboxConfig = {
                text: initialCode,
                compilerOptions: {
                    noEmitOnError: false
                },
                domID: 'playground'
            };
            var sandbox = sandboxFactory.createTypeScriptSandbox(sandboxConfig, main, window.ts);
            sandbox.editor.focus();
        });
    }, []);
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
        className: "site-playground"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, "OTAKU-UI Playground"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
        id: "playground"
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, "Example"))));
};


/***/ })

}]);
//# sourceMappingURL=src_pages_playground_tsx.0d8219b93a5e661157ac.js.map