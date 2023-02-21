import{b as t}from"./index.470a316f.js";import"./style.6ba18b76.js";import{A as a}from"./api.f99173f3.js";import{A as u,a as r}from"./style.deb3bbcd.js";import"./index.a667917b.js";import{H as d}from"./highlightCode.7ddbf745.js";import{G as n,a as l}from"./grid.3b5566e4.js";import{C as c}from"./codeExample.3261d776.js";import"./typescript.627707e9.js";function o(){return t.createElement("div",null,t.createElement(n,{gap:10},Array.from({length:5}).map((m,e)=>t.createElement(l,{key:e,className:"demo-container"},e+1))))}function f(){return t.createElement(t.Fragment,null,t.createElement("div",{className:"markdown-body"},t.createElement("h2",{id:"grid-%E7%BD%91%E6%A0%BC",tabIndex:"-1"},t.createElement("a",{className:"header-anchor",href:"#grid-%E7%BD%91%E6%A0%BC"},t.createElement("span",{className:"b-anchor"}),t.createElement("span",{"aria-hidden":"false"},"#"))," Grid \u7F51\u683C"),t.createElement(c,{desc:"\u4E00\u4E2A\u7B80\u5355\u7684\u7F51\u683C",lang:"tsx",example:t.createElement(t.Fragment,null,t.createElement("style",null,`.demo-container {
  background: black;
  color: white;
  padding-left: 5px;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
`),t.createElement(o,null)),code:`import { Grid, GridItem } from 'otaku-ui'

function Demo () {
  return (
    <div>
      <Grid gap={10}>
        {
          Array.from({
            length: 5
          }).map((_, index) => {
            return (
              <GridItem 
                key={index} 
                className="demo-container">{index + 1}
              </GridItem>
            )
          })
        }
      </Grid>
    </div>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`,style:{lang:"css",code:`.demo-container {
  background: black;
  color: white;
  padding-left: 5px;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
`}},t.createElement("p",null,"\u4E00\u4E2A\u7B80\u5355\u7684\u7F51\u683C"),t.createElement("pre",null,t.createElement("code",{className:"language-tsx"},t.createElement(d,{lang:"tsx",code:`function Demo () {
  return (
    <div>
      <Grid gap={10}>
        {
          Array.from({
            length: 5
          }).map((_, index) => {
            return (
              <GridItem 
                key={index} 
                className="demo-container">{index + 1}
              </GridItem>
            )
          })
        }
      </Grid>
    </div>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`}))),t.createElement("pre",null,t.createElement("code",{className:"language-css"},t.createElement(d,{lang:"css",code:`.demo-container {
  background: black;
  color: white;
  padding-left: 5px;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
`})))),t.createElement("h2",{id:"api",tabIndex:"-1"},t.createElement("a",{className:"header-anchor",href:"#api"},t.createElement("span",{className:"b-anchor"}),t.createElement("span",{"aria-hidden":"false"},"#"))," api"),t.createElement(t.Fragment,null,t.createElement(a,{code:`interface GridProps {
  width?: number
  count?: number
  gap?: number | [number, number]
  center?: boolean
  border?: boolean
  className?: string
  children: React.ReactNode[]
}

interface GridItemProps {
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}`,html:`<h2>Grid</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>width</td>
                            <td>\u5426</td>
                            <td>number</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>count</td>
                            <td>\u5426</td>
                            <td>number</td>
                            <td>3</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>gap</td>
                            <td>\u5426</td>
                            <td>number | [number, number]</td>
                            <td>0</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>center</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>border</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>className</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>children</td>
                            <td>\u662F</td>
                            <td>React.ReactNode[]</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
<h2>GridItem</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>className</td>
                            <td>\u5426</td>
                            <td>string</td>
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
                            <td>onClick</td>
                            <td>\u5426</td>
                            <td>() => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),t.createElement(u,{target:".main"},t.createElement(r,{href:"#grid-\u7F51\u683C",title:"Grid \u7F51\u683C"}),t.createElement(r,{href:"#api",title:"api"})))}export{f as default};
