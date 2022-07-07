"use strict";
(self["webpackChunkotaku_site"] = self["webpackChunkotaku_site"] || []).push([["otaku-ui_src_lib_grid_demo_README_md-src_components_api_style_scss-src_components_block_style-ba2a42"],{

/***/ "../otaku-ui/src/lib/grid/demo/README.md":
/*!***********************************************!*\
  !*** ../otaku-ui/src/lib/grid/demo/README.md ***!
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
/* harmony import */ var otaku_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! otaku-ui */ "../otaku-ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var site_component_block_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! site-component/block/block */ "./src/components/block/block.tsx");
/* harmony import */ var site_component_api_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! site-component/api/api */ "./src/components/api/api.tsx");
/* harmony import */ var site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! site-component/codeExample/codeExample */ "./src/components/codeExample/codeExample.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










function Demo0() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Space, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Button, null, "\u9ED8\u8BA4\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Button, {
    type: "primary"
  }, "\u4E3B\u8981\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Button, {
    type: "success"
  }, "\u6210\u529F\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Button, {
    type: "warning"
  }, "\u8B66\u544A\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Button, {
    type: "danger"
  }, "\u9519\u8BEF\u6309\u94AE"));
}

function Demo1() {
  const arr = [['top-start', 'top', 'top-end'], ['left-start', '', 'right-start'], ['left', '', 'right'], ['left-end', '', 'right-end'], ['bottom-start', 'bottom', 'bottom-end']];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("ul", {
    className: "demo-tooltip"
  }, arr.map((row, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("li", {
      index: index,
      className: "row"
    }, row.map((column, columnIndex) => {
      if (index > 0 && index < 4 && ![0, 2].includes(columnIndex)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", null);
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Tooltip, {
          placement: column,
          content: column
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Button, null, column));
      }
    }));
  }));
}

function Demo2() {
  let [progress, setProgress] = useState(0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(InputNumber, {
    value: progress,
    step: 10,
    onChange: val => {
      setProgress(val);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    className: "demo-progress"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Progress, {
    percentage: progress,
    type: "circle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Progress, {
    percentage: progress
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Progress, {
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", null, row.require ? '是' : '否');
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Table, {
    data: tableData,
    tableColumn: tableColumn
  });
}

function Demo4() {
  const [show, setShow] = useState(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Button, {
    type: "primary",
    onClick: () => {
      setShow(true);
    }
  }, "\u56FE\u7247\u88C1\u526A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(ImageCropper, {
    visible: show,
    imageURL: miku,
    onClose: () => setShow(false),
    onCancel: () => setShow(false),
    onConfirm: () => setShow(false)
  }));
}

function Demo5() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Rate, {
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

function Example6() {
  const [checkAll, setCheckAll] = useState(false);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Checkbox, {
    checked: checkAll,
    onChange: e => {
      setCheckAll(e.target.checked);
    }
  }, "\u5168\u9009"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Tree, {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Tree, {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Tree, {
    options: {
      id: 'key',
      name: 'title',
      children: 'children'
    },
    data: treeData
  });
}

function Demo9() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Avatar, {
    src: "http://test"
  });
}

function Demo10() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Avatar, {
    src: "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics7.baidu.com%2Ffeed%2F6c224f4a20a446237db37993bb07c9070df3d7f1.jpeg%3Ftoken%3Dfb47d955fdbdf3d0563b5721c4f75902&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1642438800&t=e35b9d4bfe1c0866fecad5a3a5c79fee"
  });
}

function Demo11() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(UploadImage, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Button, {
    type: "primary"
  }, "\u56FE\u7247\u4E0A\u4F20"));
}

