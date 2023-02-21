import{r as c,j as n,b as t}from"./index.50043c3d.js";import"./style.6ba18b76.js";import{A as h}from"./api.7d806942.js";import{A as E,a as d}from"./style.d309e604.js";import"./index.a667917b.js";import{H as u}from"./highlightCode.59aa7d3b.js";import{C as s}from"./codeExample.b35ba111.js";import"./typescript.78515962.js";function o(m){const{src:e,className:a,alt:l,size:r=40,onClick:i}=m,[f,F]=c.exports.useState(e),p=()=>{};return c.exports.useEffect(()=>{F(e)},[e]),n("div",{className:`otaku-avatar ${a!=null?a:""}`,style:{width:`${r}px`,height:`${r}px`},onClick:i,children:n("img",{src:f,alt:l,onError:p})})}function b(){return t.createElement(o,{src:"http://test"})}function g(){return t.createElement(o,{src:"https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics7.baidu.com%2Ffeed%2F6c224f4a20a446237db37993bb07c9070df3d7f1.jpeg%3Ftoken%3Dfb47d955fdbdf3d0563b5721c4f75902&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1642438800&t=e35b9d4bfe1c0866fecad5a3a5c79fee"})}function N(){return t.createElement(t.Fragment,null,t.createElement("div",{className:"markdown-body"},t.createElement("h2",{id:"avatar-%E5%A4%B4%E5%83%8F",tabIndex:"-1"},t.createElement("a",{className:"header-anchor",href:"#avatar-%E5%A4%B4%E5%83%8F"},t.createElement("span",{className:"b-anchor"}),t.createElement("span",{"aria-hidden":"false"},"#"))," Avatar \u5934\u50CF"),t.createElement(s,{desc:"",lang:"tsx",example:t.createElement(t.Fragment,null,t.createElement("style",null,""),t.createElement(b,null)),code:`import { Avatar } from 'otaku-ui'

function Demo () {
  return (
    <Avatar src="http://test"></Avatar>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`,style:{lang:"css",code:""}},t.createElement("pre",null,t.createElement("code",{className:"language-tsx"},t.createElement(u,{lang:"tsx",code:`function Demo () {
  return (
    <Avatar src="http://test"></Avatar>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`})))),t.createElement(s,{desc:"",lang:"tsx",example:t.createElement(t.Fragment,null,t.createElement("style",null,""),t.createElement(g,null)),code:`import { Avatar } from 'otaku-ui'

function Demo () {
  return (
    <Avatar src="https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics7.baidu.com%2Ffeed%2F6c224f4a20a446237db37993bb07c9070df3d7f1.jpeg%3Ftoken%3Dfb47d955fdbdf3d0563b5721c4f75902&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1642438800&t=e35b9d4bfe1c0866fecad5a3a5c79fee"></Avatar>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`,style:{lang:"css",code:""}},t.createElement("pre",null,t.createElement("code",{className:"language-tsx"},t.createElement(u,{lang:"tsx",code:`function Demo () {
  return (
    <Avatar src="https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics7.baidu.com%2Ffeed%2F6c224f4a20a446237db37993bb07c9070df3d7f1.jpeg%3Ftoken%3Dfb47d955fdbdf3d0563b5721c4f75902&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1642438800&t=e35b9d4bfe1c0866fecad5a3a5c79fee"></Avatar>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`})))),t.createElement("h2",{id:"api",tabIndex:"-1"},t.createElement("a",{className:"header-anchor",href:"#api"},t.createElement("span",{className:"b-anchor"}),t.createElement("span",{"aria-hidden":"false"},"#"))," api"),t.createElement(t.Fragment,null,t.createElement(h,{code:`export interface AvatarProps {
  // \u56FE\u7247\u5927\u5C0F
  size?: number
  /**
   * \u56FE\u7247\u5730\u5740
   * @zh-cn sdfsf
   */
  src?: string
  alt?: string
  className?: string
  onClick?: () => void
}`,html:`<h2>Avatar</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>size</td>
                            <td>\u5426</td>
                            <td>number</td>
                            <td>40</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>src</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>alt</td>
                            <td>\u5426</td>
                            <td>string</td>
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
                            <td>onClick</td>
                            <td>\u5426</td>
                            <td>() => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),t.createElement(E,{target:".main"},t.createElement(d,{href:"#avatar-\u5934\u50CF",title:"Avatar \u5934\u50CF"}),t.createElement(d,{href:"#api",title:"api"})))}export{N as default};
