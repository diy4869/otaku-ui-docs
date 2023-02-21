import{j as n,c as g,b as e}from"./index.50043c3d.js";import"./style.6ba18b76.js";import{A as y}from"./api.7d806942.js";import{A as q,a as E}from"./style.d309e604.js";import"./index.a667917b.js";import{H as D}from"./highlightCode.59aa7d3b.js";import{g as V}from"./get.e4d94a9c.js";import{C as N}from"./codeExample.b35ba111.js";import"./_toKey.8d3ffd29.js";import"./typescript.78515962.js";function B(d){const{data:c=[],tableColumn:t=[]}=d,o=()=>{const u=new Map;let r,f,h,C;return c.reduce((i,F,l)=>{let a=0;const w=t.length;for(;a<w;){const p=t[a],I={row:F,rowIndex:l,columnIndex:a};if(V(F,p.prop,p.defaultValue),p.merge){const{colspan:m=1,rowspan:b=1}=p.merge(I);if(m!==1||b!==1){const s=[l,a],x=[l+(b-1),a+(m-1)];u.set(s.join("-"),{start:s,end:x}),[r,f]=s,[h,C]=x}if(l===r&&a===f){const s=n("div",{className:"otaku-grid-table-cell",style:{gridColumn:`${a+1} / ${m+a+1}`,gridRow:`${l+1} / ${b+l+1}`},"data-colspan":m,"data-rowspan":b,"data-key":`${l}-${a}`,children:g("div",{className:"otaku-grid-table-cell-content",children:[l,"---",a]})},`${l}-${a}`);i.push(s)}if(l>=r&&a>=f&&l<=h&&a<=C)a++;else{const s=n("div",{className:"otaku-grid-table-cell","data-key":`${l}-${a}`,children:g("div",{className:"otaku-grid-table-cell-content",children:[l,"---",a]})},`${l}-${a}`);i.push(s),a++}}else{const m=n("div",{className:"otaku-grid-table-cell","data-key":`${l}-${a}`,children:g("div",{className:"otaku-grid-table-cell-content",children:[l,"---",a]})},`${l}-${a}`);i.push(m),a++}}return i},[])};return n("ul",{className:"otaku-grid-table-body",children:n("li",{className:"otaku-grid-table-row",style:{gridTemplateColumns:`repeat(${t.length}, 1fr)`},children:o()})})}function R(d){const{tableColumn:c=[]}=d;return n("ul",{className:"otaku-grid-table-header",style:{gridTemplateColumns:`repeat(${c.length}, 1fr)`},children:c.map((t,o)=>n("li",{children:n("div",{className:"otaku-grid-table-cell",children:t.label})},o))})}function $(d){return g("section",{className:"otaku-grid-table-container",children:[n(R,{...d}),n(B,{...d})]})}function k(){const d=[{label:"\u5C5E\u6027",prop:"name",merge(t){const{row:o,rowIndex:u,columnIndex:r}=t;return u===0&&r===0?{colspan:2}:{rowspan:u===3&&r===0?2:1,colspan:u===3&&r===0?5:1}}},{label:"\u662F\u5426\u5FC5\u586B",prop:"required",render(t){const{row:o}=t;return e.createElement("span",null,o.require?"\u662F":"\u5426")},merge(t){const{row:o,rowIndex:u,columnIndex:r}=t;return{colspan:u===1&&r===1?2:1,rowspan:u===1&&r===1?2:1}}},{label:"\u7C7B\u578B",prop:"type"},{label:"\u9ED8\u8BA4\u503C",prop:"defaultValue",defaultValue:"\u8FD9\u662F\u6CA1\u6709\u6570\u636E\u7684\u60C5\u51B5",merge(t){const{row:o,rowIndex:u,columnIndex:r}=t;return{colspan:u===0&&r===3?2:1,rowspan:u===0?3:1}}},{label:"\u63CF\u8FF0",prop:"desc"}],c=[{name:"disabled",required:!1,type:"number",defaultValue:"",desc:"\u7981\u7528"},{name:"loading",required:!1,type:"number",defaultValue:"",desc:"\u7981\u7528"},{name:"size",required:!1,type:"small | middle | large",desc:"\u7981\u7528"},{name:"size",required:!1,type:"small | middle | large",desc:"\u7981\u7528"},{name:"size",required:!1,type:"small | middle | large",desc:"\u7981\u7528"},{name:"size",required:!1,type:"small | middle | large",desc:"\u7981\u7528"}];return e.createElement($,{data:c,tableColumn:d})}function P(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown-body"},e.createElement("h2",{id:"gridtable",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#gridtable"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," GridTable"),e.createElement(N,{desc:"",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(k,null)),code:`import { GridTable } from 'otaku-ui'

function  Demo() {
  const tableColumn = [
    {
      label: '\u5C5E\u6027',
      prop: 'name',
      merge (data) {
        const { row, rowIndex, columnIndex } = data

        if (rowIndex === 0 && columnIndex === 0) {
          return {
            colspan: 2
          }
        } else {
          return {
            rowspan: rowIndex === 3 && columnIndex === 0 ?  2 : 1,
            colspan: rowIndex === 3 && columnIndex === 0 ? 5 : 1
          }
        }
      }
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
      merge (data) {
        const { row, rowIndex, columnIndex } = data

        return {
          colspan: rowIndex === 1 && columnIndex === 1 ? 2 : 1,
          rowspan: rowIndex === 1 && columnIndex === 1 ? 2 : 1
        }
      }
    },
    {
      label: '\u7C7B\u578B',
      prop: 'type',
      
    },
    {
      label: '\u9ED8\u8BA4\u503C',
      prop: 'defaultValue',
      defaultValue: '\u8FD9\u662F\u6CA1\u6709\u6570\u636E\u7684\u60C5\u51B5',
      merge (data) {
        const { row, rowIndex, columnIndex } = data

        return {
          colspan: rowIndex === 0 && columnIndex === 3 ? 2 : 1,
          rowspan: rowIndex === 0 ? 3 : 1
        }
      }
    },
    {
      label: '\u63CF\u8FF0',
      prop: 'desc'
    }
  ]
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
    },
    {
      name: 'size',
      required: false,
      type: 'small | middle | large',
      // defaultValue: '',
      desc: '\u7981\u7528'
    },
    {
      name: 'size',
      required: false,
      type: 'small | middle | large',
      // defaultValue: '',
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

  return (
    <GridTable data={tableData} tableColumn={tableColumn}></GridTable>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`,style:{lang:"css",code:""}},e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(D,{lang:"tsx",code:`function  Demo() {
  const tableColumn = [
    {
      label: '\u5C5E\u6027',
      prop: 'name',
      merge (data) {
        const { row, rowIndex, columnIndex } = data

        if (rowIndex === 0 && columnIndex === 0) {
          return {
            colspan: 2
          }
        } else {
          return {
            rowspan: rowIndex === 3 && columnIndex === 0 ?  2 : 1,
            colspan: rowIndex === 3 && columnIndex === 0 ? 5 : 1
          }
        }
      }
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
      merge (data) {
        const { row, rowIndex, columnIndex } = data

        return {
          colspan: rowIndex === 1 && columnIndex === 1 ? 2 : 1,
          rowspan: rowIndex === 1 && columnIndex === 1 ? 2 : 1
        }
      }
    },
    {
      label: '\u7C7B\u578B',
      prop: 'type',
      
    },
    {
      label: '\u9ED8\u8BA4\u503C',
      prop: 'defaultValue',
      defaultValue: '\u8FD9\u662F\u6CA1\u6709\u6570\u636E\u7684\u60C5\u51B5',
      merge (data) {
        const { row, rowIndex, columnIndex } = data

        return {
          colspan: rowIndex === 0 && columnIndex === 3 ? 2 : 1,
          rowspan: rowIndex === 0 ? 3 : 1
        }
      }
    },
    {
      label: '\u63CF\u8FF0',
      prop: 'desc'
    }
  ]
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
    },
    {
      name: 'size',
      required: false,
      type: 'small | middle | large',
      // defaultValue: '',
      desc: '\u7981\u7528'
    },
    {
      name: 'size',
      required: false,
      type: 'small | middle | large',
      // defaultValue: '',
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

  return (
    <GridTable data={tableData} tableColumn={tableColumn}></GridTable>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`})))),e.createElement("h2",{id:"api",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#api"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," api"),e.createElement(e.Fragment,null,e.createElement(y,{code:`export interface tableColumnOptions {
  label?: number | string
  prop?: string
  defaultValue?: React.ReactNode
  render?: (data?: renderArgs) => React.ReactNode
  merge?: (data: renderArgs) => mergeSpan
}

export interface GridTableProps {
  data: Record<string, any>[]
  tableColumn: tableColumnOptions[]
  children?: React.ReactNode
}`,html:`<h2>GridTable</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>data</td>
                            <td>\u662F</td>
                            <td>Record<string, any>[]</td>
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
                        
                          <tr>
                            <td>children</td>
                            <td>\u5426</td>
                            <td>React.ReactNode</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),e.createElement(q,{target:".main"},e.createElement(E,{href:"#gridtable",title:"GridTable"}),e.createElement(E,{href:"#api",title:"api"})))}export{P as default};
