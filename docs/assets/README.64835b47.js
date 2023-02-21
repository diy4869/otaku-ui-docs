import{c as n,j as a,b as e}from"./index.50043c3d.js";import"./style.6ba18b76.js";import{A as d}from"./api.7d806942.js";import{A as c,a as m}from"./style.d309e604.js";import"./index.a667917b.js";import{H as s}from"./highlightCode.59aa7d3b.js";import{C as E}from"./codeExample.b35ba111.js";import"./typescript.78515962.js";const i=l=>{const{title:u,className:t,children:r}=l;return n("li",{className:"otaku-timeline-item",children:[a("div",{className:"otaku-timeline-separator"}),n("div",{className:"otaku-timeline-container",children:[a("div",{className:"otaku-timeline-title",children:u}),a("div",{className:`otaku-timeline-content ${t!=null?t:""}`,children:r})]})]})},o=l=>{const{children:u,className:t}=l;return a("ul",{className:`otaku-timeline ${t!=null?t:""}`,children:u})};function C(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown-body"},e.createElement("h2",{id:"timeline-%E6%97%B6%E9%97%B4%E7%BA%BF",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#timeline-%E6%97%B6%E9%97%B4%E7%BA%BF"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," Timeline \u65F6\u95F4\u7EBF"),e.createElement(E,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(o,null,e.createElement(i,{title:"11:00"},"\u65E9\u4E0A\u5341\u4E00\u70B9"),e.createElement(i,{title:"13:00"},"\u4E0B\u53481\u70B9"),e.createElement(i,{title:"14:00"},"\u4E0B\u53482\u70B9"),e.createElement(i,{title:"20:00"},"\u665A\u4E0A\u516B\u70B9"))),code:`import { Timeline, TimelineItem } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Timeline>
    <TimelineItem title="11:00">
      \u65E9\u4E0A\u5341\u4E00\u70B9
    </TimelineItem>
    <TimelineItem title="13:00">
      \u4E0B\u53481\u70B9
    </TimelineItem>
    <TimelineItem title="14:00">
      \u4E0B\u53482\u70B9
    </TimelineItem>
    <TimelineItem title="20:00">
      \u665A\u4E0A\u516B\u70B9
    </TimelineItem>
  </Timeline>)

`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(s,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Timeline>
    <TimelineItem title="11:00">
      \u65E9\u4E0A\u5341\u4E00\u70B9
    </TimelineItem>
    <TimelineItem title="13:00">
      \u4E0B\u53481\u70B9
    </TimelineItem>
    <TimelineItem title="14:00">
      \u4E0B\u53482\u70B9
    </TimelineItem>
    <TimelineItem title="20:00">
      \u665A\u4E0A\u516B\u70B9
    </TimelineItem>
  </Timeline>)

`})))),e.createElement("h2",{id:"api",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#api"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," api"),e.createElement(e.Fragment,null,e.createElement(d,{code:`interface TimelineProps {
  children?: React.ReactNode
  className?: string
}

interface TimelineItemProps {
  className?: string
  title?: React.ReactNode
  children?: React.ReactNode
}`,html:`<h2>Timeline</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>children</td>
                            <td>\u5426</td>
                            <td>React.ReactNode</td>
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
                        
                  </table>
<h2>TimelineItem</h2><table>
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
                            <td>title</td>
                            <td>\u5426</td>
                            <td>React.ReactNode</td>
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
                        
                  </table>
`}))),e.createElement(c,{target:".main"},e.createElement(m,{href:"#timeline-\u65F6\u95F4\u7EBF",title:"Timeline \u65F6\u95F4\u7EBF"}),e.createElement(m,{href:"#api",title:"api"})))}export{C as default};
