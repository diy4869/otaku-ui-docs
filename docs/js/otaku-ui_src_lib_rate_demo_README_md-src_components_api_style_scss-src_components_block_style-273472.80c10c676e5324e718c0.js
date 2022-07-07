"use strict";
(self["webpackChunkotaku_site"] = self["webpackChunkotaku_site"] || []).push([["otaku-ui_src_lib_rate_demo_README_md-src_components_api_style_scss-src_components_block_style-273472"],{

/***/ "../otaku-ui/src/lib/rate/demo/README.md":
/*!***********************************************!*\
  !*** ../otaku-ui/src/lib/rate/demo/README.md ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var otaku_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! otaku-ui */ "../otaku-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var site_component_block_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! site-component/block/block */ "./src/components/block/block.tsx");
/* harmony import */ var site_component_api_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! site-component/api/api */ "./src/components/api/api.tsx");
/* harmony import */ var site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! site-component/codeExample/codeExample */ "./src/components/codeExample/codeExample.tsx");









function Demo0() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Space, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Button, null, "\u9ED8\u8BA4\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Button, {
    type: "primary"
  }, "\u4E3B\u8981\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Button, {
    type: "success"
  }, "\u6210\u529F\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Button, {
    type: "warning"
  }, "\u8B66\u544A\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Button, {
    type: "danger"
  }, "\u9519\u8BEF\u6309\u94AE"));
}

function Demo1() {
  const arr = [['top-start', 'top', 'top-end'], ['left-start', '', 'right-start'], ['left', '', 'right'], ['left-end', '', 'right-end'], ['bottom-start', 'bottom', 'bottom-end']];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("ul", {
    className: "demo-tooltip"
  }, arr.map((row, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("li", {
      index: index,
      className: "row"
    }, row.map((column, columnIndex) => {
      if (index > 0 && index < 4 && ![0, 2].includes(columnIndex)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null);
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Tooltip, {
          placement: column,
          content: column
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Button, null, column));
      }
    }));
  }));
}

function Demo2() {
  let [progress, setProgress] = useState(0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(InputNumber, {
    value: progress,
    step: 10,
    onChange: val => {
      setProgress(val);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Grid, {
    className: "demo-progress"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Progress, {
    percentage: progress,
    type: "circle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Progress, {
    percentage: progress
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Progress, {
    percentage: progress,
    direction: "vertical"
  }))));
}

function Example3() {
  const tableData = [{
    name: 'disabled',
    required: false,
    type: 'number',
    defaultValue: '',
    desc: '禁用'
  }, {
    name: 'loading',
    required: false,
    type: 'number',
    defaultValue: '',
    desc: '禁用'
  }, {
    name: 'size',
    required: false,
    type: 'small | middle | large',
    // defaultValue: '',
    desc: '禁用'
  }];
  const tableColumn = [{
    label: '属性',
    prop: 'name'
  }, {
    label: '是否必填',
    prop: 'required',

    render(data) {
      const {
        row
      } = data;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, row.require ? '是' : '否');
    }

  }, {
    label: '类型',
    prop: 'type'
  }, {
    label: '默认值',
    prop: 'defaultValue',
    defaultValue: '这是没有数据的情况'
  }, {
    label: '描述',
    prop: 'desc'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Table, {
    data: tableData,
    tableColumn: tableColumn
  });
}

function Demo4() {
  const [show, setShow] = useState(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Button, {
    type: "primary",
    onClick: () => {
      setShow(true);
    }
  }, "\u56FE\u7247\u88C1\u526A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(ImageCropper, {
    visible: show,
    imageURL: miku,
    onClose: () => setShow(false),
    onCancel: () => setShow(false),
    onConfirm: () => setShow(false)
  }));
}

