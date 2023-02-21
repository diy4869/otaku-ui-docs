import{r as F,c as B,j as c,b as e}from"./index.50043c3d.js";import"./style.6ba18b76.js";import{A as b}from"./api.7d806942.js";import{c as k,A as C,a as m}from"./style.d309e604.js";import"./index.a667917b.js";import{H as g}from"./highlightCode.59aa7d3b.js";import{C as d}from"./codeExample.b35ba111.js";import"./typescript.78515962.js";function D(p){const{current:A=1,total:f=0,pageSize:x=10,slicePage:i=5}=p;if(i%2!==1)throw new Error("slicePage \u5FC5\u987B\u4E3A\u5947\u6570");const o=Math.ceil(f/x),s=i-1,u=s/2,a=[];let n;A-u<2?n=2:n=A+s>o?o-i:A-u;const l=n+i;if(o<=i+2)for(let t=2;t<o;t++)a.push(t);else for(let t=n;t<l;t++)a.push(t);return{pagination:a,showPrevMore:a.length>0?(a==null?void 0:a[0])!==2:!1,showNextMore:a.length>0?a.at(-1)!==o-1:!1,maxPage:o}}function h(p){const f=(p.slicePage||5)+2,{current:x=1,total:i=1,pageSize:o=10,circle:s=!1,pageChange:u}=p,[a,n]=F.exports.useState(x),{pagination:l,maxPage:t,showPrevMore:R,showNextMore:M}=D({current:a,total:i,pageSize:o,slicePage:f});F.exports.useEffect(()=>{n(a),u==null||u(a)},[a]);const P=(r,N)=>{switch(r){case"left":a>1?n(a-1):n(1);break;case"right":a<t?n(a+1):n(t);break;default:n(N)}},E=r=>c("li",{"data-page":r,className:k("otaku-pagination-item",{"is-circle":s,"otaku-pagination-item-acitve":a===r}),onClick:()=>P("center",r),onKeyDown:()=>P("center",r),children:r},r);return B("ul",{className:"otaku-pagination",children:[t!==1?c("li",{className:`otaku-pagination-prev ${s?"is-circle":""}`,onClick:()=>P("left"),children:c("span",{className:"iconfont otaku-icon-left"})}):null,E(1),l.length!==0?(l==null?void 0:l[0])!==2?B("li",{className:"otaku-pagination-prev-more",children:[c("span",{className:"iconfont otaku-icon-more-line"}),c("span",{className:"iconfont otaku-icon-doubleleft"})]}):E(2):null,l.slice(1,-1).map(r=>E(r)),l.length!==0?l.at(-1)!==t-1?B("li",{className:"otaku-pagination-next-more",children:[c("span",{className:"iconfont otaku-icon-more-line"}),c("span",{className:"iconfont otaku-icon-doubleright"})]}):E(l.at(-1)):null,t>1&&E(t),t!==1?c("li",{className:`otaku-pagination-next ${s?"is-circle":""}`,onClick:()=>P("right"),children:c("span",{className:"iconfont otaku-icon-right"})}):null]})}function H(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown-body"},e.createElement("h2",{id:"%E6%99%AE%E9%80%9A%E5%88%86%E9%A1%B5",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E6%99%AE%E9%80%9A%E5%88%86%E9%A1%B5"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u666E\u901A\u5206\u9875"),e.createElement(d,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(h,{total:200,current:2})),code:`import { Pagination } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Pagination total={200} current={2}></Pagination>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(g,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Pagination total={200} current={2}></Pagination>)
`})))),e.createElement("br",null),e.createElement("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89-slicepage",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89-slicepage"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u81EA\u5B9A\u4E49 slicePage"),e.createElement(d,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(h,{current:5,slicePage:3,total:200})),code:`import { Pagination } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Pagination current={5} slicePage={3} total={200}></Pagination>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(g,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Pagination current={5} slicePage={3} total={200}></Pagination>)
`})))),e.createElement("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89-pagesize",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89-pagesize"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u81EA\u5B9A\u4E49 pageSize"),e.createElement(d,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(h,{slicePage:3,total:200,pageSize:15})),code:`import { Pagination } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Pagination slicePage={3} total={200} pageSize={15}></Pagination>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(g,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Pagination slicePage={3} total={200} pageSize={15}></Pagination>)
`})))),e.createElement("h2",{id:"%E4%BB%A5%E5%9C%86%E5%BD%A2%E8%BF%9B%E8%A1%8C%E6%B8%B2%E6%9F%93",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E4%BB%A5%E5%9C%86%E5%BD%A2%E8%BF%9B%E8%A1%8C%E6%B8%B2%E6%9F%93"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u4EE5\u5706\u5F62\u8FDB\u884C\u6E32\u67D3"),e.createElement(d,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(h,{circle:!0})),code:`import { Pagination } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Pagination circle={true}></Pagination>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(g,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Pagination circle={true}></Pagination>)
`})))),e.createElement("h2",{id:"%E5%8F%AA%E6%9C%89%E4%B8%80%E9%A1%B5",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E5%8F%AA%E6%9C%89%E4%B8%80%E9%A1%B5"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u53EA\u6709\u4E00\u9875"),e.createElement(d,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(h,null)),code:`import { Pagination } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Pagination></Pagination>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(g,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Pagination></Pagination>)
`})))),e.createElement("h2",{id:"api",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#api"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," API"),e.createElement(e.Fragment,null,e.createElement(b,{code:`export interface usePaginationProps {
  current?: number
  total?: number
  pageSize?: number
  slicePage?: number
}

export interface PaginationProps extends usePaginationProps {
  circle?: boolean
  pageChange?: (page: number) => void
}`,html:`<h2>Pagination</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>circle</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>pageChange</td>
                            <td>\u5426</td>
                            <td>(page: number) => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),e.createElement(C,{target:".main"},e.createElement(m,{href:"#\u666E\u901A\u5206\u9875",title:"\u666E\u901A\u5206\u9875"}),e.createElement(m,{href:"#\u81EA\u5B9A\u4E49-slicepage",title:"\u81EA\u5B9A\u4E49 slicePage"}),e.createElement(m,{href:"#\u81EA\u5B9A\u4E49-pagesize",title:"\u81EA\u5B9A\u4E49 pageSize"}),e.createElement(m,{href:"#\u4EE5\u5706\u5F62\u8FDB\u884C\u6E32\u67D3",title:"\u4EE5\u5706\u5F62\u8FDB\u884C\u6E32\u67D3"}),e.createElement(m,{href:"#\u53EA\u6709\u4E00\u9875",title:"\u53EA\u6709\u4E00\u9875"}),e.createElement(m,{href:"#api",title:"API"})))}export{H as default};
