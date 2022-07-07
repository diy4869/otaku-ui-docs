"use strict";
(self["webpackChunkotaku_site"] = self["webpackChunkotaku_site"] || []).push([["otaku-ui_src_lib_progress_demo_README_md-src_components_api_style_scss-src_components_block_s-eaa005"],{

/***/ "../otaku-ui/src/lib/progress/demo/README.md":
/*!***************************************************!*\
  !*** ../otaku-ui/src/lib/progress/demo/README.md ***!
  \***************************************************/
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Space, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Button, null, "\u9ED8\u8BA4\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
    type: "primary"
  }, "\u4E3B\u8981\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
    type: "success"
  }, "\u6210\u529F\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
    type: "warning"
  }, "\u8B66\u544A\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
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
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Button, null, column));
      }
    }));
  }));
}

function Demo2() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Rate, {
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
  const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
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

function Example4() {
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

function Demo5() {
  let [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.InputNumber, {
    value: progress,
    step: 10,
    onChange: val => {
      setProgress(val);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    className: "demo-progress"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Progress, {
    percentage: progress,
    type: "circle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Progress, {
    percentage: progress
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Progress, {
    percentage: progress,
    direction: "vertical"
  }))));
}

function MdReact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "markdown-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    id: "progress-%E8%BF%9B%E5%BA%A6%E6%9D%A1",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    className: "header-anchor",
    href: "#progress-%E8%BF%9B%E5%BA%A6%E6%9D%A1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " Progress \u8FDB\u5EA6\u6761"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_6__.CodeExample, {
    desc: ``,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Progress, null)),
    code: `import { Progress, Grid, GridItem, Button, InputNumber } from 'otaku-ui'
import { useState } from 'react'
ReactDOM.createRoot(container).render(<Progress></Progress>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.HighlightCode, {
    lang: `tsx`,
    code: `ReactDOM.createRoot(container).render(<Progress></Progress>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    id: "%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%87%E5%AD%97",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    className: "header-anchor",
    href: "#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%87%E5%AD%97"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " \u81EA\u5B9A\u4E49\u6587\u5B57"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_6__.CodeExample, {
    desc: ``,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Progress, null, "10%")),
    code: `import { Progress, Grid, GridItem, Button, InputNumber } from 'otaku-ui'
import { useState } from 'react'
ReactDOM.createRoot(container).render(<Progress>10%</Progress>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.HighlightCode, {
    lang: `tsx`,
    code: `ReactDOM.createRoot(container).render(<Progress>10%</Progress>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    id: "%E8%BF%9B%E5%BA%A6%E6%9D%A1%E5%86%85%E6%98%BE%E7%A4%BA%E6%96%87%E5%AD%97",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    className: "header-anchor",
    href: "#%E8%BF%9B%E5%BA%A6%E6%9D%A1%E5%86%85%E6%98%BE%E7%A4%BA%E6%96%87%E5%AD%97"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " \u8FDB\u5EA6\u6761\u5185\u663E\u793A\u6587\u5B57"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_6__.CodeExample, {
    desc: ``,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Progress, {
      inner: true,
      percentage: 50
    }, "50%")),
    code: `import { Progress, Grid, GridItem, Button, InputNumber } from 'otaku-ui'
import { useState } from 'react'
ReactDOM.createRoot(container).render(<Progress inner percentage={50}>50%</Progress>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.HighlightCode, {
    lang: `tsx`,
    code: `ReactDOM.createRoot(container).render(<Progress inner percentage={50}>50%</Progress>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    id: "%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    className: "header-anchor",
    href: "#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " \u81EA\u5B9A\u4E49\u989C\u8272"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_6__.CodeExample, {
    desc: ``,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Progress, {
      inner: true,
      percentage: 50,
      color: "red"
    }, "50%")),
    code: `import { Progress, Grid, GridItem, Button, InputNumber } from 'otaku-ui'
import { useState } from 'react'
ReactDOM.createRoot(container).render(<Progress inner percentage={50} color="red">50%</Progress>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.HighlightCode, {
    lang: `tsx`,
    code: `ReactDOM.createRoot(container).render(<Progress inner percentage={50} color="red">50%</Progress>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    id: "%E5%9E%82%E7%9B%B4%E7%9A%84%E8%BF%9B%E5%BA%A6%E6%9D%A1",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    className: "header-anchor",
    href: "#%E5%9E%82%E7%9B%B4%E7%9A%84%E8%BF%9B%E5%BA%A6%E6%9D%A1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " \u5782\u76F4\u7684\u8FDB\u5EA6\u6761"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_6__.CodeExample, {
    desc: ``,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Grid, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Progress, {
      inner: true,
      percentage: 50,
      color: "red",
      direction: "vertical"
    }, "50%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Progress, {
      percentage: 50,
      direction: "vertical"
    }, "50%")))),
    code: `import { Progress, Grid, GridItem, Button, InputNumber } from 'otaku-ui'
import { useState } from 'react'
ReactDOM.createRoot(container).render(<Grid>
    <GridItem>
      <Progress inner percentage={50} color="red" direction="vertical">50%</Progress>
    </GridItem>
    <GridItem>
      <Progress percentage={50}  direction="vertical">50%</Progress>
    </GridItem>
  </Grid>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.HighlightCode, {
    lang: `tsx`,
    code: `ReactDOM.createRoot(container).render(<Grid>
    <GridItem>
      <Progress inner percentage={50} color="red" direction="vertical">50%</Progress>
    </GridItem>
    <GridItem>
      <Progress percentage={50}  direction="vertical">50%</Progress>
    </GridItem>
  </Grid>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    id: "%E5%9C%86%E5%BD%A2%E8%BF%9B%E5%BA%A6%E6%9D%A1",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    className: "header-anchor",
    href: "#%E5%9C%86%E5%BD%A2%E8%BF%9B%E5%BA%A6%E6%9D%A1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " \u5706\u5F62\u8FDB\u5EA6\u6761"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_6__.CodeExample, {
    desc: ``,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Grid, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Progress, {
      percentage: 50,
      type: "circle"
    }, "50%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Progress, {
      percentage: 20,
      type: "circle"
    }, "20%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Progress, {
      percentage: 90,
      type: "circle"
    }, "90%")))),
    code: `import { Progress, Grid, GridItem, Button, InputNumber } from 'otaku-ui'
import { useState } from 'react'

ReactDOM.createRoot(container).render(<Grid>
    <GridItem>
      <Progress percentage={50}  type="circle">50%</Progress>
    </GridItem>
    <GridItem>
      <Progress percentage={20}  type="circle">20%</Progress>
    </GridItem>
    <GridItem>
      <Progress percentage={90}  type="circle" >90%</Progress>
    </GridItem>
  </Grid>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.HighlightCode, {
    lang: `tsx`,
    code: `