function Example12() {
  const ref = createRef(null);
  let formValidate;
  const form = useRef(null);
  const [model, setModel] = useState({
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Form, {
    rules: rules,
    model: model,
    ref: ref,
    getFormInstance: instance => {
      formValidate = instance;
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(FormItem, {
    label: "\u8F93\u5165\u6846",
    field: "input",
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Input, {
    placeholder: "\u8F93\u5165\u70B9\u4EC0\u4E48\u5427",
    onChange: val => {
      setModel(_objectSpread(_objectSpread({}, model), {}, {
        input: val
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(FormItem, {
    label: "\u8F93\u5165\u68462",
    field: "input2",
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Input, {
    placeholder: "\u8F93\u5165\u70B9\u4EC0\u4E48\u5427",
    onChange: val => {
      setModel(_objectSpread(_objectSpread({}, model), {}, {
        input2: val
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(FormItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Button, {
    type: "primary",
    onClick: submit
  }, "\u63D0\u4EA4")));
}

function Demo13() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Select, null, new Array(2000).fill().map((_, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(SelectOption, {
      value: index,
      key: index
    }, "\u7B2C", index, "\u4E2A\u9009\u9879");
  }));
}

function Demo14() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Select, {
    multiple: true
  }, new Array(20).fill().map((_, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(SelectOption, {
      value: index,
      key: index
    }, "\u7B2C", index, "\u4E2A\u9009\u9879");
  }));
}

function Demo15() {
  const [checkAll, setCheckAll] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [data, setData] = useState(new Array(3).fill(1).map((_, index) => {
    return {
      current: index,
      checked: false
    };
  }));
  useEffect(() => {
    console.log(data);
  }, [data, checkAll, indeterminate]);

  const change = e => {
    const result = data.map(item => {
      return _objectSpread(_objectSpread({}, item), {}, {
        checked: e.target.checked
      });
    });
    setData([...result]);
    setCheckAll(e.target.checked);
  };

  const groupChange = val => {
    const result = data.map(item => {
      return _objectSpread(_objectSpread({}, item), {}, {
        checked: val.includes(item.current)
      });
    });
    setData([...result]);
    result.every(item => item.checked) ? setCheckAll(true) : result.some(item => item.checked) ? setIndeterminate(true) : setCheckAll(false);
    console.log(data, result, checkAll, indeterminate);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Space, {
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Checkbox, {
    checked: checkAll,
    indeterminate: indeterminate,
    onChange: change
  }, "\u5168\u9009"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(CheckboxGroup, {
    value: data.filter(item => item.checked).map(item => item.current),
    onChange: groupChange
  }, data.map((_, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Checkbox, {
      value: index,
      key: index
    }, "\u7B2C", index, "\u4E2A\u5355\u9009");
  })));
}

function Demo16() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Button, {
    onClick: () => message.info('这是一个提示')
  }, "\u4FE1\u606F\u63D0\u793A");
}

function Demo17() {
  const type = ['info', 'success', 'warning', 'error'];
  const btnType = ['default', 'success', 'warning', 'danger'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Space, null, type.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Button, {
      type: btnType[index],
      key: index,
      onClick: () => message[item]("这是一个提示")
    }, item);
  }));
}

function Demo18() {
  const type = ['info', 'success', 'warning', 'error'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("ul", {
    className: "alert-demo-container"
  }, type.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Alert, {
      type: item,
      key: index
    }, "\u8FD9\u662F\u4E00\u4E2A ", item, " \u63D0\u793A"));
  }));
}

function Demo19() {
  const type = ['Home', 'Application Center', 'An Application', 'List'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(BreadCrumbs, null, type.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(BreadCrumbsItem, {
      key: index
    }, item);
  }));
}

function Demo20() {
  const type = ['Home', 'Application Center', 'An Application', 'List'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(BreadCrumbs, null, type.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(BreadCrumbsItem, {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
        className: "iconfont otaku-icon-user"
      }),
      key: index
    }, item);
  }));
}

function Demo21() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    gap: 10
  }, Array.from({
    length: 5
  }).map((_, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, {
      key: index,
      className: "demo-container"
    }, index + 1);
  })));
}

function MdReact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "markdown-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h2", {
    id: "grid-%E7%BD%91%E6%A0%BC",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("a", {
    className: "header-anchor",
    href: "#grid-%E7%BD%91%E6%A0%BC"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " Grid \u7F51\u683C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_7__.CodeExample, {
    desc: `一个简单的网格`,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("style", null, `.demo-container {
  background: black;
  color: white;
  padding-left: 5px;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Demo21, null)),
    code: `import { Grid, GridItem } from 'otaku-ui'
function Demo () {
  return (
    <div>
      <Grid gap={10}>
        {
          Array.from({
            length: 5
          }).map((_, index) => {
            return (
              <GridItem 
                key={index} 
                className="demo-container">{index + 1}
              </GridItem>
            )
          })
        }
      </Grid>
    </div>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`,
    style: {
      lang: `css`,
      code: `.demo-container {
  background: black;
  color: white;
  padding-left: 5px;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", null, "\u4E00\u4E2A\u7B80\u5355\u7684\u7F51\u683C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.HighlightCode, {
    lang: `tsx`,
    code: `function Demo () {
  return (
    <div>
      <Grid gap={10}>
        {
          Array.from({
            length: 5
          }).map((_, index) => {
            return (
              <GridItem 
                key={index} 
                className="demo-container">{index + 1}
              </GridItem>
            )
          })
        }
      </Grid>
    </div>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("code", {
    className: "language-css"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.HighlightCode, {
    lang: `css`,
    code: `.demo-container {
  background: black;
  color: white;
  padding-left: 5px;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h2", {
    id: "api",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("a", {
    className: "header-anchor",
    href: "#api"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " api"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(site_component_api_api__WEBPACK_IMPORTED_MODULE_6__.Api, {
    code: `interface GridProps {
  width?: number
  count?: number
  gap?: number | [number, number]
  center?: boolean
  className?: string
  children: React.ReactNode[]
}

interface GridItemProps {
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}`,
    data: `[{"name":"Grid","data":[{"name":"width","type":"number","required":false,"typeReference":null,"jsDoc":[]},{"name":"count","type":"number","required":false,"defaultValue":"3","typeReference":null,"jsDoc":[]},{"name":"gap","type":"number | [number, number]","required":false,"defaultValue":"0","typeReference":null,"jsDoc":[]},{"name":"center","type":"boolean","required":false,"typeReference":null,"jsDoc":[]},{"name":"className","type":"string","required":false,"typeReference":null,"jsDoc":[]},{"name":"children","type":"React.ReactNode[]","required":true,"typeReference":null,"jsDoc":[]}]},{"name":"GridItem","data":[{"name":"className","type":"string","required":false,"typeReference":null,"jsDoc":[]},{"name":"children","type":"React.ReactNode","required":false,"typeReference":null,"jsDoc":[]},{"name":"onClick","type":"() => void","required":false,"typeReference":null,"jsDoc":[]}]}]`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Anchor, {
    target: ".main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.AnchorItem, {
    href: `#grid-网格`,
    title: `Grid 网格`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.AnchorItem, {
    href: `#api`,
    title: `api`
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
//# sourceMappingURL=otaku-ui_src_lib_grid_demo_README_md-src_components_api_style_scss-src_components_block_style-ba2a42.44232d8f3aefab5b0268.js.map