import{r as e,c as h,F as S,j as r}from"./index.50043c3d.js";import{t as n}from"./typescript.78515962.js";function M(x){const{code:o}=x,c=e.exports.useRef(null);e.exports.useRef(null);const s=e.exports.useRef(null),[w,i]=e.exports.useState(o),[d,p]=e.exports.useState("");e.exports.useEffect(()=>{console.log(o),p(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script src="https://unpkg.com/es-modularize@latest/dist/browser.bundle.min.js"><\/script>
          <!-- 
          <script
            src="https://unpkg.com/react@18/umd/react.development.js"
          ><\/script>
          <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
          -->
          <style>
            html,
            body,
            div,
            span,
            applet,
            object,
            iframe,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            
            blockquote,
            pre,
            a,
            abbr,
            acronym,
            address,
            big,
            cite,
            code,
            del,
            dfn,
            em,
            img,
            ins,
            kbd,
            q,
            s,
            samp,
            small,
            strike,
            strong,
            sub,
            sup,
            tt,
            var,
            b,
            u,
            i,
            center,
            dl,
            dt,
            dd,
            ol,
            ul,
            li,
            fieldset,
            form,
            label,
            legend,
            table,
            caption,
            tbody,
            tfoot,
            thead,
            tr,
            th,
            td,
            article,
            aside,
            canvas,
            details,
            embed,
            figure,
            figcaption,
            footer,
            header,
            menu,
            nav,
            output,
            ruby,
            section,
            summary,
            time,
            mark,
            audio,
            video,
            input {
                margin: 0;
                padding: 0;
                vertical-align: baseline;
            }
            
            html,
            body {
                height: 100%;
                color: black;
            }
            
            input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
              background-color: rgb(250, 255, 189); /* #FAFFBD; */
              background-image: none;
              color: rgb(0, 0, 0);
            }
            
            input:-internal-autofill-selected  {
                background-color: transparent !important;
                color: -internal-light-dark-color(transparent, transparent) !important;
            }
            
            /* HTML5 display-role reset for older browsers */
            
            article,
            aside,
            details,
            figcaption,
            figure,
            footer,
            header,
            menu,
            nav,
            section {
                display: block;
            }
            
            
            blockquote,
            q {
                quotes: none;
            }
            
            blockquote::before,
            blockquote::after,
            q::before,
            q::after {
                content: none;
            }
            
            table {
                border-collapse: collapse;
                border-spacing: 0;
            }
            
            
            /* custom */
            
            a {
                text-decoration: none;
                backface-visibility: hidden;
                cursor: pointer;
            }
            
            li {
                list-style: none;
            }
            
            html,
            body {
                width: 100%;
            }
            
            body {
                -webkit-text-size-adjust: none;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            }
            
            input[type="text"] {
                outline: none;
            }
          </style>
        </head>
        <body>
          <div>hello world</div>
          <div id="app"></div>
        </body>
        <script>
          ESModularize.build({
            imports: {
              react: ESModularize.load("https://unpkg.com/react@18.2.0/umd/react.development.js").sync().umd("React"),
              "react-dom/client": ESModularize.load("https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js")
                .sync()
                .umd("ReactDOM"),
            },
          });
        <\/script>
        <script type="module">
            const container = document.getElementById('app')
            
              ${o}


        <\/script>
      </html>
      `),i(`
      const container = document.getElementById('app')
            
      ${o}
      `)},[c,o]);const l=t=>{console.log("error",t)};return e.exports.useEffect(()=>{s.current&&s.current.addEventListener("error",t=>{console.log(t)})}),h(S,{children:[r("div",{ref:c,className:"test-render"}),r("iframe",{ref:s,onError:l,className:"sandbox-container",srcDoc:d,sandbox:"allow-forms allow-pointer-lock allow-popups allow-modals allow-same-origin allow-scripts allow-top-navigation"})]})}const v=`
import React from  'react'
import ReactDOM from 'react-dom/client'

function App () {
  return (
    <div>test</div>
  )
}

ReactDOM.createRoot(container).render(<App/>)
`;function q(x){const[o,c]=e.exports.useState(v),[s,w]=e.exports.useState("typescript"),[i,d]=e.exports.useState("loading"),[p,l]=e.exports.useState(""),[t,k]=e.exports.useState(),u={module:n.exports.ModuleKind.ESNext,target:n.exports.ScriptTarget.ES2015,jsx:n.exports.JsxEmit.React,declration:!0,strict:!0,noImplicitAny:!0,lib:["ESNEXT","DOM","DOM.Iterable"],moduleResolution:n.exports.ModuleResolutionKind.NodeJs};return e.exports.useEffect(()=>{l(n.exports.transpile(o,u,"index.tsx"))},[o,s]),e.exports.useEffect(()=>{const a=window.require;console.log(window.require),a.config({paths:{vs:"https://typescript.azureedge.net/cdn/4.0.5/monaco/min/vs",sandbox:"https://www.typescriptlang.org/js/sandbox"},ignoreDuplicateModules:["vs/editor/editor.main"]}),a(["vs/editor/editor.main","vs/language/typescript/tsWorker","sandbox/index"],(m,g,b)=>{m&&g&&b?d(""):(console.error("Could not get all the dependencies of sandbox set up!"),console.error("main",!!m,"ts",g,"sandbox",!!b));const E={text:v,compilerOptions:{...u,noEmitOnError:!1},domID:"playground"},f=b.createTypeScriptSandbox(E,m,g);f.editor.focus(),k(f),new ResizeObserver(()=>{var y;(y=f.editor)==null||y.layout()}).observe(document.body)})},[]),e.exports.useEffect(()=>{t&&(console.log(t),t.editor.onDidChangeModelContent(()=>{console.log(t.editor.getValue());const a=n.exports.transpile(t.editor.getValue(),u,"index.tsx");console.log(a),l(a)}))},[t]),h("section",{className:"site-playground",children:[r("header",{children:"OTAKU-UI Playground"}),h("section",{className:"editor-container",children:[i?r("div",{children:i}):null,r("section",{id:"playground"})]}),r("section",{className:"preview-container",children:r(M,{code:p})})]})}export{q as default};
