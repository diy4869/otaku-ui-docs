import{b as e,r as m}from"./index.50043c3d.js";import"./style.6ba18b76.js";import{A as d}from"./api.7d806942.js";import{A as E,a as r}from"./style.d309e604.js";import"./index.a667917b.js";import{H as a}from"./highlightCode.59aa7d3b.js";import{G as s,a as n}from"./grid.af91fe04.js";import{I as i}from"./inputNumber.64d5f9df.js";import{P as t}from"./progress.37997f6b.js";import{C as c}from"./codeExample.b35ba111.js";import"./index.es.9ce522ce.js";import"./typescript.78515962.js";function g(){let[l,o]=m.exports.useState(0);return e.createElement(e.Fragment,null,e.createElement(i,{value:l,step:10,onChange:u=>{o(u)}}),e.createElement(s,{className:"demo-progress"},e.createElement(n,null,e.createElement(t,{percentage:l,type:"circle"})),e.createElement(n,null,e.createElement(t,{percentage:l})),e.createElement(n,null,e.createElement(t,{percentage:l,direction:"vertical"}))))}function N(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown-body"},e.createElement("h2",{id:"progress-%E8%BF%9B%E5%BA%A6%E6%9D%A1",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#progress-%E8%BF%9B%E5%BA%A6%E6%9D%A1"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," Progress \u8FDB\u5EA6\u6761"),e.createElement(c,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(t,null)),code:`import { Progress, Grid, GridItem, Button, InputNumber } from 'otaku-ui'
import { useState } from 'react'

ReactDOM.createRoot(container).render(<Progress></Progress>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(a,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Progress></Progress>)
`})))),e.createElement("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%87%E5%AD%97",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%87%E5%AD%97"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u81EA\u5B9A\u4E49\u6587\u5B57"),e.createElement(c,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(t,null,"10%")),code:`import { Progress, Grid, GridItem, Button, InputNumber } from 'otaku-ui'
import { useState } from 'react'

ReactDOM.createRoot(container).render(<Progress>10%</Progress>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(a,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Progress>10%</Progress>)
`})))),e.createElement("h2",{id:"%E8%BF%9B%E5%BA%A6%E6%9D%A1%E5%86%85%E6%98%BE%E7%A4%BA%E6%96%87%E5%AD%97",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E8%BF%9B%E5%BA%A6%E6%9D%A1%E5%86%85%E6%98%BE%E7%A4%BA%E6%96%87%E5%AD%97"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u8FDB\u5EA6\u6761\u5185\u663E\u793A\u6587\u5B57"),e.createElement(c,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(t,{inner:!0,percentage:50},"50%")),code:`import { Progress, Grid, GridItem, Button, InputNumber } from 'otaku-ui'
import { useState } from 'react'

ReactDOM.createRoot(container).render(<Progress inner percentage={50}>50%</Progress>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(a,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Progress inner percentage={50}>50%</Progress>)
`})))),e.createElement("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u81EA\u5B9A\u4E49\u989C\u8272"),e.createElement(c,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(t,{inner:!0,percentage:50,color:"red"},"50%")),code:`import { Progress, Grid, GridItem, Button, InputNumber } from 'otaku-ui'
import { useState } from 'react'

ReactDOM.createRoot(container).render(<Progress inner percentage={50} color="red">50%</Progress>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(a,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Progress inner percentage={50} color="red">50%</Progress>)
`})))),e.createElement("h2",{id:"%E5%9E%82%E7%9B%B4%E7%9A%84%E8%BF%9B%E5%BA%A6%E6%9D%A1",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E5%9E%82%E7%9B%B4%E7%9A%84%E8%BF%9B%E5%BA%A6%E6%9D%A1"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u5782\u76F4\u7684\u8FDB\u5EA6\u6761"),e.createElement(c,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(s,null,e.createElement(n,null,e.createElement(t,{inner:!0,percentage:50,color:"red",direction:"vertical"},"50%")),e.createElement(n,null,e.createElement(t,{percentage:50,direction:"vertical"},"50%")))),code:`import { Progress, Grid, GridItem, Button, InputNumber } from 'otaku-ui'
import { useState } from 'react'

ReactDOM.createRoot(container).render(<Grid>
    <GridItem>
      <Progress inner percentage={50} color="red" direction="vertical">50%</Progress>
    </GridItem>
    <GridItem>
      <Progress percentage={50}  direction="vertical">50%</Progress>
    </GridItem>
  </Grid>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(a,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Grid>
    <GridItem>
      <Progress inner percentage={50} color="red" direction="vertical">50%</Progress>
    </GridItem>
    <GridItem>
      <Progress percentage={50}  direction="vertical">50%</Progress>
    </GridItem>
  </Grid>)
`})))),e.createElement("h2",{id:"%E5%9C%86%E5%BD%A2%E8%BF%9B%E5%BA%A6%E6%9D%A1",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E5%9C%86%E5%BD%A2%E8%BF%9B%E5%BA%A6%E6%9D%A1"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u5706\u5F62\u8FDB\u5EA6\u6761"),e.createElement(c,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(s,null,e.createElement(n,null,e.createElement(t,{percentage:50,type:"circle"},"50%")),e.createElement(n,null,e.createElement(t,{percentage:20,type:"circle"},"20%")),e.createElement(n,null,e.createElement(t,{percentage:90,type:"circle"},"90%")))),code:`import { Progress, Grid, GridItem, Button, InputNumber } from 'otaku-ui'
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
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(a,{lang:"tsx",code:`
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
`})))),e.createElement("h2",{id:"%E5%8F%98%E5%8C%96%E7%9A%84%E8%BF%9B%E5%BA%A6%E6%9D%A1",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E5%8F%98%E5%8C%96%E7%9A%84%E8%BF%9B%E5%BA%A6%E6%9D%A1"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u53D8\u5316\u7684\u8FDB\u5EA6\u6761"),e.createElement(c,{desc:"sdaf",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,`.otaku-grid {
  align-items: center;
  justify-items: center;
}
`),e.createElement(g,null)),code:`import { Progress, Grid, GridItem, Button, InputNumber } from 'otaku-ui'
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
`,style:{lang:"css",code:`.otaku-grid {
  align-items: center;
  justify-items: center;
}
`}},e.createElement("p",null,"sdaf"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(a,{lang:"tsx",code:`
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
`}))),e.createElement("pre",null,e.createElement("code",{className:"language-css"},e.createElement(a,{lang:"css",code:`.otaku-grid {
  align-items: center;
  justify-items: center;
}
`})))),e.createElement("h2",{id:"api",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#api"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," api"),e.createElement(e.Fragment,null,e.createElement(d,{code:`interface ProgressProps {
  inner?: boolean
  percentage?: number
  max?: number
  color?: string
  type?: 'circle'
  direction?: 'vertical' | 'horizontal'
  lineWidth?: number
}`,html:`<h2>Progress</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>inner</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>percentage</td>
                            <td>\u5426</td>
                            <td>number</td>
                            <td>0</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>max</td>
                            <td>\u5426</td>
                            <td>number</td>
                            <td>100</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>color</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>type</td>
                            <td>\u5426</td>
                            <td>'circle'</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>direction</td>
                            <td>\u5426</td>
                            <td>'vertical' | 'horizontal'</td>
                            <td>horizontal</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>lineWidth</td>
                            <td>\u5426</td>
                            <td>number</td>
                            <td>14</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),e.createElement(E,{target:".main"},e.createElement(r,{href:"#progress-\u8FDB\u5EA6\u6761",title:"Progress \u8FDB\u5EA6\u6761"}),e.createElement(r,{href:"#\u81EA\u5B9A\u4E49\u6587\u5B57",title:"\u81EA\u5B9A\u4E49\u6587\u5B57"}),e.createElement(r,{href:"#\u8FDB\u5EA6\u6761\u5185\u663E\u793A\u6587\u5B57",title:"\u8FDB\u5EA6\u6761\u5185\u663E\u793A\u6587\u5B57"}),e.createElement(r,{href:"#\u81EA\u5B9A\u4E49\u989C\u8272",title:"\u81EA\u5B9A\u4E49\u989C\u8272"}),e.createElement(r,{href:"#\u5782\u76F4\u7684\u8FDB\u5EA6\u6761",title:"\u5782\u76F4\u7684\u8FDB\u5EA6\u6761"}),e.createElement(r,{href:"#\u5706\u5F62\u8FDB\u5EA6\u6761",title:"\u5706\u5F62\u8FDB\u5EA6\u6761"}),e.createElement(r,{href:"#\u53D8\u5316\u7684\u8FDB\u5EA6\u6761",title:"\u53D8\u5316\u7684\u8FDB\u5EA6\u6761"}),e.createElement(r,{href:"#api",title:"api"})))}export{N as default};
