import{b as t}from"./index.50043c3d.js";import"./style.6ba18b76.js";import{A as r}from"./api.7d806942.js";import{A as o,a as e}from"./style.d309e604.js";import"./index.a667917b.js";import{B as l}from"./button.dec6ac64.js";import{H as d}from"./highlightCode.59aa7d3b.js";import{U as a}from"./upload.204ad246.js";import{C as u}from"./codeExample.b35ba111.js";import"./progress.37997f6b.js";import"./typescript.78515962.js";function C(){return t.createElement(t.Fragment,null,t.createElement("div",{className:"markdown-body"},t.createElement("h2",{id:"upload",tabIndex:"-1"},t.createElement("a",{className:"header-anchor",href:"#upload"},t.createElement("span",{className:"b-anchor"}),t.createElement("span",{"aria-hidden":"false"},"#"))," Upload"),t.createElement(u,{desc:"",lang:"tsx",example:t.createElement(a,null,t.createElement(l,{type:"primary"},"\u4E0A\u4F20")),code:`import { Upload, Button } from 'otaku-ui'

 <Upload>
    <Button type="primary">\u4E0A\u4F20</Button>
 </Upload>
`,style:{lang:"css",code:""}},t.createElement("pre",null,t.createElement("code",{className:"language-tsx"},t.createElement(d,{lang:"tsx",code:` <Upload>
    <Button type="primary">\u4E0A\u4F20</Button>
 </Upload>
`})))),t.createElement("h3",{id:"%E6%8B%96%E6%8B%BD%E4%B8%8A%E4%BC%A0",tabIndex:"-1"},t.createElement("a",{className:"header-anchor",href:"#%E6%8B%96%E6%8B%BD%E4%B8%8A%E4%BC%A0"},t.createElement("span",{className:"b-anchor"}),t.createElement("span",{"aria-hidden":"false"},"#"))," \u62D6\u62FD\u4E0A\u4F20"),t.createElement("p",null,"\u62D6\u62FD\u4E0A\u4F20"),t.createElement(u,{desc:"",lang:"tsx",example:t.createElement(a,{drag:!0}),code:`import { Upload, Button } from 'otaku-ui'

 <Upload drag={true}></Upload>
`,style:{lang:"css",code:""}},t.createElement("pre",null,t.createElement("code",{className:"language-tsx"},t.createElement(d,{lang:"tsx",code:` <Upload drag={true}></Upload>
`})))),t.createElement("h2",{id:"api",tabIndex:"-1"},t.createElement("a",{className:"header-anchor",href:"#api"},t.createElement("span",{className:"b-anchor"}),t.createElement("span",{"aria-hidden":"false"},"#"))," api"),t.createElement(t.Fragment,null,t.createElement(r,{code:`export interface UploadProps {
  action?: string
  accept?: string
  name?: string
  headers?: Record<string, string>
  methods?: 'post' | 'put'
  multiple?: boolean
  directory?: boolean
  withCredentials?: boolean
  data?: Record<string, any>
  drag?: boolean
  autoUpload?: boolean
  formData?: boolean
  limit?: number
  max?: number
  children?: React.ReactNode
  request?: (file: FileList) => void
  onChange?: (file: FileList) => void
  onUpload?: (type: 'success' | 'error', result: any) => void
  beforeUpload?: (file: FileList) => boolean | Promise<boolean>
}`,html:`<h2>Upload</h2><table>
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
                            <td>accept</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>name</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td>file</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>headers</td>
                            <td>\u5426</td>
                            <td>Record<string, string></td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>methods</td>
                            <td>\u5426</td>
                            <td>'post' | 'put'</td>
                            <td>post</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>multiple</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>directory</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>withCredentials</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>data</td>
                            <td>\u5426</td>
                            <td>Record<string, any></td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>drag</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>autoUpload</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>formData</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>limit</td>
                            <td>\u5426</td>
                            <td>number</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>max</td>
                            <td>\u5426</td>
                            <td>number</td>
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
                            <td>(file: FileList) => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>onChange</td>
                            <td>\u5426</td>
                            <td>(file: FileList) => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>onUpload</td>
                            <td>\u5426</td>
                            <td>(type: 'success' | 'error', result: any) => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>beforeUpload</td>
                            <td>\u5426</td>
                            <td>(file: FileList) => boolean | Promise<boolean></td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),t.createElement(o,{target:".main"},t.createElement(e,{href:"#upload",title:"Upload"}),t.createElement(e,{href:"#\u62D6\u62FD\u4E0A\u4F20",title:"\u62D6\u62FD\u4E0A\u4F20"}),t.createElement(e,{href:"#api",title:"api"})))}export{C as default};
