import{b as e}from"./index.50043c3d.js";import"./style.6ba18b76.js";import{A as n}from"./api.7d806942.js";import{A as u,a}from"./style.d309e604.js";import"./index.a667917b.js";import{P as m}from"./picker-select.f9e05446.js";import{H as o}from"./highlightCode.59aa7d3b.js";import{C as c}from"./codeExample.b35ba111.js";import"./typescript.78515962.js";function l(){const r=Array.from({length:50}).map((d,t)=>({id:t,name:"\u7B2C"+t+"\u4E2A\u9009\u9879"}));return e.createElement(m,{columns:r})}function k(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown-body"},e.createElement("h2",{id:"picker-%E9%80%89%E6%8B%A9%E5%99%A8",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#picker-%E9%80%89%E6%8B%A9%E5%99%A8"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," Picker \u9009\u62E9\u5668"),e.createElement(c,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(l,null)),code:`import { Picker } from 'otaku-ui'

function Demo () {
  const columns = Array.from({
    length: 50
  }).map((_, index) => {
    return {
      id: index,
      name: '\u7B2C' + index + '\u4E2A\u9009\u9879'
    }
  })
  
  return (
    <Picker columns={columns}></Picker>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(o,{lang:"tsx",code:`function Demo () {
  const columns = Array.from({
    length: 50
  }).map((_, index) => {
    return {
      id: index,
      name: '\u7B2C' + index + '\u4E2A\u9009\u9879'
    }
  })
  
  return (
    <Picker columns={columns}></Picker>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`})))),e.createElement(e.Fragment,null,e.createElement(n,{code:`interface columnOptions {
  id: string | number
  name: string | number
}

export interface PickerProps {
  columns: columnOptions[]
  value?: string | number
  onChange?: () => void
}`,html:`<h2>Picker</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>columns</td>
                            <td>\u662F</td>
                            <td>columnOptions[]</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>value</td>
                            <td>\u5426</td>
                            <td>string | number</td>
                            <td>8</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>onChange</td>
                            <td>\u5426</td>
                            <td>() => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),e.createElement(u,{target:".main"},e.createElement(a,{href:"#picker-\u9009\u62E9\u5668",title:"Picker \u9009\u62E9\u5668"})))}export{k as default};
