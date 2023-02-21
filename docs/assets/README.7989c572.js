import{r as o,j as i,c as p,b as e}from"./index.470a316f.js";import"./style.6ba18b76.js";import{A}from"./api.f99173f3.js";import{R as g,c as f,z as b,A as x,a as u}from"./style.deb3bbcd.js";import"./index.a667917b.js";import{H as d}from"./highlightCode.7ddbf745.js";import{C as r}from"./codeExample.3261d776.js";import"./typescript.627707e9.js";function n(s){const{checked:t,disabled:m,children:h,onChange:l}=s,[R,E]=o.exports.useState(t),c=o.exports.useContext(g);o.exports.useEffect(()=>{E(t)},[t]);const F=a=>{console.log(a,a.target.checked,a.target.name),E(a.target.checked),l==null||l(a)};return i("div",{className:"otaku-radio-container",children:p("label",{htmlFor:"value",className:"otaku-radio-label",children:[i("input",{type:"radio",id:"value",name:c==null?void 0:c.name,checked:R,className:"otaku-radio",disabled:m,onChange:F}),i("span",{className:f({"otaku-radio-disabled":m}),children:h})]})})}function M(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown-body"},e.createElement("h2",{id:"radio-%E5%8D%95%E9%80%89%E6%A1%86",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#radio-%E5%8D%95%E9%80%89%E6%A1%86"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," Radio \u5355\u9009\u6846"),e.createElement(r,{desc:"\u7B80\u5355\u7684 Radio",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(n,null,"\u5355\u9009\u6846")),code:`import { Radio, RadioGroup } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Radio>\u5355\u9009\u6846</Radio>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u7B80\u5355\u7684 Radio"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(d,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Radio>\u5355\u9009\u6846</Radio>)
`})))),e.createElement("h2",{id:"%E5%8D%95%E9%80%89%E6%A1%86%E7%BB%84",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E5%8D%95%E9%80%89%E6%A1%86%E7%BB%84"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u5355\u9009\u6846\u7EC4"),e.createElement(r,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(b,{value:1},new Array(3).fill(void 0).map((s,t)=>e.createElement(n,{value:t,key:t},"\u7B2C",t,"\u4E2A\u5355\u9009")))),code:`import { Radio, RadioGroup } from 'otaku-ui'

ReactDOM.createRoot(container).render(<RadioGroup value={1}>
    {
      new Array(3).fill(undefined).map((_, index) => {
        return (
          <Radio value={index} key={index}>\u7B2C{index}\u4E2A\u5355\u9009</Radio>
        )
      })
    }
  </RadioGroup>
)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(d,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<RadioGroup value={1}>
    {
      new Array(3).fill(undefined).map((_, index) => {
        return (
          <Radio value={index} key={index}>\u7B2C{index}\u4E2A\u5355\u9009</Radio>
        )
      })
    }
  </RadioGroup>
)
`})))),e.createElement("h2",{id:"%E9%BB%98%E8%AE%A4%E9%80%89%E4%B8%AD",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E9%BB%98%E8%AE%A4%E9%80%89%E4%B8%AD"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u9ED8\u8BA4\u9009\u4E2D"),e.createElement(r,{desc:"\u7B80\u5355\u7684 Radio",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(n,{checked:!0},"\u591A\u9009\u6846")),code:`import { Radio, RadioGroup } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Radio checked={true}>\u591A\u9009\u6846</Radio>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u7B80\u5355\u7684 Radio"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(d,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Radio checked={true}>\u591A\u9009\u6846</Radio>)
`})))),e.createElement("h2",{id:"%E7%A6%81%E7%94%A8",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E7%A6%81%E7%94%A8"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u7981\u7528"),e.createElement(r,{desc:"\u7981\u7528\u7684 Radio",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(n,{checked:!0,disabled:!0},"\u591A\u9009\u6846")),code:`import { Radio, RadioGroup } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Radio disabled>\u591A\u9009\u6846</Radio>)
ReactDOM.createRoot(container).render(<Radio checked={true} disabled>\u591A\u9009\u6846</Radio>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u7981\u7528\u7684 Radio"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(d,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Radio disabled>\u591A\u9009\u6846</Radio>)
ReactDOM.createRoot(container).render(<Radio checked={true} disabled>\u591A\u9009\u6846</Radio>)
`})))),e.createElement("h2",{id:"api",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#api"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," Api"),e.createElement(e.Fragment,null,e.createElement(A,{code:`interface RadioProps {
  value: number | string
  checked?: boolean
  disabled?: boolean
  children?: React.ReactNode
  onChange?: (e?: React.BaseSyntheticEvent) => void
}

interface RadioGroupProps {
  value: number | string
  name?: string
  children: React.ReactNode[]
  onChange?: (e?: React.BaseSyntheticEvent) => void
}`,html:`<h2>Radio</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>value</td>
                            <td>\u662F</td>
                            <td>number | string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>checked</td>
                            <td>\u5426</td>
                            <td>boolean</td>
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
                            <td>children</td>
                            <td>\u5426</td>
                            <td>React.ReactNode</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>onChange</td>
                            <td>\u5426</td>
                            <td>(e?: React.BaseSyntheticEvent) => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
<h2>RadioGroup</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>value</td>
                            <td>\u662F</td>
                            <td>number | string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>name</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td>value</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>children</td>
                            <td>\u662F</td>
                            <td>React.ReactNode[]</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>onChange</td>
                            <td>\u5426</td>
                            <td>(e?: React.BaseSyntheticEvent) => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),e.createElement(x,{target:".main"},e.createElement(u,{href:"#radio-\u5355\u9009\u6846",title:"Radio \u5355\u9009\u6846"}),e.createElement(u,{href:"#\u5355\u9009\u6846\u7EC4",title:"\u5355\u9009\u6846\u7EC4"}),e.createElement(u,{href:"#\u9ED8\u8BA4\u9009\u4E2D",title:"\u9ED8\u8BA4\u9009\u4E2D"}),e.createElement(u,{href:"#\u7981\u7528",title:"\u7981\u7528"}),e.createElement(u,{href:"#api",title:"Api"})))}export{M as default};
