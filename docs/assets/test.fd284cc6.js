import{b as t}from"./index.50043c3d.js";import"./style.6ba18b76.js";import{A as a}from"./api.7d806942.js";import{A as n,a as d,N as u}from"./style.d309e604.js";import"./index.a667917b.js";import{B as o}from"./button.dec6ac64.js";import{H as c}from"./highlightCode.59aa7d3b.js";import{D as l}from"./dialog.71e75818.js";import{C as i}from"./codeExample.b35ba111.js";import"./typescript.78515962.js";function s(){const r=()=>{const e=new u;e.create({content:t.createElement(l,{show:!0,title:"\u6807\u9898",onClose:()=>{e.destory()}},"hello world"),beforeCreate(){},created(){}})};return t.createElement("section",null,t.createElement(o,{onClick:r},"\u6D4B\u8BD5"))}function A(){return t.createElement(t.Fragment,null,t.createElement("div",{className:"markdown-body"},t.createElement("h2",{id:"notice",tabIndex:"-1"},t.createElement("a",{className:"header-anchor",href:"#notice"},t.createElement("span",{className:"b-anchor"}),t.createElement("span",{"aria-hidden":"false"},"#"))," Notice"),t.createElement(i,{desc:"",lang:"tsx",example:t.createElement(t.Fragment,null,t.createElement("style",null,""),t.createElement(s,null)),code:`import { Button, Space, Grid, GridItem, Notice, Dialog } from 'otaku-ui'
import { useState, useEffect } from 'react'

function Demo() {
  const click = () => {
    const instance = new Notice()

    instance.create({
      content: (
        <Dialog 
          show={true} 
          title="\u6807\u9898"
          onClose={() => {
            instance.destory()
          }}>
            hello world
          </Dialog>
        ),
      beforeCreate () {
      },
      created () {

      }
    })
  }
  return  (
    <section>
      <Button onClick={click}>\u6D4B\u8BD5</Button>
    </section>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`,style:{lang:"css",code:""}},t.createElement("pre",null,t.createElement("code",{className:"language-tsx"},t.createElement(c,{lang:"tsx",code:`function Demo() {
  const click = () => {
    const instance = new Notice()

    instance.create({
      content: (
        <Dialog 
          show={true} 
          title="\u6807\u9898"
          onClose={() => {
            instance.destory()
          }}>
            hello world
          </Dialog>
        ),
      beforeCreate () {
      },
      created () {

      }
    })
  }
  return  (
    <section>
      <Button onClick={click}>\u6D4B\u8BD5</Button>
    </section>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`})))),t.createElement("h2",{id:"api",tabIndex:"-1"},t.createElement("a",{className:"header-anchor",href:"#api"},t.createElement("span",{className:"b-anchor"}),t.createElement("span",{"aria-hidden":"false"},"#"))," api"),t.createElement(t.Fragment,null,t.createElement(a,{code:`export interface ButtonProps {
  disabled?: boolean
  loading?: boolean
  ghost?: boolean
  icon?: React.ReactNode
  bgcolor?: string
  color?: string
  className?: string
  href?: string
  target?: '_blank' | '_self'
  shape?: 'round' | 'circle'
  type?: 'default' | 'text' | 'primary' | 'success' | 'warning' | 'danger' | 'link'
  iconDirection?: 'left' | 'right'
  size?: 'small' | 'middle' |'large'
  style?: React.CSSProperties
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLElement>
}`,html:`<h2>Button</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>disabled</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>loading</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>ghost</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>icon</td>
                            <td>\u5426</td>
                            <td>React.ReactNode</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>bgcolor</td>
                            <td>\u5426</td>
                            <td>string</td>
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
                            <td>className</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>href</td>
                            <td>\u5426</td>
                            <td>string</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>target</td>
                            <td>\u5426</td>
                            <td>'_blank' | '_self'</td>
                            <td>_blank</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>shape</td>
                            <td>\u5426</td>
                            <td>'round' | 'circle'</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>type</td>
                            <td>\u5426</td>
                            <td>'default' | 'text' | 'primary' | 'success' | 'warning' | 'danger' | 'link'</td>
                            <td>default</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>iconDirection</td>
                            <td>\u5426</td>
                            <td>'left' | 'right'</td>
                            <td>left</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>size</td>
                            <td>\u5426</td>
                            <td>'small' | 'middle' |'large'</td>
                            <td>middle</td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>style</td>
                            <td>\u5426</td>
                            <td>React.CSSProperties</td>
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
                            <td>onClick</td>
                            <td>\u5426</td>
                            <td>React.MouseEventHandler<HTMLElement></td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),t.createElement(n,{target:".main"},t.createElement(d,{href:"#notice",title:"Notice"}),t.createElement(d,{href:"#api",title:"api"})))}export{A as default};
