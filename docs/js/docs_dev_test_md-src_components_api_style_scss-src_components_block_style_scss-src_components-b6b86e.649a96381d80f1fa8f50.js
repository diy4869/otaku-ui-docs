"use strict";
(self["webpackChunkotaku_site"] = self["webpackChunkotaku_site"] || []).push([["docs_dev_test_md-src_components_api_style_scss-src_components_block_style_scss-src_components-b6b86e"],{

/***/ "./docs/dev/test.md":
/*!**************************!*\
  !*** ./docs/dev/test.md ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var otaku_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! otaku-ui */ "../otaku-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var site_component_block_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! site-component/block/block */ "./src/components/block/block.tsx");
/* harmony import */ var site_component_api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! site-component/api/api */ "./src/components/api/api.tsx");
/* harmony import */ var site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! site-component/codeExample/codeExample */ "./src/components/codeExample/codeExample.tsx");







function Demo0() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_0__.Space, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_0__.Button, null, "\u9ED8\u8BA4\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_0__.Button, {
    type: "primary"
  }, "\u4E3B\u8981\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_0__.Button, {
    type: "success"
  }, "\u6210\u529F\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_0__.Button, {
    type: "warning"
  }, "\u8B66\u544A\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_0__.Button, {
    type: "danger"
  }, "\u9519\u8BEF\u6309\u94AE"));
}

function MdReact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "markdown-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_4__.CodeExample, {
    desc: "\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0",
    lang: "tsx",
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("style", null, ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Demo0, null)),
    code: "import { Button, Space, Grid, GridItem } from 'otaku-ui'\ntype a = 1\n\nconst a: a = 2\n\nfunction Demo () {\n  return (\n      <Space>\n      <Button>\u9ED8\u8BA4\u6309\u94AE</Button>\n      <Button type=\"primary\">\u4E3B\u8981\u6309\u94AE</Button>\n      <Button type=\"success\">\u6210\u529F\u6309\u94AE</Button>\n      <Button type=\"warning\">\u8B66\u544A\u6309\u94AE</Button>\n      <Button type=\"danger\">\u9519\u8BEF\u6309\u94AE</Button>\n    </Space>\n  )\n}\n\nReactDOM.createRoot(container).render(<Demo/>)\n",
    style: {
      lang: "css",
      code: ""
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_0__.HighlightCode, {
    lang: "tsx",
    code: "type a = 1\n\nconst a: a = 2\n\nfunction Demo () {\n  return (\n      <Space>\n      <Button>\u9ED8\u8BA4\u6309\u94AE</Button>\n      <Button type=\"primary\">\u4E3B\u8981\u6309\u94AE</Button>\n      <Button type=\"success\">\u6210\u529F\u6309\u94AE</Button>\n      <Button type=\"warning\">\u8B66\u544A\u6309\u94AE</Button>\n      <Button type=\"danger\">\u9519\u8BEF\u6309\u94AE</Button>\n    </Space>\n  )\n}\n\nReactDOM.createRoot(container).render(<Demo/>)\n"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", {
    id: "api",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    className: "header-anchor",
    href: "#api"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " api"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(site_component_api_api__WEBPACK_IMPORTED_MODULE_3__.Api, {
    code: "export interface ButtonProps {\n  disabled?: boolean\n  loading?: boolean\n  ghost?: boolean\n  icon?: string\n  bgcolor?: string\n  color?: string\n  className?: string\n  href?: string\n  target?: '_blank' | '_self'\n  shape?: 'round' | 'circle'\n  type?: 'default' | 'text' | 'primary' | 'success' | 'warning' | 'danger' | 'link'\n  iconDirection?: 'left' | 'right'\n  size?: 'small' | 'middle' |'large'\n  style?: React.CSSProperties\n  children?: React.ReactNode\n  onClick?: React.MouseEventHandler<HTMLElement>\n}",
    data: "[{\"name\":\"Button\",\"data\":[{\"name\":\"disabled\",\"type\":\"boolean\",\"required\":false,\"typeReference\":null,\"jsDoc\":[]},{\"name\":\"loading\",\"type\":\"boolean\",\"required\":false,\"typeReference\":null,\"jsDoc\":[]},{\"name\":\"ghost\",\"type\":\"boolean\",\"required\":false,\"typeReference\":null,\"jsDoc\":[]},{\"name\":\"icon\",\"type\":\"string\",\"required\":false,\"typeReference\":null,\"jsDoc\":[]},{\"name\":\"bgcolor\",\"type\":\"string\",\"required\":false,\"typeReference\":null,\"jsDoc\":[]},{\"name\":\"color\",\"type\":\"string\",\"required\":false,\"typeReference\":null,\"jsDoc\":[]},{\"name\":\"className\",\"type\":\"string\",\"required\":false,\"typeReference\":null,\"jsDoc\":[]},{\"name\":\"href\",\"type\":\"string\",\"required\":false,\"defaultValue\":\"\",\"typeReference\":null,\"jsDoc\":[]},{\"name\":\"target\",\"type\":\"'_blank' | '_self'\",\"required\":false,\"defaultValue\":\"_blank\",\"typeReference\":null,\"jsDoc\":[]},{\"name\":\"shape\",\"type\":\"'round' | 'circle'\",\"required\":false,\"typeReference\":null,\"jsDoc\":[]},{\"name\":\"type\",\"type\":\"'default' | 'text' | 'primary' | 'success' | 'warning' | 'danger' | 'link'\",\"required\":false,\"defaultValue\":\"default\",\"typeReference\":null,\"jsDoc\":[]},{\"name\":\"iconDirection\",\"type\":\"'left' | 'right'\",\"required\":false,\"defaultValue\":\"left\",\"typeReference\":null,\"jsDoc\":[]},{\"name\":\"size\",\"type\":\"'small' | 'middle' |'large'\",\"required\":false,\"defaultValue\":\"middle\",\"typeReference\":null,\"jsDoc\":[]},{\"name\":\"style\",\"type\":\"React.CSSProperties\",\"required\":false,\"typeReference\":null,\"jsDoc\":[]},{\"name\":\"children\",\"type\":\"React.ReactNode\",\"required\":false,\"typeReference\":null,\"jsDoc\":[]},{\"name\":\"onClick\",\"type\":\"React.MouseEventHandler<HTMLElement>\",\"required\":false,\"typeReference\":null,\"jsDoc\":[]}]}]"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_0__.Anchor, {
    target: ".main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_0__.AnchorItem, {
    href: "#api",
    title: "api"
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MdReact);

/***/ })

}]);
//# sourceMappingURL=docs_dev_test_md-src_components_api_style_scss-src_components_block_style_scss-src_components-b6b86e.649a96381d80f1fa8f50.js.map