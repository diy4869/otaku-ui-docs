import{b as e}from"./index.470a316f.js";import"./style.6ba18b76.js";import{A as l}from"./api.f99173f3.js";import{A as m,a}from"./style.deb3bbcd.js";import"./index.a667917b.js";import{H as r}from"./highlightCode.7ddbf745.js";import{G as d,a as u}from"./grid.3b5566e4.js";import{I as t}from"./inputNumber.fd61c0c6.js";import{C as n}from"./codeExample.3261d776.js";import"./index.es.9ce522ce.js";import"./typescript.627707e9.js";function B(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown-body"},e.createElement("h2",{id:"inputnumber-%E8%AE%A1%E6%95%B0%E5%99%A8",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#inputnumber-%E8%AE%A1%E6%95%B0%E5%99%A8"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," InputNumber \u8BA1\u6570\u5668"),e.createElement(n,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(t,null)),code:`import { InputNumber, Grid, GridItem } from 'otaku-ui'

ReactDOM.createRoot(container).render(<InputNumber></InputNumber>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(r,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<InputNumber></InputNumber>)
`})))),e.createElement("h2",{id:"%E8%AE%BE%E7%BD%AE%E6%AD%A5%E9%95%BF",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E8%AE%BE%E7%BD%AE%E6%AD%A5%E9%95%BF"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u8BBE\u7F6E\u6B65\u957F"),e.createElement(n,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(t,{step:2})),code:`import { InputNumber, Grid, GridItem } from 'otaku-ui'

ReactDOM.createRoot(container).render(<InputNumber step={2}></InputNumber>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(r,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<InputNumber step={2}></InputNumber>)
`})))),e.createElement("h2",{id:"%E8%AE%BE%E7%BD%AE%E6%9C%80%E5%A4%A7-%E6%9C%80%E5%B0%8F%E5%80%BC",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E8%AE%BE%E7%BD%AE%E6%9C%80%E5%A4%A7-%E6%9C%80%E5%B0%8F%E5%80%BC"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u8BBE\u7F6E\u6700\u5927 \u6700\u5C0F\u503C"),e.createElement(n,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(t,{max:10,min:1})),code:`import { InputNumber, Grid, GridItem } from 'otaku-ui'

ReactDOM.createRoot(container).render(<InputNumber max={10} min={1}></InputNumber>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(r,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<InputNumber max={10} min={1}></InputNumber>)
`})))),e.createElement("h2",{id:"%E6%94%AF%E6%8C%81%E5%B0%8F%E6%95%B0",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E6%94%AF%E6%8C%81%E5%B0%8F%E6%95%B0"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u652F\u6301\u5C0F\u6570"),e.createElement(n,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(t,{value:.1,step:.1})),code:`import { InputNumber, Grid, GridItem } from 'otaku-ui'

ReactDOM.createRoot(container).render(<InputNumber value={0.1} step={0.1}></InputNumber>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(r,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<InputNumber value={0.1} step={0.1}></InputNumber>)
`})))),e.createElement("h2",{id:"%E4%B8%8D%E5%90%8C%E5%A4%A7%E5%B0%8F%E7%9A%84%E8%AE%A1%E6%95%B0%E5%99%A8",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E4%B8%8D%E5%90%8C%E5%A4%A7%E5%B0%8F%E7%9A%84%E8%AE%A1%E6%95%B0%E5%99%A8"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u4E0D\u540C\u5927\u5C0F\u7684\u8BA1\u6570\u5668"),e.createElement(n,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(d,{count:3},e.createElement(u,null,e.createElement(t,{size:"small"})),e.createElement(u,null,e.createElement(t,{size:"middle"})),e.createElement(u,null,e.createElement(t,{size:"large"})))),code:`import { InputNumber, Grid, GridItem } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Grid count={3}>
    <GridItem>
      <InputNumber size="small"></InputNumber>
    </GridItem>
    <GridItem>
      <InputNumber size="middle"></InputNumber>
    </GridItem>
    <GridItem>
      <InputNumber size="large"></InputNumber>
    </GridItem>
  </Grid>)

`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(r,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Grid count={3}>
    <GridItem>
      <InputNumber size="small"></InputNumber>
    </GridItem>
    <GridItem>
      <InputNumber size="middle"></InputNumber>
    </GridItem>
    <GridItem>
      <InputNumber size="large"></InputNumber>
    </GridItem>
  </Grid>)

`})))),e.createElement("h2",{id:"%E5%8F%AA%E8%AF%BB%E7%8A%B6%E6%80%81",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E5%8F%AA%E8%AF%BB%E7%8A%B6%E6%80%81"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u53EA\u8BFB\u72B6\u6001"),e.createElement(n,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(t,{readonly:!0})),code:`import { InputNumber, Grid, GridItem } from 'otaku-ui'

ReactDOM.createRoot(container).render(<InputNumber readonly></InputNumber>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(r,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<InputNumber readonly></InputNumber>)
`})))),e.createElement("h2",{id:"%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u7981\u7528\u72B6\u6001"),e.createElement(n,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(t,{disabled:!0})),code:`import { InputNumber, Grid, GridItem } from 'otaku-ui'

ReactDOM.createRoot(container).render(<InputNumber disabled></InputNumber>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(r,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<InputNumber disabled></InputNumber>)
`})))),e.createElement("h2",{id:"api",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#api"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," api"),e.createElement(e.Fragment,null,e.createElement(l,{code:`interface InputNumberProps {
  value?: number
  min?: number
  max?: number
  step?: number
  size?: 'small' | 'middle' | 'large'
  disabled?: boolean
  readonly?: boolean
  onChange?: (val?: number) => void
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onInput?: React.FormEventHandler<HTMLInputElement>
}`,html:`<h2>InputNumber</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>value</td>
                            <td>\u5426</td>
                            <td>number</td>
                            <td>1</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>min</td>
                            <td>\u5426</td>
                            <td>number</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>max</td>
                            <td>\u5426</td>
                            <td>number</td>
                            <td>Infinity</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>step</td>
                            <td>\u5426</td>
                            <td>number</td>
                            <td>1</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>size</td>
                            <td>\u5426</td>
                            <td>'small' | 'middle' | 'large'</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>disabled</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>readonly</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>onChange</td>
                            <td>\u5426</td>
                            <td>(val?: number) => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>onBlur</td>
                            <td>\u5426</td>
                            <td>React.FocusEventHandler<HTMLInputElement></td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>onFocus</td>
                            <td>\u5426</td>
                            <td>React.FocusEventHandler<HTMLInputElement></td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>onInput</td>
                            <td>\u5426</td>
                            <td>React.FormEventHandler<HTMLInputElement></td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),e.createElement(m,{target:".main"},e.createElement(a,{href:"#inputnumber-\u8BA1\u6570\u5668",title:"InputNumber \u8BA1\u6570\u5668"}),e.createElement(a,{href:"#\u8BBE\u7F6E\u6B65\u957F",title:"\u8BBE\u7F6E\u6B65\u957F"}),e.createElement(a,{href:"#\u8BBE\u7F6E\u6700\u5927-\u6700\u5C0F\u503C",title:"\u8BBE\u7F6E\u6700\u5927 \u6700\u5C0F\u503C"}),e.createElement(a,{href:"#\u652F\u6301\u5C0F\u6570",title:"\u652F\u6301\u5C0F\u6570"}),e.createElement(a,{href:"#\u4E0D\u540C\u5927\u5C0F\u7684\u8BA1\u6570\u5668",title:"\u4E0D\u540C\u5927\u5C0F\u7684\u8BA1\u6570\u5668"}),e.createElement(a,{href:"#\u53EA\u8BFB\u72B6\u6001",title:"\u53EA\u8BFB\u72B6\u6001"}),e.createElement(a,{href:"#\u7981\u7528\u72B6\u6001",title:"\u7981\u7528\u72B6\u6001"}),e.createElement(a,{href:"#api",title:"api"})))}export{B as default};
