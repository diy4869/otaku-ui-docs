import{b as e}from"./index.50043c3d.js";import"./style.6ba18b76.js";import{A as i}from"./api.7d806942.js";import{S as s,I as d,A,a as n}from"./style.d309e604.js";import"./index.a667917b.js";import{B as t}from"./button.dec6ac64.js";import{H as r}from"./highlightCode.59aa7d3b.js";import{G as l,a as u}from"./grid.af91fe04.js";import{C as a}from"./codeExample.b35ba111.js";import"./typescript.78515962.js";function F(){return e.createElement("div",null,["primary"].map((c,E)=>e.createElement(l,{count:3,gap:10,key:E},["small","middle","large"].map((o,m)=>e.createElement(u,{key:m},e.createElement(t,{type:c,size:o},"\u4E3B\u8981\u6309\u94AE"))))))}function b(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown-body"},e.createElement("h2",{id:"button-%E6%8C%89%E9%92%AE",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#button-%E6%8C%89%E9%92%AE"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," Button \u6309\u94AE"),e.createElement(a,{desc:"\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(s,null,e.createElement(t,null,"\u9ED8\u8BA4\u6309\u94AE"),e.createElement(t,{type:"primary"},"\u4E3B\u8981\u6309\u94AE"),e.createElement(t,{type:"success"},"\u6210\u529F\u6309\u94AE"),e.createElement(t,{type:"warning"},"\u8B66\u544A\u6309\u94AE"),e.createElement(t,{type:"danger"},"\u9519\u8BEF\u6309\u94AE"))),code:`import { Button, Space, Grid, GridItem, Icon } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Space>
    <Button>\u9ED8\u8BA4\u6309\u94AE</Button>
    <Button type="primary">\u4E3B\u8981\u6309\u94AE</Button>
    <Button type="success">\u6210\u529F\u6309\u94AE</Button>
    <Button type="warning">\u8B66\u544A\u6309\u94AE</Button>
    <Button type="danger">\u9519\u8BEF\u6309\u94AE</Button>
  </Space>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(r,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Space>
    <Button>\u9ED8\u8BA4\u6309\u94AE</Button>
    <Button type="primary">\u4E3B\u8981\u6309\u94AE</Button>
    <Button type="success">\u6210\u529F\u6309\u94AE</Button>
    <Button type="warning">\u8B66\u544A\u6309\u94AE</Button>
    <Button type="danger">\u9519\u8BEF\u6309\u94AE</Button>
  </Space>)
`})))),e.createElement("h2",{id:"%E5%9C%86%E8%A7%92%E6%8C%89%E9%92%AE",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E5%9C%86%E8%A7%92%E6%8C%89%E9%92%AE"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u5706\u89D2\u6309\u94AE"),e.createElement(a,{desc:"\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(t,{type:"primary",shape:"round"},"\u4E3B\u8981\u6309\u94AE")),code:`import { Button, Space, Grid, GridItem, Icon } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Button type="primary" shape="round">\u4E3B\u8981\u6309\u94AE</Button>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(r,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Button type="primary" shape="round">\u4E3B\u8981\u6309\u94AE</Button>)
`})))),e.createElement("h2",{id:"disabled-%E7%A6%81%E7%94%A8",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#disabled-%E7%A6%81%E7%94%A8"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," Disabled \u7981\u7528"),e.createElement(a,{desc:"\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(l,{count:5},e.createElement(u,null,e.createElement(t,{disabled:!0},"\u9ED8\u8BA4\u6309\u94AE")),e.createElement(u,null,e.createElement(t,{type:"primary",disabled:!0},"\u4E3B\u8981\u6309\u94AE")),e.createElement(u,null,e.createElement(t,{type:"success",disabled:!0},"\u6210\u529F\u6309\u94AE")),e.createElement(u,null,e.createElement(t,{type:"warning",disabled:!0},"\u8B66\u544A\u6309\u94AE")),e.createElement(u,null,e.createElement(t,{type:"danger",disabled:!0},"\u9519\u8BEF\u6309\u94AE")))),code:`import { Button, Space, Grid, GridItem, Icon } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Grid count={5}>
    <GridItem>
      <Button disabled>\u9ED8\u8BA4\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="primary" disabled>\u4E3B\u8981\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="success" disabled>\u6210\u529F\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="warning" disabled>\u8B66\u544A\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="danger" disabled>\u9519\u8BEF\u6309\u94AE</Button>
    </GridItem>
  </Grid>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(r,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Grid count={5}>
    <GridItem>
      <Button disabled>\u9ED8\u8BA4\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="primary" disabled>\u4E3B\u8981\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="success" disabled>\u6210\u529F\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="warning" disabled>\u8B66\u544A\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="danger" disabled>\u9519\u8BEF\u6309\u94AE</Button>
    </GridItem>
  </Grid>)
`})))),e.createElement("h2",{id:"loading-%E5%8A%A0%E8%BD%BD%E7%8A%B6%E6%80%81",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#loading-%E5%8A%A0%E8%BD%BD%E7%8A%B6%E6%80%81"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," loading \u52A0\u8F7D\u72B6\u6001"),e.createElement(a,{desc:"\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(l,{count:5},e.createElement(u,null,e.createElement(t,{loading:!0},"\u9ED8\u8BA4\u6309\u94AE")),e.createElement(u,null,e.createElement(t,{type:"primary",loading:!0},"\u4E3B\u8981\u6309\u94AE")),e.createElement(u,null,e.createElement(t,{type:"success",loading:!0},"\u6210\u529F\u6309\u94AE")),e.createElement(u,null,e.createElement(t,{type:"warning",loading:!0},"\u8B66\u544A\u6309\u94AE")),e.createElement(u,null,e.createElement(t,{type:"danger",loading:!0},"\u9519\u8BEF\u6309\u94AE")))),code:`import { Button, Space, Grid, GridItem, Icon } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Grid count={5}>
    <GridItem>
      <Button loading>\u9ED8\u8BA4\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="primary" loading>\u4E3B\u8981\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="success" loading>\u6210\u529F\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="warning" loading>\u8B66\u544A\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="danger" loading>\u9519\u8BEF\u6309\u94AE</Button>
    </GridItem>
  </Grid>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(r,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Grid count={5}>
    <GridItem>
      <Button loading>\u9ED8\u8BA4\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="primary" loading>\u4E3B\u8981\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="success" loading>\u6210\u529F\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="warning" loading>\u8B66\u544A\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="danger" loading>\u9519\u8BEF\u6309\u94AE</Button>
    </GridItem>
  </Grid>)
`})))),e.createElement("h2",{id:"%E5%B9%BD%E7%81%B5%E6%8C%89%E9%92%AE",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E5%B9%BD%E7%81%B5%E6%8C%89%E9%92%AE"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u5E7D\u7075\u6309\u94AE"),e.createElement(a,{desc:"\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(l,{count:5},e.createElement(u,null,e.createElement(t,{ghost:!0},"\u9ED8\u8BA4\u6309\u94AE")),e.createElement(u,null,e.createElement(t,{type:"primary",ghost:!0},"\u4E3B\u8981\u6309\u94AE")),e.createElement(u,null,e.createElement(t,{type:"success",ghost:!0},"\u6210\u529F\u6309\u94AE")),e.createElement(u,null,e.createElement(t,{type:"warning",ghost:!0},"\u8B66\u544A\u6309\u94AE")),e.createElement(u,null,e.createElement(t,{type:"danger",ghost:!0},"\u9519\u8BEF\u6309\u94AE")))),code:`import { Button, Space, Grid, GridItem, Icon } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Grid count={5}>
    <GridItem>
      <Button ghost>\u9ED8\u8BA4\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="primary" ghost>\u4E3B\u8981\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="success" ghost>\u6210\u529F\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="warning" ghost>\u8B66\u544A\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="danger" ghost>\u9519\u8BEF\u6309\u94AE</Button>
    </GridItem>
  </Grid>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(r,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Grid count={5}>
    <GridItem>
      <Button ghost>\u9ED8\u8BA4\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="primary" ghost>\u4E3B\u8981\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="success" ghost>\u6210\u529F\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="warning" ghost>\u8B66\u544A\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="danger" ghost>\u9519\u8BEF\u6309\u94AE</Button>
    </GridItem>
  </Grid>)
`})))),e.createElement("h2",{id:"%E4%B8%8D%E5%90%8C%E5%A4%A7%E5%B0%8F%E7%9A%84%E6%8C%89%E9%92%AE",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E4%B8%8D%E5%90%8C%E5%A4%A7%E5%B0%8F%E7%9A%84%E6%8C%89%E9%92%AE"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u4E0D\u540C\u5927\u5C0F\u7684\u6309\u94AE"),e.createElement(a,{desc:"\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(F,null)),code:`import { Button, Space, Grid, GridItem, Icon } from 'otaku-ui'

function Demo () {
  return (
    <div>
      {['primary'].map((type, typeIndex) => {
        return (
          <Grid count={3} gap={10} key={typeIndex}>
            {['small', 'middle', 'large'].map((size, sizeIndex) => {
              return (
                <GridItem key={sizeIndex}>
                  <Button type={type} size={size}>
                    \u4E3B\u8981\u6309\u94AE
                  </Button>
                </GridItem>
              )
            })}
          </Grid>
        )
      })}
    </div>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(r,{lang:"tsx",code:`function Demo () {
  return (
    <div>
      {['primary'].map((type, typeIndex) => {
        return (
          <Grid count={3} gap={10} key={typeIndex}>
            {['small', 'middle', 'large'].map((size, sizeIndex) => {
              return (
                <GridItem key={sizeIndex}>
                  <Button type={type} size={size}>
                    \u4E3B\u8981\u6309\u94AE
                  </Button>
                </GridItem>
              )
            })}
          </Grid>
        )
      })}
    </div>
  )
}

ReactDOM.createRoot(container).render(<Demo/>)
`})))),e.createElement("h2",{id:"%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%89%E9%92%AE%E9%A2%9C%E8%89%B2",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%89%E9%92%AE%E9%A2%9C%E8%89%B2"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"),e.createElement(a,{desc:"\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(t,{type:"danger",bgcolor:"red"},"\u6309\u94AE")),code:`import { Button, Space, Grid, GridItem, Icon } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Button type="danger" bgcolor="red">\u6309\u94AE</Button>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(r,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Button type="danger" bgcolor="red">\u6309\u94AE</Button>)
`})))),e.createElement("h2",{id:"%E5%85%B7%E6%9C%89-icon-%E7%9A%84%E6%8C%89%E9%92%AE",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E5%85%B7%E6%9C%89-icon-%E7%9A%84%E6%8C%89%E9%92%AE"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u5177\u6709 icon \u7684\u6309\u94AE"),e.createElement(a,{desc:"\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(l,{count:3},e.createElement(u,null,e.createElement(t,{type:"primary",iconDirection:"left",icon:e.createElement(d,{name:"search-line"})},"\u5DE6\u8FB9 icon \u7684\u6309\u94AE")),e.createElement(u,null,e.createElement(t,{type:"primary",iconDirection:"right",icon:e.createElement(d,{name:"search-line"})},"\u53F3\u8FB9 icon \u7684\u6309\u94AE")))),code:`import { Button, Space, Grid, GridItem, Icon } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Grid count={3}>
    <GridItem>
      <Button type="primary" iconDirection="left" icon={<Icon name="search-line"></Icon>}>\u5DE6\u8FB9 icon \u7684\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="primary" iconDirection="right" icon={<Icon name="search-line"></Icon>}>\u53F3\u8FB9 icon \u7684\u6309\u94AE</Button>
    </GridItem>
  </Grid>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(r,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Grid count={3}>
    <GridItem>
      <Button type="primary" iconDirection="left" icon={<Icon name="search-line"></Icon>}>\u5DE6\u8FB9 icon \u7684\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="primary" iconDirection="right" icon={<Icon name="search-line"></Icon>}>\u53F3\u8FB9 icon \u7684\u6309\u94AE</Button>
    </GridItem>
  </Grid>)
`})))),e.createElement("h2",{id:"%E4%B8%8D%E5%90%8C%E5%BD%A2%E7%8A%B6%E7%9A%84%E6%8C%89%E9%92%AE",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#%E4%B8%8D%E5%90%8C%E5%BD%A2%E7%8A%B6%E7%9A%84%E6%8C%89%E9%92%AE"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," \u4E0D\u540C\u5F62\u72B6\u7684\u6309\u94AE"),e.createElement(a,{desc:"\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0",lang:"tsx",example:e.createElement(e.Fragment,null,e.createElement("style",null,""),e.createElement(l,{count:5},e.createElement(u,null,e.createElement(t,{type:"primary",shape:"round"},"\u5706\u89D2\u6309\u94AE")),e.createElement(u,null,e.createElement(t,{type:"primary",shape:"circle",icon:e.createElement(d,{name:"search-line"})})))),code:`import { Button, Space, Grid, GridItem, Icon } from 'otaku-ui'

ReactDOM.createRoot(container).render(<Grid count={5}>
    <GridItem>
      <Button type="primary" shape="round">\u5706\u89D2\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="primary" shape="circle" icon={<Icon name="search-line"></Icon>}></Button>
    </GridItem>
  </Grid>)
`,style:{lang:"css",code:""}},e.createElement("p",null,"\u8FD9\u4E2A\u662F\u6309\u94AE\u7684\u63CF\u8FF0"),e.createElement("pre",null,e.createElement("code",{className:"language-tsx"},e.createElement(r,{lang:"tsx",code:`ReactDOM.createRoot(container).render(<Grid count={5}>
    <GridItem>
      <Button type="primary" shape="round">\u5706\u89D2\u6309\u94AE</Button>
    </GridItem>
    <GridItem>
      <Button type="primary" shape="circle" icon={<Icon name="search-line"></Icon>}></Button>
    </GridItem>
  </Grid>)
`})))),e.createElement("h2",{id:"api",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#api"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," API"),e.createElement(e.Fragment,null,e.createElement(i,{code:`export interface ButtonProps {
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
`}))),e.createElement(A,{target:".main"},e.createElement(n,{href:"#button-\u6309\u94AE",title:"Button \u6309\u94AE"}),e.createElement(n,{href:"#\u5706\u89D2\u6309\u94AE",title:"\u5706\u89D2\u6309\u94AE"}),e.createElement(n,{href:"#disabled-\u7981\u7528",title:"Disabled \u7981\u7528"}),e.createElement(n,{href:"#loading-\u52A0\u8F7D\u72B6\u6001",title:"loading \u52A0\u8F7D\u72B6\u6001"}),e.createElement(n,{href:"#\u5E7D\u7075\u6309\u94AE",title:"\u5E7D\u7075\u6309\u94AE"}),e.createElement(n,{href:"#\u4E0D\u540C\u5927\u5C0F\u7684\u6309\u94AE",title:"\u4E0D\u540C\u5927\u5C0F\u7684\u6309\u94AE"}),e.createElement(n,{href:"#\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272",title:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"}),e.createElement(n,{href:"#\u5177\u6709-icon-\u7684\u6309\u94AE",title:"\u5177\u6709 icon \u7684\u6309\u94AE"}),e.createElement(n,{href:"#\u4E0D\u540C\u5F62\u72B6\u7684\u6309\u94AE",title:"\u4E0D\u540C\u5F62\u72B6\u7684\u6309\u94AE"}),e.createElement(n,{href:"#api",title:"API"})))}export{b as default};
