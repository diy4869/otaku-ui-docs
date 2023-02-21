import{r as o,c as l,j as t,F as V,b as e}from"./index.470a316f.js";import"./style.6ba18b76.js";import{A as $}from"./api.f99173f3.js";import{C as c,D as G,c as I,Y as _,M as q,E as z,F as J,w,P as O,G as K,H as L,S as Q,A as U,a as R}from"./style.deb3bbcd.js";import"./index.a667917b.js";import{H as x}from"./highlightCode.7ddbf745.js";import{P as v}from"./picker-select.7e3824da.js";import{C as Y}from"./codeExample.3261d776.js";import"./typescript.627707e9.js";const X=(C=new Date)=>{const E=c(C);return{dayjs:E,date:E.toDate(),timestamp:E.toDate().getTime()}};function Z(C){const{className:E,date:h,firstWeek:P="\u65E5",disabled:A,onChange:k}=C,[u,i]=o.exports.useState(c(h)),[p,b]=o.exports.useState("calendar"),F=G(u,P),y=z(P);o.exports.useEffect(()=>{i(c(h))},[h]);const D=a=>{const r=J(a.target,"date");if(r){console.log(r);const{date:n,type:B,disabled:N}=r.dataset;N!=="true"&&n&&B==="current"&&(i(c(n)),k==null||k(X(n)))}},m=(a,r)=>{const n=r==="left"?u.subtract(1,a):u.add(1,a);i(n)},g=(a,r)=>{i(c(r)),b(a)};return l("section",{className:I("otaku-calendar-container",E),children:[l("div",{style:{display:p==="calendar"?"block":"none"},children:[l("ul",{className:"otaku-date-picker-header",children:[l("li",{children:[t("span",{className:"iconfont otaku-icon-doubleleft",onClick:()=>m("year","left")}),t("span",{className:"iconfont otaku-icon-left",onClick:()=>m("month","left")})]}),l("li",{children:[l("span",{onClick:()=>g("year",u),children:[u.year(),"\u5E74"]}),l("span",{onClick:()=>g("month",u),children:[u.month()+1,"\u6708"]})]}),l("li",{children:[t("span",{className:"iconfont otaku-icon-right",onClick:()=>m("month","right")}),t("span",{className:"iconfont otaku-icon-doubleright",onClick:()=>m("year","right")})]})]}),t("ul",{className:"otaku-calendar-week",children:y.map((a,r)=>t("li",{children:a},r))}),t("ul",{className:"otaku-calendar-month",onClick:D,children:Object.values(F).map((a,r)=>r===1?a.map(n=>{const B=c().format("YYYY-MM-DD"),N=A==null?void 0:A(c(n));return t("li",{"data-date":n,"data-disabled":N,"data-type":"current",className:I(["otaku-calender-date","otaku-calendar-current"],{"otaku-calendar-today":B===n,"otaku-calendar-active":u.format("YYYY-MM-DD")===n,"otaku-calendar-disabled":N}),children:t("span",{children:c(n).date()})},n)}):a.map(n=>t("li",{"data-date":n,className:`otaku-calender-date otaku-calendar-${r===0?"prev":"next"}`,children:t("span",{children:c(n).date()})},n)))})]}),t("div",{style:{display:p==="year"?"block":"none"},children:t(_,{date:u,onChange:a=>g("month",a)})}),t("div",{style:{display:p==="month"?"block":"none"},children:t(q,{date:u,onChange:a=>g("calendar",a)})})]})}function M(C){const{firstWeek:E,disabled:h,lunarDate:P,date:A=new Date,format:k="YYYY-MM-DD",placeholder:u="\u8BF7\u9009\u62E9\u65E5\u671F",clear:i=!0,onChange:p,disabledDate:b}=C,[F,y]=o.exports.useState(c(A)),[D,m]=o.exports.useState(""),[g,a]=o.exports.useState(!1);return l("div",{className:"otaku-date-picker-container",children:[t(w,{value:D,readonly:!0,disabled:h,clear:i,placeholder:u,onFocus:()=>{a(!0)},onClear:()=>{m(""),a(!1),y(c())}}),t(O,{visible:g,className:"otaku-date-picker-portal",clickOutSide:()=>{a(!1)},children:t(Z,{firstWeek:E,date:F,lunarDate:P,disabled:b,onChange:r=>{y(r.dayjs),m(c(r.dayjs).format(k)),p==null||p(r),a(!1)}})})]})}function j(C){const{disabled:E,shortcut:h=[],value:P=[],panelType:A="single",format:k="YYYY-MM-DD",onCancel:u,onConfirm:i}=C,[p,b]=P,[F,y]=o.exports.useState(c(p)),[D,m]=o.exports.useState(b?c(b):c(b).add(1,"month")),[g,a]=o.exports.useState(""),[r,n]=o.exports.useState(!1),[B,N]=o.exports.useState(),S=d=>Array.from({length:d}).map((s,f)=>({id:f,name:`${f}`.padStart(2,"0")}));return l("section",{className:"otaku-date-range-picker-container",children:["start: ",F.format("YYYY-MM-DD")," ----- end: ",D.format("YYYY-MM-DD"),t(w,{value:g,readonly:!0,disabled:E,onFocus:()=>{n(!0)},onClear:()=>{a(""),n(!1)}}),t(O,{visible:r,clickOutSide:()=>{n(!1)},children:l("section",{className:"otaku-date-range-picker",children:[t("ul",{className:"otaku-date-range-picker-shortcut",style:{display:h.length===0?"none":"block"},children:h.map((d,s)=>t("li",{className:I({active:B===s}),onClick:()=>{const f={onChange(T){const[W,H]=T;i==null||i([c(W),c(H)]),a(`${F.format(k)} --- ${D.format(k)}`),n(!1)}};N(s),d.onClick(f)},children:d.name},s))}),A==="single"?t("section",{className:"otaku-date-range-picker-single-panel",children:t(K,{date:[F,D],onChange:d=>{const[s,f]=d;y(s),m(f)}})}):t("section",{className:"otaku-date-range-picker-double-panel",children:t(L,{date:[F,D],onChange:d=>{const[s,f]=d;y(s),m(f)}})}),l("section",{className:"otaku-date-range-picker-time-panel",children:[t("ul",{className:"otaku-date-range-picker-time",children:c().format("HH:mm:ss").split(":").map((d,s)=>[0,1].includes(s)?l(V,{children:[t("li",{children:d},s),t("li",{children:":"},s)]}):t("li",{children:d},s))}),l("section",{className:"otaku-date-range-picker-time-picker",children:[t(v,{columns:S(24)}),t(v,{columns:S(59)}),t(v,{columns:S(59)})]})]})]})})]})}function de(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown-body"},e.createElement("h2",{id:"",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," "),e.createElement(Y,{desc:"\u4E00\u4E2A\u7B80\u5355\u7684\u65E5\u671F\u8303\u56F4\u9009\u62E9\u5668",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(Q,{direction:"column"},e.createElement("div",null,"\u5355\u9762\u677F\uFF1A",e.createElement(j,null)),e.createElement("div",null,"\u591A\u9762\u677F\uFF1A",e.createElement(j,{panelType:"double"})))),code:`import { DatePicker, DateRangePicker, Space } from 'otaku-ui'

ReactDOM.createRoot(container).render(
  <Space direction="column">
    <div>
      \u5355\u9762\u677F\uFF1A<DateRangePicker></DateRangePicker>
    </div>
    <div>
      \u591A\u9762\u677F\uFF1A<DateRangePicker panelType="double"></DateRangePicker>
    </div>
  </Space>
)

`,style:{lang:"css",code:""}},e.createElement("p",null,"\u4E00\u4E2A\u7B80\u5355\u7684\u65E5\u671F\u8303\u56F4\u9009\u62E9\u5668"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(x,{lang:"tsx",code:`ReactDOM.createRoot(container).render(
  <Space direction="column">
    <div>
      \u5355\u9762\u677F\uFF1A<DateRangePicker></DateRangePicker>
    </div>
    <div>
      \u591A\u9762\u677F\uFF1A<DateRangePicker panelType="double"></DateRangePicker>
    </div>
  </Space>
)

`})))),e.createElement("h2",{id:"datepicker",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#datepicker"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," DatePicker"),e.createElement(Y,{desc:"\u4E00\u4E2A\u7B80\u5355\u7684\u65E5\u671F\u9009\u62E9\u5668",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(M,null)),code:`import { DatePicker, DateRangePicker, Space } from 'otaku-ui'

ReactDOM.createRoot(container).render(<DatePicker></DatePicker>)

`,style:{lang:"css",code:""}},e.createElement("p",null,"\u4E00\u4E2A\u7B80\u5355\u7684\u65E5\u671F\u9009\u62E9\u5668"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(x,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<DatePicker></DatePicker>)

`})))),e.createElement("h2",{id:"%E8%AE%BE%E7%BD%AE%E4%B8%80%E5%91%A8%E7%9A%84%E7%AC%AC%E4%B8%80%E5%A4%A9",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E8%AE%BE%E7%BD%AE%E4%B8%80%E5%91%A8%E7%9A%84%E7%AC%AC%E4%B8%80%E5%A4%A9"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u8BBE\u7F6E\u4E00\u5468\u7684\u7B2C\u4E00\u5929"),e.createElement(Y,{desc:"\u8BBE\u7F6E\u5F00\u59CB\u65E5\u671F",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(M,{firstWeek:"\u4E00"})),code:`import { DatePicker, DateRangePicker, Space } from 'otaku-ui'

ReactDOM.createRoot(container).render(<DatePicker firstWeek="\u4E00"></DatePicker>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u8BBE\u7F6E\u5F00\u59CB\u65E5\u671F"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(x,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<DatePicker firstWeek="\u4E00"></DatePicker>)
`})))),e.createElement("h2",{id:"%E5%86%9C%E5%8E%86%E6%98%BE%E7%A4%BA",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E5%86%9C%E5%8E%86%E6%98%BE%E7%A4%BA"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u519C\u5386\u663E\u793A"),e.createElement(Y,{desc:"\u8BBE\u7F6E\u519C\u5386",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(M,{lunarDate:!0})),code:`import { DatePicker, DateRangePicker, Space } from 'otaku-ui'

ReactDOM.createRoot(container).render(<DatePicker lunarDate={true}></DatePicker>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u8BBE\u7F6E\u519C\u5386"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(x,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<DatePicker lunarDate={true}></DatePicker>)
`})))),e.createElement("h2",{id:"api",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#api"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," API"),e.createElement(e.Fragment,null,e.createElement($,{code:`interface DateTimePickerProps {
  date?: dayjs.ConfigType
  firstWeek?: '\u65E5' | '\u4E00'
  placeholder?: string
  format?: string
  disabled?: boolean
  clear?: boolean
  lunarDate?: boolean
  onChange?: (date: ResultDate) => void
  disabledDate?: (date: dayjs.ConfigType) => boolean
}`,html:`<h2>DatePicker</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>date</td>
                            <td>\u5426</td>
                            <td>dayjs.ConfigType</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>firstWeek</td>
                            <td>\u5426</td>
                            <td>'\u65E5' | '\u4E00'</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>placeholder</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td>\u8BF7\u9009\u62E9\u65E5\u671F</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>format</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td>YYYY-MM-DD</td>
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
                            <td>clear</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>lunarDate</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>onChange</td>
                            <td>\u5426</td>
                            <td>(date: ResultDate) => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>disabledDate</td>
                            <td>\u5426</td>
                            <td>(date: dayjs.ConfigType) => boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),e.createElement(U,{target:".main"},e.createElement(R,{href:"#",title:""}),e.createElement(R,{href:"#datepicker",title:"DatePicker"}),e.createElement(R,{href:"#\u8BBE\u7F6E\u4E00\u5468\u7684\u7B2C\u4E00\u5929",title:"\u8BBE\u7F6E\u4E00\u5468\u7684\u7B2C\u4E00\u5929"}),e.createElement(R,{href:"#\u519C\u5386\u663E\u793A",title:"\u519C\u5386\u663E\u793A"}),e.createElement(R,{href:"#api",title:"API"})))}export{de as default};
