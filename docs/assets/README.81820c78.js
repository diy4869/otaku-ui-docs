import{r as p,c as m,j as t,F as E,b as e}from"./index.470a316f.js";import"./style.6ba18b76.js";import{A as h}from"./api.f99173f3.js";import{A as g,a as i}from"./style.deb3bbcd.js";import"./index.a667917b.js";import{H as D}from"./highlightCode.7ddbf745.js";import{C as b}from"./checkbox.6817f5fa.js";import{g as A}from"./get.07121ca7.js";import{C as B}from"./codeExample.3261d776.js";import"./_toKey.b5fb8a0d.js";import"./typescript.627707e9.js";function x(o){const{data:a,tableColumn:u,multiple:l=!1}=o,[s,F]=p.exports.useState(a);return p.exports.useEffect(()=>{F(a)},[a]),m("table",{className:"otaku-table",children:[m("th",{className:"otaku-table-header",children:[l&&t("td",{className:"otaku-table-multiple",children:t(b,{})}),u.map((r,d)=>t("td",{children:r.label},d))]}),t("tbody",{className:"otaku-table-body",children:s==null?void 0:s.map((r,d)=>m("tr",{className:"otaku-table-row",children:[l&&t("td",{className:"otaku-table-multiple",children:t(b,{})}),u.map((n,c)=>{const f={row:r,rowIndex:d,columnIndex:c},C=A(r,n.prop,n.defaultValue);return t(E,{children:t("td",{children:t("div",{className:"otaku-cell-content",children:n.render?n.render(f):C})},c)})})]},d))})]})}function y(){const o=[{name:"disabled",required:!1,type:"number",defaultValue:"",desc:"\u7981\u7528"},{name:"loading",required:!1,type:"number",defaultValue:"",desc:"\u7981\u7528"},{name:"size",required:!1,type:"small | middle | large",desc:"\u7981\u7528"}],a=[{label:"\u5C5E\u6027",prop:"name"},{label:"\u662F\u5426\u5FC5\u586B",prop:"required",render(u){const{row:l}=u;return e.createElement("span",null,l.require?"\u662F":"\u5426")}},{label:"\u7C7B\u578B",prop:"type"},{label:"\u9ED8\u8BA4\u503C",prop:"defaultValue",defaultValue:"\u8FD9\u662F\u6CA1\u6709\u6570\u636E\u7684\u60C5\u51B5"},{label:"\u63CF\u8FF0",prop:"desc"}];return e.createElement(x,{data:o,tableColumn:a})}function M(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown-body"},e.createElement("h2",{id:"table",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#table"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," Table"),e.createElement(B,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(y,null)),code:`import { Table } from 'otaku-ui'

function Example () {
  const tableData = [
    {
      name: 'disabled',
      required: false,
      type: 'number',
      defaultValue: '',
      desc: '\u7981\u7528'
    },
    {
      name: 'loading',
      required: false,
      type: 'number',
      defaultValue: '',
      desc: '\u7981\u7528'
    },
    {
      name: 'size',
      required: false,
      type: 'small | middle | large',
      // defaultValue: '',
      desc: '\u7981\u7528'
    }
  ]

  const tableColumn = [
    {
      label: '\u5C5E\u6027',
      prop: 'name'
    },
    {
      label: '\u662F\u5426\u5FC5\u586B',
      prop: 'required',
      render(data) {
        const { row } = data

        return (
          <span>{ row.require ? '\u662F' : '\u5426'}</span>
        )
      },
    },
    {
      label: '\u7C7B\u578B',
      prop: 'type'
    },
    {
      label: '\u9ED8\u8BA4\u503C',
      prop: 'defaultValue',
      defaultValue: '\u8FD9\u662F\u6CA1\u6709\u6570\u636E\u7684\u60C5\u51B5'
    },
    {
      label: '\u63CF\u8FF0',
      prop: 'desc'
    }
  ]

  return (
    <Table data={tableData} tableColumn={tableColumn}></Table>
  )
}

ReactDOM.createRoot(container).render(<Example/>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(D,{lang:"tsx",code:`function Example () {
  const tableData = [
    {
      name: 'disabled',
      required: false,
      type: 'number',
      defaultValue: '',
      desc: '\u7981\u7528'
    },
    {
      name: 'loading',
      required: false,
      type: 'number',
      defaultValue: '',
      desc: '\u7981\u7528'
    },
    {
      name: 'size',
      required: false,
      type: 'small | middle | large',
      // defaultValue: '',
      desc: '\u7981\u7528'
    }
  ]

  const tableColumn = [
    {
      label: '\u5C5E\u6027',
      prop: 'name'
    },
    {
      label: '\u662F\u5426\u5FC5\u586B',
      prop: 'required',
      render(data) {
        const { row } = data

        return (
          <span>{ row.require ? '\u662F' : '\u5426'}</span>
        )
      },
    },
    {
      label: '\u7C7B\u578B',
      prop: 'type'
    },
    {
      label: '\u9ED8\u8BA4\u503C',
      prop: 'defaultValue',
      defaultValue: '\u8FD9\u662F\u6CA1\u6709\u6570\u636E\u7684\u60C5\u51B5'
    },
    {
      label: '\u63CF\u8FF0',
      prop: 'desc'
    }
  ]

  return (
    <Table data={tableData} tableColumn={tableColumn}></Table>
  )
}

ReactDOM.createRoot(container).render(<Example/>)
`})))),e.createElement("h2",{id:"api",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#api"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," api"),e.createElement(e.Fragment,null,e.createElement(h,{code:`interface tableColumnOptions {
  label: string
  prop: string
  defaultValue?: React.ReactNode
  render?: (data?: renderArgs) => React.ReactNode
}

interface TableProps {
  data: Record<string, unknown>[]
  children?: React.ReactNode
  multiple?: boolean
  border?: boolean
  stripe?: boolean
  tableColumn: tableColumnOptions[]
}`,html:`<h2>Table</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>data</td>
                            <td>\u662F</td>
                            <td>Record<string, unknown>[]</td>
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
                            <td>multiple</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>border</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>stripe</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>tableColumn</td>
                            <td>\u662F</td>
                            <td>tableColumnOptions[]</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),e.createElement(g,{target:".main"},e.createElement(i,{href:"#table",title:"Table"}),e.createElement(i,{href:"#api",title:"api"})))}export{M as default};
