"use strict";
(self["webpackChunkotaku_site"] = self["webpackChunkotaku_site"] || []).push([["otaku-ui_src_lib_form_demo_README_md-src_components_api_style_scss-src_components_block_style-f61e4a"],{

/***/ "../otaku-ui/src/lib/form/demo/README.md":
/*!***********************************************!*\
  !*** ../otaku-ui/src/lib/form/demo/README.md ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var otaku_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! otaku-ui */ "../otaku-ui/src/index.ts");
/* harmony import */ var site_component_block_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! site-component/block/block */ "./src/components/block/block.tsx");
/* harmony import */ var site_component_api_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! site-component/api/api */ "./src/components/api/api.tsx");
/* harmony import */ var site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! site-component/codeExample/codeExample */ "./src/components/codeExample/codeExample.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }











function Demo0() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Space, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_4__.Button, null, "\u9ED8\u8BA4\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
    type: "primary"
  }, "\u4E3B\u8981\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
    type: "success"
  }, "\u6210\u529F\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
    type: "warning"
  }, "\u8B66\u544A\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
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
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_4__.Button, null, column));
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
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

function Example6() {
  const [checkAll, setCheckAll] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const treeData = [{
    title: '0-0',
    key: '0-0',
    children: [{
      title: '0-0-0',
      key: '0-0-0',
      children: [{
        title: '0-0-0-0',
        key: '0-0-0-0'
      }, {
        title: '0-0-0-1',
        key: '0-0-0-1'
      }, {
        title: '0-0-0-2',
        key: '0-0-0-2'
      }]
    }, {
      title: '0-0-1',
      key: '0-0-1',
      children: [{
        title: '0-0-1-0',
        key: '0-0-1-0'
      }, {
        title: '0-0-1-1',
        key: '0-0-1-1'
      }, {
        title: '0-0-1-2',
        key: '0-0-1-2'
      }]
    }, {
      title: '0-0-2',
      key: '0-0-2'
    }]
  }, {
    title: '0-1',
    key: '0-1',
    children: [{
      title: '0-1-0-0',
      key: '0-1-0-0'
    }, {
      title: '0-1-0-1',
      key: '0-1-0-1'
    }, {
      title: '0-1-0-2',
      key: '0-1-0-2'
    }]
  }, {
    title: '0-2',
    key: '0-2'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Checkbox, {
    checked: checkAll,
    onChange: e => {
      setCheckAll(e.target.checked);
    }
  }, "\u5168\u9009"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Tree, {
    checkedAll: checkAll // defaultExpandAll={true}
    ,
    defaultExpandKeys: ['0-0', '0-0-0'],
    defaultCheckedKeys: ['0-0-0-0', '0-0-0-2', '0-0-1', '0-2'],
    options: {
      id: 'key',
      name: 'title',
      children: 'children'
    },
    data: treeData
  }));
}

function Example7() {
  const treeData = [{
    title: '0',
    key: '0'
  }, {
    title: '1',
    key: '1'
  }, {
    title: '2',
    key: '2'
  }];

  const load = (node, resolve, reject) => {
    setTimeout(() => {
      const data = new Array(10000).fill(undefined).map((item, index) => {
        return {
          key: node.name + '-' + index,
          title: node.name + '-' + index
        };
      });
      resolve(data);
    }, 1000);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Tree, {
    options: {
      id: 'key',
      name: 'title',
      children: 'children'
    },
    height: 100,
    data: treeData,
    loadTree: load
  });
}

