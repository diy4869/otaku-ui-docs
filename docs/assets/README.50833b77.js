import{r as p,j as f,c as M,b as e}from"./index.50043c3d.js";import"./style.6ba18b76.js";import{A as O}from"./api.7d806942.js";import{c as w,A as I,a as l}from"./style.d309e604.js";import"./index.a667917b.js";import{i as b}from"./index.es.9ce522ce.js";import{H as d}from"./highlightCode.59aa7d3b.js";import{C as m}from"./codeExample.b35ba111.js";import"./typescript.78515962.js";function i(F){const{readonly:C,color:B,showScore:y,size:N,count:h=5,score:u=0,maxScore:k=10,textRender:o,children:z}=F,[r,g]=p.exports.useState(new Array(h).fill(void 0).map(()=>({checked:!1,half:!1,click:!1}))),[D,A]=p.exports.useState();p.exports.useEffect(()=>{S()},[]);const R=(t,a,s,n)=>{a>=h&&(a=h);for(let E=t;E<a;E++)r[E].checked=s,r[E].half=n,o&&A(o(E,u));g([...r])},S=()=>{const t=k/h;if(u%t===0){const a=u/t;R(0,a,!0,!1)}if(u%2!==0){const a=u%2,s=b.minus(u,a),n=Math.floor(b.divide(s,t));R(0,n,!0,!1),R(n,n+1>=h?h:n+1,!1,!0)}},x=(t,a)=>{var E;const{target:s}=t,n=Number(s.dataset.index);if(!C&&s.classList.contains("otaku-star")){if(a==="mousemove")R(0,n+1,!0,!1),o&&A(o(n+1,u));else if(a==="mouseout")for(let c=n;n>0;c--)(E=r[c])!=null&&E.click||(r[c].checked=!1),o&&A(o(c+1,u));else for(let c=0;c<n;c++)r[c].checked=!0,r[c].click=!0,o&&A(o(c+1,u));console.log(r),g([...r])}};return f("div",{className:"otaku-rate",children:M("ul",{className:"otaku-star-container",onClick:t=>x(t,"click"),onMouseMove:t=>x(t,"mousemove"),onMouseOut:t=>x(t,"mouseout"),children:[r==null?void 0:r.map((t,a)=>{const s=t.checked?"otaku-icon-star-fill":t.half?"otaku-icon-star-half":"otaku-icon-star";return f("li",{className:w("otaku-star","iconfont",s),style:{color:B,fontSize:N},"data-index":a,children:f("span",{})},a)}),y?f("li",{className:"otaku-rate-score",children:u}):D?f("li",{className:"otaku-rate-text ",children:D}):""]})})}function v(){return e.createElement(i,{score:59.5,maxScore:100,count:10,readonly:!0,textRender:(F,C)=>{let B="\u4E0D\u5408\u683C";return F<=6?B="\u4E0D\u5408\u683C":F>=6?B="\u53CA\u683C":F>=8?B="\u4F18\u79C0":B="\u6EE1\u5206",B}})}function Q(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown-body"},e.createElement("h2",{id:"rate-%E8%AF%84%E5%88%86",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#rate-%E8%AF%84%E5%88%86"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," Rate \u8BC4\u5206"),e.createElement(m,{desc:"\u7B80\u5355\u7684\u8BC4\u5206",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(i,null,e.createElement("span",{classname:"iconfont otaku-icon-heart"}))),code:`import { Rate } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Rate>

  <span classname="iconfont otaku-icon-heart"></span>
</Rate>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u7B80\u5355\u7684\u8BC4\u5206"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(d,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Rate>

  <span classname="iconfont otaku-icon-heart"></span>
</Rate>)
`})))),e.createElement("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B8%B2%E6%9F%93",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B8%B2%E6%9F%93"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u81EA\u5B9A\u4E49\u6E32\u67D3"),e.createElement(m,{desc:"\u7B80\u5355\u7684\u8BC4\u5206",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(i,null)),code:`import { Rate } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Rate></Rate>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u7B80\u5355\u7684\u8BC4\u5206"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(d,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Rate></Rate>)
`})))),e.createElement("h2",{id:"%E5%8F%AA%E8%AF%BB%E7%8A%B6%E6%80%81",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E5%8F%AA%E8%AF%BB%E7%8A%B6%E6%80%81"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u53EA\u8BFB\u72B6\u6001"),e.createElement(m,{desc:"\u7B80\u5355\u7684\u8BC4\u5206",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(i,{readonly:!0,score:4})),code:`import { Rate } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Rate readonly={true} score={4}></Rate>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u7B80\u5355\u7684\u8BC4\u5206"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(d,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Rate readonly={true} score={4}></Rate>)
`})))),e.createElement("h2",{id:"%E8%AE%BE%E7%BD%AE-%E5%8D%8A%E6%98%9F",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E8%AE%BE%E7%BD%AE-%E5%8D%8A%E6%98%9F"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u8BBE\u7F6E \u534A\u661F"),e.createElement(m,{desc:"\u7B80\u5355\u7684\u8BC4\u5206",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(i,{readonly:!0,score:2.5})),code:`import { Rate } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Rate readonly={true} score={2.5}></Rate>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u7B80\u5355\u7684\u8BC4\u5206"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(d,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Rate readonly={true} score={2.5}></Rate>)
`})))),e.createElement("h2",{id:"%E8%AE%BE%E7%BD%AE-%E6%9C%80%E5%A4%A7%E5%80%BC",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E8%AE%BE%E7%BD%AE-%E6%9C%80%E5%A4%A7%E5%80%BC"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u8BBE\u7F6E \u6700\u5927\u503C"),e.createElement(m,{desc:"\u7B80\u5355\u7684\u8BC4\u5206",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(i,{readonly:!0,score:542.5,maxScore:100})),code:`import { Rate } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Rate readonly={true} score={542.5} maxScore={100}></Rate>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u7B80\u5355\u7684\u8BC4\u5206"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(d,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Rate readonly={true} score={542.5} maxScore={100}></Rate>)
`})))),e.createElement("h2",{id:"%E6%98%BE%E7%A4%BA%E8%AF%84%E5%88%86",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E6%98%BE%E7%A4%BA%E8%AF%84%E5%88%86"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u663E\u793A\u8BC4\u5206"),e.createElement(m,{desc:"\u7B80\u5355\u7684\u8BC4\u5206",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(i,{readonly:!0,score:42.5,maxScore:100,showScore:!0})),code:`import { Rate } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Rate readonly={true} score={42.5} maxScore={100} showScore></Rate>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u7B80\u5355\u7684\u8BC4\u5206"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(d,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Rate readonly={true} score={42.5} maxScore={100} showScore></Rate>)
`})))),e.createElement("h2",{id:"%E8%AE%BE%E7%BD%AE%E6%98%9F%E6%98%9F%E6%95%B0%E9%87%8F",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E8%AE%BE%E7%BD%AE%E6%98%9F%E6%98%9F%E6%95%B0%E9%87%8F"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u8BBE\u7F6E\u661F\u661F\u6570\u91CF"),e.createElement(m,{desc:"\u7B80\u5355\u7684\u8BC4\u5206",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(i,{readonly:!0,score:42.5,maxScore:100,showScore:!0,count:10})),code:`import { Rate } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Rate readonly={true} score={42.5} maxScore={100} showScore count={10}></Rate>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u7B80\u5355\u7684\u8BC4\u5206"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(d,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Rate readonly={true} score={42.5} maxScore={100} showScore count={10}></Rate>)
`})))),e.createElement("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89-%E6%96%87%E5%AD%97",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89-%E6%96%87%E5%AD%97"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u81EA\u5B9A\u4E49 \u6587\u5B57"),e.createElement(m,{desc:"\u7B80\u5355\u7684\u8BC4\u5206",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(v,null)),code:`import { Rate } from 'otaku-ui'

function Demo () {
  return (
    <Rate
      score={59.5} 
      maxScore={100} 
      count={10}
      readonly
      textRender={(current, score) => {
        let text = '\u4E0D\u5408\u683C'
        
        if (current <= 6) text = '\u4E0D\u5408\u683C'
        else if (current >= 6) text = '\u53CA\u683C'
        else if (current >= 8) text = '\u4F18\u79C0'
        else text = '\u6EE1\u5206'

        return text
      }}></Rate>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u7B80\u5355\u7684\u8BC4\u5206"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(d,{lang:"tsx",code:`function Demo () {
  return (
    <Rate
      score={59.5} 
      maxScore={100} 
      count={10}
      readonly
      textRender={(current, score) => {
        let text = '\u4E0D\u5408\u683C'
        
        if (current <= 6) text = '\u4E0D\u5408\u683C'
        else if (current >= 6) text = '\u53CA\u683C'
        else if (current >= 8) text = '\u4F18\u79C0'
        else text = '\u6EE1\u5206'

        return text
      }}></Rate>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`})))),e.createElement("h2",{id:"api",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#api"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," api"),e.createElement(e.Fragment,null,e.createElement(O,{code:`interface RateProps {
  count?: number
  showScore?: boolean
  score?: number
  maxScore?: number
  size?: number
  color?: string
  readonly?: boolean
  children?: React.ReactNode
  textRender?: (index: number, score: number) => React.ReactNode
}`,html:`<h2>Rate</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>count</td>
                            <td>\u5426</td>
                            <td>number</td>
                            <td>5</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>showScore</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>score</td>
                            <td>\u5426</td>
                            <td>number</td>
                            <td>0</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>maxScore</td>
                            <td>\u5426</td>
                            <td>number</td>
                            <td>10</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>size</td>
                            <td>\u5426</td>
                            <td>number</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>color</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>readonly</td>
                            <td>\u5426</td>
                            <td>boolean</td>
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
                            <td>textRender</td>
                            <td>\u5426</td>
                            <td>(index: number, score: number) => React.ReactNode</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),e.createElement(I,{target:".main"},e.createElement(l,{href:"#rate-\u8BC4\u5206",title:"Rate \u8BC4\u5206"}),e.createElement(l,{href:"#\u81EA\u5B9A\u4E49\u6E32\u67D3",title:"\u81EA\u5B9A\u4E49\u6E32\u67D3"}),e.createElement(l,{href:"#\u53EA\u8BFB\u72B6\u6001",title:"\u53EA\u8BFB\u72B6\u6001"}),e.createElement(l,{href:"#\u8BBE\u7F6E-\u534A\u661F",title:"\u8BBE\u7F6E \u534A\u661F"}),e.createElement(l,{href:"#\u8BBE\u7F6E-\u6700\u5927\u503C",title:"\u8BBE\u7F6E \u6700\u5927\u503C"}),e.createElement(l,{href:"#\u663E\u793A\u8BC4\u5206",title:"\u663E\u793A\u8BC4\u5206"}),e.createElement(l,{href:"#\u8BBE\u7F6E\u661F\u661F\u6570\u91CF",title:"\u8BBE\u7F6E\u661F\u661F\u6570\u91CF"}),e.createElement(l,{href:"#\u81EA\u5B9A\u4E49-\u6587\u5B57",title:"\u81EA\u5B9A\u4E49 \u6587\u5B57"}),e.createElement(l,{href:"#api",title:"api"})))}export{Q as default};
