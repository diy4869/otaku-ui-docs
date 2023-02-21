import{r as d,j as x,b as e}from"./index.50043c3d.js";import"./style.6ba18b76.js";import{A as f}from"./api.7d806942.js";import{S as b,A as g,a as m}from"./style.d309e604.js";import"./index.a667917b.js";import{H as i}from"./highlightCode.59aa7d3b.js";import{C as l}from"./checkbox.f5762fdb.js";import{C as E}from"./codeExample.b35ba111.js";import"./typescript.78515962.js";function F(o){const{value:u=[],disabled:s,children:k,onChange:n}=o,[c,h]=d.exports.useState(u);return d.exports.useEffect(()=>{h(u)},[u]),x("div",{children:x(b,{gap:[10,20],children:e.Children.map(k,C=>{const t=C,a=c==null?void 0:c.includes(t.props.value);return e.cloneElement(t,{...t.props,disabled:s,checked:a,onChange(r){if(r!=null&&r.target.checked)a||(c.push(t.props.value),h(c));else{const p=c.findIndex(A=>A===t.props.value);p!==-1&&(c.splice(p,1),h(c))}n(c)}})})})})}function D(){const[o,u]=d.exports.useState(!1),[s,k]=d.exports.useState(!1),[n,c]=d.exports.useState(new Array(3).fill(1).map((t,a)=>({current:a,checked:!1})));d.exports.useEffect(()=>{console.log(n)},[n,o,s]);const h=t=>{const a=n.map(r=>({...r,checked:t.target.checked}));c([...a]),u(t.target.checked)},C=t=>{const a=n.map(r=>({...r,checked:t.includes(r.current)}));c([...a]),a.every(r=>r.checked)?u(!0):a.some(r=>r.checked)?k(!0):u(!1),console.log(n,a,o,s)};return e.createElement(b,{direction:"column"},e.createElement(l,{checked:o,indeterminate:s,onChange:h},"\u5168\u9009"),e.createElement(F,{value:n.filter(t=>t.checked).map(t=>t.current),onChange:C},n.map((t,a)=>e.createElement(l,{value:a,key:a},"\u7B2C",a,"\u4E2A\u5355\u9009"))))}function O(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown-body"},e.createElement("h2",{id:"%E5%A4%9A%E9%80%89%E6%A1%86%E7%BB%84",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E5%A4%9A%E9%80%89%E6%A1%86%E7%BB%84"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u591A\u9009\u6846\u7EC4"),e.createElement(E,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(D,null)),code:`import { Checkbox, CheckboxGroup, Space } from 'otaku-ui'
import { useState, useEffect } from 'react'

function Demo() {
  const [checkAll, setCheckAll] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [data, setData] = useState(
    new Array(3).fill(1).map((_, index) => {
      return {
        current: index,
        checked: false
      }
    })
  )

  useEffect(() => {
    console.log(data)
  }, [data, checkAll, indeterminate])

  const change = e => {
    const result = data.map(item => {
      return {
        ...item,
        checked: e.target.checked
      }
    })

    setData([...result])
    setCheckAll(e.target.checked)
  }

  const groupChange = (val) => {
    const result = data.map(item => {
      return {
        ...item,
        checked: val.includes(item.current)
      }
    })
    setData([...result])

    result.every(item => item.checked)
      ? setCheckAll(true)
      : result.some(item => item.checked)
      ? setIndeterminate(true)
      : setCheckAll(false)
    
    console.log(data, result, checkAll, indeterminate)
  }

  return (
    <Space direction='column'>
      <Checkbox
        checked={checkAll}
        indeterminate={indeterminate}
        onChange={change}>
        \u5168\u9009
      </Checkbox>
      <CheckboxGroup
        value={data.filter(item => item.checked).map(item => item.current)}
        onChange={groupChange}>
        {data.map((_, index) => {
          return (
            <Checkbox value={index} key={index}>
              \u7B2C{index}\u4E2A\u5355\u9009
            </Checkbox>
          )
        })}
      </CheckboxGroup>
    </Space>
  )
}

ReactDOM.createRoot(container).render(<Demo />)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(i,{lang:"tsx",code:`function Demo() {
  const [checkAll, setCheckAll] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [data, setData] = useState(
    new Array(3).fill(1).map((_, index) => {
      return {
        current: index,
        checked: false
      }
    })
  )

  useEffect(() => {
    console.log(data)
  }, [data, checkAll, indeterminate])

  const change = e => {
    const result = data.map(item => {
      return {
        ...item,
        checked: e.target.checked
      }
    })

    setData([...result])
    setCheckAll(e.target.checked)
  }

  const groupChange = (val) => {
    const result = data.map(item => {
      return {
        ...item,
        checked: val.includes(item.current)
      }
    })
    setData([...result])

    result.every(item => item.checked)
      ? setCheckAll(true)
      : result.some(item => item.checked)
      ? setIndeterminate(true)
      : setCheckAll(false)
    
    console.log(data, result, checkAll, indeterminate)
  }

  return (
    <Space direction='column'>
      <Checkbox
        checked={checkAll}
        indeterminate={indeterminate}
        onChange={change}>
        \u5168\u9009
      </Checkbox>
      <CheckboxGroup
        value={data.filter(item => item.checked).map(item => item.current)}
        onChange={groupChange}>
        {data.map((_, index) => {
          return (
            <Checkbox value={index} key={index}>
              \u7B2C{index}\u4E2A\u5355\u9009
            </Checkbox>
          )
        })}
      </CheckboxGroup>
    </Space>
  )
}

ReactDOM.createRoot(container).render(<Demo />)
`})))),e.createElement("h2",{id:"checkbox-%E5%A4%9A%E9%80%89%E6%A1%86",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#checkbox-%E5%A4%9A%E9%80%89%E6%A1%86"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," Checkbox \u591A\u9009\u6846"),e.createElement(E,{desc:"\u7B80\u5355\u7684 Checkbox",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(l,null,"\u591A\u9009\u6846")),code:`import { Checkbox, CheckboxGroup, Space } from 'otaku-ui'
import { useState, useEffect } from 'react'

ReactDOM.createRoot(container).render(<Checkbox>\u591A\u9009\u6846</Checkbox>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u7B80\u5355\u7684 Checkbox"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(i,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Checkbox>\u591A\u9009\u6846</Checkbox>)
`})))),e.createElement("h2",{id:"%E9%BB%98%E8%AE%A4%E9%80%89%E4%B8%AD",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E9%BB%98%E8%AE%A4%E9%80%89%E4%B8%AD"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u9ED8\u8BA4\u9009\u4E2D"),e.createElement(E,{desc:"\u7B80\u5355\u7684 Checkbox",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(l,{checked:!0},"\u591A\u9009\u6846")),code:`import { Checkbox, CheckboxGroup, Space } from 'otaku-ui'
import { useState, useEffect } from 'react'

ReactDOM.createRoot(container).render(<Checkbox checked={true}>\u591A\u9009\u6846</Checkbox>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u7B80\u5355\u7684 Checkbox"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(i,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Checkbox checked={true}>\u591A\u9009\u6846</Checkbox>)
`})))),e.createElement("h2",{id:"%E7%A6%81%E7%94%A8",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E7%A6%81%E7%94%A8"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u7981\u7528"),e.createElement(E,{desc:"\u7981\u7528\u7684 Checkbox",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(e.Fragment,null,e.createElement(l,{disabled:!0},"\u591A\u9009\u6846"),e.createElement(l,{indeterminate:!0,disabled:!0},"\u591A\u9009\u6846"),e.createElement(l,{checked:!0,disabled:!0},"\u591A\u9009\u6846"))),code:`import { Checkbox, CheckboxGroup, Space } from 'otaku-ui'
import { useState, useEffect } from 'react'

ReactDOM.createRoot(container).render(<>
    <Checkbox disabled>\u591A\u9009\u6846</Checkbox>
    <Checkbox indeterminate disabled>
      \u591A\u9009\u6846
    </Checkbox>
    <Checkbox checked={true} disabled>
      \u591A\u9009\u6846
    </Checkbox>
  </>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u7981\u7528\u7684 Checkbox"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(i,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<>
    <Checkbox disabled>\u591A\u9009\u6846</Checkbox>
    <Checkbox indeterminate disabled>
      \u591A\u9009\u6846
    </Checkbox>
    <Checkbox checked={true} disabled>
      \u591A\u9009\u6846
    </Checkbox>
  </>)
`})))),e.createElement("h2",{id:"api",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#api"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," api"),e.createElement(e.Fragment,null,e.createElement(f,{code:`interface CheckboxGroupProps {
  disabled?: boolean
  value: number[] | string[]
  children?: React.ReactNode[]
  onChange: (data: number[] | string[]) => void
}

export interface CheckboxProps {
  checked?: boolean
  disabled?: boolean
  indeterminate?: boolean
  children?: React.ReactNode[]
  onChange?: (e?: React.BaseSyntheticEvent) => void
}`,html:`<h2>CheckboxGroup</h2><table>
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
                            <td>value</td>
                            <td>\u662F</td>
                            <td>number[] | string[]</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>children</td>
                            <td>\u5426</td>
                            <td>React.ReactNode[]</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>onChange</td>
                            <td>\u662F</td>
                            <td>(data: number[] | string[]) => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
<h2>Checkbox</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>checked</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
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
                            <td>indeterminate</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>children</td>
                            <td>\u5426</td>
                            <td>React.ReactNode[]</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>onChange</td>
                            <td>\u5426</td>
                            <td>(e?: React.BaseSyntheticEvent) => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),e.createElement(g,{target:".main"},e.createElement(m,{href:"#\u591A\u9009\u6846\u7EC4",title:"\u591A\u9009\u6846\u7EC4"}),e.createElement(m,{href:"#checkbox-\u591A\u9009\u6846",title:"Checkbox \u591A\u9009\u6846"}),e.createElement(m,{href:"#\u9ED8\u8BA4\u9009\u4E2D",title:"\u9ED8\u8BA4\u9009\u4E2D"}),e.createElement(m,{href:"#\u7981\u7528",title:"\u7981\u7528"}),e.createElement(m,{href:"#api",title:"api"})))}export{O as default};
