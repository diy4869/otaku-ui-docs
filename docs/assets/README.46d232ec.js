var fe=Object.defineProperty;var me=(l,e,t)=>e in l?fe(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var A=(l,e,t)=>(me(l,typeof e!="symbol"?e+"":e,t),t);import{r as b,j as w,c as pe,b as a}from"./index.470a316f.js";import"./style.6ba18b76.js";import{A as ye}from"./api.f99173f3.js";import{X as N,c as W,S as ke,V as Y,I as Z,A as ge,a as M}from"./style.deb3bbcd.js";import"./index.a667917b.js";import{H as j}from"./highlightCode.7ddbf745.js";import{C as oe}from"./checkbox.6817f5fa.js";import{C as B}from"./codeExample.3261d776.js";import"./typescript.627707e9.js";function $(){return $=Object.assign?Object.assign.bind():function(l){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(l[i]=t[i])}return l},$.apply(this,arguments)}function ee(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function q(l,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,n){return i.__proto__=n,i},q(l,e)}function ve(l,e){l.prototype=Object.create(e.prototype),l.prototype.constructor=l,q(l,e)}var te=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function Ee(l,e){return!!(l===e||te(l)&&te(e))}function xe(l,e){if(l.length!==e.length)return!1;for(var t=0;t<l.length;t++)if(!Ee(l[t],e[t]))return!1;return!0}function U(l,e){e===void 0&&(e=xe);var t,i=[],n,p=!1;function y(){for(var m=[],x=0;x<arguments.length;x++)m[x]=arguments[x];return p&&t===this&&e(m,i)||(n=l.apply(this,m),p=!0,t=this,i=m),n}return y}var Se=typeof performance=="object"&&typeof performance.now=="function",re=Se?function(){return performance.now()}:function(){return Date.now()};function ne(l){cancelAnimationFrame(l.id)}function Ce(l,e){var t=re();function i(){re()-t>=e?l.call(null):n.id=requestAnimationFrame(i)}var n={id:requestAnimationFrame(i)};return n}var H=-1;function ie(l){if(l===void 0&&(l=!1),H===-1||l){var e=document.createElement("div"),t=e.style;t.width="50px",t.height="50px",t.overflow="scroll",document.body.appendChild(e),H=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return H}var z=null;function le(l){if(l===void 0&&(l=!1),z===null||l){var e=document.createElement("div"),t=e.style;t.width="50px",t.height="50px",t.overflow="scroll",t.direction="rtl";var i=document.createElement("div"),n=i.style;return n.width="100px",n.height="100px",e.appendChild(i),document.body.appendChild(e),e.scrollLeft>0?z="positive-descending":(e.scrollLeft=1,e.scrollLeft===0?z="negative":z="positive-ascending"),document.body.removeChild(e),z}return z}var Ie=150,Fe=function(e,t){return e};function Ae(l){var e,t=l.getItemOffset,i=l.getEstimatedTotalSize,n=l.getItemSize,p=l.getOffsetForIndexAndAlignment,y=l.getStartIndexForOffset,m=l.getStopIndexForStartIndex,x=l.initInstanceProps,I=l.shouldResetStyleCacheOnItemSizeChange,v=l.validateProps;return e=function(S){ve(F,S);function F(E){var r;return r=S.call(this,E)||this,r._instanceProps=x(r.props,ee(r)),r._outerRef=void 0,r._resetIsScrollingTimeoutId=null,r.state={instance:ee(r),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof r.props.initialScrollOffset=="number"?r.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},r._callOnItemsRendered=void 0,r._callOnItemsRendered=U(function(o,s,d,u){return r.props.onItemsRendered({overscanStartIndex:o,overscanStopIndex:s,visibleStartIndex:d,visibleStopIndex:u})}),r._callOnScroll=void 0,r._callOnScroll=U(function(o,s,d){return r.props.onScroll({scrollDirection:o,scrollOffset:s,scrollUpdateWasRequested:d})}),r._getItemStyle=void 0,r._getItemStyle=function(o){var s=r.props,d=s.direction,u=s.itemSize,C=s.layout,f=r._getItemStyleCache(I&&u,I&&C,I&&d),h;if(f.hasOwnProperty(o))h=f[o];else{var g=t(r.props,o,r._instanceProps),T=n(r.props,o,r._instanceProps),c=d==="horizontal"||C==="horizontal",D=d==="rtl",O=c?g:0;f[o]=h={position:"absolute",left:D?void 0:O,right:D?O:void 0,top:c?0:g,height:c?"100%":T,width:c?T:"100%"}}return h},r._getItemStyleCache=void 0,r._getItemStyleCache=U(function(o,s,d){return{}}),r._onScrollHorizontal=function(o){var s=o.currentTarget,d=s.clientWidth,u=s.scrollLeft,C=s.scrollWidth;r.setState(function(f){if(f.scrollOffset===u)return null;var h=r.props.direction,g=u;if(h==="rtl")switch(le()){case"negative":g=-u;break;case"positive-descending":g=C-d-u;break}return g=Math.max(0,Math.min(g,C-d)),{isScrolling:!0,scrollDirection:f.scrollOffset<u?"forward":"backward",scrollOffset:g,scrollUpdateWasRequested:!1}},r._resetIsScrollingDebounced)},r._onScrollVertical=function(o){var s=o.currentTarget,d=s.clientHeight,u=s.scrollHeight,C=s.scrollTop;r.setState(function(f){if(f.scrollOffset===C)return null;var h=Math.max(0,Math.min(C,u-d));return{isScrolling:!0,scrollDirection:f.scrollOffset<h?"forward":"backward",scrollOffset:h,scrollUpdateWasRequested:!1}},r._resetIsScrollingDebounced)},r._outerRefSetter=function(o){var s=r.props.outerRef;r._outerRef=o,typeof s=="function"?s(o):s!=null&&typeof s=="object"&&s.hasOwnProperty("current")&&(s.current=o)},r._resetIsScrollingDebounced=function(){r._resetIsScrollingTimeoutId!==null&&ne(r._resetIsScrollingTimeoutId),r._resetIsScrollingTimeoutId=Ce(r._resetIsScrolling,Ie)},r._resetIsScrolling=function(){r._resetIsScrollingTimeoutId=null,r.setState({isScrolling:!1},function(){r._getItemStyleCache(-1,null)})},r}F.getDerivedStateFromProps=function(r,o){return Te(r,o),v(r),null};var k=F.prototype;return k.scrollTo=function(r){r=Math.max(0,r),this.setState(function(o){return o.scrollOffset===r?null:{scrollDirection:o.scrollOffset<r?"forward":"backward",scrollOffset:r,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},k.scrollToItem=function(r,o){o===void 0&&(o="auto");var s=this.props,d=s.itemCount,u=s.layout,C=this.state.scrollOffset;r=Math.max(0,Math.min(r,d-1));var f=0;if(this._outerRef){var h=this._outerRef;u==="vertical"?f=h.scrollWidth>h.clientWidth?ie():0:f=h.scrollHeight>h.clientHeight?ie():0}this.scrollTo(p(this.props,r,o,C,this._instanceProps,f))},k.componentDidMount=function(){var r=this.props,o=r.direction,s=r.initialScrollOffset,d=r.layout;if(typeof s=="number"&&this._outerRef!=null){var u=this._outerRef;o==="horizontal"||d==="horizontal"?u.scrollLeft=s:u.scrollTop=s}this._callPropsCallbacks()},k.componentDidUpdate=function(){var r=this.props,o=r.direction,s=r.layout,d=this.state,u=d.scrollOffset,C=d.scrollUpdateWasRequested;if(C&&this._outerRef!=null){var f=this._outerRef;if(o==="horizontal"||s==="horizontal")if(o==="rtl")switch(le()){case"negative":f.scrollLeft=-u;break;case"positive-ascending":f.scrollLeft=u;break;default:var h=f.clientWidth,g=f.scrollWidth;f.scrollLeft=g-h-u;break}else f.scrollLeft=u;else f.scrollTop=u}this._callPropsCallbacks()},k.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&ne(this._resetIsScrollingTimeoutId)},k.render=function(){var r=this.props,o=r.children,s=r.className,d=r.direction,u=r.height,C=r.innerRef,f=r.innerElementType,h=r.innerTagName,g=r.itemCount,T=r.itemData,c=r.itemKey,D=c===void 0?Fe:c,O=r.layout,_=r.outerElementType,P=r.outerTagName,L=r.style,se=r.useIsScrolling,ce=r.width,G=this.state.isScrolling,K=d==="horizontal"||O==="horizontal",de=K?this._onScrollHorizontal:this._onScrollVertical,X=this._getRangeToRender(),he=X[0],ue=X[1],J=[];if(g>0)for(var R=he;R<=ue;R++)J.push(b.exports.createElement(o,{data:T,key:D(R,T),index:R,isScrolling:se?G:void 0,style:this._getItemStyle(R)}));var Q=i(this.props,this._instanceProps);return b.exports.createElement(_||P||"div",{className:s,onScroll:de,ref:this._outerRefSetter,style:$({position:"relative",height:u,width:ce,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:d},L)},b.exports.createElement(f||h||"div",{children:J,ref:C,style:{height:K?"100%":Q,pointerEvents:G?"none":void 0,width:K?Q:"100%"}}))},k._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var r=this.props.itemCount;if(r>0){var o=this._getRangeToRender(),s=o[0],d=o[1],u=o[2],C=o[3];this._callOnItemsRendered(s,d,u,C)}}if(typeof this.props.onScroll=="function"){var f=this.state,h=f.scrollDirection,g=f.scrollOffset,T=f.scrollUpdateWasRequested;this._callOnScroll(h,g,T)}},k._getRangeToRender=function(){var r=this.props,o=r.itemCount,s=r.overscanCount,d=this.state,u=d.isScrolling,C=d.scrollDirection,f=d.scrollOffset;if(o===0)return[0,0,0,0];var h=y(this.props,f,this._instanceProps),g=m(this.props,h,f,this._instanceProps),T=!u||C==="backward"?Math.max(1,s):1,c=!u||C==="forward"?Math.max(1,s):1;return[Math.max(0,h-T),Math.max(0,Math.min(o-1,g+c)),h,g]},F}(b.exports.PureComponent),e.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},e}var Te=function(e,t){e.children,e.direction,e.height,e.layout,e.innerTagName,e.outerTagName,e.width,t.instance},be=Ae({getItemOffset:function(e,t){var i=e.itemSize;return t*i},getItemSize:function(e,t){var i=e.itemSize;return i},getEstimatedTotalSize:function(e){var t=e.itemCount,i=e.itemSize;return i*t},getOffsetForIndexAndAlignment:function(e,t,i,n,p,y){var m=e.direction,x=e.height,I=e.itemCount,v=e.itemSize,S=e.layout,F=e.width,k=m==="horizontal"||S==="horizontal",E=k?F:x,r=Math.max(0,I*v-E),o=Math.min(r,t*v),s=Math.max(0,t*v-E+v+y);switch(i==="smart"&&(n>=s-E&&n<=o+E?i="auto":i="center"),i){case"start":return o;case"end":return s;case"center":{var d=Math.round(s+(o-s)/2);return d<Math.ceil(E/2)?0:d>r+Math.floor(E/2)?r:d}case"auto":default:return n>=s&&n<=o?n:n<s?s:o}},getStartIndexForOffset:function(e,t){var i=e.itemCount,n=e.itemSize;return Math.max(0,Math.min(i-1,Math.floor(t/n)))},getStopIndexForStartIndex:function(e,t,i){var n=e.direction,p=e.height,y=e.itemCount,m=e.itemSize,x=e.layout,I=e.width,v=n==="horizontal"||x==="horizontal",S=t*m,F=v?I:p,k=Math.ceil((F+i-S)/m);return Math.max(0,Math.min(y-1,t+k-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){e.itemSize}});class ae{constructor(e){A(this,"id");A(this,"name");A(this,"data");A(this,"depth");A(this,"checked");A(this,"indeterminate");A(this,"collapse");A(this,"loading");A(this,"parent");A(this,"store");A(this,"children");A(this,"loaded");const{id:t,name:i,data:n,parent:p,children:y,store:m,depth:x=1,checked:I=!1,indeterminate:v=!1,collapse:S=!1,loading:F=!1}=e;this.id=t,this.name=i,this.data=n,this.depth=x,this.parent=p,this.checked=I,this.indeterminate=v,this.children=y,this.collapse=S,this.loading=F,this.loaded=!1,this.store=m}hasChecked(e){var t,i,n;return((t=e==null?void 0:e.children)==null?void 0:t.length)===0&&e.checked!==!1?!0:((i=e.children)==null?void 0:i.length)!==0&&((n=e.children)==null?void 0:n.every(p=>p.checked))}hasIndeterminate(e){var t;return!e.hasChecked(e)&&((t=e.children)==null?void 0:t.some(i=>i.checked||i.indeterminate))}setChecked(e){e===!1&&(this.indeterminate=!1),this.checked=e;const t=(n,p)=>{var y;(y=n.children)==null||y.forEach(m=>{Array.isArray(m.children)&&t(m,p),p===!1&&(m.indeterminate=!1),m.checked=p})},i=(n,p)=>{n!==null&&(n.checked=this.hasChecked(n),n.indeterminate=this.hasIndeterminate(n),i(n.parent))};t(this,e),this.depth!==1&&i(this)}setCollapse(e){var t;if(this.store.accordion)if(e===!1)this.collapse=!1;else{const i=(t=this.parent)==null?void 0:t.children;i==null||i.forEach(n=>{n.collapse=!1}),this.collapse=!0}else this.collapse=e}setLoading(e){this.loading=e}load(e){return this.loading=!0,new Promise(e).then(t=>{this.loaded||this.setChildren(t),this.checked&&this.setChecked(!0)}).finally(()=>{this.loaded=!0,this.loading=!1})}setChildren(e,t=!1){const{id:i="id",name:n="name",children:p="children"}=this.store.treeOptions,y=(x,I,v)=>{if(!x)return[];const S=x.map(F=>{const k=this.store.createNode({id:F[i],name:F[n],data:F,children:[],parent:v,depth:I});return k.children=Array.isArray(F[p])?y(F[p],I+1,k):[],k});return I=this.depth,S},m=y(e,this.depth+1,this);t?this.children=this.children?this.children.concat(m):m:this.children=m}append(e){var i;if(e.depth===0)return;(i=e.parent.children)==null||i.push(e)}remove(e){var n,p;if(e.depth===0)return;const t=e.parent,i=(n=t==null?void 0:t.children)==null?void 0:n.findIndex(y=>y.id===e.id);i&&i!==-1&&((p=t.children)==null||p.splice(i,1))}}class Oe{constructor(e,t){A(this,"treeOptions");A(this,"data");A(this,"async");A(this,"accordion");A(this,"root");const{treeOptions:i,accordion:n=!1,async:p=!1}=t;this.async=p,this.data=e,this.accordion=n,this.treeOptions=i,this.root=this.createRoot([])}createNode(e){return new ae({...e,store:this})}createRoot(e=[]){return new ae({id:"root",name:"root",children:e,depth:0,parent:null,data:null,collapse:!0,store:this})}createTree(e){const t=(i,n=1,p=null)=>{const{id:y,name:m,children:x="children"}=this.treeOptions,I=i.map(v=>{const S=this.createNode({id:v[y],name:v[m],data:v,depth:n,parent:p,children:[]});return S.children=Array.isArray(v[x])?t(v[x],n+1,S):[],S});return n=1,I};return this.root.children=t(e,this.root.depth+1,this.root),this.root.children}getCheckedNodes(e=!0){return N(this.root.children).reduce((i,n)=>e?((n.checked||n.indeterminate)&&i.concat(n),i):i.concat(n),[])}setCheckedKeys(e){const t=new Map(e.map(n=>[n,n]));N(this.root.children).forEach(n=>{t.get(n.id)&&n.setChecked(!0)})}setExpandKeys(e){const t=new Map(e.map(n=>[n,n]));N(this.root.children).forEach(n=>{t.get(n.id)&&n.setCollapse(!0)})}checkedAll(e){this.root.setChecked(e)}expandAll(e){const t=i=>{i.forEach(n=>{n.collapse=e,n.children&&t(n.children)})};t(this.root.children)}}function V(l){const{options:e={id:"id",name:"name",children:"children"},data:t=[],defaultCheckedKeys:i=[],defaultExpandKeys:n=[],accordion:p=!1,checkedAll:y=!1,defaultExpandAll:m=!1,height:x,loadTree:I}=l,v=typeof I=="function",S=new Oe(t,{treeOptions:e,async:v,accordion:p}),F=b.exports.useRef(null),[k,E]=b.exports.useState(S.createTree(t)),[r,o]=b.exports.useState(N(k)),[s,d]=b.exports.useState(0);b.exports.useEffect(()=>{E(S.createTree(t))},[t]),b.exports.useEffect(()=>{o(N(k))},[k]),b.exports.useEffect(()=>{y&&S.checkedAll(y),i&&S.setCheckedKeys(i),n&&S.setExpandKeys(n),m&&S.expandAll(m)},[i,n,y,m]),b.exports.useLayoutEffect(()=>{const h=new MutationObserver(g=>{const T=g[0].target;d(x||T.offsetHeight)});return F.current&&h.observe(F.current.parentNode,{childList:!0,subtree:!0}),()=>{h.disconnect()}},[x]);const u=h=>{var g;return!h||((g=h.parent)==null?void 0:g.collapse)===!1?!1:h.depth===1?!0:u(h.parent)},C=({data:h,index:g,style:T})=>{var D;const c=h[g];return w("li",{className:W("otaku-tree-node"),style:{marginLeft:`${(c.depth-1)*20}px`,display:u(c)?"block":"none",...T},children:pe(ke,{gap:3,center:!0,children:[w("div",{style:{width:"14px"},children:w(Y,{show:v||!!c.children&&((D=c==null?void 0:c.children)==null?void 0:D.length)!==0,children:w(Z,{name:"caret-right",className:W("otaku-tree-arrow",{"otaku-tree-arrow-rotate":c.collapse}),color:"#c8c8c8",size:14,onClick:()=>{var O,_;c.setLoading(!0),E([...k]),v&&!c.loaded?(_=(O=c==null?void 0:c.load)==null?void 0:O.call(c,(P,L)=>{c.loaded||I==null||I(c,P,L)}))==null||_.then(()=>{c.setCollapse(!c.collapse),E([...k])}):(c.setCollapse(!c.collapse),E([...k]))}})})}),w(Y,{show:v&&c.loading&&!c.loaded,children:w(Z,{name:"loading",className:"otaku-tree-loading"})}),w(oe,{checked:c.checked,indeterminate:c.indeterminate,onChange:O=>{c.setChecked(O==null?void 0:O.target.checked),E([...k])}}),w("span",{children:c.name})]})},c.id)},f=r.filter(h=>u(h));return w("div",{className:W("otaku-tree"),ref:F,children:w(be,{width:"100%",height:s,style:{overflow:x?"auto":"none"},innerElementType:"ul",itemSize:30,itemCount:f.length,itemData:f,children:C})})}function we(){const[l,e]=b.exports.useState(!1),t=[{title:"0-0",key:"0-0",children:[{title:"0-0-0",key:"0-0-0",children:[{title:"0-0-0-0",key:"0-0-0-0"},{title:"0-0-0-1",key:"0-0-0-1"},{title:"0-0-0-2",key:"0-0-0-2"}]},{title:"0-0-1",key:"0-0-1",children:[{title:"0-0-1-0",key:"0-0-1-0"},{title:"0-0-1-1",key:"0-0-1-1"},{title:"0-0-1-2",key:"0-0-1-2"}]},{title:"0-0-2",key:"0-0-2"}]},{title:"0-1",key:"0-1",children:[{title:"0-1-0-0",key:"0-1-0-0"},{title:"0-1-0-1",key:"0-1-0-1"},{title:"0-1-0-2",key:"0-1-0-2"}]},{title:"0-2",key:"0-2"}];return a.createElement(a.Fragment,null,a.createElement(oe,{checked:l,onChange:i=>{e(i.target.checked)}},"\u5168\u9009"),a.createElement(V,{checkedAll:l,defaultExpandKeys:["0-0","0-0-0"],defaultCheckedKeys:["0-0-0-0","0-0-0-2","0-0-1","0-2"],options:{id:"key",name:"title",children:"children"},data:t}))}function De(){const l=[{title:"0",key:"0"},{title:"1",key:"1"},{title:"2",key:"2"}],e=(t,i,n)=>{setTimeout(()=>{const p=new Array(1e4).fill(void 0).map((y,m)=>({key:t.name+"-"+m,title:t.name+"-"+m}));i(p)},1e3)};return a.createElement(V,{options:{id:"key",name:"title",children:"children"},height:100,data:l,loadTree:e})}function ze(){const l=[{title:"0-0",key:"0-0",children:[{title:"0-0-0",key:"0-0-0",children:[{title:"0-0-0-0",key:"0-0-0-0"},{title:"0-0-0-1",key:"0-0-0-1"},{title:"0-0-0-2",key:"0-0-0-2"}]},{title:"0-0-1",key:"0-0-1",children:[{title:"0-0-1-0",key:"0-0-1-0"},{title:"0-0-1-1",key:"0-0-1-1"},{title:"0-0-1-2",key:"0-0-1-2"}]},{title:"0-0-2",key:"0-0-2"}]},{title:"0-1",key:"0-1",children:[{title:"0-1-0-0",key:"0-1-0-0"},{title:"0-1-0-1",key:"0-1-0-1"},{title:"0-1-0-2",key:"0-1-0-2"}]},{title:"0-2",key:"0-2"}];return a.createElement(V,{options:{id:"key",name:"title",children:"children"},data:l})}function Ue(){return a.createElement(a.Fragment,null,a.createElement("div",{className:"markdown-body"},a.createElement("h2",{id:"%E5%85%A8%E9%80%89",tabIndex:"-1"},a.createElement("a",{className:"header-anchor",href:"#%E5%85%A8%E9%80%89"},a.createElement("span",{className:"b-anchor"}),a.createElement("span",{"aria-hidden":"false"},"#"))," \u5168\u9009"),a.createElement(B,{desc:"",lang:"tsx",example:a.createElement(a.Fragment,null,a.createElement("style",null,""),a.createElement(we,null)),code:`import { Tree, Checkbox } from 'otaku-ui'
import { useState } from 'react'

function Example () {
  const [checkAll, setCheckAll] = useState(false)

  const treeData = [
    {
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0' },
            { title: '0-0-0-1', key: '0-0-0-1' },
            { title: '0-0-0-2', key: '0-0-0-2' },
          ],
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0' },
            { title: '0-0-1-1', key: '0-0-1-1' },
            { title: '0-0-1-2', key: '0-0-1-2' },
          ],
        },
        {
          title: '0-0-2',
          key: '0-0-2',
        },
      ],
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' },
      ],
    },
    {
      title: '0-2',
      key: '0-2',
    },
  ];

  return (
    <>
     <Checkbox 
      checked={checkAll}
      onChange={e => {
        setCheckAll(e.target.checked)
      }}>\u5168\u9009</Checkbox>
      <Tree 
        checkedAll={checkAll}
        // defaultExpandAll={true}
        defaultExpandKeys={['0-0','0-0-0']}
        defaultCheckedKeys={['0-0-0-0', '0-0-0-2','0-0-1', '0-2']}
        options={{
          id: 'key',
          name: 'title',
          children: 'children'
        }}
      data={treeData}/> 
    </>
  )
}


ReactDOM.createRoot(container).render(<Example/>)
`,style:{lang:"css",code:""}},a.createElement("pre",null,a.createElement("code",{className:"language-tsx"},a.createElement(j,{lang:"tsx",code:`function Example () {
  const [checkAll, setCheckAll] = useState(false)

  const treeData = [
    {
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0' },
            { title: '0-0-0-1', key: '0-0-0-1' },
            { title: '0-0-0-2', key: '0-0-0-2' },
          ],
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0' },
            { title: '0-0-1-1', key: '0-0-1-1' },
            { title: '0-0-1-2', key: '0-0-1-2' },
          ],
        },
        {
          title: '0-0-2',
          key: '0-0-2',
        },
      ],
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' },
      ],
    },
    {
      title: '0-2',
      key: '0-2',
    },
  ];

  return (
    <>
     <Checkbox 
      checked={checkAll}
      onChange={e => {
        setCheckAll(e.target.checked)
      }}>\u5168\u9009</Checkbox>
      <Tree 
        checkedAll={checkAll}
        // defaultExpandAll={true}
        defaultExpandKeys={['0-0','0-0-0']}
        defaultCheckedKeys={['0-0-0-0', '0-0-0-2','0-0-1', '0-2']}
        options={{
          id: 'key',
          name: 'title',
          children: 'children'
        }}
      data={treeData}/> 
    </>
  )
}


ReactDOM.createRoot(container).render(<Example/>)
`})))),a.createElement("h2",{id:"%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%E7%9A%84%E6%A0%91",tabIndex:"-1"},a.createElement("a",{className:"header-anchor",href:"#%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%E7%9A%84%E6%A0%91"},a.createElement("span",{className:"b-anchor"}),a.createElement("span",{"aria-hidden":"false"},"#"))," \u5F02\u6B65\u52A0\u8F7D\u7684\u6811"),a.createElement(B,{desc:"234",lang:"tsx",example:a.createElement(a.Fragment,null,a.createElement("style",null,""),a.createElement(De,null)),code:`import { Tree, Checkbox } from 'otaku-ui'
import { useState } from 'react'

function Example () {
  const treeData = [
    {
      title: '0',
      key: '0',
    },
    {
      title: '1',
      key: '1',
    },
    {
      title: '2',
      key: '2',
    },
  ];

  const load = (node, resolve, reject) => {
    setTimeout(() => {
       const data = new Array(10000).fill(undefined).map((item, index) => {
        return {
          key: node.name + '-' + index,
          title: node.name + '-' + index,
        }
      })

      resolve(data)
    }, 1000)

  }

  return (
    <Tree 
      options={{
        id: 'key',
        name: 'title',
        children: 'children'
      }}
      height={100}
      data={treeData}
      loadTree={load}/>
  )
}


ReactDOM.createRoot(container).render(<Example/>)
`,style:{lang:"css",code:""}},a.createElement("p",null,"234"),a.createElement("pre",null,a.createElement("code",{className:"language-tsx"},a.createElement(j,{lang:"tsx",code:`function Example () {
  const treeData = [
    {
      title: '0',
      key: '0',
    },
    {
      title: '1',
      key: '1',
    },
    {
      title: '2',
      key: '2',
    },
  ];

  const load = (node, resolve, reject) => {
    setTimeout(() => {
       const data = new Array(10000).fill(undefined).map((item, index) => {
        return {
          key: node.name + '-' + index,
          title: node.name + '-' + index,
        }
      })

      resolve(data)
    }, 1000)

  }

  return (
    <Tree 
      options={{
        id: 'key',
        name: 'title',
        children: 'children'
      }}
      height={100}
      data={treeData}
      loadTree={load}/>
  )
}


ReactDOM.createRoot(container).render(<Example/>)
`})))),a.createElement("h2",{id:"tree-%E6%A0%91",tabIndex:"-1"},a.createElement("a",{className:"header-anchor",href:"#tree-%E6%A0%91"},a.createElement("span",{className:"b-anchor"}),a.createElement("span",{"aria-hidden":"false"},"#"))," Tree \u6811"),a.createElement(B,{desc:"",lang:"tsx",example:a.createElement(a.Fragment,null,a.createElement("style",null,""),a.createElement(ze,null)),code:`import { Tree, Checkbox } from 'otaku-ui'
import { useState } from 'react'


function Example () {
  const treeData = [
    {
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0' },
            { title: '0-0-0-1', key: '0-0-0-1' },
            { title: '0-0-0-2', key: '0-0-0-2' },
          ],
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0' },
            { title: '0-0-1-1', key: '0-0-1-1' },
            { title: '0-0-1-2', key: '0-0-1-2' },
          ],
        },
        {
          title: '0-0-2',
          key: '0-0-2',
        },
      ],
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' },
      ],
    },
    {
      title: '0-2',
      key: '0-2',
    },
  ];

  return (
    <Tree options={{
      id: 'key',
      name: 'title',
      children: 'children'
    }} data={treeData}/>
  )
}


ReactDOM.createRoot(container).render(<Example/>)
`,style:{lang:"css",code:""}},a.createElement("pre",null,a.createElement("code",{className:"language-tsx"},a.createElement(j,{lang:"tsx",code:`
function Example () {
  const treeData = [
    {
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0' },
            { title: '0-0-0-1', key: '0-0-0-1' },
            { title: '0-0-0-2', key: '0-0-0-2' },
          ],
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0' },
            { title: '0-0-1-1', key: '0-0-1-1' },
            { title: '0-0-1-2', key: '0-0-1-2' },
          ],
        },
        {
          title: '0-0-2',
          key: '0-0-2',
        },
      ],
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' },
      ],
    },
    {
      title: '0-2',
      key: '0-2',
    },
  ];

  return (
    <Tree options={{
      id: 'key',
      name: 'title',
      children: 'children'
    }} data={treeData}/>
  )
}


ReactDOM.createRoot(container).render(<Example/>)
`})))),a.createElement("h2",{id:"api",tabIndex:"-1"},a.createElement("a",{className:"header-anchor",href:"#api"},a.createElement("span",{className:"b-anchor"}),a.createElement("span",{"aria-hidden":"false"},"#"))," api"),a.createElement(a.Fragment,null,a.createElement(ye,{code:`export interface TreeOptions {
  id: string
  name: string
  children?: string
}

export interface TreeProps {
  data?: Record<string, unknown>[]
  options?: TreeOptions
  height?: number
  checkbox?: boolean
  accordion?: boolean
  checkedAll?: boolean
  defaultExpandAll?: boolean
  defaultExpandKeys?: number[] | string[]
  defaultCheckedKeys?: number[] | string[]
  loadTree?: (node?: Node, resolve?: (res?: unknown) => void, reject?: (err?: unknown) => void) => void
}`,html:`<h2>Tree</h2><table>
                    <tr>
                      <th>\u5C5E\u6027</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th>
                    </tr>
                    
                          <tr>
                            <td>data</td>
                            <td>\u5426</td>
                            <td>Record<string, unknown>[]</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>options</td>
                            <td>\u5426</td>
                            <td>TreeOptions</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>height</td>
                            <td>\u5426</td>
                            <td>number</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>checkbox</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>accordion</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>checkedAll</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>defaultExpandAll</td>
                            <td>\u5426</td>
                            <td>boolean</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>defaultExpandKeys</td>
                            <td>\u5426</td>
                            <td>number[] | string[]</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>defaultCheckedKeys</td>
                            <td>\u5426</td>
                            <td>number[] | string[]</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                          <tr>
                            <td>loadTree</td>
                            <td>\u5426</td>
                            <td>(node?: Node, resolve?: (res?: unknown) => void, reject?: (err?: unknown) => void) => void</td>
                            <td></td>
                            <td>\u8FD9\u662F\u4E2A\u63CF\u8FF0</td>
                          </tr>
                        
                  </table>
`}))),a.createElement(ge,{target:".main"},a.createElement(M,{href:"#\u5168\u9009",title:"\u5168\u9009"}),a.createElement(M,{href:"#\u5F02\u6B65\u52A0\u8F7D\u7684\u6811",title:"\u5F02\u6B65\u52A0\u8F7D\u7684\u6811"}),a.createElement(M,{href:"#tree-\u6811",title:"Tree \u6811"}),a.createElement(M,{href:"#api",title:"api"})))}export{Ue as default};