function Example8() {
  const treeData = [{
    title: '0-0',
    key: '0-0',
    children: [{
      title: '0-0-0',
      key: '0-0-0',
      children: [{
        title: '0-0-0-0',
        key: '0-0-0-0'
      }, {
        title: '0-0-0-1',
        key: '0-0-0-1'
      }, {
        title: '0-0-0-2',
        key: '0-0-0-2'
      }]
    }, {
      title: '0-0-1',
      key: '0-0-1',
      children: [{
        title: '0-0-1-0',
        key: '0-0-1-0'
      }, {
        title: '0-0-1-1',
        key: '0-0-1-1'
      }, {
        title: '0-0-1-2',
        key: '0-0-1-2'
      }]
    }, {
      title: '0-0-2',
      key: '0-0-2'
    }]
  }, {
    title: '0-1',
    key: '0-1',
    children: [{
      title: '0-1-0-0',
      key: '0-1-0-0'
    }, {
      title: '0-1-0-1',
      key: '0-1-0-1'
    }, {
      title: '0-1-0-2',
      key: '0-1-0-2'
    }]
  }, {
    title: '0-2',
    key: '0-2'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Tree, {
    options: {
      id: 'key',
      name: 'title',
      children: 'children'
    },
    data: treeData
  });
}

function Example9() {
  const ref = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createRef)(null);
  let formValidate;
  const form = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const [model, setModel] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    input: '',
    input2: ''
  });
  const rules = {
    input: {
      required: true,
      message: '输入内容不能为空'
    },
    input2: {
      min: 3,
      max: 10,
      message: '输入内容必须在 3-10 之间',
      required: true
    }
  };

  const submit = e => {
    e.preventDefault();
    formValidate.validate().then(res => {
      console.log('成功');
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_4__.Form, {
    rules: rules,
    model: model,
    ref: ref,
    getFormInstance: instance => {
      formValidate = instance;
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_4__.FormItem, {
    label: "\u8F93\u5165\u6846",
    field: "input",
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
    placeholder: "\u8F93\u5165\u70B9\u4EC0\u4E48\u5427",
    onChange: val => {
      setModel(_objectSpread(_objectSpread({}, model), {}, {
        input: val
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_4__.FormItem, {
    label: "\u8F93\u5165\u68462",
    field: "input2",
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
    placeholder: "\u8F93\u5165\u70B9\u4EC0\u4E48\u5427",
    onChange: val => {
      setModel(_objectSpread(_objectSpread({}, model), {}, {
        input2: val
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_4__.FormItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
    type: "primary",
    onClick: submit
  }, "\u63D0\u4EA4")));
}

function MdReact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "markdown-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    id: "form-%E8%A1%A8%E5%8D%95",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    className: "header-anchor",
    href: "#form-%E8%A1%A8%E5%8D%95"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " Form \u8868\u5355"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_7__.CodeExample, {
    desc: ``,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Example9, null)),
    code: `import { useState, useRef, createRef } from 'react'
import { Form, FormItem, Button, Input, DatePicker, FormValidate } from 'otaku-ui'
function Example() {
  const ref = createRef(null)
  let formValidate

  const form = useRef(null)
  const [model, setModel] = useState({
    input: '',
    input2: ''
  })
  const rules = {
    input: {
      required: true,
      message: '输入内容不能为空'
    },
    input2: {
      min: 3,
      max: 10,
      message: '输入内容必须在 3-10 之间',
      required: true
    }
  }

  const submit = (e) => {
    e.preventDefault()
    formValidate.validate().then(res => {
      console.log('成功')
    })
  }

  return (
    <Form
      rules={rules}
      model={model}
      ref={ref}
      getFormInstance={(instance) => {
        formValidate = instance
      }}>
      <FormItem label='输入框' field="input" required>
        <Input placeholder='输入点什么吧' onChange={(val) => {
          setModel({
            ...model,
            input: val
          })
        }}></Input>
      </FormItem>
      <FormItem label='输入框2' field="input2" required>
        <Input
          placeholder='输入点什么吧'
          onChange={val => {
            setModel({
              ...model,
              input2: val
            })
          }}></Input>
      </FormItem>

      <FormItem>
        <Button type='primary' onClick={submit}>提交</Button>
      </FormItem>
    </Form>
  )
}

ReactDOM.createRoot(container).render(<Example/>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_4__.HighlightCode, {
    lang: `tsx`,
    code: `function Example() {
  const ref = createRef(null)
  let formValidate

  const form = useRef(null)
  const [model, setModel] = useState({
    input: '',
    input2: ''
  })
  const rules = {
    input: {
      required: true,
      message: '输入内容不能为空'
    },
    input2: {
      min: 3,
      max: 10,
      message: '输入内容必须在 3-10 之间',
      required: true
    }
  }

  const submit = (e) => {
    e.preventDefault()
    formValidate.validate().then(res => {
      console.log('成功')
    })
  }

  return (
    <Form
      rules={rules}
      model={model}
      ref={ref}
      getFormInstance={(instance) => {
        formValidate = instance
      }}>
      <FormItem label='输入框' field="input" required>
        <Input placeholder='输入点什么吧' onChange={(val) => {
          setModel({
            ...model,
            input: val
          })
        }}></Input>
      </FormItem>
      <FormItem label='输入框2' field="input2" required>
        <Input
          placeholder='输入点什么吧'
          onChange={val => {
            setModel({
              ...model,
              input2: val
            })
          }}></Input>
      </FormItem>

      <FormItem>
        <Button type='primary' onClick={submit}>提交</Button>
      </FormItem>
    </Form>
  )
}

ReactDOM.createRoot(container).render(<Example/>)
`
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_4__.Anchor, {
    target: ".main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_4__.AnchorItem, {
    href: `#form-表单`,
    title: `Form 表单`
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MdReact);

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

}]);
//# sourceMappingURL=otaku-ui_src_lib_form_demo_README_md-src_components_api_style_scss-src_components_block_style-f61e4a.a86275c3aebe920a6df7.js.map