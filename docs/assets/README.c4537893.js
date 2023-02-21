import{b as t}from"./index.50043c3d.js";import"./style.6ba18b76.js";import{A as m,a as p}from"./style.d309e604.js";import"./index.a667917b.js";import{B as i}from"./button.dec6ac64.js";import{C as c,T as d}from"./codeExample.b35ba111.js";import{H as r}from"./highlightCode.59aa7d3b.js";import"./typescript.78515962.js";function s(){const a=[["top-start","top","top-end"],["left-start","","right-start"],["left","","right"],["left-end","","right-end"],["bottom-start","bottom","bottom-end"]];return t.createElement("ul",{className:"demo-tooltip"},a.map((l,e)=>t.createElement("li",{index:e,className:"row"},l.map((o,n)=>e>0&&e<4&&![0,2].includes(n)?t.createElement("span",null):t.createElement(d,{placement:o,content:o},t.createElement(i,null,o))))))}function N(){return t.createElement(t.Fragment,null,t.createElement("div",{className:"markdown-body"},t.createElement("h2",{id:"tooltip",tabIndex:"-1"},t.createElement("a",{className:"header-anchor",href:"#tooltip"},t.createElement("span",{className:"b-anchor"}),t.createElement("span",{"aria-hidden":"false"},"#"))," Tooltip"),t.createElement(c,{desc:"\u591A\u4E2A\u65B9\u5411\u7684 Tooltip",lang:"tsx",example:t.createElement(t.Fragment,null,t.createElement("style",null,`:root {
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
`),t.createElement(s,null)),code:`import { useRef } from 'react'
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
`,style:{lang:"css",code:`:root {
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
`}},t.createElement("p",null,"\u591A\u4E2A\u65B9\u5411\u7684 Tooltip"),t.createElement("pre",null,t.createElement("code",{className:"language-tsx"},t.createElement(r,{lang:"tsx",code:`function Demo () {
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
`}))),t.createElement("pre",null,t.createElement("code",{className:"language-css"},t.createElement(r,{lang:"css",code:`:root {
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
`}))))),t.createElement(m,{target:".main"},t.createElement(p,{href:"#tooltip",title:"Tooltip"})))}export{N as default};
