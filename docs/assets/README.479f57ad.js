import{c as o,j as n,b as e}from"./index.470a316f.js";import"./style.6ba18b76.js";import{A as u}from"./api.f99173f3.js";import{I as m,A as i,a as l}from"./style.deb3bbcd.js";import"./index.a667917b.js";import{H as c}from"./highlightCode.7ddbf745.js";import{C as s}from"./codeExample.3261d776.js";import"./typescript.627707e9.js";function d(a){const{type:t="info",children:r}=a;return o("div",{className:`otaku-alert otaku-alert-${t}`,children:[n(m,{name:t,className:"otaku-alert-icon"}),n("span",{className:"otaku-alert-content",children:r})]})}function p(){const a=["info","success","warning","error"];return e.createElement("ul",{className:"alert-demo-container"},a.map((t,r)=>e.createElement("li",null,e.createElement(d,{type:t,key:r},"\u8FD9\u662F\u4E00\u4E2A ",t," \u63D0\u793A"))))}function y(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown-body"},e.createElement("h2",{id:"alert-%E8%AD%A6%E5%91%8A",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#alert-%E8%AD%A6%E5%91%8A"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," Alert \u8B66\u544A"),e.createElement(s,{desc:"\u6D4B\u8BD5",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,`.alert-demo-container li {
  margin-bottom: 20px;
}
`),e.createElement(p,null)),code:`import { Alert } from 'otaku-ui'

function Demo () {
  const type = ['info', 'success', 'warning', 'error']

  return (
    <ul className="alert-demo-container">
        {
          type.map((item, index) => {
            return (
              <li>
                <Alert type={item} key={index}>\u8FD9\u662F\u4E00\u4E2A {item} \u63D0\u793A</Alert>
              </li>
            )
          })
        }
    </ul>
    
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`,style:{lang:"css",code:`.alert-demo-container li {
  margin-bottom: 20px;
}
`}},e.createElement("p",null,"\u6D4B\u8BD5"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(c,{lang:"tsx",code:`function Demo () {
  const type = ['info', 'success', 'warning', 'error']

  return (
    <ul className="alert-demo-container">
        {
          type.map((item, index) => {
            return (
              <li>
                <Alert type={item} key={index}>\u8FD9\u662F\u4E00\u4E2A {item} \u63D0\u793A</Alert>
              </li>
            )
          })
        }
    </ul>
    
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`}))),e.createElement("pre",null,e.createElement("code",{className:"language-css"},e.createElement(c,{lang:"css",code:`.alert-demo-container li {
  margin-bottom: 20px;
}
`})))),e.createElement("h2",{id:"api",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#api"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," api"),e.createElement(e.Fragment,null,e.createElement(u,{code:`interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error'
  children: React.ReactNode
}`,html:`<h2>Alert</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>type</td>
                            <td>\u5426</td>
                            <td>'info' | 'success' | 'warning' | 'error'</td>
                            <td>info</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>children</td>
                            <td>\u662F</td>
                            <td>React.ReactNode</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),e.createElement(i,{target:".main"},e.createElement(l,{href:"#alert-\u8B66\u544A",title:"Alert \u8B66\u544A"}),e.createElement(l,{href:"#api",title:"api"})))}export{y as default};
