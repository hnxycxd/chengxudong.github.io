var k=Object.defineProperty;var p=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var d=(a,e,t)=>e in a?k(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,m=(a,e)=>{for(var t in e||(e={}))E.call(e,t)&&d(a,t,e[t]);if(p)for(var t of p(e))x.call(e,t)&&d(a,t,e[t]);return a};import{r as y,R as c,M as i,S as w,b}from"./vendor.9c9523e4.js";const f={isIndex:["/"],isList:["/list"],isDemo:["/demo"],isChart:["/chart"]},M=(()=>{const a={};let e="";return function(){const l=window.location.pathname;if(e===l&&l)return a;e=l;for(const o in f)a[o]=f[o].includes(l);return a}})(),{SubMenu:S}=i,N=a=>{const{subRoute:e,history:t,location:{pathname:l}}=a,o=r=>{t.push(r.key)},h=r=>c.createElement(S,{key:r.key,title:r.name},r.children.map(n=>{var s;return(s=n.children)!=null&&s.length?h(n):c.createElement(i.Item,{key:n.path},n.name)})),u=r=>r.map(n=>{var s;return(s=n.children)!=null&&s.length?u(n.children):c.createElement(b,{key:n.key,path:n.path,exact:n.exact,render:g=>c.createElement(n.component,m({},g))})});return y.exports.useEffect(()=>{l==="/list"&&t.push("/list/side1/op1")},[l]),console.log("getPageName",M()),c.createElement("div",{style:{height:"calc(100% - 64px)",display:"flex",justifyContent:"space-between"}},c.createElement("div",{className:"sideMenu",style:{height:"100%"}},c.createElement(i,{mode:"inline",onClick:o,defaultOpenKeys:["side1"],selectedKeys:[l],style:{width:256,height:"100%"}},e==null?void 0:e.map(r=>{var n;return(n=r.children)!=null&&n.length?h(r):c.createElement(i.Item,{key:r.path},r.name)}))),c.createElement("div",{style:{width:"calc(100% - 256px - 10px)",backgroundColor:"white"}},c.createElement(y.exports.Suspense,{fallback:null},c.createElement(w,null,u(e)))))};export{N as default};