ReactDOM.createRoot(container).render(<Grid>
    <GridItem>
      <Progress percentage={50}  type="circle">50%</Progress>
    </GridItem>
    <GridItem>
      <Progress percentage={20}  type="circle">20%</Progress>
    </GridItem>
    <GridItem>
      <Progress percentage={90}  type="circle" >90%</Progress>
    </GridItem>
  </Grid>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    id: "%E5%8F%98%E5%8C%96%E7%9A%84%E8%BF%9B%E5%BA%A6%E6%9D%A1",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    className: "header-anchor",
    href: "#%E5%8F%98%E5%8C%96%E7%9A%84%E8%BF%9B%E5%BA%A6%E6%9D%A1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " \u53D8\u5316\u7684\u8FDB\u5EA6\u6761"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_6__.CodeExample, {
    desc: `sdaf`,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("style", null, `.otaku-grid {
  align-items: center;
  justify-items: center;
}
`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Demo5, null)),
    code: `import { Progress, Grid, GridItem, Button, InputNumber } from 'otaku-ui'
import { useState } from 'react'

function Demo () {
  let [progress, setProgress] = useState(0)

  return (
    <>
      <InputNumber value={progress} step={10} onChange={val => {
        setProgress(val)
      }}></InputNumber>
      <Grid className="demo-progress">
        <GridItem>
          <Progress percentage={progress}  type="circle"></Progress>
        </GridItem>
        <GridItem>
          <Progress percentage={progress}></Progress>
        </GridItem>
        <GridItem>
          <Progress percentage={progress}  direction="vertical"></Progress>
        </GridItem>
      </Grid>

    </>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`,
    style: {
      lang: `css`,
      code: `.otaku-grid {
  align-items: center;
  justify-items: center;
}
`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, "sdaf"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.HighlightCode, {
    lang: `tsx`,
    code: `
function Demo () {
  let [progress, setProgress] = useState(0)

  return (
    <>
      <InputNumber value={progress} step={10} onChange={val => {
        setProgress(val)
      }}></InputNumber>
      <Grid className="demo-progress">
        <GridItem>
          <Progress percentage={progress}  type="circle"></Progress>
        </GridItem>
        <GridItem>
          <Progress percentage={progress}></Progress>
        </GridItem>
        <GridItem>
          <Progress percentage={progress}  direction="vertical"></Progress>
        </GridItem>
      </Grid>

    </>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("code", {
    className: "language-css"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.HighlightCode, {
    lang: `css`,
    code: `.otaku-grid {
  align-items: center;
  justify-items: center;
}
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
    code: `interface ProgressProps {
  inner?: boolean
  percentage?: number
  max?: number
  color?: string
  type?: 'circle'
  direction?: 'vertical' | 'horizontal'
  lineWidth?: number
}`,
    data: `[{"name":"Progress","data":[{"name":"inner","type":"boolean","required":false,"typeReference":null,"jsDoc":[]},{"name":"percentage","type":"number","required":false,"defaultValue":"0","typeReference":null,"jsDoc":[]},{"name":"max","type":"number","required":false,"defaultValue":"100","typeReference":null,"jsDoc":[]},{"name":"color","type":"string","required":false,"typeReference":null,"jsDoc":[]},{"name":"type","type":"'circle'","required":false,"typeReference":null,"jsDoc":[]},{"name":"direction","type":"'vertical' | 'horizontal'","required":false,"defaultValue":"horizontal","typeReference":null,"jsDoc":[]},{"name":"lineWidth","type":"number","required":false,"defaultValue":"8","typeReference":null,"jsDoc":[]}]}]`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Anchor, {
    target: ".main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.AnchorItem, {
    href: `#progress-进度条`,
    title: `Progress 进度条`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.AnchorItem, {
    href: `#自定义文字`,
    title: `自定义文字`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.AnchorItem, {
    href: `#进度条内显示文字`,
    title: `进度条内显示文字`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.AnchorItem, {
    href: `#自定义颜色`,
    title: `自定义颜色`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.AnchorItem, {
    href: `#垂直的进度条`,
    title: `垂直的进度条`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.AnchorItem, {
    href: `#圆形进度条`,
    title: `圆形进度条`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.AnchorItem, {
    href: `#变化的进度条`,
    title: `变化的进度条`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.AnchorItem, {
    href: `#api`,
    title: `api`
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MdReact);

/***/ })

}]);
//# sourceMappingURL=otaku-ui_src_lib_progress_demo_README_md-src_components_api_style_scss-src_components_block_s-eaa005.05a0946557dd93ff6e53.js.map