function Demo5() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Rate, {
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

function MdReact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "markdown-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    id: "rate-%E8%AF%84%E5%88%86",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    className: "header-anchor",
    href: "#rate-%E8%AF%84%E5%88%86"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " Rate \u8BC4\u5206"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_6__.CodeExample, {
    desc: `简单的评分`,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Rate, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      classname: "iconfont otaku-icon-heart"
    }))),
    code: `import { Rate } from 'otaku-ui'
ReactDOM.createRoot(container).render(<Rate>

  <span classname="iconfont otaku-icon-heart"></span>
</Rate>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, "\u7B80\u5355\u7684\u8BC4\u5206"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.HighlightCode, {
    lang: `tsx`,
    code: `ReactDOM.createRoot(container).render(<Rate>

  <span classname="iconfont otaku-icon-heart"></span>
</Rate>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    id: "%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B8%B2%E6%9F%93",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    className: "header-anchor",
    href: "#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B8%B2%E6%9F%93"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " \u81EA\u5B9A\u4E49\u6E32\u67D3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_6__.CodeExample, {
    desc: `简单的评分`,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Rate, null)),
    code: `import { Rate } from 'otaku-ui'
ReactDOM.createRoot(container).render(<Rate></Rate>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, "\u7B80\u5355\u7684\u8BC4\u5206"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.HighlightCode, {
    lang: `tsx`,
    code: `ReactDOM.createRoot(container).render(<Rate></Rate>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    id: "%E5%8F%AA%E8%AF%BB%E7%8A%B6%E6%80%81",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    className: "header-anchor",
    href: "#%E5%8F%AA%E8%AF%BB%E7%8A%B6%E6%80%81"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " \u53EA\u8BFB\u72B6\u6001"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_6__.CodeExample, {
    desc: `简单的评分`,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Rate, {
      readonly: true,
      score: 4
    })),
    code: `import { Rate } from 'otaku-ui'
ReactDOM.createRoot(container).render(<Rate readonly={true} score={4}></Rate>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, "\u7B80\u5355\u7684\u8BC4\u5206"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.HighlightCode, {
    lang: `tsx`,
    code: `ReactDOM.createRoot(container).render(<Rate readonly={true} score={4}></Rate>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    id: "%E8%AE%BE%E7%BD%AE-%E5%8D%8A%E6%98%9F",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    className: "header-anchor",
    href: "#%E8%AE%BE%E7%BD%AE-%E5%8D%8A%E6%98%9F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " \u8BBE\u7F6E \u534A\u661F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_6__.CodeExample, {
    desc: `简单的评分`,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Rate, {
      readonly: true,
      score: 2.5
    })),
    code: `import { Rate } from 'otaku-ui'
ReactDOM.createRoot(container).render(<Rate readonly={true} score={2.5}></Rate>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, "\u7B80\u5355\u7684\u8BC4\u5206"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.HighlightCode, {
    lang: `tsx`,
    code: `ReactDOM.createRoot(container).render(<Rate readonly={true} score={2.5}></Rate>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    id: "%E8%AE%BE%E7%BD%AE-%E6%9C%80%E5%A4%A7%E5%80%BC",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    className: "header-anchor",
    href: "#%E8%AE%BE%E7%BD%AE-%E6%9C%80%E5%A4%A7%E5%80%BC"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " \u8BBE\u7F6E \u6700\u5927\u503C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_6__.CodeExample, {
    desc: `简单的评分`,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Rate, {
      readonly: true,
      score: 542.5,
      maxScore: 100
    })),
    code: `import { Rate } from 'otaku-ui'
ReactDOM.createRoot(container).render(<Rate readonly={true} score={542.5} maxScore={100}></Rate>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, "\u7B80\u5355\u7684\u8BC4\u5206"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.HighlightCode, {
    lang: `tsx`,
    code: `ReactDOM.createRoot(container).render(<Rate readonly={true} score={542.5} maxScore={100}></Rate>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    id: "%E6%98%BE%E7%A4%BA%E8%AF%84%E5%88%86",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    className: "header-anchor",
    href: "#%E6%98%BE%E7%A4%BA%E8%AF%84%E5%88%86"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " \u663E\u793A\u8BC4\u5206"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_6__.CodeExample, {
    desc: `简单的评分`,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Rate, {
      readonly: true,
      score: 42.5,
      maxScore: 100,
      showScore: true
    })),
    code: `import { Rate } from 'otaku-ui'
ReactDOM.createRoot(container).render(<Rate readonly={true} score={42.5} maxScore={100} showScore></Rate>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, "\u7B80\u5355\u7684\u8BC4\u5206"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.HighlightCode, {
    lang: `tsx`,
    code: `ReactDOM.createRoot(container).render(<Rate readonly={true} score={42.5} maxScore={100} showScore></Rate>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    id: "%E8%AE%BE%E7%BD%AE%E6%98%9F%E6%98%9F%E6%95%B0%E9%87%8F",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    className: "header-anchor",
    href: "#%E8%AE%BE%E7%BD%AE%E6%98%9F%E6%98%9F%E6%95%B0%E9%87%8F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " \u8BBE\u7F6E\u661F\u661F\u6570\u91CF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_6__.CodeExample, {
    desc: `简单的评分`,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Rate, {
      readonly: true,
      score: 42.5,
      maxScore: 100,
      showScore: true,
      count: 10
    })),
    code: `import { Rate } from 'otaku-ui'
ReactDOM.createRoot(container).render(<Rate readonly={true} score={42.5} maxScore={100} showScore count={10}></Rate>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, "\u7B80\u5355\u7684\u8BC4\u5206"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.HighlightCode, {
    lang: `tsx`,
    code: `ReactDOM.createRoot(container).render(<Rate readonly={true} score={42.5} maxScore={100} showScore count={10}></Rate>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    id: "%E8%87%AA%E5%AE%9A%E4%B9%89-%E6%96%87%E5%AD%97",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    className: "header-anchor",
    href: "#%E8%87%AA%E5%AE%9A%E4%B9%89-%E6%96%87%E5%AD%97"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " \u81EA\u5B9A\u4E49 \u6587\u5B57"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_6__.CodeExample, {
    desc: `简单的评分`,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Demo5, null)),
    code: `import { Rate } from 'otaku-ui'
function Demo () {
  return (
    <Rate
      score={59.5} 
      maxScore={100} 
      count={10}
      readonly
      textRender={(current, score) => {
        let text = '不合格'
        
        if (current <= 6) text = '不合格'
        else if (current >= 6) text = '及格'
        else if (current >= 8) text = '优秀'
        else text = '满分'

        return text
      }}></Rate>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, "\u7B80\u5355\u7684\u8BC4\u5206"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.HighlightCode, {
    lang: `tsx`,
    code: `function Demo () {
  return (
    <Rate
      score={59.5} 
      maxScore={100} 
      count={10}
      readonly
      textRender={(current, score) => {
        let text = '不合格'
        
        if (current <= 6) text = '不合格'
        else if (current >= 6) text = '及格'
        else if (current >= 8) text = '优秀'
        else text = '满分'

        return text
      }}></Rate>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    id: "api",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    className: "header-anchor",
    href: "#api"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " api"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(site_component_api_api__WEBPACK_IMPORTED_MODULE_5__.Api, {
    code: `interface RateProps {
  count?: number
  showScore?: boolean
  score?: number
  maxScore?: number
  size?: number
  color?: string
  readonly?: boolean
  children?: React.ReactNode
  textRender?: (index: number, score: number) => React.ReactNode
}`,
    data: `[{"name":"Rate","data":[{"name":"count","type":"number","required":false,"defaultValue":"5","typeReference":null,"jsDoc":[]},{"name":"showScore","type":"boolean","required":false,"typeReference":null,"jsDoc":[]},{"name":"score","type":"number","required":false,"defaultValue":"0","typeReference":null,"jsDoc":[]},{"name":"maxScore","type":"number","required":false,"defaultValue":"10","typeReference":null,"jsDoc":[]},{"name":"size","type":"number","required":false,"typeReference":null,"jsDoc":[]},{"name":"color","type":"string","required":false,"typeReference":null,"jsDoc":[]},{"name":"readonly","type":"boolean","required":false,"typeReference":null,"jsDoc":[]},{"name":"children","type":"React.ReactNode","required":false,"typeReference":null,"jsDoc":[]},{"name":"textRender","type":"(index: number, score: number) => React.ReactNode","required":false,"typeReference":null,"jsDoc":[]}]}]`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Anchor, {
    target: ".main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.AnchorItem, {
    href: `#rate-评分`,
    title: `Rate 评分`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.AnchorItem, {
    href: `#自定义渲染`,
    title: `自定义渲染`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.AnchorItem, {
    href: `#只读状态`,
    title: `只读状态`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.AnchorItem, {
    href: `#设置-半星`,
    title: `设置 半星`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.AnchorItem, {
    href: `#设置-最大值`,
    title: `设置 最大值`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.AnchorItem, {
    href: `#显示评分`,
    title: `显示评分`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.AnchorItem, {
    href: `#设置星星数量`,
    title: `设置星星数量`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.AnchorItem, {
    href: `#自定义-文字`,
    title: `自定义 文字`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.AnchorItem, {
    href: `#api`,
    title: `api`
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MdReact);

/***/ })

}]);
//# sourceMappingURL=otaku-ui_src_lib_rate_demo_README_md-src_components_api_style_scss-src_components_block_style-273472.80c10c676e5324e718c0.js.map