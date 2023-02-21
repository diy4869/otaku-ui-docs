import{b as t,r as a}from"./index.50043c3d.js";import"./style.6ba18b76.js";import{A as o}from"./api.7d806942.js";import{A as u,a as r}from"./style.d309e604.js";import"./index.a667917b.js";import{B as n}from"./button.dec6ac64.js";import{H as i}from"./highlightCode.59aa7d3b.js";import{I as m}from"./cropper.e6f58cd9.js";import{C as l}from"./codeExample.b35ba111.js";import"./dialog.71e75818.js";import"./typescript.78515962.js";const s="/assets/miku.d5089a27.jfif";function c(){const[d,e]=a.exports.useState(!1);return t.createElement("div",null,t.createElement(n,{type:"primary",onClick:()=>{e(!0)}},"\u56FE\u7247\u88C1\u526A"),t.createElement(m,{visible:d,imageURL:s,onClose:()=>e(!1),onCancel:()=>e(!1),onConfirm:()=>e(!1)}))}function w(){return t.createElement(t.Fragment,null,t.createElement("div",{className:"markdown-body"},t.createElement("h2",{id:"imagecropper-%E5%9B%BE%E7%89%87%E8%A3%81%E5%89%AA",tabIndex:"-1"},t.createElement("a",{className:"header-anchor",href:"#imagecropper-%E5%9B%BE%E7%89%87%E8%A3%81%E5%89%AA"},t.createElement("span",{className:"b-anchor"}),t.createElement("span",{"aria-hidden":"false"},"#"))," ImageCropper \u56FE\u7247\u88C1\u526A"),t.createElement(l,{desc:"",lang:"tsx",example:t.createElement(t.Fragment,null,t.createElement("style",null,""),t.createElement(c,null)),code:`import { ImageCropper, Button } from 'otaku-ui'
import { useState } from 'react'
import miku from '../miku.jfif'

function Demo () {
  const [show, setShow] = useState(false)

  return (
    <div>
      <Button type="primary" onClick={() => {
        setShow(true)
      }}>\u56FE\u7247\u88C1\u526A</Button>
      <ImageCropper 
        visible={show} 
        imageURL={miku}
        onClose={() => setShow(false)}
        onCancel={() => setShow(false)}
        onConfirm={() => setShow(false)}>
      </ImageCropper>
    </div>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`,style:{lang:"css",code:""}},t.createElement("pre",null,t.createElement("code",{className:"language-tsx"},t.createElement(i,{lang:"tsx",code:`function Demo () {
  const [show, setShow] = useState(false)

  return (
    <div>
      <Button type="primary" onClick={() => {
        setShow(true)
      }}>\u56FE\u7247\u88C1\u526A</Button>
      <ImageCropper 
        visible={show} 
        imageURL={miku}
        onClose={() => setShow(false)}
        onCancel={() => setShow(false)}
        onConfirm={() => setShow(false)}>
      </ImageCropper>
    </div>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`})))),t.createElement("h2",{id:"api",tabIndex:"-1"},t.createElement("a",{className:"header-anchor",href:"#api"},t.createElement("span",{className:"b-anchor"}),t.createElement("span",{"aria-hidden":"false"},"#"))," api"),t.createElement(t.Fragment,null,t.createElement(o,{code:`export interface ImageCropperProps {
  imageURL: string
  visible?: boolean
  circle?: boolean
  options?: Omit<Cropper.Options, 'preview'>
  action?: React.ReactNode
  outputFilename?: string
  children?: React.ReactNode
  fixed: boolean
  fixedNumber:  number
  getInstance?: (instance: Cropper) => void
  onClose?: () => void
  onCancel?: () => void
  onConfirm?: (cropperData: outputResult) => void
}`,html:`<h2>ImageCropper</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>imageURL</td>
                            <td>\u662F</td>
                            <td>string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>visible</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>circle</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>options</td>
                            <td>\u5426</td>
                            <td>Omit<Cropper.Options, 'preview'></td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>action</td>
                            <td>\u5426</td>
                            <td>React.ReactNode</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>outputFilename</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td>cropper.png</td>
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
                            <td>fixed</td>
                            <td>\u662F</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>fixedNumber</td>
                            <td>\u662F</td>
                            <td>number</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>getInstance</td>
                            <td>\u5426</td>
                            <td>(instance: Cropper) => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>onClose</td>
                            <td>\u5426</td>
                            <td>() => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>onCancel</td>
                            <td>\u5426</td>
                            <td>() => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>onConfirm</td>
                            <td>\u5426</td>
                            <td>(cropperData: outputResult) => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),t.createElement(u,{target:".main"},t.createElement(r,{href:"#imagecropper-\u56FE\u7247\u88C1\u526A",title:"ImageCropper \u56FE\u7247\u88C1\u526A"}),t.createElement(r,{href:"#api",title:"api"})))}export{w as default};
