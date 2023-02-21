import{c as m,j as a,b as e}from"./index.50043c3d.js";import"./style.6ba18b76.js";import{A as l}from"./api.7d806942.js";import{A as o,a as i}from"./style.d309e604.js";import"./index.a667917b.js";import{H as s}from"./highlightCode.59aa7d3b.js";import{P as r}from"./picker-select.f9e05446.js";import{C as u}from"./codeExample.b35ba111.js";import"./typescript.78515962.js";function d(p){const t=c=>Array.from({length:c}).map((h,n)=>({id:n,name:`${n}`.padStart(2,"0")}));return m("section",{className:"otaku-time-panel",children:[a(r,{columns:t(24)}),a(r,{columns:t(59)}),a(r,{columns:t(59)})]})}function A(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown-body"},e.createElement(u,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(d,null)),code:`import { TimePicker } from 'otaku-ui'

ReactDOM.createRoot(container).render(<TimePicker/>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(s,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<TimePicker/>)
`})))),e.createElement("h2",{id:"api",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#api"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," api"),e.createElement(e.Fragment,null,e.createElement(l,{code:`export interface TimePickerProps {
  children: React.ReactNode
}`,html:`<h2>TimePicker</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>children</td>
                            <td>\u662F</td>
                            <td>React.ReactNode</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),e.createElement(o,{target:".main"},e.createElement(i,{href:"#api",title:"api"})))}export{A as default};
