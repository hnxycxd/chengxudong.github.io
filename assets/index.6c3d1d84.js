var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,r=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l;import{D as a,R as o,M as i,S as s,b as c}from"./vendor.1d30a67e.js";const p={isIndex:["/"],isList:["/list"],isDemo:["/demo"],isChart:["/chart"]},u=(()=>{const e={};let t="";return function(){const n=window.location.pathname;if(t===n&&n)return e;t=n;for(const t in p)e[t]=p[t].includes(n);return e}})(),{SubMenu:m}=i,d=e=>{const{subRoute:p,history:d,location:{pathname:h}}=e,y=e=>o.createElement(m,{key:e.key,title:e.name},e.children.map((e=>{var t;return(null==(t=e.children)?void 0:t.length)?y(e):o.createElement(i.Item,{key:e.path},e.name)}))),f=e=>e.map((e=>{var a;return(null==(a=e.children)?void 0:a.length)?f(e.children):o.createElement(c,{key:e.key,path:e.path,exact:e.exact,render:a=>o.createElement(e.component,((e,a)=>{for(var o in a||(a={}))n.call(a,o)&&r(e,o,a[o]);if(t)for(var o of t(a))l.call(a,o)&&r(e,o,a[o]);return e})({},a))})}));return a.exports.useEffect((()=>{"/list"===h&&d.push("/list/side1/op1")}),[h]),console.log("getPageName",u()),o.createElement("div",{style:{height:"calc(100% - 64px)",display:"flex",justifyContent:"space-between"}},o.createElement("div",{className:"sideMenu",style:{height:"100%"}},o.createElement(i,{mode:"inline",onClick:e=>{d.push(e.key)},defaultOpenKeys:["side1"],selectedKeys:[h],style:{width:256,height:"100%"}},null==p?void 0:p.map((e=>{var t;return(null==(t=e.children)?void 0:t.length)?y(e):o.createElement(i.Item,{key:e.path},e.name)})))),o.createElement("div",{style:{width:"calc(100% - 256px - 10px)",backgroundColor:"white"}},o.createElement(a.exports.Suspense,{fallback:null},o.createElement(s,null,f(p)))))};export{d as default};
