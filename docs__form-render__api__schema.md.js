(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"M/Q6":function(y,b,i){"use strict";var j=i("q1tI"),c=i.n(j),F=i("x8cr"),u=i.n(F);function d(){return d=Object.assign||function(h){for(var E=1;E<arguments.length;E++){var t=arguments[E];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(h[e]=t[e])}return h},d.apply(this,arguments)}b.a=function(h){return c.a.createElement("div",d({className:"__dumi-default-alert"},h))}},RZMt:function(y,b,i){},"T+DL":function(y,b,i){"use strict";i.r(b);var j=i("k1fw"),c=i("q1tI"),F=i.n(c),u=i("dEAq"),d=i.n(u),h=i("M/Q6"),E=i("Zxc8"),t=i("H1Ra"),e=i("nKUr"),x=i.n(e),k=F.a.memo(O=>{var p=O.demos,C=p["schema-demo"].component;return Object(e.jsx)(e.Fragment,{children:Object(e.jsxs)(F.a.Fragment,{children:[Object(e.jsxs)("div",{className:"markdown",children:[Object(e.jsxs)("h1",{id:"schema",children:[Object(e.jsx)(u.AnchorLink,{to:"#schema","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"Schema"]}),Object(e.jsxs)("p",{children:[Object(e.jsx)("code",{children:"schema"})," \u7528\u4E8E\u63CF\u8FF0\u8868\u5355\u7684\u57FA\u672C\u4FE1\u606F\u3001\u7ED3\u6784\u548C\u6821\u9A8C\u3002",Object(e.jsx)("code",{children:"schema"})," \u5728\u7ED3\u6784\u4E0A\u9075\u5FAA ",Object(e.jsx)(u.Link,{to:"https://json-schema.org/understanding-json-schema/",children:"JSON Schema \u56FD\u9645\u89C4\u8303"}),"\u3002"]}),Object(e.jsxs)("p",{children:["Form-render \u4E2D\u6709\u4E09\u79CD\u4E3B\u8981\u7684\u8868\u5355\u5143\u7D20\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"item"}),"\uFF0C",Object(e.jsx)("code",{children:"object"}),"\uFF0C",Object(e.jsx)("code",{children:"list"}),"\u3002"]}),Object(e.jsxs)("ul",{children:[Object(e.jsxs)("li",{children:[Object(e.jsx)("code",{children:"item"}),"\uFF1A\u5373\u6700\u57FA\u672C\u7684\u8F93\u5165\u6846\uFF0C\u9009\u62E9\u6846\u7B49"]}),Object(e.jsxs)("li",{children:[Object(e.jsx)("code",{children:"object"}),"\uFF1A\u4E00\u4E2A\u5305\u542B\u5176\u4ED6\u5143\u7D20\u7684 block\uFF0C\u53EF\u7528\u4E8E\u8868\u5355\u9879\u7684\u5206\u7C7B"]}),Object(e.jsxs)("li",{children:[Object(e.jsx)("code",{children:"list"}),"\uFF1A\u53EF\u52A8\u6001\u589E\u51CF\u7684\u8868\u5355\u9879"]})]}),Object(e.jsx)(t.a,{code:`// \u4E00\u4E2A\u57FA\u672C\u7684 scheme \u7ED3\u6784
const schema = {
  displayType: 'row',
  labelWidth: 130,
  type: 'object', // schema \u6700\u9876\u5C42\u7684 type \u603B\u662F object
  properties: {
    // \u4E00\u4E2A item
    url: {
      title: 'url\u8F93\u5165\u6846',
      placeholder: '//www.taobao.com',
      type: 'string',
      format: 'url',
      required: true,
    },

    // \u4E00\u4E2A object
    contact: {
      type: 'object',
      properties: {
        phone: {
          title: '\u7535\u8BDD',
          type: 'string',
        },
        email: {
          title: '\u90AE\u7BB1',
          type: 'string',
        },
      },
    },

    // \u4E00\u4E2A list
    peopleList: {
      title: '\u4EBA\u5458\u5217\u8868',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            title: '\u59D3\u540D',
            type: 'string',
          },
        },
      },
    },
  },
};`,lang:"js"}),Object(e.jsxs)("h2",{id:"schema-1",children:[Object(e.jsx)(u.AnchorLink,{to:"#schema-1","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"Schema"]}),Object(e.jsx)("p",{children:"\u63A7\u5236\u6574\u4F53\u8868\u5355\u7684\u4E00\u4E9B\u5C5E\u6027\u3002"}),Object(e.jsxs)("h3",{id:"type",children:[Object(e.jsx)(u.AnchorLink,{to:"#type","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"type"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"object"})]})}),Object(e.jsxs)("p",{children:[Object(e.jsx)("code",{children:"schema"})," \u7684 type \u5FC5\u987B\u4E3A ",Object(e.jsx)("code",{children:"object"}),"\u3002"]}),Object(e.jsxs)("h3",{id:"properties",children:[Object(e.jsx)(u.AnchorLink,{to:"#properties","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"properties"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"Record<string, object>"})]})}),Object(e.jsx)("p",{children:"\u8868\u5355\u7684\u6240\u6709\u5143\u7D20\u653E\u5728\u8FD9\u91CC\u3002"}),Object(e.jsxs)("h3",{id:"displaytype",children:[Object(e.jsx)(u.AnchorLink,{to:"#displaytype","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"displayType"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"'row' | 'column'"})]})}),Object(e.jsxs)("p",{children:["Label \u4E0E Field \u7684\u5C55\u793A\u5173\u7CFB\uFF0Crow \u8868\u793A\u5E76\u6392\u5C55\u793A\uFF0Ccolumn \u8868\u793A\u4E24\u6392\u5C55\u793A\u3002\u5FC5\u987B\u5199\u5728 ",Object(e.jsx)("code",{children:"schema"})," \u9876\u5C42\u3002"]}),Object(e.jsxs)("h3",{id:"labelwidth",children:[Object(e.jsx)(u.AnchorLink,{to:"#labelwidth","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"labelWidth"]}),Object(e.jsxs)("ul",{children:[Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"number | string"})]}),Object(e.jsx)("li",{children:"\u9ED8\u8BA4\uFF1A110"})]}),Object(e.jsxs)("p",{children:["label \u7684\u5BBD\u5EA6\uFF0C\u6570\u5B57\u503C\u5355\u4F4D\u4E3A px\uFF0C\u4E5F\u53EF\u4F7F\u7528 ",Object(e.jsx)("code",{children:"'20%'/'2rem'"})," \u7B49\uFF0C\u5199\u5728 ",Object(e.jsx)("code",{children:"schema"})," \u9876\u5C42\u65F6\u4EE3\u8868\u8868\u5355\u6574\u4F53\u7684 label \u5BBD\u5EA6\uFF0C\u4E5F\u53EF\u4EE5\u5199\u5728 ",Object(e.jsx)("code",{children:"item"})," \u4E2D\uFF0C\u4FEE\u6539\u5355\u4E2A ",Object(e.jsx)("code",{children:"item"})," \u7684 label \u5BBD\u5EA6\u3002"]}),Object(e.jsxs)("h2",{id:"item",children:[Object(e.jsx)(u.AnchorLink,{to:"#item","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"Item"]}),Object(e.jsx)("p",{children:"\u57FA\u672C\u8868\u5355\u5143\u7D20\u7684\u914D\u7F6E\u9879\u3002"}),Object(e.jsxs)("h3",{id:"bind",children:[Object(e.jsx)(u.AnchorLink,{to:"#bind","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"bind"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"string | string[] | false"})]})}),Object(e.jsxs)("p",{children:["\u5F53\u670D\u52A1\u7AEF\u63A5\u53E3\u83B7\u53D6\u7684\u5B57\u6BB5\u4E0E\u4F60\u5E0C\u671B\u7684\u8868\u5355\u5C55\u793A\u7ED3\u6784\u4E0D\u540C\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 bind \u5B57\u6BB5\u7ED1\u5B9A\u7684\u65B9\u5F0F\u6307\u660E\u8868\u5355\u7684\u67D0\u4E2A\u5B57\u6BB5\u5BF9\u5E94\u7684\u662F\u5916\u90E8\u6570\u636E\u7684\u53E6\u4E00\u4E2A\u5B57\u6BB5\u3002\u8BE6\u7EC6\u4F8B\u5B50\u89C1 ",Object(e.jsx)(u.Link,{to:"/form-render/advanced/form-methods",children:"\u201C\u8868\u5355\u4E0E\u5916\u754C\u7684\u4EA4\u4E92\u201D"})," \u7684\u4F8B 3\u3002"]}),Object(e.jsxs)("p",{children:["\u7528\u6237\u5E76\u4E0D\u5E0C\u671B\u7EAF\u5C55\u793A\u7684\u5B57\u6BB5\u4E5F\u51FA\u73B0\u5728\u8868\u5355\u4E2D\uFF0C\u6B64\u65F6\uFF0C\u4F7F\u7528 ",Object(e.jsx)("code",{children:"bind: false"})," \u53EF\u907F\u514D\u5B57\u6BB5\u5728\u63D0\u4EA4\u65F6\u51FA\u73B0\u3002"]}),Object(e.jsx)("p",{children:Object(e.jsx)(h.a,{children:" \u8BF7\u4E0D\u8981 bind \u4E00\u4E2A\u6570\u7EC4\u7ED3\u6784\u4E0B\u9762\u7684\u5B57\u6BB5\uFF0C\u76EE\u524D\u6CA1\u6709\u5BF9\u6B64\u8FDB\u884C\u5904\u7406\uFF0C\u6240\u4EE5\u4F1A\u65E0\u6548\uFF08\u5728\u672A\u6765\u8FD9\u4E2A\u9650\u5236\u4F1A\u89E3\u9664\uFF09\u3002"})}),Object(e.jsxs)("h3",{id:"theme",children:[Object(e.jsx)(u.AnchorLink,{to:"#theme","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"theme"]}),Object(e.jsxs)("ul",{children:[Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"string"})]}),Object(e.jsxs)("li",{children:["\u503C: ",Object(e.jsx)("code",{children:"default | card | tile"}),"\uFF0C\u8BE6\u89C1",Object(e.jsx)(u.AnchorLink,{to:"/form-render/advanced/display#%E4%B8%BB%E9%A2%98%E8%AE%BE%E7%BD%AE",children:"\u8FD9\u91CC"})]})]}),Object(e.jsx)("p",{children:"\u8BBE\u7F6E\u5D4C\u5957\u8868\u5355\u7684\u4E3B\u9898\u6837\u5F0F"}),Object(e.jsxs)("h3",{id:"classname",children:[Object(e.jsx)(u.AnchorLink,{to:"#classname","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"className"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"string"})]})}),Object(e.jsx)("p",{children:"\u5F53\u524D\u5143\u7D20\u7684 classname\u3002"}),Object(e.jsxs)("h3",{id:"title",children:[Object(e.jsx)(u.AnchorLink,{to:"#title","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"title"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"string"})]})}),Object(e.jsxs)("p",{children:["\u4E00\u4E2A ",Object(e.jsx)("code",{children:"item"})," \u7684 label\u3002"]}),Object(e.jsx)("p",{children:Object(e.jsxs)(h.a,{children:[" \u6CE8\u610F title \u4E3A",Object(e.jsx)("code",{children:'""'}),"\u65F6\u5360\u4F4D\uFF0Ctitle \u4E0D\u5199\u65F6\u4E0D\u5360\u4F4D\u3002\u5982\u4E0B\u4F8B\uFF0C\u901A\u8FC7\u9009\u62E9\u6027\u4E0D\u4F7F\u7528 title\uFF0C\u8FBE\u5230\u5C55\u793A\u6548\u679C\u3002"]})})]}),Object(e.jsx)(E.default,Object(j.a)(Object(j.a)({},p["schema-demo"].previewerProps),{},{children:Object(e.jsx)(C,{})})),Object(e.jsxs)("div",{className:"markdown",children:[Object(e.jsxs)("h3",{id:"description",children:[Object(e.jsx)(u.AnchorLink,{to:"#description","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"description"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"string"})]})}),Object(e.jsxs)("p",{children:[Object(e.jsx)("code",{children:"item"})," \u7684\u63CF\u8FF0\u4FE1\u606F\u3002"]}),Object(e.jsxs)("h3",{id:"desctype",children:[Object(e.jsx)(u.AnchorLink,{to:"#desctype","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"descType"]}),Object(e.jsxs)("ul",{children:[Object(e.jsxs)("li",{children:["\u7248\u672C\uFF1A",Object(e.jsx)("code",{children:"^1.7.0"})]}),Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"'text' | 'icon'"})]})]}),Object(e.jsxs)("p",{children:["\u5F53 displayType \u4E3A ",Object(e.jsx)("code",{children:"row"})," \u65F6\uFF0C\u65E0\u4F5C\u7528\uFF1B\u4F46\u5F53 displayType \u4E3A ",Object(e.jsx)("code",{children:"column"})," \uFF08\u9ED8\u8BA4\u503C\uFF09\u65F6\uFF0C\u63CF\u8FF0\u4FE1\u606F\uFF08description\uFF09\u7684\u4E00\u822C\u5C55\u793A\u4E3A\u6587\u6848\u5F62\u5F0F\uFF0C\u5982\u679C\u8BBE\u5B9A descType \u4E3A ",Object(e.jsx)("code",{children:"icon"}),", \u5219\u4F1A\u4F7F\u7528 tooltip \u5F62\u5F0F\u3002"]}),Object(e.jsxs)("h3",{id:"dependencies",children:[Object(e.jsx)(u.AnchorLink,{to:"#dependencies","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"dependencies"]}),Object(e.jsxs)("ul",{children:[Object(e.jsxs)("li",{children:["\u7248\u672C\uFF1A",Object(e.jsx)("code",{children:"^1.6.2"})]}),Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"string[]"})]})]}),Object(e.jsx)("p",{children:"\u5F53\u4F9D\u8D56\u7684\u5143\u7D20\u66F4\u65B0\u65F6\uFF0C\u4F1A\u89E6\u53D1\u672C\u5143\u7D20\u7684\u91CD\u65B0\u6E32\u67D3\uFF0C\u7528\u4E8E\u590D\u6742\u7684\u8868\u5355\u8054\u52A8\u3002"}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  list: {
    title: '\u5BF9\u8C61\u6570\u7EC4',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
        select2: {
          title: '\u5355\u90092\uFF08\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF09',
          type: 'string',
          widget: 'select2', // select2 \u4E3A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5177\u4F53\u5B9E\u73B0\u4E0Edependencies\u7684\u8BA8\u8BBA\u65E0\u5173\uFF0C\u4E0D\u8D58\u8FF0
          dependencies: ['list[].select1'],
        },
      },
    },
  },
};`,lang:"js"}),Object(e.jsxs)("h3",{id:"disabled",children:[Object(e.jsx)(u.AnchorLink,{to:"#disabled","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"disabled"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"boolean"})]})}),Object(e.jsx)("p",{children:"\u7EC4\u4EF6\u662F\u5426\u7981\u7528\u72B6\u6001\u3002"}),Object(e.jsxs)("h3",{id:"extra",children:[Object(e.jsx)(u.AnchorLink,{to:"#extra","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"extra"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"string"})]})}),Object(e.jsx)("p",{children:"\u7528\u4E8E\u5728\u5143\u7D20\u4E0B\u5C55\u793A\u66F4\u591A\u8BF4\u660E\u4FE1\u606F\uFF0Cextra \u53EF\u4EE5\u662F html string\uFF0C\u4E5F\u53EF\u4EE5\u662F\u7EAF\u6587\u6848\uFF0C\u4F1A\u5C55\u793A\u5728\u5143\u7D20\u4E0B\u9762\u4E00\u884C\u7D27\u8D34\u3002"}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  rule: {
    title: '\u5355\u9009',
    type: 'string',
    extra: "<a href='xxx'>\u8BE6\u7EC6\u89C4\u8303</a>",
  },
};`,lang:"js"}),Object(e.jsxs)("h3",{id:"enum",children:[Object(e.jsx)(u.AnchorLink,{to:"#enum","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"enum"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"string | number"})]})}),Object(e.jsxs)("p",{children:["\u53EA\u5728\u9009\u62E9\u7C7B\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u7528\u4E8E\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u503C\u548C\u6587\u6848\uFF0C\u4E0E ",Object(e.jsx)("code",{children:"enumNames"})," \u914D\u5408\u4F7F\u7528\u3002"]}),Object(e.jsxs)("h3",{id:"enumnames",children:[Object(e.jsx)(u.AnchorLink,{to:"#enumnames","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"enumNames"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"string | number"})]})}),Object(e.jsxs)("p",{children:["\u53EA\u5728\u9009\u62E9\u7C7B\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u7528\u4E8E\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u503C\u548C\u6587\u6848\uFF0C\u4E0E ",Object(e.jsx)("code",{children:"enum"})," \u914D\u5408\u4F7F\u7528\u3002"]}),Object(e.jsx)("p",{children:Object(e.jsxs)(h.a,{children:[" \u65E7\u7248 form-render \u4F1A\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\uFF0C\u4F46\u662F\u65B0\u7248\u9664\u975E\u901A\u8FC7 default \u6307\u660E\uFF0C\u5426\u5219\u4E0D\u4F1A\u9009\u4E2D\u4EFB\u4F55\u4E00\u9879\uFF0C\u4E14\u521D\u59CB\u503C\u662F ",Object(e.jsx)("code",{children:"undefined"}),"\u3002"]})}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  // \u5355\u9009
  select1: {
    title: '\u5355\u9009',
    type: 'string',
    enum: ['hz', 'wh', 'gy'],
    enumNames: ['\u676D\u5DDE', '\u6B66\u6C49', '\u8D35\u9633'],
    default: 'hz',
  },
  // \u591A\u9009
  select2: {
    title: '\u591A\u9009',
    type: 'array',
    items: {
      type: 'string',
    },
    enum: ['hz', 'wh', 'gy'],
    enumNames: ['\u676D\u5DDE', '\u6B66\u6C49', '\u8D35\u9633'],
  },
};`,lang:"js"}),Object(e.jsxs)("h3",{id:"format",children:[Object(e.jsx)(u.AnchorLink,{to:"#format","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"format"]}),Object(e.jsxs)("ul",{children:[Object(e.jsx)("li",{children:Object(e.jsxs)("p",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"'image' | 'textarea' | 'color' | 'email' | 'url' | 'dateTime' | 'date' | 'time' | 'upload'"})]})}),Object(e.jsxs)("li",{children:[Object(e.jsx)("p",{children:"\u8BE6\u7EC6\uFF1A\u7528\u6765\u63CF\u8FF0\u8F93\u5165\u6846\u7684\u683C\u5F0F\uFF0C\u8F85\u52A9 type \u4E00\u540C\u7528\u4E8E\u5224\u65AD\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u4EE5\u53CA\u6821\u9A8C\u8868\u5355\u6570\u636E"}),Object(e.jsx)(t.a,{code:`const schema = {
  // ..
  // \u9ED8\u8BA4 input
  input: {
    title: "\u7B80\u5355\u8F93\u5165\u6846",
    type: "string",
  }
  // textarea
  textarea: {
    title: "\u7B80\u5355\u6587\u672C\u7F16\u8F91\u6846",
    type: "string",
    format: "textarea"
  }
  // \u989C\u8272\u7EC4\u4EF6
  color: {
    title: "\u989C\u8272\u9009\u62E9",
    type: "string",
    format: "color"
  }
  // \u65E5\u671F\u7EC4\u4EF6
  date: {
    title: "\u65E5\u671F\u9009\u62E9",
    type: "string",
    format: "date" // "dateTime"
  }
  // \u65F6\u95F4\u7EC4\u4EF6
  time: {
    title: "\u65F6\u95F4\u9009\u62E9",
    type: "string",
    format: "time"
  }
  // \u56FE\u7247\u94FE\u63A5\u7EC4\u4EF6
  image: {
    title: "\u56FE\u7247\u5C55\u793A",
    type: "string",
    format: "image"
  }
}`,lang:"js"})]})]}),Object(e.jsxs)("h3",{id:"hidden",children:[Object(e.jsx)(u.AnchorLink,{to:"#hidden","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"hidden"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"boolean"})]})}),Object(e.jsx)("p",{children:"\u7EC4\u4EF6\u662F\u5426\u9690\u85CF\u72B6\u6001\u3002"}),Object(e.jsxs)("h3",{id:"min",children:[Object(e.jsx)(u.AnchorLink,{to:"#min","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"min"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"number"})]})}),Object(e.jsxs)("p",{children:["\u5F53 ",Object(e.jsx)("code",{children:"type"})," \u4E3A ",Object(e.jsx)("code",{children:"array"})," \u65F6\uFF0C\u4EE3\u8868\u6700\u5C0F\u9879\u6570\uFF1B\u5F53 ",Object(e.jsx)("code",{children:"type"})," \u4E3A ",Object(e.jsx)("code",{children:"string"})," \u65F6\uFF0C\u4EE3\u8868\u6700\u5C11\u5B57\u6570\uFF1B\u5F53 ",Object(e.jsx)("code",{children:"type"})," \u4E3A ",Object(e.jsx)("code",{children:"number"})," \u65F6\uFF0C\u4EE3\u8868\u6700\u5C0F\u503C\u3002"]}),Object(e.jsxs)("h3",{id:"max",children:[Object(e.jsx)(u.AnchorLink,{to:"#max","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"max"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"number"})]})}),Object(e.jsxs)("p",{children:["\u5F53 ",Object(e.jsx)("code",{children:"type"})," \u4E3A ",Object(e.jsx)("code",{children:"array"})," \u65F6\uFF0C\u4EE3\u8868\u6700\u5927\u9879\u6570\uFF1B\u5F53 ",Object(e.jsx)("code",{children:"type"})," \u4E3A ",Object(e.jsx)("code",{children:"string"})," \u65F6\uFF0C\u4EE3\u8868\u6700\u591A\u5B57\u6570\uFF1B\u5F53 ",Object(e.jsx)("code",{children:"type"})," \u4E3A ",Object(e.jsx)("code",{children:"number"})," \u65F6\uFF0C\u4EE3\u8868\u6700\u5927\u503C\u3002"]}),Object(e.jsxs)("h3",{id:"props",children:[Object(e.jsx)(u.AnchorLink,{to:"#props","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"props"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"object"})]})}),Object(e.jsxs)("p",{children:["\u5F53\u57FA\u7840\u5B57\u6BB5\u4E0D\u591F\u63CF\u8FF0\u7EC4\u4EF6\u7684\u5C55\u793A\u65F6\uFF0C\u4F7F\u7528 ",Object(e.jsx)("code",{children:"props"})," \u5B57\u6BB5\u4F5C\u4E3A\u6269\u5C55\u3002",Object(e.jsx)("code",{children:"props"})," \u7684\u5177\u4F53\u5C5E\u6027\u53EF\u4EE5\u67E5\u8BE2 antd \u7684\u5BF9\u5E94\u7EC4\u4EF6\u6587\u6863\u3002\u6240\u6709 ",Object(e.jsx)("code",{children:"props"})," \u4E2D\u7684\u5C5E\u6027\u90FD\u4F1A\u76F4\u63A5\u900F\u4F20\u7ED9\u7EC4\u4EF6\u3002"]}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  url: {
    title: '\u7F51\u5740',
    type: 'string',
    props: {
      // \u4EE5\u4E0B\u5C5E\u6027\u4F1A\u900F\u4F20\u7ED9 Input
      prefix: 'https://',
      suffix: '.com',
    },
  },
};`,lang:"js"}),Object(e.jsxs)("h3",{id:"order",children:[Object(e.jsx)(u.AnchorLink,{to:"#order","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"order"]}),Object(e.jsxs)("ul",{children:[Object(e.jsx)("li",{children:"\u7C7B\u578B\uFF1Anumber"}),Object(e.jsxs)("li",{children:["\u8BE6\u7EC6\uFF1A\u7528\u4E8E\u5BF9 ",Object(e.jsx)("code",{children:"schema"})," \u8FDB\u884C\u6392\u5E8F\uFF0C\u503C\u8D8A\u5C0F\u8D8A\u9760\u524D\uFF1A"]})]}),Object(e.jsx)(t.a,{code:`"input1": {
  "title": "\u8F93\u5165\u6846",
  "type": "string",
  "order": 2
}
"input2": {
  "title": "\u4F18\u5148\u6E32\u67D3",
  "type": "string",
  "order": 1
}`,lang:"js"}),Object(e.jsx)("p",{children:"\u51E1\u662F\u5305\u542B props\uFF08\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF09\u7684 schema \u7684 key \u503C\uFF0C\u90FD\u4F1A\u539F\u6837\u4F20\u9012\u7ED9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3002\u65B9\u4FBF\u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u5206\u7C7B props\u3002"}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  percentInput: {
    title: '\u767E\u5206\u6BD4\u8F93\u5165',
    type: 'number',
    props: {
      showInput: false,
    },
    // inputProps \u4F1A\u539F\u6837\u4F20\u7ED9\u81EA\u5B9A\u4E49\u7EC4\u4EF6
    inputProps: {
      suffix: '%',
    },
    // percentProps \u4F1A\u539F\u6837\u4F20\u7ED9\u81EA\u5B9A\u4E49\u7EC4\u4EF6
    percentProps: {
      step: 10,
    },
  },
};

// \u4F20\u9012\u7ED9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684 props \u4E3A
const {
  type: 'number',
  showInput: false,
  inputProps: {
    suffix: '%'
  },
  percentProps: {
    step: 10
  }
} = props;`,lang:"js"}),Object(e.jsxs)("h3",{id:"order-1",children:[Object(e.jsx)(u.AnchorLink,{to:"#order-1","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"order"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"number"})]})}),Object(e.jsxs)("p",{children:["\u7528\u4E8E\u5BF9 ",Object(e.jsx)("code",{children:"item"})," \u8FDB\u884C\u6392\u5E8F\uFF0C\u503C\u8D8A\u5C0F\u8D8A\u9760\u524D\u3002"]}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  input1: {
    title: '\u8F93\u5165\u6846',
    type: 'string',
    order: 2,
  },
  input2: {
    title: '\u8F93\u5165\u6846\u4F46\u662F\u66F4\u9760\u524D',
    type: 'string',
    order: 1,
  },
};`,lang:"js"}),Object(e.jsxs)("h3",{id:"placeholder",children:[Object(e.jsx)(u.AnchorLink,{to:"#placeholder","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"placeholder"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"string"})]})}),Object(e.jsx)("p",{children:"Input \u7B49\u5143\u7D20\u7684 placeholder\u3002"}),Object(e.jsx)("p",{children:Object(e.jsx)(h.a,{children:"\u6CE8\u610F placeholder \u7684\u503C\u9075\u5FAA\u5E95\u5C42\u5BF9\u5E94\u7EC4\u4EF6\u6240\u9700\u8981\u7684\u503C\u7684\u4E66\u5199\u89C4\u8303\u3002"})}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  dateRange: {
    title: '\u65E5\u671F\u8303\u56F4',
    type: 'range',
    format: 'dateTime',
    placeholder: ['\u5F00\u59CB', '\u7ED3\u675F'],
  },
};`,lang:"js"}),Object(e.jsxs)("h3",{id:"rules",children:[Object(e.jsx)(u.AnchorLink,{to:"#rules","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"rules"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"object[]"})]})}),Object(e.jsxs)("p",{children:["\u7528\u4E8E\u63CF\u8FF0\u7EC6\u81F4\u7684\u3001\u5B9A\u5236\u5316\u7684\u6821\u9A8C\uFF0C\u652F\u6301 ",Object(e.jsx)(u.Link,{to:"https://github.com/yiminghe/async-validator#type",children:"async-validator"})," \u6240\u6709\u7684 api\u3002Form-render \u4E3A\u5E38\u7528\u89C4\u5219\u63D0\u4F9B\u4E86\u8BED\u6CD5\u7CD6\uFF0C\u5982\uFF1A",Object(e.jsx)(u.AnchorLink,{to:"#type",children:"type"}),"\uFF0C",Object(e.jsx)(u.AnchorLink,{to:"#format",children:"format"}),"\uFF0C",Object(e.jsx)(u.AnchorLink,{to:"#min",children:"min"}),"\uFF0C",Object(e.jsx)(u.AnchorLink,{to:"#max",children:"max"}),"\uFF0C",Object(e.jsx)(u.AnchorLink,{to:"#required",children:"required"}),"\u7B49\u3002\u53EF\u901A\u8FC7 ",Object(e.jsx)(u.AnchorLink,{to:"./newProps.md/#validatemessages",children:"validateMessages"})," \u5B9A\u5236\u6821\u9A8C\u6587\u6848\u3002"]}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  count: {
    title: '\u4EE3\u53F7',
    type: 'string',
    rules: [
      {
        pattern: '^[A-Za-z0-9]+$',
        message: '\u53EA\u5141\u8BB8\u586B\u5199\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57',
      },
    ],
  },
  zip: {
    title: 'zip code',
    type: 'string',
    rules: [{ len: 8, message: '\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC78' }],
  },
};`,lang:"js"}),Object(e.jsxs)("p",{children:["\u5F53\u5E38\u89C4\u5B57\u6BB5\u4E0D\u80FD\u6EE1\u8DB3\u65F6\uFF0C\u53EF\u4F7F\u7528 validator \u52A8\u6001\u6821\u9A8C\uFF0C\u8BE6\u89C1 ",Object(e.jsx)(u.Link,{to:"https://github.com/yiminghe/async-validator#validate",children:"async-validator"}),"\u3002"]}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  name: {
    type: 'string',
    required: true,
    rules: [{ validator: (rule, value) => value === 'muji' }],
  },
};`,lang:"js"}),Object(e.jsxs)("h3",{id:"required",children:[Object(e.jsx)(u.AnchorLink,{to:"#required","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"required"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"boolean"})]})}),Object(e.jsx)("p",{children:"\u7528\u4E8E\u5224\u65AD\u662F\u5426\u5FC5\u586B\uFF0C\u4F1A\u6821\u9A8C\u8868\u5355\u6570\u636E\u3002"}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  requiredInput: {
    title: '\u8F93\u5165\u6846',
    type: 'string',
    required: true,
  },
};`,lang:"js"}),Object(e.jsxs)("h3",{id:"readonly",children:[Object(e.jsx)(u.AnchorLink,{to:"#readonly","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"readOnly"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"boolean"})]})}),Object(e.jsx)("p",{children:"\u7EC4\u4EF6\u662F\u5426\u53EA\u8BFB\u72B6\u6001\u3002"}),Object(e.jsxs)("h3",{id:"type-1",children:[Object(e.jsx)(u.AnchorLink,{to:"#type-1","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"type"]}),Object(e.jsxs)("ul",{children:[Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"'string' | 'number' | 'boolean' | 'array' | 'range' | 'html'"})]}),Object(e.jsx)("li",{children:"\u8BE6\u7EC6\uFF1Atype \u63CF\u8FF0\u91CC\u7EC4\u4EF6\u7684\u503C\u7684\u6570\u636E\u7C7B\u578B\u3002\u7528\u4E8E\u6821\u9A8C\u6570\u636E\u7C7B\u578B\uFF0C\u4E5F\u7528\u4E8E\u5224\u65AD\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u4EE5\u53CA\u6821\u9A8C\u8868\u5355\u6570\u636E\u3002"})]}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  date: {
    title: '\u65E5\u671F\u8303\u56F4',
    type: 'range',
    format: 'dateTime',
    placeholder: ['\u5F00\u59CB', '\u7ED3\u675F'],
  },
  html: {
    title: '\u7EAF\u5B57\u7B26\u4E32',
    type: 'html',
    default: 'hello world',
  },
};`,lang:"js"}),Object(e.jsxs)("h3",{id:"readonlywidget",children:[Object(e.jsx)(u.AnchorLink,{to:"#readonlywidget","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"readOnlyWidget"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"string"})]})}),Object(e.jsx)("p",{children:"\u6307\u5B9A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7528\u54EA\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6E32\u67D3\u3002"}),Object(e.jsx)("p",{children:Object(e.jsx)(h.a,{children:" readOnly=true \u7684\u60C5\u51B5\uFF0CFormRender \u9ED8\u8BA4\u4F7F\u7528 html \u7EC4\u4EF6\u6E32\u67D3\u3002\u7279\u6B8A\u60C5\u51B5 html \u7EC4\u4EF6\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\uFF0C\u6B64\u65F6\u901A\u8FC7\u6307\u660E readOnlyWidget \u7684\u65B9\u5F0F\u81EA\u5B9A\u4E49\u6E32\u67D3\u3002"})}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  name: {
    title: '\u5355\u9009',
    type: 'string',
    widget: 'myWidget', // \u6307\u660E\u4F7F\u7528 myWidget \u6765\u6E32\u67D3
    readOnlyWidget: 'myReadOnlyWidget', // \u6307\u660E\u5728\u53EA\u8BFB\u6A21\u5F0F\u4F7F\u7528 myReadOnlyWidget \u6765\u6E32\u67D3
  },
};`,lang:"js"}),Object(e.jsxs)("h3",{id:"width",children:[Object(e.jsx)(u.AnchorLink,{to:"#width","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"width"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"string"})]})}),Object(e.jsxs)("p",{children:["\u5355\u4E2A\u5143\u7D20\u7684\u5C55\u793A\u5BBD\u5EA6\uFF08\u5E26 label \u4E00\u8D77\uFF09\uFF0C\u4F8B\u5982 ",Object(e.jsx)("code",{children:"'20%'"}),"\u3002"]}),Object(e.jsxs)("h3",{id:"widget",children:[Object(e.jsx)(u.AnchorLink,{to:"#widget","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"widget"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"string"})]})}),Object(e.jsxs)("p",{children:["\u6307\u5B9A\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u662F\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u4E00\u4E2A\u5B57\u6BB5\u3002\u7528\u4E8E\u660E\u786E\u6307\u5B9A\u4F7F\u7528\u67D0\u4E2A",Object(e.jsx)(u.Link,{to:"./inner-widget",children:"\u5185\u7F6E\u7EC4\u4EF6"}),"\u6216",Object(e.jsx)(u.Link,{to:"/form-render/advanced/widget",children:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"}),"\u3002"]}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  address: {
    title: '\u5355\u9009',
    type: 'string',
    enum: ['hz', 'wh', 'gy'],
    enumNames: ['\u676D\u5DDE', '\u6B66\u6C49', '\u8D35\u9633'],
    widget: 'select', // \u660E\u786E\u6307\u660E\u4F7F\u7528\u4E0B\u62C9\u9009\u62E9\u7EC4\u4EF6
  },
};`,lang:"js"}),Object(e.jsxs)("h2",{id:"list",children:[Object(e.jsx)(u.AnchorLink,{to:"#list","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"List"]}),Object(e.jsx)("p",{children:"\u5217\u8868\u7EC4\u4EF6\u7684\u914D\u7F6E\u9879\u3002"}),Object(e.jsxs)("h3",{id:"items",children:[Object(e.jsx)(u.AnchorLink,{to:"#items","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"items"]}),Object(e.jsx)("p",{children:"\u53EA\u5728\u5217\u8868\u7C7B\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u63CF\u8FF0 Array \u4E2D\u6BCF\u4E2A item \u7684\u7ED3\u6784\u3002items \u76EE\u524D\u53EA\u652F\u6301\u662F\u5BF9\u8C61\u3002"}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  tickets: {
    title: '\u5BF9\u8C61\u6570\u7EC4',
    type: 'array',
    min: 1,
    max: 3,
    widget: 'cardList',
    items: {
      type: 'object',
      properties: {
        tickets: {
          title: '\u95E8\u7968\u6570',
          type: 'number',
        },
      },
    },
  },
};`,lang:"js"}),Object(e.jsxs)("h3",{id:"min-1",children:[Object(e.jsx)(u.AnchorLink,{to:"#min-1","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"min"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"number"})]})}),Object(e.jsx)("p",{children:"\u4EE3\u8868\u5217\u8868\u7684\u6700\u5C0F\u9879\u6570\u3002"}),Object(e.jsxs)("h3",{id:"max-1",children:[Object(e.jsx)(u.AnchorLink,{to:"#max-1","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"max"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"number"})]})}),Object(e.jsx)("p",{children:"\u4EE3\u8868\u5217\u8868\u7684\u6700\u5927\u9879\u6570\u3002"}),Object(e.jsxs)("h3",{id:"props-1",children:[Object(e.jsx)(u.AnchorLink,{to:"#props-1","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"props"]}),Object(e.jsxs)("p",{children:["\u5217\u8868\u7EC4\u4EF6\u7684\u989D\u5916\u5C5E\u6027\uFF0C\u9664\u4E86\u4E0B\u5217\u5185\u7F6E\u5C5E\u6027\u5916\uFF0C\u6839\u636E ",Object(e.jsx)(u.AnchorLink,{to:"#widget-1",children:"widget"})," \u7684\u4E0D\u540C\uFF0C\u53EF\u9009\u62E9\u66F4\u591A\u5C5E\u6027\u4F20\u5165\u3002"]}),Object(e.jsxs)("h4",{id:"propsbuttons",children:[Object(e.jsx)(u.AnchorLink,{to:"#propsbuttons","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"props.buttons"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsxs)("code",{children:["{"," html: string, callback: string ","}","[]"]})]})}),Object(e.jsx)("p",{children:"\u7528\u4E8E\u6DFB\u52A0\u66F4\u591A\u5217\u8868\u64CD\u4F5C\u6309\u94AE\u3002"}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  list: {
    type: 'array',
    props: {
      buttons: [
        {
          html: 'excel \u5BFC\u5165',
          // Form-render \u4F1A\u5230 window.someCallback \u4E0A\u5BFB\u627E\u56DE\u8C03\u51FD\u6570
          // \u6B64\u56DE\u8C03\u51FD\u6570\u53EF\u63A5\u53D7\u53C2\u6570 value\u548C schema, \u8FD4\u56DE\u503C\u4F1A\u4F5C\u4E3A\u65B0\u7684\u5217\u8868\u503C
          callback: 'someCallback',
        },
        {
          // html \u5B57\u6BB5\u53EF\u4F7F\u7528\u6B63\u5E38\u7684 string \u503C\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4EFB\u4F55 html \u7247\u6BB5
          html: "<span style='color: red'>\u62C9\u53D6\u6570\u636E</span>",
          callback: 'getData',
        },
      ],
    },
  },
};

// value: \u6574\u4E2A\u6570\u7EC4\u7684\u503C
// onChange: \u4F20\u5165\u6539\u53D8\u540E\u7684\u6570\u7EC4\u503C\uFF0C\u89E6\u53D1state\u66F4\u65B0
window.someCallback = ({ value, onChange, schema }) => {
  onChange([...value, { a: 'hello' }]);
};`,lang:"js"}),Object(e.jsxs)("h4",{id:"propshidedelete",children:[Object(e.jsx)(u.AnchorLink,{to:"#propshidedelete","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"props.hideDelete"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"boolean"})]})}),Object(e.jsx)("p",{children:"\u9690\u85CF\u5220\u9664\u6309\u94AE\u3002"}),Object(e.jsxs)("h4",{id:"propshideadd",children:[Object(e.jsx)(u.AnchorLink,{to:"#propshideadd","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"props.hideAdd"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"boolean"})]})}),Object(e.jsx)("p",{children:"\u9690\u85CF\u65B0\u589E/\u590D\u5236\u6309\u94AE\u3002"}),Object(e.jsxs)("h4",{id:"propshidecopy",children:[Object(e.jsx)(u.AnchorLink,{to:"#propshidecopy","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"props.hideCopy"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"boolean"})]})}),Object(e.jsx)("p",{children:"\u9690\u85CF\u590D\u5236\u6309\u94AE\u3002"}),Object(e.jsxs)("h4",{id:"propshidemove",children:[Object(e.jsx)(u.AnchorLink,{to:"#propshidemove","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"props.hideMove"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"boolean"})]})}),Object(e.jsx)("p",{children:"\u9690\u85CF\u4E0A\u4E0B\u79FB\u52A8 item \u7684\u6309\u94AE\u3002"}),Object(e.jsxs)("h4",{id:"propshidetitle",children:[Object(e.jsx)(u.AnchorLink,{to:"#propshidetitle","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"props.hideTitle"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"boolean"})]})}),Object(e.jsxs)("p",{children:["\u4EC5\u5F53 ",Object(e.jsx)("code",{children:"widget"})," \u4E3A ",Object(e.jsx)("code",{children:"simpleList"})," \u53EF\u7528\uFF0C\u9690\u85CF title\uFF0C\u5C55\u793A\u66F4\u7D27\u51D1\u3002"]}),Object(e.jsxs)("h4",{id:"propstype",children:[Object(e.jsx)(u.AnchorLink,{to:"#propstype","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"props.type"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"editable-card"})]})}),Object(e.jsxs)("p",{children:["\u4EC5\u5F53 ",Object(e.jsx)("code",{children:"widget"})," \u4E3A ",Object(e.jsx)("code",{children:"tabList"})," \u53EF\u7528\uFF0C\u5207\u6362\u5217\u8868\u7EC4\u4EF6\u4E3A\u53EF\u65B0\u589E/\u5173\u95ED\u7684 Tabs \u6807\u7B7E\u9875\u3002"]}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  list: {
    type: 'array',
    widget: 'tabList',
    props: {
      type: 'editable-card'
      tabName: '\u9879\u76EE'
    }
  }
}`,lang:"js"}),Object(e.jsxs)("h4",{id:"propstabname",children:[Object(e.jsx)(u.AnchorLink,{to:"#propstabname","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"props.tabName"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"string"})]})}),Object(e.jsxs)("p",{children:["\u4EC5\u5F53 ",Object(e.jsx)("code",{children:"widget"})," \u4E3A ",Object(e.jsx)("code",{children:"tabList"})," \u53EF\u7528\uFF0C\u4EE3\u8868\u9009\u9879\u5361\u5934\u6587\u6848\uFF0C\u5BF9\u5E94 antd \u4E2D Tabs \u7684 tab \u5C5E\u6027\u3002"]}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  list: {
    type: 'array',
    widget: 'tabList',
    props: {
      tabName: '\u9879\u76EE',
    },
  },
};`,lang:"js"}),Object(e.jsxs)("h4",{id:"other-table-props",children:[Object(e.jsx)(u.AnchorLink,{to:"#other-table-props","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"other table props"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)(u.Link,{to:"https://ant-design.antgroup.com/components/table-cn/#Table",children:"TableProps"})]})}),Object(e.jsxs)("p",{children:["\u4EC5\u5F53 ",Object(e.jsx)("code",{children:"widget"})," \u4E3A ",Object(e.jsx)("code",{children:"tableList"}),"\u3001",Object(e.jsx)("code",{children:"drawerList"}),"\u3001",Object(e.jsx)("code",{children:"virtualList"})," \u65F6\uFF0C\u53EF\u4F20\u5165\u6240\u6709 antd table \u7684 props\u3002"]}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  list: {
    type: 'array',
    widget: 'tableList',
    props: {
      // \u53EF\u4F20\u5165 antd table \u7684 props
      scrollX: 2000,
      size: 'small',
    },
  },
};`,lang:"js"}),Object(e.jsxs)("h3",{id:"itemprops",children:[Object(e.jsx)(u.AnchorLink,{to:"#itemprops","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"itemProps"]}),Object(e.jsx)("p",{children:"\u5217\u8868\u4E2D\u6BCF\u4E00\u9879\u7684\u5C5E\u6027\u3002"}),Object(e.jsxs)("h4",{id:"itempropsaddbtnprops",children:[Object(e.jsx)(u.AnchorLink,{to:"#itempropsaddbtnprops","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"itemProps.addBtnProps"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"object"})]})}),Object(e.jsx)("p",{children:"\u201C\u65B0\u589E\u4E00\u6761\u201D\u6309\u94AE\u7684\u6837\u5F0F\u548C\u6587\u6848\u4FEE\u6539\uFF0C\u6240\u6709 antd \u7684 button \u7684 props \u90FD\u652F\u6301\u4F20\u5165\u3002"}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  itemProps: {
    addBtnProps: {
      children: '\u65B0\u589E\u4F01\u4E1A',
      type: 'primary',
    },
  },
};`,lang:"js"}),Object(e.jsxs)("h4",{id:"other-columns-itemprops",children:[Object(e.jsx)(u.AnchorLink,{to:"#other-columns-itemprops","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"other columns itemProps"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)(u.Link,{to:"https://ant-design.antgroup.com/components/table-cn/#Column",children:"Column"})]})}),Object(e.jsxs)("p",{children:["\u4EC5\u5F53 ",Object(e.jsx)("code",{children:"widget"})," \u4E3A ",Object(e.jsx)("code",{children:"tableList"}),"\u3001",Object(e.jsx)("code",{children:"drawerList"}),"\u3001",Object(e.jsx)("code",{children:"virtualList"})," \u65F6\uFF0C\u6240\u6709 columns \u7684\u5355\u4E2A\u914D\u7F6E\u90FD\u53EF\u4EE5\u900F\u4F20\uFF0C\u4F1A\u4F5C\u7528\u5230 columns \u7684\u6240\u6709 ",Object(e.jsx)("code",{children:"item"}),"\u3002"]}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  list: {
    type: 'array',
    itemProps: {
      width: 200, // \u8BBE\u7F6E table \u7684\u6240\u6709\u5355\u5143\u683C\uFF08\u9664\u4E86\u201C\u64CD\u4F5C\u201D\u90A3\u4E00\u5217\uFF09\u5BBD\u5EA6\u4E3A 200 px
    },
  },
};`,lang:"js"}),Object(e.jsxs)("h3",{id:"widget-1",children:[Object(e.jsx)(u.AnchorLink,{to:"#widget-1","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"widget"]}),Object(e.jsxs)("ul",{children:[Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"'cardList' | 'simpleList' | 'tableList' | 'drawerList' | 'tabList' | 'virtualList'"})]}),Object(e.jsx)("li",{children:"\u9ED8\u8BA4\uFF1AcardList"})]}),Object(e.jsxs)("p",{children:["Form-render \u7ED9\u51FA 5 \u79CD\u5217\u8868\u7684\u5C55\u793A\u5F62\u5F0F\uFF0C\u5145\u5206\u6EE1\u8DB3\u4ECE\u6781\u7B80\u5230\u590D\u6742\u7684\u5217\u8868\u9700\u6C42\uFF0C\u8BE6\u89C1 ",Object(e.jsx)(u.Link,{to:"/playground",children:"Playground"}),"\u3002\u6839\u636E ",Object(e.jsx)("code",{children:"widget"})," \u7C7B\u578B\u7684\u4E0D\u540C\uFF0C\u53EF\u4EE5\u5728 ",Object(e.jsx)("code",{children:"props"})," \u4E2D\u4F20\u5165\u66F4\u591A\u989D\u5916\u5C5E\u6027\u3002"]}),Object(e.jsxs)("h2",{id:"object",children:[Object(e.jsx)(u.AnchorLink,{to:"#object","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"Object"]}),Object(e.jsx)("p",{children:"\u5BF9\u8C61\u7C7B\u578B\u7EC4\u4EF6\u7684\u914D\u7F6E\u3002"}),Object(e.jsxs)("h3",{id:"collapsed",children:[Object(e.jsx)(u.AnchorLink,{to:"#collapsed","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"collapsed"]}),Object(e.jsxs)("ul",{children:[Object(e.jsxs)("li",{children:["\u7C7B\u578B\uFF1A",Object(e.jsx)("code",{children:"boolean"})]}),Object(e.jsx)("li",{children:"\u9ED8\u8BA4\uFF1Afalse"})]}),Object(e.jsx)("p",{children:"\u53EA\u5728\u5D4C\u5957\u7684\u5BF9\u8C61\u7C7B\u578B\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u7528\u4E8E\u63A7\u5236\u9762\u677F\u662F\u5426\u6298\u53E0\u3002"}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  input: {
    type: 'object',
    properties: {
      objectName: {
        type: 'object',
        description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
        collapsed: false,
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
        },
      },
    },
  },
};`,lang:"js"}),Object(e.jsxs)("h3",{id:"properties-1",children:[Object(e.jsx)(u.AnchorLink,{to:"#properties-1","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"properties"]}),Object(e.jsxs)("p",{children:["\u53EA\u5728\u5BF9\u8C61\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C",Object(e.jsx)("code",{children:"properties"})," \u7528\u4E8E\u5305\u88F9\u5BF9\u8C61\u7684\u5B50\u5C5E\u6027\u3002"]}),Object(e.jsx)(t.a,{code:`const schema = {
  // ...
  ticket: {
    title: '\u5BF9\u8C61',
    type: 'object',
    properties: {
      tickets: {
        title: '\u95E8\u7968\u6570',
        type: 'number',
      },
    },
  },
};`,lang:"js"})]})]})})});b.default=O=>{var p=F.a.useContext(u.context),C=p.demos;return F.a.useEffect(()=>{var A;O!=null&&(A=O.location)!==null&&A!==void 0&&A.hash&&u.AnchorLink.scrollToAnchor(decodeURIComponent(O.location.hash.slice(1)))},[]),Object(e.jsx)(k,{demos:C})}},Zxc8:function(y,b,i){"use strict";i.r(b);var j=i("q1tI"),c=i.n(j),F=i("k3GJ"),u=i("MZF8"),d=i("dEAq"),h=i.n(d),E=i("H1Ra"),t=i("RZMt"),e=i.n(t);function x(s,l){return A(s)||C(s,l)||O(s,l)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(s,l){if(!!s){if(typeof s=="string")return p(s,l);var r=Object.prototype.toString.call(s).slice(8,-1);if(r==="Object"&&s.constructor&&(r=s.constructor.name),r==="Map"||r==="Set")return Array.from(s);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(s,l)}}function p(s,l){(l==null||l>s.length)&&(l=s.length);for(var r=0,o=new Array(l);r<l;r++)o[r]=s[r];return o}function C(s,l){var r=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(r!=null){var o=[],m=!0,B=!1,g,_;try{for(r=r.call(s);!(m=(g=r.next()).done)&&(o.push(g.value),!(l&&o.length===l));m=!0);}catch(n){B=!0,_=n}finally{try{!m&&r.return!=null&&r.return()}finally{if(B)throw _}}return o}}function A(s){if(Array.isArray(s))return s}function v(s,l){var r,o=(r=s.match(/\.(\w+)$/))===null||r===void 0?void 0:r[1];return o||(o=l.tsx?"tsx":"jsx"),o}var z=function(l){var r,o,m,B=Object(j.useRef)(),g=Object(j.useContext)(d.context),_=g.locale,n=Object(d.useLocaleProps)(_,l),Z=Object(d.useDemoUrl)(n.identifier),N=n.demoUrl||Z,J=(u.a===null||u.a===void 0?void 0:u.a.location.hash)==="#".concat(n.identifier),H=Object.keys(n.sources).length===1,P=Object(d.useCodeSandbox)(((r=n.hideActions)===null||r===void 0?void 0:r.includes("CSB"))?null:n),w=Object(d.useRiddle)(((o=n.hideActions)===null||o===void 0?void 0:o.includes("RIDDLE"))?null:n),X=Object(d.useMotions)(n.motions||[],B.current),M=x(X,2),G=M[0],Q=M[1],V=Object(d.useCopy)(),T=x(V,2),Y=T[0],q=T[1],ee=Object(j.useState)(function(){return n.sources._?"_":Object.keys(n.sources)[0]}),R=x(ee,2),D=R[0],ue=R[1],ne=Object(j.useState)(v(D,n.sources[D])),S=x(ne,2),L=S[0],te=S[1],ce=Object(j.useState)(Boolean(n.defaultShowCode)),U=x(ce,2),f=U[0],ie=U[1],se=Object(j.useState)(Math.random()),W=x(se,2),re=W[0],K=W[1],I=n.sources[D][L]||n.sources[D].content,de=Object(d.useTSPlaygroundUrl)(_,I),le=Object(j.useRef)(),ae=Object(d.usePrefersColor)(),je=x(ae,1),oe=je[0],$=n.actionBarRender,he=$===void 0?function(a){return a}:$;Object(j.useEffect)(function(){K(Math.random())},[oe]);function be(a){ue(a),te(v(a,n.sources[a]))}return c.a.createElement("div",{style:n.style,className:[n.className,"__dumi-default-previewer",J?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:n.identifier,"data-debug":n.debug||void 0,"data-iframe":n.iframe||void 0},n.iframe&&c.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),c.a.createElement("div",{ref:B,className:"__dumi-default-previewer-demo",style:{transform:n.transform?"translate(0, 0)":void 0,padding:n.compact||n.iframe&&n.compact!==!1?"0":void 0,background:n.background}},n.iframe?c.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(n.iframe).replace(/(\d)$/,"$1px")},key:re,src:N,ref:le}):n.children),c.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":n.title},n.title&&c.a.createElement(d.AnchorLink,{to:"#".concat(n.identifier)},n.title),n.description&&c.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.description}})),c.a.createElement("div",{className:"__dumi-default-previewer-actions"},he(c.a.createElement(c.a.Fragment,null,P&&c.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:P}),w&&c.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:w}),n.motions&&c.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:Q,onClick:function(){return G()}}),n.iframe&&c.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return K(Math.random())}}),!((m=n.hideActions)===null||m===void 0?void 0:m.includes("EXTERNAL"))&&c.a.createElement(d.Link,{target:"_blank",to:N},c.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),c.a.createElement("span",null),c.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":q,onClick:function(){return Y(I)}}),L==="tsx"&&f&&c.a.createElement(d.Link,{target:"_blank",to:de},c.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),c.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(f?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return ie(!f)}})))),f&&c.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!H&&c.a.createElement(F.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:D,onChange:be},Object.keys(n.sources).map(function(a){return c.a.createElement(F.TabPane,{tab:a==="_"?"index.".concat(v(a,n.sources[a])):a,key:a})})),c.a.createElement("div",{className:"__dumi-default-previewer-source"},c.a.createElement(E.a,{code:I,lang:L,showCopy:!1}))))};b.default=z},x8cr:function(y,b,i){}}]);
