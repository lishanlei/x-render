(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{RZMt:function(I,O,a){},Zxc8:function(I,O,a){"use strict";a.r(O);var c=a("q1tI"),u=a.n(c),_=a("k3GJ"),s=a("MZF8"),l=a("dEAq"),h=a.n(l),e=a("H1Ra"),R=a("RZMt"),S=a.n(R);function d(n,o){return y(n)||D(n,o)||f(n,o)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(n,o){if(!!n){if(typeof n=="string")return j(n,o);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(n,o)}}function j(n,o){(o==null||o>n.length)&&(o=n.length);for(var r=0,E=new Array(o);r<o;r++)E[r]=n[r];return E}function D(n,o){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var E=[],b=!0,x=!1,F,A;try{for(r=r.call(n);!(b=(F=r.next()).done)&&(E.push(F.value),!(o&&E.length===o));b=!0);}catch(t){x=!0,A=t}finally{try{!b&&r.return!=null&&r.return()}finally{if(x)throw A}}return E}}function y(n){if(Array.isArray(n))return n}function v(n,o){var r,E=(r=n.match(/\.(\w+)$/))===null||r===void 0?void 0:r[1];return E||(E=o.tsx?"tsx":"jsx"),E}var Z=function(o){var r,E,b,x=Object(c.useRef)(),F=Object(c.useContext)(l.context),A=F.locale,t=Object(l.useLocaleProps)(A,o),J=Object(l.useDemoUrl)(t.identifier),g=t.demoUrl||J,H=(s.a===null||s.a===void 0?void 0:s.a.location.hash)==="#".concat(t.identifier),G=Object.keys(t.sources).length===1,L=Object(l.useCodeSandbox)(((r=t.hideActions)===null||r===void 0?void 0:r.includes("CSB"))?null:t),B=Object(l.useRiddle)(((E=t.hideActions)===null||E===void 0?void 0:E.includes("RIDDLE"))?null:t),X=Object(l.useMotions)(t.motions||[],x.current),T=d(X,2),z=T[0],Q=T[1],V=Object(l.useCopy)(),k=d(V,2),Y=k[0],q=k[1],ee=Object(c.useState)(function(){return t.sources._?"_":Object.keys(t.sources)[0]}),N=d(ee,2),C=N[0],te=N[1],ue=Object(c.useState)(v(C,t.sources[C])),w=d(ue,2),P=w[0],ne=w[1],re=Object(c.useState)(Boolean(t.defaultShowCode)),U=d(re,2),p=U[0],ae=U[1],ce=Object(c.useState)(Math.random()),K=d(ce,2),oe=K[0],W=K[1],M=t.sources[C][P]||t.sources[C].content,ie=Object(l.useTSPlaygroundUrl)(A,M),se=Object(c.useRef)(),le=Object(l.usePrefersColor)(),de=d(le,1),me=de[0],$=t.actionBarRender,Ee=$===void 0?function(i){return i}:$;Object(c.useEffect)(function(){W(Math.random())},[me]);function je(i){te(i),ne(v(i,t.sources[i]))}return u.a.createElement("div",{style:t.style,className:[t.className,"__dumi-default-previewer",H?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:t.identifier,"data-debug":t.debug||void 0,"data-iframe":t.iframe||void 0},t.iframe&&u.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),u.a.createElement("div",{ref:x,className:"__dumi-default-previewer-demo",style:{transform:t.transform?"translate(0, 0)":void 0,padding:t.compact||t.iframe&&t.compact!==!1?"0":void 0,background:t.background}},t.iframe?u.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(t.iframe).replace(/(\d)$/,"$1px")},key:oe,src:g,ref:se}):t.children),u.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":t.title},t.title&&u.a.createElement(l.AnchorLink,{to:"#".concat(t.identifier)},t.title),t.description&&u.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.description}})),u.a.createElement("div",{className:"__dumi-default-previewer-actions"},Ee(u.a.createElement(u.a.Fragment,null,L&&u.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:L}),B&&u.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:B}),t.motions&&u.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:Q,onClick:function(){return z()}}),t.iframe&&u.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return W(Math.random())}}),!((b=t.hideActions)===null||b===void 0?void 0:b.includes("EXTERNAL"))&&u.a.createElement(l.Link,{target:"_blank",to:g},u.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),u.a.createElement("span",null),u.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":q,onClick:function(){return Y(M)}}),P==="tsx"&&p&&u.a.createElement(l.Link,{target:"_blank",to:ie},u.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),u.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(p?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return ae(!p)}})))),p&&u.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&u.a.createElement(_.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:C,onChange:je},Object.keys(t.sources).map(function(i){return u.a.createElement(_.TabPane,{tab:i==="_"?"index.".concat(v(i,t.sources[i])):i,key:i})})),u.a.createElement("div",{className:"__dumi-default-previewer-source"},u.a.createElement(e.a,{code:M,lang:P,showCopy:!1}))))};O.default=Z},"oj0/":function(I,O,a){"use strict";a.r(O);var c=a("k1fw"),u=a("q1tI"),_=a.n(u),s=a("dEAq"),l=a.n(s),h=a("Zxc8"),e=a("nKUr"),R=a.n(e),S=_.a.memo(d=>{var m=d.demos,f=m["column-demo"].component,j=m["column-demo-1"].component,D=m["column-demo-2"].component,y=m["column-demo-3"].component,v=m["column-demo-4"].component;return Object(e.jsx)(e.Fragment,{children:Object(e.jsxs)(_.a.Fragment,{children:[Object(e.jsxs)("div",{className:"markdown",children:[Object(e.jsxs)("h2",{id:"\u57FA\u672C\u7528\u6CD5",children:[Object(e.jsx)(s.AnchorLink,{to:"#\u57FA\u672C\u7528\u6CD5","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u672C\u7528\u6CD5"]}),Object(e.jsxs)("h3",{id:"n-\u6307\u6807-\u96F6\u7EF4\u5EA6",children:[Object(e.jsx)(s.AnchorLink,{to:"#n-\u6307\u6807-\u96F6\u7EF4\u5EA6","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"N \u6307\u6807 \u96F6\u7EF4\u5EA6"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u56FE\u8868\u6E32\u67D3\u4E0A\uFF0C\u6307\u6807\u4F5C\u4E3A ",Object(e.jsx)("code",{children:"x \u8F74"}),"\uFF0C\u6307\u6807\u503C\u4F5C\u4E3A ",Object(e.jsx)("code",{children:"y \u8F74"}),"\u3002"]})})]}),Object(e.jsx)(h.default,Object(c.a)(Object(c.a)({},m["column-demo"].previewerProps),{},{children:Object(e.jsx)(f,{})})),Object(e.jsxs)("div",{className:"markdown",children:[Object(e.jsxs)("h3",{id:"\u5355\u6307\u6807-\u5355\u7EF4\u5EA6",children:[Object(e.jsx)(s.AnchorLink,{to:"#\u5355\u6307\u6807-\u5355\u7EF4\u5EA6","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"\u5355\u6307\u6807 \u5355\u7EF4\u5EA6"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u56FE\u8868\u6E32\u67D3\u4E0A\uFF0C\u7EF4\u5EA6\u4F5C\u4E3A ",Object(e.jsx)("code",{children:"x \u8F74"}),"\uFF0C\u6307\u6807\u4F5C\u4E3A ",Object(e.jsx)("code",{children:"y \u8F74"}),"\u3002"]})})]}),Object(e.jsx)(h.default,Object(c.a)(Object(c.a)({},m["column-demo-1"].previewerProps),{},{children:Object(e.jsx)(j,{})})),Object(e.jsxs)("div",{className:"markdown",children:[Object(e.jsxs)("h3",{id:"\u5355\u6307\u6807-\u53CC\u7EF4\u5EA6",children:[Object(e.jsx)(s.AnchorLink,{to:"#\u5355\u6307\u6807-\u53CC\u7EF4\u5EA6","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"\u5355\u6307\u6807 \u53CC\u7EF4\u5EA6"]}),Object(e.jsxs)("ul",{children:[Object(e.jsxs)("li",{children:["\u56FE\u8868\u6E32\u67D3\u4E0A\uFF0C\u7B2C\u4E00\u7EF4\u5EA6\u4F5C\u4E3A ",Object(e.jsx)("code",{children:"x \u8F74"}),"\uFF0C\u6307\u6807\u4F5C\u4E3A ",Object(e.jsx)("code",{children:"y \u8F74"}),"\uFF0C\u7B2C\u4E8C\u7EF4\u5EA6\u4F5C\u4E3A ",Object(e.jsx)("code",{children:"\u7CFB\u5217"}),"\u3002"]}),Object(e.jsxs)("li",{children:["\u6570\u636E\u4E0A\uFF0C\u6570\u636E\u6761\u6570\u662F ",Object(e.jsx)("code",{children:"\u300C\u5355\u6307\u6807 \u5355\u7EF4\u5EA6\u300D"})," \u7684\u4E24\u500D\u3002"]})]})]}),Object(e.jsx)(h.default,Object(c.a)(Object(c.a)({},m["column-demo-2"].previewerProps),{},{children:Object(e.jsx)(D,{})})),Object(e.jsxs)("div",{className:"markdown",children:[Object(e.jsxs)("h3",{id:"\u591A\u6307\u6807-\u5355\u7EF4\u5EA6",children:[Object(e.jsx)(s.AnchorLink,{to:"#\u591A\u6307\u6807-\u5355\u7EF4\u5EA6","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"\u591A\u6307\u6807 \u5355\u7EF4\u5EA6"]}),Object(e.jsx)("ul",{children:Object(e.jsxs)("li",{children:["\u56FE\u8868\u6E32\u67D3\u4E0A\uFF0C\u7EF4\u5EA6\u4F5C\u4E3A ",Object(e.jsx)("code",{children:"x \u8F74"}),"\uFF0C\u6307\u6807\u5206 ",Object(e.jsx)("code",{children:"\u7CFB\u5217"})," \u5C55\u793A\u3002"]})})]}),Object(e.jsx)(h.default,Object(c.a)(Object(c.a)({},m["column-demo-3"].previewerProps),{},{children:Object(e.jsx)(y,{})})),Object(e.jsxs)("div",{className:"markdown",children:[Object(e.jsxs)("h2",{id:"\u9AD8\u7EA7\u7528\u6CD5",children:[Object(e.jsx)(s.AnchorLink,{to:"#\u9AD8\u7EA7\u7528\u6CD5","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"\u9AD8\u7EA7\u7528\u6CD5"]}),Object(e.jsxs)("h3",{id:"\u56FE\u5F62\u4E0A\u663E\u793A\u6570\u5B57\u7684\u6761\u5F62\u56FE",children:[Object(e.jsx)(s.AnchorLink,{to:"#\u56FE\u5F62\u4E0A\u663E\u793A\u6570\u5B57\u7684\u6761\u5F62\u56FE","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"\u56FE\u5F62\u4E0A\u663E\u793A\u6570\u5B57\u7684\u6761\u5F62\u56FE"]})]}),Object(e.jsx)(h.default,Object(c.a)(Object(c.a)({},m["column-demo-4"].previewerProps),{},{children:Object(e.jsx)(v,{})}))]})})});O.default=d=>{var m=_.a.useContext(s.context),f=m.demos;return _.a.useEffect(()=>{var j;d!=null&&(j=d.location)!==null&&j!==void 0&&j.hash&&s.AnchorLink.scrollToAnchor(decodeURIComponent(d.location.hash.slice(1)))},[]),Object(e.jsx)(S,{demos:f})}}}]);
