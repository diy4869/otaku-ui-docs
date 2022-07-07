"use strict";
(self["webpackChunkotaku_site"] = self["webpackChunkotaku_site"] || []).push([["otaku-ui_src_lib_button_demo_README_md-src_components_api_style_scss-src_components_block_sty-38786d"],{

/***/ "../otaku-ui/src/lib/button/demo/README.md":
/*!*************************************************!*\
  !*** ../otaku-ui/src/lib/button/demo/README.md ***!
  \*************************************************/
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Space, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, null, "\u9ED8\u8BA4\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
    type: "primary"
  }, "\u4E3B\u8981\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
    type: "success"
  }, "\u6210\u529F\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
    type: "warning"
  }, "\u8B66\u544A\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
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
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, null, column));
      }
    }));
  }));
}

function Demo2() {
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

function Demo3() {
  const [show, setShow] = useState(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
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

function Demo4() {
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

function Example5() {
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

function Example6() {
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

function Example7() {
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

function Example8() {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(UploadImage, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(FormItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
    type: "primary",
    onClick: submit
  }, "\u63D0\u4EA4")));
}

function Demo13() {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Space, {
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

function Demo14() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Select, null, new Array(2000).fill().map((_, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(SelectOption, {
      value: index,
      key: index
    }, "\u7B2C", index, "\u4E2A\u9009\u9879");
  }));
}

function Demo15() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Select, {
    multiple: true
  }, new Array(20).fill().map((_, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(SelectOption, {
      value: index,
      key: index
    }, "\u7B2C", index, "\u4E2A\u9009\u9879");
  }));
}

function Demo16() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => message.info('这是一个提示')
  }, "\u4FE1\u606F\u63D0\u793A");
}

function Demo17() {
  const type = ['info', 'success', 'warning', 'error'];
  const btnType = ['default', 'success', 'warning', 'danger'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Space, null, type.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
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

function Demo22() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", null, ['primary'].map((type, typeIndex) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      count: 3,
      gap: 10,
      key: typeIndex
    }, ['small', 'middle', 'large'].map((size, sizeIndex) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, {
        key: sizeIndex
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        type: type,
        size: size
      }, "\u4E3B\u8981\u6309\u94AE"));
    }));
  }));
}

