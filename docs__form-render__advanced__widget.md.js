(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{RZMt:function(y,A,a){},Zxc8:function(y,A,a){"use strict";a.r(A);var d=a("q1tI"),t=a.n(d),m=a("k3GJ"),c=a("MZF8"),o=a("dEAq"),P=a.n(o),F=a("H1Ra"),u=a("RZMt"),K=a.n(u);function l(n,E){return $(n)||_(n,E)||h(n,E)||C()}function C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(n,E){if(!!n){if(typeof n=="string")return B(n,E);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return B(n,E)}}function B(n,E){(E==null||E>n.length)&&(E=n.length);for(var r=0,i=new Array(E);r<E;r++)i[r]=n[r];return i}function _(n,E){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var i=[],j=!0,b=!1,x,O;try{for(r=r.call(n);!(j=(x=r.next()).done)&&(i.push(x.value),!(E&&i.length===E));j=!0);}catch(e){b=!0,O=e}finally{try{!j&&r.return!=null&&r.return()}finally{if(b)throw O}}return i}}function $(n){if(Array.isArray(n))return n}function v(n,E){var r,i=(r=n.match(/\.(\w+)$/))===null||r===void 0?void 0:r[1];return i||(i=E.tsx?"tsx":"jsx"),i}var V=function(E){var r,i,j,b=Object(d.useRef)(),x=Object(d.useContext)(o.context),O=x.locale,e=Object(o.useLocaleProps)(O,E),Z=Object(o.useDemoUrl)(e.identifier),M=e.demoUrl||Z,H=(c.a===null||c.a===void 0?void 0:c.a.location.hash)==="#".concat(e.identifier),J=Object.keys(e.sources).length===1,R=Object(o.useCodeSandbox)(((r=e.hideActions)===null||r===void 0?void 0:r.includes("CSB"))?null:e),k=Object(o.useRiddle)(((i=e.hideActions)===null||i===void 0?void 0:i.includes("RIDDLE"))?null:e),G=Object(o.useMotions)(e.motions||[],b.current),I=l(G,2),X=I[0],z=I[1],Q=Object(o.useCopy)(),S=l(Q,2),Y=S[0],q=S[1],uu=Object(d.useState)(function(){return e.sources._?"_":Object.keys(e.sources)[0]}),L=l(uu,2),p=L[0],eu=L[1],tu=Object(d.useState)(v(p,e.sources[p])),w=l(tu,2),D=w[0],nu=w[1],ru=Object(d.useState)(Boolean(e.defaultShowCode)),T=l(ru,2),f=T[0],au=T[1],cu=Object(d.useState)(Math.random()),U=l(cu,2),Eu=U[0],N=U[1],g=e.sources[p][D]||e.sources[p].content,su=Object(o.useTSPlaygroundUrl)(O,g),ou=Object(d.useRef)(),iu=Object(o.usePrefersColor)(),du=l(iu,1),Fu=du[0],W=e.actionBarRender,lu=W===void 0?function(s){return s}:W;Object(d.useEffect)(function(){N(Math.random())},[Fu]);function Cu(s){eu(s),nu(v(s,e.sources[s]))}return t.a.createElement("div",{style:e.style,className:[e.className,"__dumi-default-previewer",H?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:e.identifier,"data-debug":e.debug||void 0,"data-iframe":e.iframe||void 0},e.iframe&&t.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),t.a.createElement("div",{ref:b,className:"__dumi-default-previewer-demo",style:{transform:e.transform?"translate(0, 0)":void 0,padding:e.compact||e.iframe&&e.compact!==!1?"0":void 0,background:e.background}},e.iframe?t.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(e.iframe).replace(/(\d)$/,"$1px")},key:Eu,src:M,ref:ou}):e.children),t.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":e.title},e.title&&t.a.createElement(o.AnchorLink,{to:"#".concat(e.identifier)},e.title),e.description&&t.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}})),t.a.createElement("div",{className:"__dumi-default-previewer-actions"},lu(t.a.createElement(t.a.Fragment,null,R&&t.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:R}),k&&t.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:k}),e.motions&&t.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:function(){return X()}}),e.iframe&&t.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return N(Math.random())}}),!((j=e.hideActions)===null||j===void 0?void 0:j.includes("EXTERNAL"))&&t.a.createElement(o.Link,{target:"_blank",to:M},t.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),t.a.createElement("span",null),t.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":q,onClick:function(){return Y(g)}}),D==="tsx"&&f&&t.a.createElement(o.Link,{target:"_blank",to:su},t.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),t.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(f?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return au(!f)}})))),f&&t.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!J&&t.a.createElement(m.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:p,onChange:Cu},Object.keys(e.sources).map(function(s){return t.a.createElement(m.TabPane,{tab:s==="_"?"index.".concat(v(s,e.sources[s])):s,key:s})})),t.a.createElement("div",{className:"__dumi-default-previewer-source"},t.a.createElement(F.a,{code:g,lang:D,showCopy:!1}))))};A.default=V},j57V:function(y,A,a){"use strict";a.r(A);var d=a("k1fw"),t=a("q1tI"),m=a.n(t),c=a("dEAq"),o=a.n(c),P=a("Zxc8"),F=a("H1Ra"),u=a("nKUr"),K=a.n(u),l=m.a.memo(C=>{var h=C.demos,B=h["widget-demo"].component;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(m.a.Fragment,{children:[Object(u.jsxs)("div",{className:"markdown",children:[Object(u.jsxs)("h1",{id:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6widget",children:[Object(u.jsx)(c.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u7EC4\u4EF6widget","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF08widget\uFF09"]}),Object(u.jsx)("p",{children:"\u5F53 FormRender \u63D0\u4F9B\u7684\u7EC4\u4EF6\u65E0\u6CD5 100%\u6EE1\u8DB3\u7528\u6237\u9700\u6C42\u65F6\uFF0C\u53EF\u4EE5\u8003\u8651\u81EA\u5DF1\u5199\u4E00\u4E2A\u3002\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u529F\u80FD\u4F7F FormRender \u62E5\u6709\u5F88\u597D\u6269\u5C55\u6027\uFF0C\u53EF\u80FD\u7684\u5E94\u7528\u573A\u666F\u5982\u4E0B\uFF1A"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u6211\u9700\u8981\u5199\u4E00\u4E2A\u5F02\u6B65\u52A0\u8F7D\u7684\u641C\u7D22\u8F93\u5165\u6846\uFF08\u666E\u9002\u6027\u4E0D\u9AD8/\u96BE\u4EE5\u7528 schema \u63CF\u8FF0\u7684\u7EC4\u4EF6\uFF09"}),Object(u.jsx)("li",{children:"\u6211\u4EEC\u56E2\u961F\u4F7F\u7528 xxx ui\uFF0C\u4E0E antd \u4E0D\u642D\uFF0C\u5E0C\u671B\u80FD\u9002\u914D\u4E00\u5957 xxx ui \u7EC4\u4EF6\u7684 FormRender\uFF08\u6B22\u8FCE Pull Request\uFF09"}),Object(u.jsx)("li",{children:"\u6211\u9700\u8981\u5728\u8868\u5355\u5185\u90E8\u5199\u4E00\u4E2A excel \u4E0A\u4F20\u6309\u94AE\uFF08\u5B8C\u5168\u5B9A\u5236\u5316\u7684\u9700\u6C42\uFF09"})]}),Object(u.jsxs)("p",{children:["\u6CE8\uFF1A\u5982\u679C\u662F\u65B0\u589E\u4E00\u4E2A\u5E38\u7528\u7EC4\u4EF6\uFF0C\u5EFA\u8BAE\u7ED9 FormRender \u7EF4\u62A4\u7684\u540C\u5B66\u6765\u63D0 Pull Request\uFF0C\u8FD9\u6837\u53EF\u4EE5\u66F4\u597D\u6269\u5C55\u5176\u751F\u6001\uFF0CFormRender \u7684\u793E\u533A\u4EE5\u53CA\u63D0\u4F9B\u4E86\u90E8\u5206 ",Object(u.jsx)(c.Link,{to:"https://github.com/alibaba/x-render/tree/master/widgets",children:"\u5E38\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6"}),"\u3002"]}),Object(u.jsxs)("h2",{id:"\u4F7F\u7528",children:[Object(u.jsx)(c.AnchorLink,{to:"#\u4F7F\u7528","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528"]}),Object(u.jsx)("p",{children:"\u7B80\u5355\u7684\u8BF4\uFF0C\u5728 Form \u7EC4\u4EF6\u5C42\u4F7F\u7528 widgets \u5B57\u6BB5\u6CE8\u518C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5E76\u5728 schema \u5185\u4F7F\u7528 widget \u5B57\u6BB5\u6307\u660E\u4F7F\u7528\u7684\u7EC4\u4EF6 key \u503C\u5373\u53EF\uFF1A"}),Object(u.jsx)(F.a,{code:`const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
      type: 'string',
      widget: 'site',
    },
    //...
  },
};

