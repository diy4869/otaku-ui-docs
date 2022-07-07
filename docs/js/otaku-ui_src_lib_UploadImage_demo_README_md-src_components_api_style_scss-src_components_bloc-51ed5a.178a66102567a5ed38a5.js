"use strict";
(self["webpackChunkotaku_site"] = self["webpackChunkotaku_site"] || []).push([["otaku-ui_src_lib_UploadImage_demo_README_md-src_components_api_style_scss-src_components_bloc-51ed5a"],{

/***/ "../otaku-ui/src/lib/UploadImage/demo/README.md":
/*!******************************************************!*\
  !*** ../otaku-ui/src/lib/UploadImage/demo/README.md ***!
  \******************************************************/
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
  const [show, setShow] = useState(false);
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

function Demo4() {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Tree, {
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

function Demo9() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Avatar, {
    src: "http://test"
  });
}

function Demo10() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Avatar, {
    src: "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics7.baidu.com%2Ffeed%2F6c224f4a20a446237db37993bb07c9070df3d7f1.jpeg%3Ftoken%3Dfb47d955fdbdf3d0563b5721c4f75902&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1642438800&t=e35b9d4bfe1c0866fecad5a3a5c79fee"
  });
}

function Demo11() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.UploadImage, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
    type: "primary"
  }, "\u56FE\u7247\u4E0A\u4F20"));
}

function MdReact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "markdown-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    id: "%E5%9B%BE%E7%89%87%E4%B8%8A%E4%BC%A0",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    className: "header-anchor",
    href: "#%E5%9B%BE%E7%89%87%E4%B8%8A%E4%BC%A0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " \u56FE\u7247\u4E0A\u4F20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_6__.CodeExample, {
    desc: ``,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Demo11, null)),
    code: `import { UploadImage, Button } from 'otaku-ui'
function Demo () {
  return (
    <UploadImage>
      <Button type="primary">图片上传</Button>
    </UploadImage>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`,
    style: {
      lang: `css`,
      code: ``
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("code", {
    className: "language-tsx"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.HighlightCode, {
    lang: `tsx`,
    code: `function Demo () {
  return (
    <UploadImage>
      <Button type="primary">图片上传</Button>
    </UploadImage>
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
    code: ``,
    data: `[]`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Anchor, {
    target: ".main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.AnchorItem, {
    href: `#图片上传`,
    title: `图片上传`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.AnchorItem, {
    href: `#api`,
    title: `api`
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MdReact);

/***/ })

}]);
//# sourceMappingURL=otaku-ui_src_lib_UploadImage_demo_README_md-src_components_api_style_scss-src_components_bloc-51ed5a.178a66102567a5ed38a5.js.map