function MdReact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "markdown-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h2", {
    id: "button-%E6%8C%89%E9%92%AE",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("a", {
    className: "header-anchor",
    href: "#button-%E6%8C%89%E9%92%AE"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " Button \u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_7__.CodeExample, {
    desc: `这个是按钮的描述`,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Space, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, null, "\u9ED8\u8BA4\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "primary"
    }, "\u4E3B\u8981\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "success"
    }, "\u6210\u529F\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "warning"
    }, "\u8B66\u544A\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "danger"
    }, "\u9519\u8BEF\u6309\u94AE"))),
    code: `import { Button, Space, Grid, GridItem } from 'otaku-ui'
ReactDOM.createRoot(container).render(<Space>
    <Button>默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">错误按钮</Button>
  </Space>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", null, "\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.HighlightCode, {
    lang: `tsx`,
    code: `ReactDOM.createRoot(container).render(<Space>
    <Button>默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">错误按钮</Button>
  </Space>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h2", {
    id: "%E5%9C%86%E8%A7%92%E6%8C%89%E9%92%AE",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("a", {
    className: "header-anchor",
    href: "#%E5%9C%86%E8%A7%92%E6%8C%89%E9%92%AE"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " \u5706\u89D2\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_7__.CodeExample, {
    desc: `这个是按钮的描述`,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "primary",
      shape: "round"
    }, "\u4E3B\u8981\u6309\u94AE")),
    code: `import { Button, Space, Grid, GridItem } from 'otaku-ui'
ReactDOM.createRoot(container).render(<Button type="primary" shape="round">主要按钮</Button>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", null, "\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.HighlightCode, {
    lang: `tsx`,
    code: `ReactDOM.createRoot(container).render(<Button type="primary" shape="round">主要按钮</Button>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h2", {
    id: "disabled-%E7%A6%81%E7%94%A8",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("a", {
    className: "header-anchor",
    href: "#disabled-%E7%A6%81%E7%94%A8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " Disabled \u7981\u7528"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_7__.CodeExample, {
    desc: `这个是按钮的描述`,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      count: 5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      disabled: true
    }, "\u9ED8\u8BA4\u6309\u94AE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "primary",
      disabled: true
    }, "\u4E3B\u8981\u6309\u94AE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "success",
      disabled: true
    }, "\u6210\u529F\u6309\u94AE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "warning",
      disabled: true
    }, "\u8B66\u544A\u6309\u94AE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "danger",
      disabled: true
    }, "\u9519\u8BEF\u6309\u94AE")))),
    code: `import { Button, Space, Grid, GridItem } from 'otaku-ui'
ReactDOM.createRoot(container).render(<Grid count={5}>
    <GridItem>
      <Button disabled>默认按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="primary" disabled>主要按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="success" disabled>成功按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="warning" disabled>警告按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="danger" disabled>错误按钮</Button>
    </GridItem>
  </Grid>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", null, "\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.HighlightCode, {
    lang: `tsx`,
    code: `ReactDOM.createRoot(container).render(<Grid count={5}>
    <GridItem>
      <Button disabled>默认按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="primary" disabled>主要按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="success" disabled>成功按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="warning" disabled>警告按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="danger" disabled>错误按钮</Button>
    </GridItem>
  </Grid>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h2", {
    id: "loading-%E5%8A%A0%E8%BD%BD%E7%8A%B6%E6%80%81",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("a", {
    className: "header-anchor",
    href: "#loading-%E5%8A%A0%E8%BD%BD%E7%8A%B6%E6%80%81"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " loading \u52A0\u8F7D\u72B6\u6001"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_7__.CodeExample, {
    desc: `这个是按钮的描述`,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      count: 5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      loading: true
    }, "\u9ED8\u8BA4\u6309\u94AE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "primary",
      loading: true
    }, "\u4E3B\u8981\u6309\u94AE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "success",
      loading: true
    }, "\u6210\u529F\u6309\u94AE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "warning",
      loading: true
    }, "\u8B66\u544A\u6309\u94AE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "danger",
      loading: true
    }, "\u9519\u8BEF\u6309\u94AE")))),
    code: `import { Button, Space, Grid, GridItem } from 'otaku-ui'
ReactDOM.createRoot(container).render(<Grid count={5}>
    <GridItem>
      <Button loading>默认按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="primary" loading>主要按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="success" loading>成功按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="warning" loading>警告按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="danger" loading>错误按钮</Button>
    </GridItem>
  </Grid>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", null, "\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.HighlightCode, {
    lang: `tsx`,
    code: `ReactDOM.createRoot(container).render(<Grid count={5}>
    <GridItem>
      <Button loading>默认按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="primary" loading>主要按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="success" loading>成功按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="warning" loading>警告按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="danger" loading>错误按钮</Button>
    </GridItem>
  </Grid>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h2", {
    id: "%E5%B9%BD%E7%81%B5%E6%8C%89%E9%92%AE",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("a", {
    className: "header-anchor",
    href: "#%E5%B9%BD%E7%81%B5%E6%8C%89%E9%92%AE"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " \u5E7D\u7075\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_7__.CodeExample, {
    desc: `这个是按钮的描述`,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      count: 5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      ghost: true
    }, "\u9ED8\u8BA4\u6309\u94AE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "primary",
      ghost: true
    }, "\u4E3B\u8981\u6309\u94AE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "success",
      ghost: true
    }, "\u6210\u529F\u6309\u94AE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "warning",
      ghost: true
    }, "\u8B66\u544A\u6309\u94AE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "danger",
      ghost: true
    }, "\u9519\u8BEF\u6309\u94AE")))),
    code: `import { Button, Space, Grid, GridItem } from 'otaku-ui'
ReactDOM.createRoot(container).render(<Grid count={5}>
    <GridItem>
      <Button ghost>默认按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="primary" ghost>主要按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="success" ghost>成功按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="warning" ghost>警告按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="danger" ghost>错误按钮</Button>
    </GridItem>
  </Grid>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", null, "\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.HighlightCode, {
    lang: `tsx`,
    code: `ReactDOM.createRoot(container).render(<Grid count={5}>
    <GridItem>
      <Button ghost>默认按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="primary" ghost>主要按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="success" ghost>成功按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="warning" ghost>警告按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="danger" ghost>错误按钮</Button>
    </GridItem>
  </Grid>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h2", {
    id: "%E4%B8%8D%E5%90%8C%E5%A4%A7%E5%B0%8F%E7%9A%84%E6%8C%89%E9%92%AE",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("a", {
    className: "header-anchor",
    href: "#%E4%B8%8D%E5%90%8C%E5%A4%A7%E5%B0%8F%E7%9A%84%E6%8C%89%E9%92%AE"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " \u4E0D\u540C\u5927\u5C0F\u7684\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_7__.CodeExample, {
    desc: `这个是按钮的描述`,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Demo22, null)),
    code: `import { Button, Space, Grid, GridItem } from 'otaku-ui'
function Demo () {
  return (
    <div>
      {['primary'].map((type, typeIndex) => {
        return (
          <Grid count={3} gap={10} key={typeIndex}>
            {['small', 'middle', 'large'].map((size, sizeIndex) => {
              return (
                <GridItem key={sizeIndex}>
                  <Button type={type} size={size}>
                    主要按钮
                  </Button>
                </GridItem>
              )
            })}
          </Grid>
        )
      })}
    </div>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", null, "\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.HighlightCode, {
    lang: `tsx`,
    code: `function Demo () {
  return (
    <div>
      {['primary'].map((type, typeIndex) => {
        return (
          <Grid count={3} gap={10} key={typeIndex}>
            {['small', 'middle', 'large'].map((size, sizeIndex) => {
              return (
                <GridItem key={sizeIndex}>
                  <Button type={type} size={size}>
                    主要按钮
                  </Button>
                </GridItem>
              )
            })}
          </Grid>
        )
      })}
    </div>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h2", {
    id: "%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%89%E9%92%AE%E9%A2%9C%E8%89%B2",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("a", {
    className: "header-anchor",
    href: "#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%89%E9%92%AE%E9%A2%9C%E8%89%B2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " \u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_7__.CodeExample, {
    desc: `这个是按钮的描述`,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "danger",
      bgcolor: "red"
    }, "\u6309\u94AE")),
    code: `import { Button, Space, Grid, GridItem } from 'otaku-ui'
ReactDOM.createRoot(container).render(<Button type="danger" bgcolor="red">按钮</Button>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", null, "\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.HighlightCode, {
    lang: `tsx`,
    code: `ReactDOM.createRoot(container).render(<Button type="danger" bgcolor="red">按钮</Button>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h2", {
    id: "%E5%85%B7%E6%9C%89-icon-%E7%9A%84%E6%8C%89%E9%92%AE",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("a", {
    className: "header-anchor",
    href: "#%E5%85%B7%E6%9C%89-icon-%E7%9A%84%E6%8C%89%E9%92%AE"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " \u5177\u6709 icon \u7684\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_7__.CodeExample, {
    desc: `这个是按钮的描述`,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      count: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "primary",
      iconDirection: "left",
      icon: "otaku-icon-search-line"
    }, "\u5DE6\u8FB9 icon \u7684\u6309\u94AE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "primary",
      iconDirection: "right",
      icon: "otaku-icon-search-line"
    }, "\u53F3\u8FB9 icon \u7684\u6309\u94AE")))),
    code: `import { Button, Space, Grid, GridItem } from 'otaku-ui'
ReactDOM.createRoot(container).render(<Grid count={3}>
    <GridItem>
      <Button type="primary" iconDirection="left" icon="otaku-icon-search-line">左边 icon 的按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="primary" iconDirection="right" icon="otaku-icon-search-line">右边 icon 的按钮</Button>
    </GridItem>
  </Grid>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", null, "\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.HighlightCode, {
    lang: `tsx`,
    code: `ReactDOM.createRoot(container).render(<Grid count={3}>
    <GridItem>
      <Button type="primary" iconDirection="left" icon="otaku-icon-search-line">左边 icon 的按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="primary" iconDirection="right" icon="otaku-icon-search-line">右边 icon 的按钮</Button>
    </GridItem>
  </Grid>)
