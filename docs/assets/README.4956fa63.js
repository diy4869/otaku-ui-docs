import{r as o,j as l,F as R,c as h,b as t}from"./index.50043c3d.js";import"./style.6ba18b76.js";import{A as w}from"./api.7d806942.js";import{A as k,a as E}from"./style.d309e604.js";import"./index.a667917b.js";import{H as y}from"./highlightCode.59aa7d3b.js";import{C as M}from"./codeExample.b35ba111.js";import"./typescript.78515962.js";function j(x){const{value:F=[20,50]}=x,i=o.exports.useRef(null),[v,g]=o.exports.useState(0),[d,A]=o.exports.useState({width:0,x:0}),[B,D]=o.exports.useState(0),[n,b]=o.exports.useState([]);o.exports.useEffect(()=>{var e;i.current&&A((e=i.current)==null?void 0:e.getBoundingClientRect())},[]),o.exports.useEffect(()=>{const e=F.map((a,r)=>{const s=d.width/100*a;return{id:r,value:a,offset:s}});f(e)},[d]);const f=e=>{var a,r,s;b(e),g(((a=e==null?void 0:e[1])==null?void 0:a.offset)-((r=e==null?void 0:e[0])==null?void 0:r.offset)),D((s=e==null?void 0:e[0])==null?void 0:s.offset)},S=(e,a)=>{e.preventDefault(),e.target.addEventListener("mousemove",({clientX:r})=>{const p=e.target.offsetWidth,m=d.width-p;let u=r-d.x-p/2;u<0?u=0:u>m&&(u=m),n[a].offset=u,n[a].value=u===m?100:Number((u/m*100).toFixed(0)),console.log(n.map(c=>c.offset),n.map(c=>c.value)),n.sort((c,N)=>c.offset-N.offset),f(n)})},C=e=>{e.preventDefault(),e.target.onmousemove=null};return document.addEventListener("mouseup",e=>{e.preventDefault(),document.onmousemove=()=>{e.preventDefault()}}),l(R,{children:h("div",{className:"otaku-slider-container",ref:i,children:[l("section",{className:"otaku-slider",children:l("div",{className:"otaku-slider-line",style:{width:v+"px",left:B+"px"}})}),l("ul",{className:"otaku-slider-bar-container",children:n.map((e,a)=>h("li",{onMouseUp:C,onMouseDown:r=>S(r,a),style:{left:e.offset+"px"},children:[l("span",{}),l("span",{children:e.value})]},e.id))})]})})}function z(){return t.createElement(t.Fragment,null,t.createElement("div",{className:"markdown-body"},t.createElement("h2",{id:"slider-%E6%BB%91%E5%8A%A8%E9%80%89%E6%8B%A9",tabIndex:"-1"},t.createElement("a",{className:"header-anchor",href:"#slider-%E6%BB%91%E5%8A%A8%E9%80%89%E6%8B%A9"},t.createElement("span",{className:"b-anchor"}),t.createElement("span",{"aria-hidden":"false"},"#"))," Slider \u6ED1\u52A8\u9009\u62E9"),t.createElement(M,{desc:"\u7B80\u5355\u7684\u8BC4\u5206",lang:"tsx",example:t.createElement(t.Fragment,null,t.createElement("style",null,""),t.createElement(j,null)),code:`import { Slider } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Slider></Slider>)
`,style:{lang:"css",code:""}},t.createElement("p",null,"\u7B80\u5355\u7684\u8BC4\u5206"),t.createElement("pre",null,t.createElement("code",{className:"language-tsx"},t.createElement(y,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Slider></Slider>)
`})))),t.createElement("h2",{id:"api",tabIndex:"-1"},t.createElement("a",{className:"header-anchor",href:"#api"},t.createElement("span",{className:"b-anchor"}),t.createElement("span",{"aria-hidden":"false"},"#"))," api"),t.createElement(t.Fragment,null,t.createElement(w,{code:`export interface SliderProps {
  value: [number, number]
  children: React.ReactNode
}`,html:`<h2>Slider</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>value</td>
                            <td>\u662F</td>
                            <td>[number, number]</td>
                            <td></td>
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
`}))),t.createElement(k,{target:".main"},t.createElement(E,{href:"#slider-\u6ED1\u52A8\u9009\u62E9",title:"Slider \u6ED1\u52A8\u9009\u62E9"}),t.createElement(E,{href:"#api",title:"api"})))}export{z as default};
