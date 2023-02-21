import{b as e}from"./index.50043c3d.js";import"./style.6ba18b76.js";import{A as l,a,m as c,S as i}from"./style.d309e604.js";import"./index.a667917b.js";import{B as o}from"./button.dec6ac64.js";import{H as r}from"./highlightCode.59aa7d3b.js";import{C as u}from"./codeExample.b35ba111.js";import"./typescript.78515962.js";function E(){return e.createElement(o,{onClick:()=>c.info("\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A")},"\u4FE1\u606F\u63D0\u793A")}function p(){const s=["info","success","warning","error"],m=["default","success","warning","danger"];return e.createElement(i,null,s.map((t,n)=>e.createElement(o,{type:m[n],key:n,onClick:()=>c[t]("\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A")},t)))}function h(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown-body"},e.createElement("h2",{id:"message-%E4%BF%A1%E6%81%AF",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#message-%E4%BF%A1%E6%81%AF"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," Message \u4FE1\u606F"),e.createElement(u,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(E,null)),code:`import { Button, Space, Notice, message } from 'otaku-ui'

function Demo () {
  return (
    <Button 
      onClick={() => message.info('\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A')}>
      \u4FE1\u606F\u63D0\u793A
    </Button>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(r,{lang:"tsx",code:`function Demo () {
  return (
    <Button 
      onClick={() => message.info('\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A')}>
      \u4FE1\u606F\u63D0\u793A
    </Button>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`})))),e.createElement("h2",{id:"%E4%B8%8D%E5%90%8C%E7%8A%B6%E6%80%81",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E4%B8%8D%E5%90%8C%E7%8A%B6%E6%80%81"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u4E0D\u540C\u72B6\u6001"),e.createElement(u,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(p,null)),code:`import { Button, Space, Notice, message } from 'otaku-ui'

function Demo () {
  const type = ['info', 'success', 'warning', 'error']
  const btnType = ['default', 'success', 'warning', 'danger']

  return (
    <Space>
      {
        type.map((item, index) => {
          return (
            <Button 
              type={btnType[index]} 
              key={index} 
              onClick={() => message[item]("\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A")}>
              {item}
            </Button>
          )
        })
      }
    </Space>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(r,{lang:"tsx",code:`function Demo () {
  const type = ['info', 'success', 'warning', 'error']
  const btnType = ['default', 'success', 'warning', 'danger']

  return (
    <Space>
      {
        type.map((item, index) => {
          return (
            <Button 
              type={btnType[index]} 
              key={index} 
              onClick={() => message[item]("\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A")}>
              {item}
            </Button>
          )
        })
      }
    </Space>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`}))))),e.createElement(l,{target:".main"},e.createElement(a,{href:"#message-\u4FE1\u606F",title:"Message \u4FE1\u606F"}),e.createElement(a,{href:"#\u4E0D\u540C\u72B6\u6001",title:"\u4E0D\u540C\u72B6\u6001"})))}export{h as default};