<Form
  schema={schema}
  widgets={{ site: SiteInput }}
  //...
/>;`,lang:"js"}),Object(u.jsx)("p",{children:"\u5B9E\u9645\u4EE3\u7801\u5982\u4E0B\uFF1A"})]}),Object(u.jsx)(P.default,Object(d.a)(Object(d.a)({},h["widget-demo"].previewerProps),{},{children:Object(u.jsx)(B,{})})),Object(u.jsxs)("div",{className:"markdown",children:[Object(u.jsxs)("h2",{id:"\u4E0D\u9700\u8981\u81EA\u5DF1\u624B\u5199\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u54E6",children:[Object(u.jsx)(c.AnchorLink,{to:"#\u4E0D\u9700\u8981\u81EA\u5DF1\u624B\u5199\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u54E6","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"\u4E0D\u9700\u8981\u81EA\u5DF1\u624B\u5199\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u54E6"]}),Object(u.jsx)("p",{children:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5C31\u662F\u666E\u901A\u7684 React \u7EC4\u4EF6\uFF0C\u552F\u4E00\u7684\u8981\u6C42\u662F\u8981\u6709 value/onChange \u8FD9\u4E24\u4E2A props\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A\u503C\u3002\u6240\u4EE5\u5982\u679C\u73B0\u6210\u7684\u7EC4\u4EF6\u5DF2\u7ECF\u9ED8\u8BA4\u4F7F\u7528\u4E86 value/onChange\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u62FF\u6765\u7528\u3002"}),Object(u.jsxs)("p",{children:["\u4E3E\u4F8B\u6765\u8BF4\uFF1A\u73B0\u5728\u6211\u4EEC\u9700\u8981\u4F7F\u7528\u201C\u7EA7\u8054\u9009\u62E9\u201D\u7EC4\u4EF6\uFF0CFormRender \u5E76\u6CA1\u6709\u5185\u7F6E\u652F\u6301\u3002\u8FD9\u65F6\u6253\u5F00 ",Object(u.jsx)(c.Link,{to:"https://ant.design/components/cascader/",children:"antd \u6587\u6863"}),"\uFF0C\u6211\u4EEC\u770B\u5230 cascader \u9ED8\u8BA4\u4F7F\u7528\u4E86 value/onChange\uFF0C\u90A3\u5C31\u76F4\u63A5\u62FF\u6765\u7528\u5427\uFF1A"]}),Object(u.jsx)(F.a,{code:`import { Cascader } from 'antd';

