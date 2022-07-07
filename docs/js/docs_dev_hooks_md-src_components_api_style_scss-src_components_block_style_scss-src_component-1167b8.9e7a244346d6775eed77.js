"use strict";
(self["webpackChunkotaku_site"] = self["webpackChunkotaku_site"] || []).push([["docs_dev_hooks_md-src_components_api_style_scss-src_components_block_style_scss-src_component-1167b8"],{

/***/ "./docs/dev/hooks.md":
/*!***************************!*\
  !*** ./docs/dev/hooks.md ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var site_component_block_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! site-component/block/block */ "./src/components/block/block.tsx");
/* harmony import */ var site_component_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! site-component/api/api */ "./src/components/api/api.tsx");
/* harmony import */ var otaku_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! otaku-ui */ "../otaku-ui/src/index.ts");
/* harmony import */ var site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! site-component/codeExample/codeExample */ "./src/components/codeExample/codeExample.tsx");
undefined;






function MdReact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "markdown-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    id: "usecalendar-%E8%8E%B7%E5%8F%96%E6%97%A5%E5%8E%86",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "header-anchor",
    href: "#usecalendar-%E8%8E%B7%E5%8F%96%E6%97%A5%E5%8E%86"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " useCalendar \u83B7\u53D6\u65E5\u5386"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
    className: "language-ts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.HighlightCode, {
    lang: "ts",
    code: "interface Data {\n  prev: string[] // \u4E0A\u4E2A\u6708\n  current: string[] // \u5F53\u524D\u6708\n  next: string[] // \u4E0B\u4E2A\u6708\n}\n\n/**\n * date: string | dayjs | date\n * firstWeek \u9ED8\u8BA4\u5468\u65E5\u4E3A\u4E00\u5468\u7684\u5F00\u59CB\n*/\nfunction useCalendar (date?: dayjs.ConfigType, firstWeek = '\u65E5' | '\u4E00'): Data\n\n"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    id: "usepagination-%E8%8E%B7%E5%8F%96%E5%88%86%E9%A1%B5",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "header-anchor",
    href: "#usepagination-%E8%8E%B7%E5%8F%96%E5%88%86%E9%A1%B5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " usePagination \u83B7\u53D6\u5206\u9875"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
    className: "language-ts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.HighlightCode, {
    lang: "ts",
    code: "interface usePaginationProps {\n  current?: number\n  total?: number\n  pageSize?: number\n  slicePage?: number // \u5206\u9875\u6807\u51C6 \u5FC5\u987B\u662F\u5947\u6570 \u9ED8\u8BA4\u4E3A5\n}\n\ninterface Data {\n  pagination: number[] // \u5206\u9875\u6570\u636E\u4E0D\u5305\u62EC\u5F00\u59CB\u548C\u7ED3\u675F\u9875\n  showPrevMore: boolean\n  showNextMore: boolean\n  maxPage: number\n}\n\nfunction usePagination (page: usePaginationProps): Data\n"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Anchor, {
    target: ".main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.AnchorItem, {
    href: "#usecalendar-\u83B7\u53D6\u65E5\u5386",
    title: "useCalendar \u83B7\u53D6\u65E5\u5386"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.AnchorItem, {
    href: "#usepagination-\u83B7\u53D6\u5206\u9875",
    title: "usePagination \u83B7\u53D6\u5206\u9875"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MdReact);

/***/ })

}]);
//# sourceMappingURL=docs_dev_hooks_md-src_components_api_style_scss-src_components_block_style_scss-src_component-1167b8.9e7a244346d6775eed77.js.map