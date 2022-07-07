"use strict";
(self["webpackChunkotaku_site"] = self["webpackChunkotaku_site"] || []).push([["otaku-ui_src_lib_tooltip_demo_README_md-src_components_api_style_scss-src_components_block_st-975d33"],{

/***/ "../otaku-ui/src/lib/tooltip/demo/README.md":
/*!**************************************************!*\
  !*** ../otaku-ui/src/lib/tooltip/demo/README.md ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var otaku_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! otaku-ui */ "../otaku-ui/src/index.ts");
/* harmony import */ var site_component_block_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! site-component/block/block */ "./src/components/block/block.tsx");
/* harmony import */ var site_component_api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! site-component/api/api */ "./src/components/api/api.tsx");
/* harmony import */ var site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! site-component/codeExample/codeExample */ "./src/components/codeExample/codeExample.tsx");








function Demo0() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Space, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_1__.Button, null, "\u9ED8\u8BA4\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
    type: "primary"
  }, "\u4E3B\u8981\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
    type: "success"
  }, "\u6210\u529F\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
    type: "warning"
  }, "\u8B66\u544A\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
    type: "danger"
  }, "\u9519\u8BEF\u6309\u94AE"));
}

function Demo1() {
  const arr = [['top-start', 'top', 'top-end'], ['left-start', '', 'right-start'], ['left', '', 'right'], ['left-end', '', 'right-end'], ['bottom-start', 'bottom', 'bottom-end']];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "demo-tooltip"
  }, arr.map((row, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      index: index,
      className: "row"
    }, row.map((column, columnIndex) => {
      if (index > 0 && index < 4 && ![0, 2].includes(columnIndex)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null);
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
          placement: column,
          content: column
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_1__.Button, null, column));
      }
    }));
  }));
}

function MdReact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "markdown-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    id: "tooltip",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "header-anchor",
    href: "#tooltip"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " Tooltip"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_4__.CodeExample, {
    desc: `多个方向的 Tooltip`,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("style", null, `:root {
  --gap: 8px;
}
.demo-tooltip {
  display: grid;
  grid-gap: var(--gap);
  grid-template-rows: repeat(5, auto);
}
.demo-tooltip .row {
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: repeat(3,150px);
}

.demo-tooltip .otaku-button {
  width: 150px;
}
`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Demo1, null)),
    code: `import { useRef } from 'react'
import { Tooltip, Button } from 'otaku-ui'
function Demo () {
  const arr = [
    ['top-start', 'top', 'top-end'],
    ['left-start','',  'right-start'],
    ['left', '', 'right'],
    ['left-end', '', 'right-end'],
    ['bottom-start', 'bottom', 'bottom-end']
  ]

  return (
    <ul className="demo-tooltip">
      {
        arr.map((row, index) => {
          return (
            <li index={index} className="row">
                {
                  row.map((column, columnIndex) => {
                    if (index > 0 && index < 4 && ![0, 2].includes(columnIndex)) {
                      return <span></span>
                    } else {
                      return (
                        <Tooltip placement={column} content={column}>
                          <Button>{column}</Button>
                        </Tooltip>
                      )
                    }
                  })
                }
            </li>
          )
        })
      }
    </ul>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`,
    style: {
      lang: `css`,
      code: `:root {
  --gap: 8px;
}
.demo-tooltip {
  display: grid;
  grid-gap: var(--gap);
  grid-template-rows: repeat(5, auto);
}
.demo-tooltip .row {
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: repeat(3,150px);
}

.demo-tooltip .otaku-button {
  width: 150px;
}
`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\u591A\u4E2A\u65B9\u5411\u7684 Tooltip"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_1__.HighlightCode, {
    lang: `tsx`,
    code: `function Demo () {
  const arr = [
    ['top-start', 'top', 'top-end'],
    ['left-start','',  'right-start'],
    ['left', '', 'right'],
    ['left-end', '', 'right-end'],
    ['bottom-start', 'bottom', 'bottom-end']
  ]

  return (
    <ul className="demo-tooltip">
      {
        arr.map((row, index) => {
          return (
            <li index={index} className="row">
                {
                  row.map((column, columnIndex) => {
                    if (index > 0 && index < 4 && ![0, 2].includes(columnIndex)) {
                      return <span></span>
                    } else {
                      return (
                        <Tooltip placement={column} content={column}>
                          <Button>{column}</Button>
                        </Tooltip>
                      )
                    }
                  })
                }
            </li>
          )
        })
      }
    </ul>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
    className: "language-css"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_1__.HighlightCode, {
    lang: `css`,
    code: `:root {
  --gap: 8px;
}
.demo-tooltip {
  display: grid;
  grid-gap: var(--gap);
  grid-template-rows: repeat(5, auto);
}
.demo-tooltip .row {
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: repeat(3,150px);
}

.demo-tooltip .otaku-button {
  width: 150px;
}
`
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_1__.Anchor, {
    target: ".main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_1__.AnchorItem, {
    href: `#tooltip`,
    title: `Tooltip`
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MdReact);

/***/ })

}]);
//# sourceMappingURL=otaku-ui_src_lib_tooltip_demo_README_md-src_components_api_style_scss-src_components_block_st-975d33.bfd363d2daa0ad5b10d7.js.map