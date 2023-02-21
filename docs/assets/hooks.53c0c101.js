import{b as e}from"./index.470a316f.js";import"./style.6ba18b76.js";import{A as t,a}from"./style.deb3bbcd.js";import"./index.a667917b.js";import{H as u}from"./highlightCode.7ddbf745.js";import"./typescript.627707e9.js";function c(){return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown-body"},e.createElement("h2",{id:"usecalendar-%E8%8E%B7%E5%8F%96%E6%97%A5%E5%8E%86",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#usecalendar-%E8%8E%B7%E5%8F%96%E6%97%A5%E5%8E%86"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," useCalendar \u83B7\u53D6\u65E5\u5386"),e.createElement("pre",null,e.createElement("code",{className:"language-ts"},e.createElement(u,{lang:"ts",code:`interface Data {
  prev: string[] // \u4E0A\u4E2A\u6708
  current: string[] // \u5F53\u524D\u6708
  next: string[] // \u4E0B\u4E2A\u6708
}

/**
 * date: string | dayjs | date
 * firstWeek \u9ED8\u8BA4\u5468\u65E5\u4E3A\u4E00\u5468\u7684\u5F00\u59CB
*/
function useCalendar (date?: dayjs.ConfigType, firstWeek = '\u65E5' | '\u4E00', format: 'YYYY-MM-DD'): Data

`}))),e.createElement("h2",{id:"usepagination-%E8%8E%B7%E5%8F%96%E5%88%86%E9%A1%B5",tabIndex:"-1"},e.createElement("a",{className:"header-anchor",href:"#usepagination-%E8%8E%B7%E5%8F%96%E5%88%86%E9%A1%B5"},e.createElement("span",{className:"b-anchor"}),e.createElement("span",{"aria-hidden":"false"},"#"))," usePagination \u83B7\u53D6\u5206\u9875"),e.createElement("pre",null,e.createElement("code",{className:"language-ts"},e.createElement(u,{lang:"ts",code:`interface usePaginationProps {
  current?: number
  total?: number
  pageSize?: number
  slicePage?: number // \u5206\u9875\u6807\u51C6 \u5FC5\u987B\u662F\u5947\u6570 \u9ED8\u8BA4\u4E3A5
}

interface Data {
  pagination: number[] // \u5206\u9875\u6570\u636E\u4E0D\u5305\u62EC\u5F00\u59CB\u548C\u7ED3\u675F\u9875
  showPrevMore: boolean
  showNextMore: boolean
  maxPage: number
}

function usePagination (page: usePaginationProps): Data
`})))),e.createElement(t,{target:".main"},e.createElement(a,{href:"#usecalendar-\u83B7\u53D6\u65E5\u5386",title:"useCalendar \u83B7\u53D6\u65E5\u5386"}),e.createElement(a,{href:"#usepagination-\u83B7\u53D6\u5206\u9875",title:"usePagination \u83B7\u53D6\u5206\u9875"})))}export{c as default};
