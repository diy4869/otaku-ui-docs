"use strict";
(self["webpackChunkotaku_site"] = self["webpackChunkotaku_site"] || []).push([["otaku-ui_src_lib_search_demo_README_md-src_components_api_style_scss-src_components_block_sty-b96bca"],{

/***/ "../otaku-ui/src/lib/search/demo/README.md":
/*!*************************************************!*\
  !*** ../otaku-ui/src/lib/search/demo/README.md ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var site_component_block_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! site-component/block/block */ "./src/components/block/block.tsx");
/* harmony import */ var site_component_api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! site-component/api/api */ "./src/components/api/api.tsx");
/* harmony import */ var otaku_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! otaku-ui */ "../otaku-ui/src/index.ts");
/* harmony import */ var site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! site-component/codeExample/codeExample */ "./src/components/codeExample/codeExample.tsx");


undefined;






function Demo0() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Space, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Button, null, "\u9ED8\u8BA4\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Button, {
    type: "primary"
  }, "\u4E3B\u8981\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Button, {
    type: "success"
  }, "\u6210\u529F\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Button, {
    type: "warning"
  }, "\u8B66\u544A\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Button, {
    type: "danger"
  }, "\u9519\u8BEF\u6309\u94AE"));
}

function Demo1() {
  const arr = [['top-start', 'top', 'top-end'], ['left-start', '', 'right-start'], ['left', '', 'right'], ['left-end', '', 'right-end'], ['bottom-start', 'bottom', 'bottom-end']];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("ul", {
    className: "demo-tooltip"
  }, arr.map((row, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", {
      index: index,
      className: "row"
    }, row.map((column, columnIndex) => {
      if (index > 0 && index < 4 && ![0, 2].includes(columnIndex)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null);
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tooltip, {
          placement: column,
          content: column
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Button, null, column));
      }
    }));
  }));
}

function Demo2() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Rate, {
    score: 59.5,
    maxScore: 100,
    count: 10,
    readonly: true,
    textRender: (current, score) => {
      let text = '不合格';
      if (current <= 6) text = '不合格';else if (current >= 6) text = '及格';else if (current >= 8) text = '优秀';else text = '满分';
      return text;
    }
  });
}

function Demo3() {
  const [show, setShow] = useState(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Button, {
    type: "primary",
    onClick: () => {
      setShow(true);
    }
  }, "\u56FE\u7247\u88C1\u526A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ImageCropper, {
    visible: show,
    imageURL: miku,
    onClose: () => setShow(false),
    onCancel: () => setShow(false),
    onConfirm: () => setShow(false)
  }));
}

function Demo4() {
  let [progress, setProgress] = useState(0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(InputNumber, {
    value: progress,
    step: 10,
    onChange: val => {
      setProgress(val);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Grid, {
    className: "demo-progress"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Progress, {
    percentage: progress,
    type: "circle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Progress, {
    percentage: progress
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Progress, {
    percentage: progress,
    direction: "vertical"
  }))));
}

function MdReact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "markdown-body"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_5__.Anchor, {
    target: ".main"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MdReact);

/***/ })

}]);
//# sourceMappingURL=otaku-ui_src_lib_search_demo_README_md-src_components_api_style_scss-src_components_block_sty-b96bca.11d7c2cec24ca573b2a6.js.map