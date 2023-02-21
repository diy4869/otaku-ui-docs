import{r as m,c as C,j as g,b as e}from"./index.50043c3d.js";import"./style.6ba18b76.js";import{A as S}from"./api.7d806942.js";import{p as V,i as M,O as _,U as N,A as y,a as O,W as P,w as x}from"./style.d309e604.js";import"./index.a667917b.js";import{B as w}from"./button.dec6ac64.js";import{H as k}from"./highlightCode.59aa7d3b.js";import{a as W,_ as $}from"./_isIndex.5ca3c58e.js";import{_ as H,a as K}from"./_toKey.8d3ffd29.js";import{C as T}from"./codeExample.b35ba111.js";import"./typescript.78515962.js";var U=W,G=V,J=Object.prototype,L=J.hasOwnProperty;function Q(t,u,r){var l=t[u];(!(L.call(t,u)&&G(l,r))||r===void 0&&!(u in t))&&U(t,u,r)}var X=Q,Y=X,Z=H,z=$,b=M,j=K;function ee(t,u,r,l){if(!b(t))return t;u=Z(u,t);for(var s=-1,c=u.length,n=c-1,d=t;d!=null&&++s<c;){var o=j(u[s]),F=r;if(o==="__proto__"||o==="constructor"||o==="prototype")return t;if(s!=n){var p=d[o];F=l?l(p,o,d):void 0,F===void 0&&(F=b(p)?p:z(u[s+1])?[]:{})}Y(d,o,F),d=d[o]}return t}var te=ee,ue=te;function re(t,u,r){return t==null?t:ue(t,u,r)}var ae=re;function B(t){var A;const{label:u,field:r,required:l,children:s}=t,c=m.exports.useContext(_),{labelWidth:n,labelAlign:d,requiredAlign:o}=c,[F,p]=m.exports.useState("pending"),[E,D]=m.exports.useState(N),[R,q]=m.exports.useState(new Map);return console.log(s),m.exports.useEffect(()=>{E.on("validate",f=>{D(f),p(f.status);const h=f.validateErrors.reduce((a,i)=>(a.set(i.field,i),a),new Map);q(h),console.log(h)})},[]),C("li",{className:"otaku-form-item",style:{gridTemplateColumns:`${n} 1fr`},children:[C("div",{className:"otaku-form-item-label",style:{textAlign:d},children:[o==="left"&&l&&g("span",{className:"is-required",children:"*"}),u,o==="right"&&l&&g("span",{className:"is-required",children:"*"})]}),C("div",{className:"otaku-form-item-content",children:[g("div",{children:e.Children.map(s,f=>{const h=f;return e.cloneElement(h,{...h.props,onChange(a){let i;(typeof a=="string"||Array.isArray(a)||a.target.checked||a.target.files)&&(i=a),console.log(a);const v=ae(E.options.model,r,i);console.log(E,v),E.on("setModel",I=>{I.setOptions({...I.options,model:v})})}})})}),g("span",{className:"otaku-form-item-error-message",children:F==="error"?(A=R.get(r))==null?void 0:A.message:""})]})]})}function ne(){const t=m.exports.createRef(null);let u;m.exports.useRef(null);const[r,l]=m.exports.useState({input:"",input2:""}),s={input:{required:!0,message:"\u8F93\u5165\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A"},input2:{min:3,max:10,message:"\u8F93\u5165\u5185\u5BB9\u5FC5\u987B\u5728 3-10 \u4E4B\u95F4",required:!0}},c=n=>{n.preventDefault(),u.validate().then(d=>{console.log("\u6210\u529F")})};return e.createElement(P,{rules:s,model:r,ref:t,getFormInstance:n=>{u=n}},e.createElement(B,{label:"\u8F93\u5165\u6846",field:"input",required:!0},e.createElement(x,{placeholder:"\u8F93\u5165\u70B9\u4EC0\u4E48\u5427",onChange:n=>{l({...r,input:n})}})),e.createElement(B,{label:"\u8F93\u5165\u68462",field:"input2",required:!0},e.createElement(x,{placeholder:"\u8F93\u5165\u70B9\u4EC0\u4E48\u5427",onChange:n=>{l({...r,input2:n})}})),e.createElement(B,null,e.createElement(w,{type:"primary",onClick:c},"\u63D0\u4EA4")))}function Ee(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown-body"},e.createElement("h2",{id:"form-%E8%A1%A8%E5%8D%95",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#form-%E8%A1%A8%E5%8D%95"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," Form \u8868\u5355"),e.createElement(T,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(ne,null)),code:`import { useState, useRef, createRef } from 'react'
import { Form, FormItem, Button, Input, DatePicker, FormValidate } from 'otaku-ui'

function Example() {
  const ref = createRef(null)
  let formValidate

  const form = useRef(null)
  const [model, setModel] = useState({
    input: '',
    input2: ''
  })
  const rules = {
    input: {
      required: true,
      message: '\u8F93\u5165\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A'
    },
    input2: {
      min: 3,
      max: 10,
      message: '\u8F93\u5165\u5185\u5BB9\u5FC5\u987B\u5728 3-10 \u4E4B\u95F4',
      required: true
    }
  }

  const submit = (e) => {
    e.preventDefault()
    formValidate.validate().then(res => {
      console.log('\u6210\u529F')
    })
  }

  return (
    <Form
      rules={rules}
      model={model}
      ref={ref}
      getFormInstance={(instance) => {
        formValidate = instance
      }}>
      <FormItem label='\u8F93\u5165\u6846' field="input" required>
        <Input placeholder='\u8F93\u5165\u70B9\u4EC0\u4E48\u5427' onChange={(val) => {
          setModel({
            ...model,
            input: val
          })
        }}></Input>
      </FormItem>
      <FormItem label='\u8F93\u5165\u68462' field="input2" required>
        <Input
          placeholder='\u8F93\u5165\u70B9\u4EC0\u4E48\u5427'
          onChange={val => {
            setModel({
              ...model,
              input2: val
            })
          }}></Input>
      </FormItem>

      <FormItem>
        <Button type='primary' onClick={submit}>\u63D0\u4EA4</Button>
      </FormItem>
    </Form>
  )
}

ReactDOM.createRoot(container).render(<Example/>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(k,{lang:"tsx",code:`function Example() {
  const ref = createRef(null)
  let formValidate

  const form = useRef(null)
  const [model, setModel] = useState({
    input: '',
    input2: ''
  })
  const rules = {
    input: {
      required: true,
      message: '\u8F93\u5165\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A'
    },
    input2: {
      min: 3,
      max: 10,
      message: '\u8F93\u5165\u5185\u5BB9\u5FC5\u987B\u5728 3-10 \u4E4B\u95F4',
      required: true
    }
  }

  const submit = (e) => {
    e.preventDefault()
    formValidate.validate().then(res => {
      console.log('\u6210\u529F')
    })
  }

  return (
    <Form
      rules={rules}
      model={model}
      ref={ref}
      getFormInstance={(instance) => {
        formValidate = instance
      }}>
      <FormItem label='\u8F93\u5165\u6846' field="input" required>
        <Input placeholder='\u8F93\u5165\u70B9\u4EC0\u4E48\u5427' onChange={(val) => {
          setModel({
            ...model,
            input: val
          })
        }}></Input>
      </FormItem>
      <FormItem label='\u8F93\u5165\u68462' field="input2" required>
        <Input
          placeholder='\u8F93\u5165\u70B9\u4EC0\u4E48\u5427'
          onChange={val => {
            setModel({
              ...model,
              input2: val
            })
          }}></Input>
      </FormItem>

      <FormItem>
        <Button type='primary' onClick={submit}>\u63D0\u4EA4</Button>
      </FormItem>
    </Form>
  )
}

