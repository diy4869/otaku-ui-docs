import{r as n,j as r,c as m,b as e}from"./index.50043c3d.js";import"./style.6ba18b76.js";import{A as P}from"./api.7d806942.js";import{K as O,S as x,I as p,Q as S,V as A,A as j,a as I}from"./style.d309e604.js";import"./index.a667917b.js";import{B as q}from"./button.dec6ac64.js";import{H as M}from"./highlightCode.59aa7d3b.js";import{U as z,a as H}from"./upload.204ad246.js";import{I as T}from"./cropper.e6f58cd9.js";import{C as V}from"./codeExample.b35ba111.js";import"./progress.37997f6b.js";import"./dialog.71e75818.js";import"./typescript.78515962.js";function J(F){const{value:a,children:h}=F,[E,g]=n.exports.useState(a);return n.exports.useEffect(()=>{g(a)},[a]),r("div",{className:"otaku-image-preview-container",children:r(O,{toolbarRender:({scale:s,onScale:i})=>m(x,{children:[r(p,{size:18,name:"add-bold",className:"otaku-image-preview-toolbar",onClick:()=>i(s+1)}),r(p,{size:18,name:"minus-bold",className:"otaku-image-preview-toolbar",onClick:()=>i(s-1)})]}),children:r(S,{src:E,children:h})})})}function K(F){const{previewURL:a="",crop:h=!0,accept:E="image/*",action:g,methods:s,headers:i,name:y="file",withCredentials:D,imageCropperProps:L,beforeCrop:b,beforeUpload:f,beforeRemove:C,onUpload:d,request:c}=F,[U,u]=n.exports.useState("select"),[R,l]=n.exports.useState(a),[k,N]=n.exports.useState(!1);n.exports.useEffect(()=>{a&&(l(a),u("preview"))},[a]);const B=t=>{H({url:g,method:s,headers:{"Content-Type":"multipart/form-data",...i},withCredentials:D,data:{[y]:t}}).then(o=>{d==null||d("success",o.response.data)}).catch(o=>{d==null||d("error",o.response.data)})};return m("section",{className:"otaku-upload-image-container",children:[r(A,{show:U==="select",children:r(z,{autoUpload:!1,onChange:t=>{if(h){if(!(b==null?void 0:b(t[0]))){const v=new Blob([t[0]],{type:t[0].type}),w=URL.createObjectURL(v);l(w),u("crop"),N(!0)}}else if(!(f==null?void 0:f(t[0]))){const v=new Blob([t[0]],{type:t[0].type}),w=URL.createObjectURL(v);l(w),c?c(t[0]):B(t[0])}},accept:E})}),r(A,{show:U==="crop",children:r(T,{imageURL:R,visible:k,onCancel:()=>{u("select")},onConfirm:t=>{if(t!=null&&t.blob){const o=URL.createObjectURL(t.blob);l(o),u("preview"),c?c(t.file):B(t.file)}},...L})}),r(A,{show:U==="preview",children:m("div",{className:"otaku-upload-image-preview-container",children:[r("div",{className:"otaku-upload-image-preview-mask",children:m(x,{children:[r(J,{value:R,children:r(p,{name:"eye-line",color:"white"})}),r(p,{name:"delete",color:"white",onClick:()=>{(C==null?void 0:C())||(l(""),u("select"))}})]})}),r("img",{className:"otaku-upload-image-preview",src:R,alt:""})]})})]})}function Q(){return e.createElement(K,null,e.createElement(q,{type:"primary"},"\u56FE\u7247\u4E0A\u4F20"))}function ue(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown-body"},e.createElement("h2",{id:"%E5%9B%BE%E7%89%87%E4%B8%8A%E4%BC%A0",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E5%9B%BE%E7%89%87%E4%B8%8A%E4%BC%A0"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u56FE\u7247\u4E0A\u4F20"),e.createElement(V,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(Q,null)),code:`import { UploadImage, Button } from 'otaku-ui'

function Demo () {
  return (
    <UploadImage>
      <Button type="primary">\u56FE\u7247\u4E0A\u4F20</Button>
    </UploadImage>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(M,{lang:"tsx",code:`function Demo () {
  return (
    <UploadImage>
      <Button type="primary">\u56FE\u7247\u4E0A\u4F20</Button>
    </UploadImage>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`})))),e.createElement("h2",{id:"api",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#api"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," api"),e.createElement(e.Fragment,null,e.createElement(P,{code:`export type baseUploadProps = Pick<UploadProps, 'accept' | 'headers' | 'name' | 'withCredentials' | 'onUpload'>

export type UploadImageProps = {
  action?: string
  methods?: 'post' | 'put'
  previewURL?: string
  crop?: boolean
  imageCropperProps?: Omit<ImageCropperProps, 'imageURL' | 'visible'>
  children?: React.ReactNode
  request?: (file: File) => void
  beforeUpload?: (file: File) => boolean | Promise<boolean>
  beforeCrop?: (file: File) => boolean | Promise<boolean>
  beforeRemove?: () => void
} & baseUploadProps`,html:`<h2>UploadImage</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>action</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>methods</td>
                            <td>\u5426</td>
                            <td>'post' | 'put'</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>previewURL</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>crop</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>imageCropperProps</td>
                            <td>\u5426</td>
                            <td>Omit<ImageCropperProps, 'imageURL' | 'visible'></td>
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
                            <td>request</td>
                            <td>\u5426</td>
                            <td>(file: File) => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>beforeUpload</td>
                            <td>\u5426</td>
                            <td>(file: File) => boolean | Promise<boolean></td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>beforeCrop</td>
                            <td>\u5426</td>
                            <td>(file: File) => boolean | Promise<boolean></td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>beforeRemove</td>
                            <td>\u5426</td>
                            <td>() => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),e.createElement(j,{target:".main"},e.createElement(I,{href:"#\u56FE\u7247\u4E0A\u4F20",title:"\u56FE\u7247\u4E0A\u4F20"}),e.createElement(I,{href:"#api",title:"api"})))}export{ue as default};