// \u9876\u5C42\u5F15\u5165\u6CE8\u518C
...
<Form
  form={form}
  schema={schema}
  widgets={{ cascader: Cascader }}
/>

// schema \u4E2D\u4F7F\u7528
location: {
  title: '\u7701\u5E02\u533A',
  type: 'string',
  widget: 'cascader',
  props: {
    ...
  }
},`,lang:"js"}),Object(u.jsxs)("h2",{id:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6536\u5230\u7684-props",children:[Object(u.jsx)(c.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6536\u5230\u7684-props","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6536\u5230\u7684 props"]}),Object(u.jsx)("p",{children:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u65F6\uFF0C\u5927\u591A\u6709\u590D\u6742\u5B9A\u5236\u9700\u6C42\uFF0CFormRender \u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684 props\uFF1A"}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"disabled"}),"\uFF1A\u662F\u5426\u7981\u6B62\u8F93\u5165"]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"readOnly"}),"\uFF1A\u662F\u5426\u53EA\u8BFB"]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"value"}),"\uFF1A\u7EC4\u4EF6\u73B0\u5728\u7684\u503C"]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"onChange"}),"\uFF1A\u51FD\u6570\uFF0C\u63A5\u6536 value \u4E3A\u5165\u53C2\uFF0C\u7528\u4E8E\u5C06\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u8FD4\u56DE\u503C\u540C\u6B65\u7ED9 Form"]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"schema"}),"\uFF1A\u7EC4\u4EF6\u5BF9\u5E94\u7684\u5B50 schema"]})]}),Object(u.jsx)("p",{children:"addons \u4E0A\u6302\u7740\u51E0\u4E4E\u6240\u6709\u7684 form \u65B9\u6CD5\uFF1A"}),Object(u.jsx)(F.a,{code:`const {
  setValueByPath, // (path, value) => void
  getSchemaByPath, // (path) => schema
  setSchemaByPath, // (path) => void
  setSchema, // ({path1: schema1, path2: schema2}) => void
  setValues, // (newData) => void
  getValues, // () => formData
  resetFields, // () => void
  setErrorFields, // (errors) => void
  removeErrorField, // () => void
} = addons;`,lang:"js"}),Object(u.jsxs)("p",{children:["\u8BE6\u89C1",Object(u.jsx)(c.Link,{to:"/form-render/",children:"\u5F00\u59CB\u4F7F\u7528"}),"\u7684\u201Cform \u65B9\u6CD5\u201D"]}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"addons.dataPath"}),': \u76EE\u524D\u6570\u636E\u6240\u5728\u7684 path\uFF0C\u4F8B\u5982"a.b[2].c[0].d"\uFF0Cstring \u7C7B\u578B\u3002']}),Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"addons.dataIndex"}),': \u5982\u679C dataPath \u4E0D\u5305\u542B\u6570\u7EC4\uFF0C\u5219\u4E3A [], \u5982\u679C dataPath \u5305\u542B\u6570\u7EC4\uFF0C\u4F8B\u5982"a.b[2].c[0].d"\uFF0C\u5219\u4E3A [2,0]\u3002\u662F\u81EA\u4E0A\u5230\u4E0B\u6240\u6709\u7ECF\u8FC7\u7684\u6570\u7EC4\u7684 index \u6309\u987A\u5E8F\u5B58\u653E\u7684\u4E00\u4E2A\u6570\u7EC4\u7C7B\u578B']}),Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"addons.dependValues"}),": \u5F53\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5BF9\u5E94\u7684 schema \u4F7F\u7528\u5230 dependencies \u5B57\u6BB5\u65F6\uFF0C\u5728\u6B64\u83B7\u5F97 dependencies \u5BF9\u5E94\u7684\u8868\u5355\u9879\u7684\u5B9E\u65F6\u7684\u503C"]})]}),Object(u.jsxs)("h2",{id:"antd-\u7EC4\u4EF6\u6539\u9020\u6210\u81EA\u5B9A\u4E49\u7EC4\u4EF6",children:[Object(u.jsx)(c.AnchorLink,{to:"#antd-\u7EC4\u4EF6\u6539\u9020\u6210\u81EA\u5B9A\u4E49\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"antd \u7EC4\u4EF6\u6539\u9020\u6210\u81EA\u5B9A\u4E49\u7EC4\u4EF6"]}),Object(u.jsx)("p",{children:"\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0Cantd \u7684\u7EC4\u4EF6\u53EF\u4EE5\u62FF\u6765\u5373\u7528\u3002\u4F46\u6709\u65F6\u7EC4\u4EF6\u7684 props \u5E76\u4E0D\u662F\u7EA6\u5B9A\u7684 value/onChange, \u4F8B\u5982 Checkbox \u7684\u60C5\u51B5\uFF0Cvalue \u503C\u5BF9\u5E94\u7684\u662F checked\uFF0C\u6B64\u65F6\u53EA\u9700\u8981\u5C11\u91CF\u6539\u52A8\u5373\u53EF\uFF1A"}),Object(u.jsx)(F.a,{code:`import { Checkbox } from 'antd';

