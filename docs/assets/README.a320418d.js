import{b as t}from"./index.50043c3d.js";import"./style.6ba18b76.js";import{A as r}from"./api.7d806942.js";import{S as n,A as l,a as d}from"./style.d309e604.js";import"./index.a667917b.js";import{H as a}from"./highlightCode.59aa7d3b.js";import{S as e}from"./switch.6676225e.js";import{C as c}from"./codeExample.b35ba111.js";import"./typescript.78515962.js";function g(){return t.createElement(t.Fragment,null,t.createElement("div",{className:"markdown-body"},t.createElement("h2",{id:"switch",tabIndex:"-1"},t.createElement("a",{className:"header-anchor",href:"#switch"},t.createElement("span",{className:"b-anchor"}),t.createElement("span",{"aria-hidden":"false"},"#"))," Switch"),t.createElement(c,{desc:"",lang:"tsx",example:t.createElement(t.Fragment,null,t.createElement("style",null,""),t.createElement(n,{center:!0},t.createElement(e,{size:"small"}),t.createElement(e,{size:"middle"}),t.createElement(e,{size:"large"}))),code:`import { Switch,  Space } from 'otaku-ui'


ReactDOM.createRoot(container).render(
  <Space center>
    <Switch size="small"></Switch>
    <Switch size="middle"></Switch>
    <Switch size="large"></Switch>
  </Space>
)
`,style:{lang:"css",code:""}},t.createElement("pre",null,t.createElement("code",{className:"language-tsx"},t.createElement(a,{lang:"tsx",code:`
ReactDOM.createRoot(container).render(
  <Space center>
    <Switch size="small"></Switch>
    <Switch size="middle"></Switch>
    <Switch size="large"></Switch>
  </Space>
)
`})))),t.createElement("h2",{id:"%E7%A6%81%E7%94%A8",tabIndex:"-1"},t.createElement("a",{className:"header-anchor",href:"#%E7%A6%81%E7%94%A8"},t.createElement("span",{className:"b-anchor"}),t.createElement("span",{"aria-hidden":"false"},"#"))," \u7981\u7528"),t.createElement(c,{desc:"",lang:"tsx",example:t.createElement(t.Fragment,null,t.createElement("style",null,""),t.createElement(e,{disabled:!0})),code:`import { Switch,  Space } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Switch disabled></Switch>)
`,style:{lang:"css",code:""}},t.createElement("pre",null,t.createElement("code",{className:"language-tsx"},t.createElement(a,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Switch disabled></Switch>)
`})))),t.createElement("h2",{id:"api",tabIndex:"-1"},t.createElement("a",{className:"header-anchor",href:"#api"},t.createElement("span",{className:"b-anchor"}),t.createElement("span",{"aria-hidden":"false"},"#"))," api"),t.createElement(t.Fragment,null,t.createElement(r,{code:`interface SwitchProps {
  value?: boolean
  disabled?: boolean
  checkedText?: string
  uncheckedText?: string
  checkedColor?: string
  uncheckedColor?: string
  checkedTextColor?: string
  uncheckedTextColor?: string
  size?: 'small' | 'middle' | 'large'
  checkedIcon: React.ReactNode
  uncheckedIcon: React.ReactNode
  onChange?: (checked: boolean) => void
}`,html:`<h2>Switch</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>value</td>
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
                            <td>checkedText</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>uncheckedText</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>checkedColor</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>uncheckedColor</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>checkedTextColor</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>uncheckedTextColor</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>size</td>
                            <td>\u5426</td>
                            <td>'small' | 'middle' | 'large'</td>
                            <td>middle</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>checkedIcon</td>
                            <td>\u662F</td>
                            <td>React.ReactNode</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>uncheckedIcon</td>
                            <td>\u662F</td>
                            <td>React.ReactNode</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>onChange</td>
                            <td>\u5426</td>
                            <td>(checked: boolean) => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),t.createElement(l,{target:".main"},t.createElement(d,{href:"#switch",title:"Switch"}),t.createElement(d,{href:"#\u7981\u7528",title:"\u7981\u7528"}),t.createElement(d,{href:"#api",title:"api"})))}export{g as default};
