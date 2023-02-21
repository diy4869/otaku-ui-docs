import{r as E,c as p,j as n,b as e}from"./index.470a316f.js";import"./style.6ba18b76.js";import{A as h}from"./api.f99173f3.js";import{x as F,c as A,I as f,A as x,a as r,y as o}from"./style.deb3bbcd.js";import"./index.a667917b.js";import{H as c}from"./highlightCode.7ddbf745.js";import{C as d}from"./codeExample.3261d776.js";import"./typescript.627707e9.js";function i(l){const{value:t,children:m}=l,{selected:a,multiple:u}=E.exports.useContext(F),s=u&&Array.isArray(a)&&a.includes(t)?"otaku-select-option-multiple-active":a===t?"otaku-select-option-active":"";return p("li",{className:A("otaku-select-option",s),value:t,children:[n("span",{value:t,children:m}),u&&Array.isArray(a)&&a.includes(t)&&n(f,{name:"select-bold"})]})}function C(){return e.createElement(o,null,new Array(2e3).fill().map((l,t)=>e.createElement(i,{value:t,key:t},"\u7B2C",t,"\u4E2A\u9009\u9879")))}function S(){return e.createElement(o,{multiple:!0},new Array(20).fill().map((l,t)=>e.createElement(i,{value:t,key:t},"\u7B2C",t,"\u4E2A\u9009\u9879")))}function v(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown-body"},e.createElement("h2",{id:"select-%E4%B8%8B%E6%8B%89%E6%A1%86",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#select-%E4%B8%8B%E6%8B%89%E6%A1%86"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," Select \u4E0B\u62C9\u6846"),e.createElement(d,{desc:"\u7B80\u5355\u7684\u5355\u9009",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(C,null)),code:`import { Select, SelectOption } from 'otaku-ui'

function Demo () {
  return (
    <Select>
      {
        new Array(2000).fill().map((_, index) => {
          return (
            <SelectOption
              value={index}
              key={index}>\u7B2C{index}\u4E2A\u9009\u9879</SelectOption>
          )
        })
      }
    </Select>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)

`,style:{lang:"css",code:""}},e.createElement("p",null,"\u7B80\u5355\u7684\u5355\u9009"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(c,{lang:"tsx",code:`function Demo () {
  return (
    <Select>
      {
        new Array(2000).fill().map((_, index) => {
          return (
            <SelectOption
              value={index}
              key={index}>\u7B2C{index}\u4E2A\u9009\u9879</SelectOption>
          )
        })
      }
    </Select>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)

`})))),e.createElement("h2",{id:"select-%E5%A4%9A%E9%80%89",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#select-%E5%A4%9A%E9%80%89"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," Select \u591A\u9009"),e.createElement(d,{desc:"\u7B80\u5355\u7684\u5355\u9009",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(S,null)),code:`import { Select, SelectOption } from 'otaku-ui'

function Demo () {
  return (
    <Select multiple>
      {
        new Array(20).fill().map((_, index) => {
          return (
            <SelectOption
              value={index}
              key={index}>\u7B2C{index}\u4E2A\u9009\u9879</SelectOption>
          )
        })
      }
    </Select>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)

`,style:{lang:"css",code:""}},e.createElement("p",null,"\u7B80\u5355\u7684\u5355\u9009"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(c,{lang:"tsx",code:`function Demo () {
  return (
    <Select multiple>
      {
        new Array(20).fill().map((_, index) => {
          return (
            <SelectOption
              value={index}
              key={index}>\u7B2C{index}\u4E2A\u9009\u9879</SelectOption>
          )
        })
      }
    </Select>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)

`})))),e.createElement("h2",{id:"api",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#api"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," api"),e.createElement(e.Fragment,null,e.createElement(h,{code:`interface SelectProps {
  size?: 'small' | 'middle' | 'large'
  multiple?: boolean
  disabled?: boolean
  value?: number | string | Array<string | number>
  placeholder?: string
  children?: React.ReactNode[]
}

export interface SelectOptionsProps {
  value?: number | string
  children?: React.ReactNode[]
}`,html:`<h2>Select</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>size</td>
                            <td>\u5426</td>
                            <td>'small' | 'middle' | 'large'</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>multiple</td>
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
                            <td>value</td>
                            <td>\u5426</td>
                            <td>number | string | Array<string | number></td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>placeholder</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>children</td>
                            <td>\u5426</td>
                            <td>React.ReactNode[]</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
<h2>SelectOption</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>value</td>
                            <td>\u5426</td>
                            <td>number | string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>children</td>
                            <td>\u5426</td>
                            <td>React.ReactNode[]</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),e.createElement(x,{target:".main"},e.createElement(r,{href:"#select-\u4E0B\u62C9\u6846",title:"Select \u4E0B\u62C9\u6846"}),e.createElement(r,{href:"#select-\u591A\u9009",title:"Select \u591A\u9009"}),e.createElement(r,{href:"#api",title:"api"})))}export{v as default};
