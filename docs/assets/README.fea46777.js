import{b as e}from"./index.470a316f.js";import"./style.6ba18b76.js";import{A as s}from"./api.f99173f3.js";import{A as d,a as n,B as u,v as o}from"./style.deb3bbcd.js";import"./index.a667917b.js";import{H as m}from"./highlightCode.7ddbf745.js";import{C as c}from"./codeExample.3261d776.js";import"./typescript.627707e9.js";function l(){const t=["Home","Application Center","An Application","List"];return e.createElement(u,null,t.map((a,r)=>e.createElement(o,{key:r},a)))}function i(){const t=["Home","Application Center","An Application","List"];return e.createElement(u,null,t.map((a,r)=>e.createElement(o,{icon:e.createElement("span",{className:"iconfont otaku-icon-user"}),key:r},a)))}function F(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown-body"},e.createElement("h2",{id:"breadcrumbs-%E9%9D%A2%E5%8C%85%E5%B1%91",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#breadcrumbs-%E9%9D%A2%E5%8C%85%E5%B1%91"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," BreadCrumbs \u9762\u5305\u5C51"),e.createElement(c,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(l,null)),code:`import { BreadCrumbs, BreadCrumbsItem, Message } from 'otaku-ui'

function Demo () {
  const type = ['Home', 'Application Center', 'An Application', 'List']

  return (
    <BreadCrumbs>
      {
        type.map((item, index) => {
          return (
            <BreadCrumbsItem 
              key={index}>{item}</BreadCrumbsItem>
            )
        })
      }
    </BreadCrumbs>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(m,{lang:"tsx",code:`function Demo () {
  const type = ['Home', 'Application Center', 'An Application', 'List']

  return (
    <BreadCrumbs>
      {
        type.map((item, index) => {
          return (
            <BreadCrumbsItem 
              key={index}>{item}</BreadCrumbsItem>
            )
        })
      }
    </BreadCrumbs>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`})))),e.createElement("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89icon",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89icon"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u81EA\u5B9A\u4E49Icon"),e.createElement(c,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(i,null)),code:`import { BreadCrumbs, BreadCrumbsItem, Message } from 'otaku-ui'

function Demo () {
  const type = ['Home', 'Application Center', 'An Application', 'List']

  return (
    <BreadCrumbs>
      {
        type.map((item, index) => {
          return (
            <BreadCrumbsItem 
              icon={<span className="iconfont otaku-icon-user"></span>}
              key={index}>{item}</BreadCrumbsItem>
            )
        })
      }
    </BreadCrumbs>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(m,{lang:"tsx",code:`function Demo () {
  const type = ['Home', 'Application Center', 'An Application', 'List']

  return (
    <BreadCrumbs>
      {
        type.map((item, index) => {
          return (
            <BreadCrumbsItem 
              icon={<span className="iconfont otaku-icon-user"></span>}
              key={index}>{item}</BreadCrumbsItem>
            )
        })
      }
    </BreadCrumbs>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`})))),e.createElement("h2",{id:"api",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#api"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," api"),e.createElement(e.Fragment,null,e.createElement(s,{code:`export interface BreadCrumbsProps {
  separator?: React.ReactNode
  children?: React.ReactNode
}

export interface BreadCrumbsProps {
  separator?: React.ReactNode
  children?: React.ReactNode
}

export interface BreadCrumbsItemProps extends BreadCrumbsProps {
  icon?: React.ReactNode
}`,html:`<h2>BreadCrumbs</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>separator</td>
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
<h2>BreadCrumbsItem</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>icon</td>
                            <td>\u5426</td>
                            <td>React.ReactNode</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),e.createElement(d,{target:".main"},e.createElement(n,{href:"#breadcrumbs-\u9762\u5305\u5C51",title:"BreadCrumbs \u9762\u5305\u5C51"}),e.createElement(n,{href:"#\u81EA\u5B9A\u4E49icon",title:"\u81EA\u5B9A\u4E49Icon"}),e.createElement(n,{href:"#api",title:"api"})))}export{F as default};