`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h2", {
    id: "%E4%B8%8D%E5%90%8C%E5%BD%A2%E7%8A%B6%E7%9A%84%E6%8C%89%E9%92%AE",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("a", {
    className: "header-anchor",
    href: "#%E4%B8%8D%E5%90%8C%E5%BD%A2%E7%8A%B6%E7%9A%84%E6%8C%89%E9%92%AE"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " \u4E0D\u540C\u5F62\u72B6\u7684\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_7__.CodeExample, {
    desc: `这个是按钮的描述`,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      count: 5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "primary",
      shape: "round"
    }, "\u5706\u89D2\u6309\u94AE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "primary",
      shape: "circle",
      icon: "otaku-icon-search-line"
    })))),
    code: `import { Button, Space, Grid, GridItem } from 'otaku-ui'
ReactDOM.createRoot(container).render(<Grid count={5}>
    <GridItem>
      <Button type="primary" shape="round">圆角按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="primary" shape="circle" icon="otaku-icon-search-line"></Button>
    </GridItem>
  </Grid>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", null, "\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.HighlightCode, {
    lang: `tsx`,
    code: `ReactDOM.createRoot(container).render(<Grid count={5}>
    <GridItem>
      <Button type="primary" shape="round">圆角按钮</Button>
    </GridItem>
    <GridItem>
      <Button type="primary" shape="circle" icon="otaku-icon-search-line"></Button>
    </GridItem>
  </Grid>)
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
  }, "#")), " API"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(site_component_api_api__WEBPACK_IMPORTED_MODULE_6__.Api, {
    code: `export interface ButtonProps {
  disabled?: boolean
  loading?: boolean
  ghost?: boolean
  icon?: string
  bgcolor?: string
  color?: string
  className?: string
  href?: string
  target?: '_blank' | '_self'
  shape?: 'round' | 'circle'
  type?: 'default' | 'text' | 'primary' | 'success' | 'warning' | 'danger' | 'link'
  iconDirection?: 'left' | 'right'
  size?: 'small' | 'middle' |'large'
  style?: React.CSSProperties
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLElement>
}`,
    data: `[{"name":"Button","data":[{"name":"disabled","type":"boolean","required":false,"typeReference":null,"jsDoc":[]},{"name":"loading","type":"boolean","required":false,"typeReference":null,"jsDoc":[]},{"name":"ghost","type":"boolean","required":false,"typeReference":null,"jsDoc":[]},{"name":"icon","type":"string","required":false,"typeReference":null,"jsDoc":[]},{"name":"bgcolor","type":"string","required":false,"typeReference":null,"jsDoc":[]},{"name":"color","type":"string","required":false,"typeReference":null,"jsDoc":[]},{"name":"className","type":"string","required":false,"typeReference":null,"jsDoc":[]},{"name":"href","type":"string","required":false,"defaultValue":"","typeReference":null,"jsDoc":[]},{"name":"target","type":"'_blank' | '_self'","required":false,"defaultValue":"_blank","typeReference":null,"jsDoc":[]},{"name":"shape","type":"'round' | 'circle'","required":false,"typeReference":null,"jsDoc":[]},{"name":"type","type":"'default' | 'text' | 'primary' | 'success' | 'warning' | 'danger' | 'link'","required":false,"defaultValue":"default","typeReference":null,"jsDoc":[]},{"name":"iconDirection","type":"'left' | 'right'","required":false,"defaultValue":"left","typeReference":null,"jsDoc":[]},{"name":"size","type":"'small' | 'middle' |'large'","required":false,"defaultValue":"middle","typeReference":null,"jsDoc":[]},{"name":"style","type":"React.CSSProperties","required":false,"typeReference":null,"jsDoc":[]},{"name":"children","type":"React.ReactNode","required":false,"typeReference":null,"jsDoc":[]},{"name":"onClick","type":"React.MouseEventHandler<HTMLElement>","required":false,"typeReference":null,"jsDoc":[]}]}]`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.Anchor, {
    target: ".main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.AnchorItem, {
    href: `#button-按钮`,
    title: `Button 按钮`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.AnchorItem, {
    href: `#圆角按钮`,
    title: `圆角按钮`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.AnchorItem, {
    href: `#disabled-禁用`,
    title: `Disabled 禁用`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.AnchorItem, {
    href: `#loading-加载状态`,
    title: `loading 加载状态`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.AnchorItem, {
    href: `#幽灵按钮`,
    title: `幽灵按钮`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.AnchorItem, {
    href: `#不同大小的按钮`,
    title: `不同大小的按钮`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.AnchorItem, {
    href: `#自定义按钮颜色`,
    title: `自定义按钮颜色`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.AnchorItem, {
    href: `#具有-icon-的按钮`,
    title: `具有 icon 的按钮`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.AnchorItem, {
    href: `#不同形状的按钮`,
    title: `不同形状的按钮`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_3__.AnchorItem, {
    href: `#api`,
    title: `API`
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
//# sourceMappingURL=otaku-ui_src_lib_button_demo_README_md-src_components_api_style_scss-src_components_block_sty-38786d.7d5b6d4298748abcca69.js.map