ReactDOM.createRoot(container).render(<Example/>)
`})))),e.createElement(e.Fragment,null,e.createElement(S,{code:`export interface BaseForm {
  labelAlign?: 'left' | 'right'
  requiredAlign?: 'left' | 'right'
  model?: {
    [key: string | number]: unknown
  }
  labelWidth?: string
  disabled?: boolean
  readonly?: boolean
  rules?: Rules
}

export interface FormProps extends BaseForm {
  children?: React.ReactNode[]
  onSubmit?: () => void
  onValidate?: () => void
  getFormInstance?: (instance: FormValidate) => void
}

interface FormItemProps {
  label?: string
  field?: string
  required?: boolean
  children?: React.ReactNode
}`,html:`<h2>Form</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>children</td>
                            <td>\u5426</td>
                            <td>React.ReactNode[]</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>onSubmit</td>
                            <td>\u5426</td>
                            <td>() => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>onValidate</td>
                            <td>\u5426</td>
                            <td>() => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>getFormInstance</td>
                            <td>\u5426</td>
                            <td>(instance: FormValidate) => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
<h2>FormItem</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>label</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>field</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>required</td>
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
                        
                  </table>
`}))),e.createElement(y,{target:".main"},e.createElement(O,{href:"#form-\u8868\u5355",title:"Form \u8868\u5355"})))}export{Ee as default};