const MyCheckBox = ({ value, ...rest }) => {
  return <Checkbox checked={value} {...rest} />;
};`,lang:"js"}),Object(u.jsxs)("h2",{id:"\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6",children:[Object(u.jsx)(c.AnchorLink,{to:"#\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6"]}),Object(u.jsxs)("p",{children:["\u53EA\u8BFB\u6A21\u5F0F\u4E0B\uFF0C\u9ED8\u8BA4\u4F1A\u6E32\u67D3\u5185\u7F6E\u7684 html \u7EC4\u4EF6\uFF0C\u4F46\u6709\u65F6 html \u7EC4\u4EF6\u5E76\u4E0D\u80FD\u6EE1\u8DB3\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5728\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u9700\u8981\u7684\u5C55\u793A\uFF0C\u6B64\u65F6\u53EF\u4F7F\u7528",Object(u.jsx)("code",{children:"readOnlyWidget"}),"\u5B57\u6BB5\u6765\u6307\u5B9A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7684\u5C55\u793A\u3002"]}),Object(u.jsx)(F.a,{code:`{
  "type": "object",
  "properties": {
    "string": {
      "title": "\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",
      "type": "string",
      "widget": "site",
      "readOnlyWidget": "siteText"
    }
  }
}`,lang:"json"}),Object(u.jsx)("p",{children:"\u5982\u679C\u4F60\u6253\u7B97\u5728\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u91CC\u901A\u8FC7 readOnly \u53C2\u6570\u5224\u65AD\u6761\u4EF6\u5C55\u793A\uFF0C\u65E2\u662F\u8BF4\uFF0Csite \u7EC4\u4EF6\u5DF2\u7ECF\u5199\u4E86\u53EA\u8BFB\u548C\u975E\u53EA\u8BFB\u60C5\u51B5\u4E0B\u7684\u6E32\u67D3"}),Object(u.jsx)(F.a,{code:`const SiteInput = ({ readOnly, value, ...rest }) => {
  if (readOnly) return <div>{\`https://\${value}.com\`}</div>;
  return (
    <Input addonBefore="https://" addonAfter=".com" value={value} {...rest} />
  );
};`,lang:"js"}),Object(u.jsxs)("p",{children:["\u6B64\u65F6\u53EF\u4EE5\u6307\u5B9A ",Object(u.jsx)("code",{children:"readOnlyWidget"})," \u548C ",Object(u.jsx)("code",{children:"widget"})," \u4E3A\u540C\u4E00\u4E2A\u7EC4\u4EF6\uFF1A"]}),Object(u.jsx)(F.a,{code:`{
  "type": "object",
  "properties": {
    "string": {
      "title": "\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",
      "type": "string",
      "widget": "site",
      "readOnlyWidget": "site"
    }
  }
}`,lang:"json"}),Object(u.jsxs)("h2",{id:"\u6700\u4F73\u5B9E\u8DF5",children:[Object(u.jsx)(c.AnchorLink,{to:"#\u6700\u4F73\u5B9E\u8DF5","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"\u6700\u4F73\u5B9E\u8DF5"]}),Object(u.jsx)("p",{children:"\u540C\u4E00\u4E2A\u9879\u76EE\u4E0B\u4E0D\u540C\u7684 form \u91CC\uFF0C\u4F7F\u7528\u5230\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u53EF\u80FD\u5927\u81F4\u76F8\u540C\uFF0C\u4F46\u4E5F\u6709\u53EF\u80FD\u4E92\u76F8\u4E0D\u540C\uFF0C\u7B14\u8005\u5EFA\u8BAE\u662F\u4E2D\u5FC3\u5316\u4E00\u4E2A Form \u7EC4\u4EF6\uFF0C\u5E76\u4E00\u6B21\u6027\u5C06\u6240\u6709\u9700\u8981\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6CE8\u5165\u5176\u4E2D\u3002\u5728\u9879\u76EE\u7684\u5404\u5904\u5F15\u5165\u5BF9\u5E94\u7EC4\u4EF6\uFF1A"}),Object(u.jsx)(F.a,{code:`//  /Component/FormRender.js
import Form from 'form-render';
import Cascade from './Cascade';
import Percentage from './Percentage';
import MyCheckBox from './MyCheckBox';
import ExcelUploader from './ExcelUploader';

const FormRender = props => {
  return (
    <Form
      widgets={{
        percentage: Percentage,
        cascade: Cascade,
        myCheck: MyCheckBox,
        excelUpload: ExcelUploader,
      }}
      {...props}
    />
  );
};`,lang:"js"}),Object(u.jsx)("p",{children:"\u7136\u540E\u5728\u6BCF\u4E2A form \u9875\u9762\u7EDF\u4E00\u5F15\u5165\u4F7F\u7528"}),Object(u.jsx)(F.a,{code:`import { useForm } from 'form-render';
import FormRender from './Component/FormRender';
const Demo1 = props => {
  const form = useForm();
  return <FormRender form={form} onFinish={() => {}} />;
};`,lang:"js"}),Object(u.jsxs)("h2",{id:"\u5185\u7F6E\u7EC4\u4EF6",children:[Object(u.jsx)(c.AnchorLink,{to:"#\u5185\u7F6E\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"\u5185\u7F6E\u7EC4\u4EF6"]}),Object(u.jsxs)("p",{children:["\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u524D\uFF0C\u4E5F\u8BB8\u5DF2\u7ECF\u6709\u5185\u7F6E\u7EC4\u4EF6\u652F\u6301\u3002\u5177\u4F53\u89C1 ",Object(u.jsx)(c.Link,{to:"../api/inner-widget",children:"schema \u4E0E\u5185\u7F6E\u7EC4\u4EF6"})]})]})]})})});A.default=C=>{var h=m.a.useContext(c.context),B=h.demos;return m.a.useEffect(()=>{var _;C!=null&&(_=C.location)!==null&&_!==void 0&&_.hash&&c.AnchorLink.scrollToAnchor(decodeURIComponent(C.location.hash.slice(1)))},[]),Object(u.jsx)(l,{demos:B})}}}]);
