"use strict";
(self["webpackChunkotaku_site"] = self["webpackChunkotaku_site"] || []).push([["otaku-ui_src_lib_cropper_demo_README_md-src_components_api_style_scss-src_components_block_st-ea7d6a"],{

/***/ "../otaku-ui/src/lib/cropper/demo/README.md":
/*!**************************************************!*\
  !*** ../otaku-ui/src/lib/cropper/demo/README.md ***!
  \**************************************************/
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
/* harmony import */ var _miku_jfif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../miku.jfif */ "../otaku-ui/src/lib/cropper/miku.jfif");
/* harmony import */ var site_component_block_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! site-component/block/block */ "./src/components/block/block.tsx");
/* harmony import */ var site_component_api_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! site-component/api/api */ "./src/components/api/api.tsx");
/* harmony import */ var site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! site-component/codeExample/codeExample */ "./src/components/codeExample/codeExample.tsx");











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
  }, "\u56FE\u7247\u88C1\u526A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.ImageCropper, {
    visible: show,
    imageURL: _miku_jfif__WEBPACK_IMPORTED_MODULE_4__["default"],
    onClose: () => setShow(false),
    onCancel: () => setShow(false),
    onConfirm: () => setShow(false)
  }));
}

function MdReact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "markdown-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    id: "imagecropper-%E5%9B%BE%E7%89%87%E8%A3%81%E5%89%AA",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    className: "header-anchor",
    href: "#imagecropper-%E5%9B%BE%E7%89%87%E8%A3%81%E5%89%AA"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "b-anchor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "false"
  }, "#")), " ImageCropper \u56FE\u7247\u88C1\u526A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(site_component_codeExample_codeExample__WEBPACK_IMPORTED_MODULE_7__.CodeExample, {
    desc: ``,
    lang: `tsx`,
    example: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("style", null, ``), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Demo3, null)),
    code: `import { ImageCropper, Button } from 'otaku-ui'
import { useState } from 'react'
import miku from '../miku.jfif'
function Demo () {
  const [show, setShow] = useState(false)

  return (
    <div>
      <Button type="primary" onClick={() => {
        setShow(true)
      }}>图片裁剪</Button>
      <ImageCropper 
        visible={show} 
        imageURL={miku}
        onClose={() => setShow(false)}
        onCancel={() => setShow(false)}
        onConfirm={() => setShow(false)}>
      </ImageCropper>
    </div>
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
  const [show, setShow] = useState(false)

  return (
    <div>
      <Button type="primary" onClick={() => {
        setShow(true)
      }}>图片裁剪</Button>
      <ImageCropper 
        visible={show} 
        imageURL={miku}
        onClose={() => setShow(false)}
        onCancel={() => setShow(false)}
        onConfirm={() => setShow(false)}>
      </ImageCropper>
    </div>
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
  }, "#")), " api"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(site_component_api_api__WEBPACK_IMPORTED_MODULE_6__.Api, {
    code: `export interface ImageCropperProps {
  imageURL: string
  visible?: boolean
  circle?: boolean
  options?: Omit<Cropper.Options, 'preview'>
  action?: React.ReactNode
  outputFilename?: string
  children?: React.ReactNode
  getInstance?: (instance: Cropper) => void
  onClose?: () => void
  onCancel?: () => void
  onConfirm?: (cropperData: outputResult) => void
}`,
    data: `[{"name":"ImageCropper","data":[{"name":"imageURL","type":"string","required":true,"typeReference":null,"jsDoc":[]},{"name":"visible","type":"boolean","required":false,"typeReference":null,"jsDoc":[]},{"name":"circle","type":"boolean","required":false,"typeReference":null,"jsDoc":[]},{"name":"options","type":"Omit<Cropper.Options, 'preview'>","required":false,"typeReference":null,"jsDoc":[]},{"name":"action","type":"React.ReactNode","required":false,"typeReference":null,"jsDoc":[]},{"name":"outputFilename","type":"string","required":false,"defaultValue":"cropper.png","typeReference":null,"jsDoc":[]},{"name":"children","type":"React.ReactNode","required":false,"typeReference":null,"jsDoc":[]},{"name":"getInstance","type":"(instance: Cropper) => void","required":false,"typeReference":null,"jsDoc":[]},{"name":"onClose","type":"() => void","required":false,"typeReference":null,"jsDoc":[]},{"name":"onCancel","type":"() => void","required":false,"typeReference":null,"jsDoc":[]},{"name":"onConfirm","type":"(cropperData: outputResult) => void","required":false,"typeReference":null,"jsDoc":[]}]}]`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.Anchor, {
    target: ".main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.AnchorItem, {
    href: `#imagecropper-图片裁剪`,
    title: `ImageCropper 图片裁剪`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(otaku_ui__WEBPACK_IMPORTED_MODULE_2__.AnchorItem, {
    href: `#api`,
    title: `api`
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MdReact);

/***/ }),

/***/ "../otaku-ui/src/lib/cropper/miku.jfif":
/*!*********************************************!*\
  !*** ../otaku-ui/src/lib/cropper/miku.jfif ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/miku.dc87b31e.jfif");

/***/ })

}]);
//# sourceMappingURL=otaku-ui_src_lib_cropper_demo_README_md-src_components_api_style_scss-src_components_block_st-ea7d6a.2ded1745ca66dcdf9ce6.js.map