import{S as at,i as rt,n as ot,s as st,e as q,c as it,a as z,g as de,t as B,b as pe,d as F,f as G,h as lt,o as Oe,j as ct,k as ft,l as ut,m as ve,p as V,q as dt,r as pt,u as ht,v as W,w as Y,x as $e,y as X,z as Z,A as ce}from"./chunks/index-be8ea2fc.js";import{S as tt,I as C,g as ze,f as He,a as Ee,b as fe,s as K,i as We,c as ue,P as Ye,d as mt,e as _t,h as gt}from"./chunks/singletons-6176161c.js";function yt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function wt(a){return a.split("%25").map(decodeURI).join("%25")}function bt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const vt=["href","pathname","search","searchParams","toString","toJSON"];function Et(a,e){const n=new URL(a);for(const i of vt){let o=n[i];Object.defineProperty(n,i,{get(){return e(),o},enumerable:!0,configurable:!0})}return kt(n),n}function kt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function St(a){return a.replace(/\/$/,"")+Rt}function Lt(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&te.delete(Ne(a)),he(a,e));const te=new Map;function Ot(a,e){const n=Ne(a,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:o,...u}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&te.set(n,{body:o,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,u))}return he(a,e)}function It(a,e,n){if(te.size>0){const i=Ne(a,n),o=te.get(i);if(o){if(performance.now()<o.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(o.body,o.init);te.delete(i)}}return he(e,n)}function Ne(a,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${Lt(e.body)}"]`),i}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Nt(a).map(i=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(o)return e.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((_,p)=>{if(p%2){if(_.startsWith("x+"))return ke(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return ke(String.fromCharCode(..._.slice(2).split("-").map(P=>parseInt(P,16))));const g=At.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,w,S,j,T]=g;return e.push({name:j,matcher:T,optional:!!w,rest:!!S,chained:S?p===1&&t[0]==="":!1}),S?"(.*?)":w?"([^/]*)?":"([^/]+?)"}return ke(_)}).join("")}).join("")}/?$`),params:e}}function $t(a){return!/^\([^)]+\)$/.test(a)}function Nt(a){return a.slice(1).split("/").filter($t)}function Ut(a,e,n){const i={},o=a.slice(1);let u="";for(let t=0;t<e.length;t+=1){const f=e[t];let _=o[t];if(f.chained&&f.rest&&u&&(_=_?u+"/"+_:u),u="",_===void 0)f.rest&&(i[f.name]="");else{if(f.matcher&&!n[f.matcher](_)){if(f.optional&&f.chained){let p=o.indexOf(void 0,t);if(p===-1){const g=e[t+1];if((g==null?void 0:g.rest)&&g.chained)u=_;else return}for(;p>=t;)o[p]=o[p-1],p-=1;continue}return}i[f.name]=_}}if(!u)return i}function ke(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt(a,e,n,i){const o=new Set(e);return Object.entries(n).map(([f,[_,p,g]])=>{const{pattern:w,params:S}=Pt(f),j={id:f,exec:T=>{const P=w.exec(T);if(P)return Ut(P,S,i)},errors:[1,...g||[]].map(T=>a[T]),layouts:[0,...p||[]].map(t),leaf:u(_)};return j.errors.length=j.layouts.length=Math.max(j.errors.length,j.layouts.length),j});function u(f){const _=f<0;return _&&(f=~f),[_,a[f]]}function t(f){return f===void 0?f:[o.has(f),a[f]]}}function Tt(a){let e,n,i;var o=a[0][0];function u(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=W(o,u(a))),{c(){e&&Y(e.$$.fragment),n=q()},l(t){e&&$e(e.$$.fragment,t),n=q()},m(t,f){e&&X(e,t,f),z(t,n,f),i=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&2&&(_.form=t[1]),o!==(o=t[0][0])){if(e){de();const p=e;B(p.$$.fragment,1,0,()=>{Z(p,1)}),pe()}o?(e=W(o,u(t)),Y(e.$$.fragment),F(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){i||(e&&F(e.$$.fragment,t),i=!0)},o(t){e&&B(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&Z(e,t)}}}function Dt(a){let e,n,i;var o=a[0][0];function u(t){return{props:{data:t[2],$$slots:{default:[Vt]},$$scope:{ctx:t}}}}return o&&(e=W(o,u(a))),{c(){e&&Y(e.$$.fragment),n=q()},l(t){e&&$e(e.$$.fragment,t),n=q()},m(t,f){e&&X(e,t,f),z(t,n,f),i=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&523&&(_.$$scope={dirty:f,ctx:t}),o!==(o=t[0][0])){if(e){de();const p=e;B(p.$$.fragment,1,0,()=>{Z(p,1)}),pe()}o?(e=W(o,u(t)),Y(e.$$.fragment),F(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){i||(e&&F(e.$$.fragment,t),i=!0)},o(t){e&&B(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&Z(e,t)}}}function Vt(a){let e,n,i;var o=a[0][1];function u(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=W(o,u(a))),{c(){e&&Y(e.$$.fragment),n=q()},l(t){e&&$e(e.$$.fragment,t),n=q()},m(t,f){e&&X(e,t,f),z(t,n,f),i=!0},p(t,f){const _={};if(f&8&&(_.data=t[3]),f&2&&(_.form=t[1]),o!==(o=t[0][1])){if(e){de();const p=e;B(p.$$.fragment,1,0,()=>{Z(p,1)}),pe()}o?(e=W(o,u(t)),Y(e.$$.fragment),F(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){i||(e&&F(e.$$.fragment,t),i=!0)},o(t){e&&B(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&Z(e,t)}}}function Xe(a){let e,n=a[5]&&Ze(a);return{c(){e=ct("div"),n&&n.c(),this.h()},l(i){e=ft(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=ut(e);n&&n.l(o),o.forEach(G),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),V(e,"position","absolute"),V(e,"left","0"),V(e,"top","0"),V(e,"clip","rect(0 0 0 0)"),V(e,"clip-path","inset(50%)"),V(e,"overflow","hidden"),V(e,"white-space","nowrap"),V(e,"width","1px"),V(e,"height","1px")},m(i,o){z(i,e,o),n&&n.m(e,null)},p(i,o){i[5]?n?n.p(i,o):(n=Ze(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&G(e),n&&n.d()}}}function Ze(a){let e;return{c(){e=dt(a[6])},l(n){e=pt(n,a[6])},m(n,i){z(n,e,i)},p(n,i){i&64&&ht(e,n[6])},d(n){n&&G(e)}}}function Ct(a){let e,n,i,o,u;const t=[Dt,Tt],f=[];function _(g,w){return g[0][1]?0:1}e=_(a),n=f[e]=t[e](a);let p=a[4]&&Xe(a);return{c(){n.c(),i=st(),p&&p.c(),o=q()},l(g){n.l(g),i=it(g),p&&p.l(g),o=q()},m(g,w){f[e].m(g,w),z(g,i,w),p&&p.m(g,w),z(g,o,w),u=!0},p(g,[w]){let S=e;e=_(g),e===S?f[e].p(g,w):(de(),B(f[S],1,1,()=>{f[S]=null}),pe(),n=f[e],n?n.p(g,w):(n=f[e]=t[e](g),n.c()),F(n,1),n.m(i.parentNode,i)),g[4]?p?p.p(g,w):(p=Xe(g),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null)},i(g){u||(F(n),u=!0)},o(g){B(n),u=!1},d(g){f[e].d(g),g&&G(i),p&&p.d(g),g&&G(o)}}}function qt(a,e,n){let{stores:i}=e,{page:o}=e,{components:u}=e,{form:t}=e,{data_0:f=null}=e,{data_1:_=null}=e;lt(i.page.notify);let p=!1,g=!1,w=null;return Oe(()=>{const S=i.page.subscribe(()=>{p&&(n(5,g=!0),n(6,w=document.title||"untitled page"))});return n(4,p=!0),S}),a.$$set=S=>{"stores"in S&&n(7,i=S.stores),"page"in S&&n(8,o=S.page),"components"in S&&n(0,u=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,f=S.data_0),"data_1"in S&&n(3,_=S.data_1)},a.$$.update=()=>{a.$$.dirty&384&&i.page.set(o)},[u,t,f,_,p,g,w,i,o]}class Bt extends at{constructor(e){super(),rt(this,e,qt,Ct,ot,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft="modulepreload",Gt=function(a,e){return new URL(a,e).href},Qe={},M=function(e,n,i){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(u=>{if(u=Gt(u,i),u in Qe)return;Qe[u]=!0;const t=u.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!i)for(let g=o.length-1;g>=0;g--){const w=o[g];if(w.href===u&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":Ft,t||(p.as="script",p.crossOrigin=""),p.href=u,document.head.appendChild(p),t)return new Promise((g,w)=>{p.addEventListener("load",g),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>e())};function Jt(a){return/^\d+$/.test(a)}const Kt={integer:Jt},me=[()=>M(()=>import("./chunks/0-2149c851.js"),["./chunks/0-2149c851.js","./components/pages/_layout.svelte-9a3342ae.js","./chunks/index-be8ea2fc.js","./chunks/stores-6a6870f3.js","./chunks/singletons-6176161c.js","./chunks/store-fb60485f.js","./chunks/error-handler-df8dffd6.js","./assets/store-ad073191.css","./chunks/fonts-e5a631ed.js","./assets/_layout-458bc673.css"],import.meta.url),()=>M(()=>import("./chunks/1-36f4ec71.js"),["./chunks/1-36f4ec71.js","./components/error.svelte-5086bf37.js","./chunks/index-be8ea2fc.js","./chunks/stores-6a6870f3.js","./chunks/singletons-6176161c.js"],import.meta.url),()=>M(()=>import("./chunks/2-b84d59c0.js"),["./chunks/2-b84d59c0.js","./components/pages/_page.svelte-a2e11aab.js","./chunks/index-be8ea2fc.js","./chunks/format-page-title-2ca75b98.js","./chunks/singletons-6176161c.js","./chunks/store-fb60485f.js","./chunks/error-handler-df8dffd6.js","./assets/store-ad073191.css"],import.meta.url),()=>M(()=>import("./chunks/3-ad0bef55.js"),["./chunks/3-ad0bef55.js","./components/pages/auth/_page.svelte-90066a89.js","./chunks/index-be8ea2fc.js","./chunks/fa-33dddbd3.js","./assets/fa-32503cb2.css","./chunks/error-handler-df8dffd6.js"],import.meta.url),()=>M(()=>import("./chunks/4-761fe457.js"),["./chunks/4-761fe457.js","./components/pages/b/_page.svelte-f75ac4b0.js","./chunks/index-be8ea2fc.js","./chunks/store-fb60485f.js","./chunks/error-handler-df8dffd6.js","./assets/store-ad073191.css","./chunks/stores-6a6870f3.js","./chunks/singletons-6176161c.js","./chunks/format-page-title-2ca75b98.js","./chunks/fa-33dddbd3.js","./assets/fa-32503cb2.css","./chunks/fonts-e5a631ed.js","./chunks/index-61bb0c2c.js","./chunks/merged-header-icon-5b1d438d.js","./chunks/theme-option-f9f8f697.js","./assets/_page-b843624e.css"],import.meta.url),()=>M(()=>import("./chunks/5-3648d17b.js"),["./chunks/5-3648d17b.js","./components/pages/manage/_page.svelte-788e593b.js","./chunks/index-be8ea2fc.js","./chunks/format-page-title-2ca75b98.js","./chunks/singletons-6176161c.js","./chunks/fa-33dddbd3.js","./assets/fa-32503cb2.css","./chunks/index-61bb0c2c.js","./chunks/error-handler-df8dffd6.js","./chunks/store-fb60485f.js","./assets/store-ad073191.css","./chunks/merged-header-icon-5b1d438d.js","./chunks/stores-6a6870f3.js"],import.meta.url),()=>M(()=>import("./chunks/6-482dfd9c.js"),["./chunks/6-482dfd9c.js","./components/pages/settings/_page.svelte-2a445305.js","./chunks/index-be8ea2fc.js","./chunks/format-page-title-2ca75b98.js","./chunks/singletons-6176161c.js","./chunks/store-fb60485f.js","./chunks/error-handler-df8dffd6.js","./assets/store-ad073191.css","./chunks/fa-33dddbd3.js","./assets/fa-32503cb2.css","./chunks/merged-header-icon-5b1d438d.js","./chunks/stores-6a6870f3.js","./chunks/fonts-e5a631ed.js","./chunks/theme-option-f9f8f697.js"],import.meta.url)],Mt=[0],zt={"/":[2],"/auth":[3],"/b":[4],"/manage":[5],"/settings":[6]},Ht={handleError:({error:a})=>{console.error(a)}};class Ie{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class xe{constructor(e,n){this.status=e,this.location=n}}async function Wt(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([i,o])=>[i,await o])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Yt=-1,Xt=-2,Zt=-3,Qt=-4,xt=-5,en=-6;function tn(a){if(typeof a=="number")return i(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,n=Array(e.length);function i(o,u=!1){if(o===Yt)return;if(o===Zt)return NaN;if(o===Qt)return 1/0;if(o===xt)return-1/0;if(o===en)return-0;if(u)throw new Error("Invalid input");if(o in n)return n[o];const t=e[o];if(!t||typeof t!="object")n[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[o]=new Date(t[1]);break;case"Set":const _=new Set;n[o]=_;for(let w=1;w<t.length;w+=1)_.add(i(t[w]));break;case"Map":const p=new Map;n[o]=p;for(let w=1;w<t.length;w+=2)p.set(i(t[w]),i(t[w+1]));break;case"RegExp":n[o]=new RegExp(t[1],t[2]);break;case"Object":n[o]=Object(t[1]);break;case"BigInt":n[o]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[o]=g;for(let w=1;w<t.length;w+=2)g[t[w]]=i(t[w+1]);break}else{const f=new Array(t.length);n[o]=f;for(let _=0;_<t.length;_+=1){const p=t[_];p!==Xt&&(f[_]=i(p))}}else{const f={};n[o]=f;for(const _ in t){const p=t[_];f[_]=i(p)}}return n[o]}return i(0)}const Re=jt(me,Mt,zt,Kt),Ae=me[0],Pe=me[1];Ae();Pe();let ne={};try{ne=JSON.parse(sessionStorage[tt])}catch{}function Se(a){ne[a]=ue()}function nn({target:a,base:e}){var Je;const n=document.documentElement,i=[];let o=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,_=!1,p=!0,g=!1,w=!1,S=!1,j=!1,T,P=(Je=history.state)==null?void 0:Je[C];P||(P=Date.now(),history.replaceState({...history.state,[C]:P},"",location.href));const _e=ne[P];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let J,Ue,ae;async function je(){ae=ae||Promise.resolve(),await ae,ae=null;const r=new URL(location.href),s=se(r,!0);o=null,await De(s,r,[])}async function ge(r,{noScroll:s=!1,replaceState:c=!1,keepFocus:l=!1,state:h={},invalidateAll:d=!1},m,b){return typeof r=="string"&&(r=new URL(r,ze(document))),ie({url:r,scroll:s?ue():null,keepfocus:l,redirect_chain:m,details:{state:h,replaceState:c},nav_token:b,accepted:()=>{d&&(j=!0)},blocked:()=>{},type:"goto"})}async function Te(r){const s=se(r,!1);if(!s)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return o={id:s.id,promise:qe(s).then(c=>(c.type==="loaded"&&c.state.error&&(o=null),c))},o.promise}async function re(...r){const c=Re.filter(l=>r.some(h=>l.exec(h))).map(l=>Promise.all([...l.layouts,l.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(c)}async function De(r,s,c,l,h={},d){var b,v;Ue=h;let m=r&&await qe(r);if(m||(m=await Ge(s,{id:null},await ee(new Error(`Not found: ${s.pathname}`),{url:s,params:{},route:{id:null}}),404)),s=(r==null?void 0:r.url)||s,Ue!==h)return!1;if(m.type==="redirect")if(c.length>10||c.includes(s.pathname))m=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:s,params:{},route:{id:null}}),url:s,route:{id:null}});else return ge(new URL(m.location,s).href,{},[...c,s.pathname],h),!1;else((v=(b=m.props)==null?void 0:b.page)==null?void 0:v.status)>=400&&await K.updated.check()&&await le(s);if(i.length=0,j=!1,g=!0,l&&l.details){const{details:y}=l,k=y.replaceState?0:1;y.state[C]=P+=k,history[y.replaceState?"replaceState":"pushState"](y.state,"",s)}if(o=null,_?(t=m.state,m.props.page&&(m.props.page.url=s),T.$set(m.props)):Ve(m),l){const{scroll:y,keepfocus:k}=l;if(k||Le(),await ce(),p){const L=s.hash&&document.getElementById(s.hash.slice(1));y?scrollTo(y.x,y.y):L?L.scrollIntoView():scrollTo(0,0)}}else await ce();p=!0,m.props.page&&(J=m.props.page),d&&d(),g=!1}function Ve(r){var l;t=r.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),J=r.props.page,T=new Bt({target:a,props:{...r.props,stores:K},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(h=>h(c)),_=!0}async function Q({url:r,params:s,branch:c,status:l,error:h,route:d,form:m}){const b=c.filter(Boolean);let v="never";for(const O of c)(O==null?void 0:O.slash)!==void 0&&(v=O.slash);r.pathname=yt(r.pathname,v),r.search=r.search;const y={type:"loaded",state:{url:r,params:s,branch:c,error:h,route:d},props:{components:b.map(O=>O.node.component)}};m!==void 0&&(y.props.form=m);let k={},L=!J;for(let O=0;O<b.length;O+=1){const E=b[O];k={...k,...E.data},(L||!t.branch.some(N=>N===E))&&(y.props[`data_${O}`]=k,L=L||Object.keys(E.data??{}).length>0)}return L||(L=Object.keys(J.data).length!==Object.keys(k).length),(!t.url||r.href!==t.url.href||t.error!==h||m!==void 0||L)&&(y.props.page={error:h,params:s,route:{id:(d==null?void 0:d.id)??null},status:l,url:new URL(r),form:m??null,data:L?k:J.data}),y}async function ye({loader:r,parent:s,url:c,params:l,route:h,server_data_node:d}){var y,k,L;let m=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await r();if((y=v.universal)!=null&&y.load){let D=function(...E){for(const N of E){const{href:U}=new URL(N,c);b.dependencies.add(U)}};const O={route:{get id(){return b.route=!0,h.id}},params:new Proxy(l,{get:(E,N)=>(b.params.add(N),E[N])}),data:(d==null?void 0:d.data)??null,url:Et(c,()=>{b.url=!0}),async fetch(E,N){let U;E instanceof Request?(U=E.url,N={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...N}):U=E;const R=new URL(U,c).href;return D(R),_?It(U,R,N):Ot(U,N)},setHeaders:()=>{},depends:D,parent(){return b.parent=!0,s()}};m=await v.universal.load.call(null,O)??null,m=m?await Wt(m):null}return{node:v,loader:r,server:d,universal:(k=v.universal)!=null&&k.load?{type:"data",data:m,uses:b}:null,data:m??(d==null?void 0:d.data)??null,slash:((L=v.universal)==null?void 0:L.trailingSlash)??(d==null?void 0:d.slash)}}function Ce(r,s,c,l,h){if(j)return!0;if(!l)return!1;if(l.parent&&r||l.route&&s||l.url&&c)return!0;for(const d of l.params)if(h[d]!==t.params[d])return!0;for(const d of l.dependencies)if(i.some(m=>m(new URL(d))))return!0;return!1}function we(r,s){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?s??null:null}async function qe({id:r,invalidating:s,url:c,params:l,route:h}){if((o==null?void 0:o.id)===r)return o.promise;const{errors:d,layouts:m,leaf:b}=h,v=[...m,b];d.forEach(R=>R==null?void 0:R().catch(()=>{})),v.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let y=null;const k=t.url?r!==t.url.pathname+t.url.search:!1,L=t.route?r!==t.route.id:!1,D=v.reduce((R,A,$)=>{var x;const I=t.branch[$],H=!!(A!=null&&A[0])&&((I==null?void 0:I.loader)!==A[1]||Ce(R.some(Boolean),L,k,(x=I.server)==null?void 0:x.uses,l));return R.push(H),R},[]);if(D.some(Boolean)){try{y=await et(c,D)}catch(R){return oe({status:500,error:await ee(R,{url:c,params:l,route:{id:h.id}}),url:c,route:h})}if(y.type==="redirect")return y}const O=y==null?void 0:y.nodes;let E=!1;const N=v.map(async(R,A)=>{var x;if(!R)return;const $=t.branch[A],I=O==null?void 0:O[A];if((!I||I.type==="skip")&&R[1]===($==null?void 0:$.loader)&&!Ce(E,L,k,(x=$.universal)==null?void 0:x.uses,l))return $;if(E=!0,(I==null?void 0:I.type)==="error")throw I;return ye({loader:R[1],url:c,params:l,route:h,parent:async()=>{var Me;const Ke={};for(let be=0;be<A;be+=1)Object.assign(Ke,(Me=await N[be])==null?void 0:Me.data);return Ke},server_data_node:we(I===void 0&&R[0]?{type:"skip"}:I??null,$==null?void 0:$.server)})});for(const R of N)R.catch(()=>{});const U=[];for(let R=0;R<v.length;R+=1)if(v[R])try{U.push(await N[R])}catch(A){if(A instanceof xe)return{type:"redirect",location:A.location};let $=500,I;O!=null&&O.includes(A)?($=A.status??$,I=A.error):A instanceof Ie?($=A.status,I=A.body):I=await ee(A,{params:l,url:c,route:{id:h.id}});const H=await Be(R,U,d);return H?await Q({url:c,params:l,branch:U.slice(0,H.idx).concat(H.node),status:$,error:I,route:h}):await Ge(c,{id:h.id},I,$)}else U.push(void 0);return await Q({url:c,params:l,branch:U,status:200,error:null,route:h,form:s?void 0:null})}async function Be(r,s,c){for(;r--;)if(c[r]){let l=r;for(;!s[l];)l-=1;try{return{idx:l+1,node:{node:await c[r](),loader:c[r],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:r,error:s,url:c,route:l}){const h={},d=await Ae();let m=null;if(d.server)try{const y=await et(c,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;m=y.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await le(c)}const b=await ye({loader:Ae,url:c,params:h,route:l,parent:()=>Promise.resolve({}),server_data_node:we(m)}),v={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await Q({url:c,params:h,branch:[b,v],status:r,error:s,route:null})}function se(r,s){if(We(r,e))return;const c=wt(r.pathname.slice(e.length)||"/");for(const l of Re){const h=l.exec(c);if(h)return{id:r.pathname+r.search,invalidating:s,route:l,params:bt(h),url:r}}}function Fe({url:r,type:s,intent:c,delta:l}){var b,v;let h=!1;const d={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((v=c==null?void 0:c.route)==null?void 0:v.id)??null},url:r},willUnload:!c,type:s};l!==void 0&&(d.delta=l);const m={...d,cancel:()=>{h=!0}};return w||u.before_navigate.forEach(y=>y(m)),h?null:d}async function ie({url:r,scroll:s,keepfocus:c,redirect_chain:l,details:h,type:d,delta:m,nav_token:b,accepted:v,blocked:y}){const k=se(r,!1),L=Fe({url:r,type:d,delta:m,intent:k});if(!L){y();return}Se(P),v(),w=!0,_&&K.navigating.set(L),await De(k,r,l,{scroll:s,keepfocus:c,details:h},b,()=>{w=!1,u.after_navigate.forEach(D=>D(L)),K.navigating.set(null)})}async function Ge(r,s,c,l){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await oe({status:l,error:c,url:r,route:s}):await le(r)}function le(r){return location.href=r.href,new Promise(()=>{})}function nt(){let r;n.addEventListener("mousemove",d=>{const m=d.target;clearTimeout(r),r=setTimeout(()=>{l(m,2)},20)});function s(d){l(d.composedPath()[0],1)}n.addEventListener("mousedown",s),n.addEventListener("touchstart",s,{passive:!0});const c=new IntersectionObserver(d=>{for(const m of d)m.isIntersecting&&(re(new URL(m.target.href).pathname),c.unobserve(m.target))},{threshold:0});function l(d,m){const b=He(d,n);if(!b)return;const{url:v,external:y}=Ee(b,e);if(y)return;const k=fe(b);k.reload||(m<=k.preload_data?Te(v):m<=k.preload_code&&re(v.pathname))}function h(){c.disconnect();for(const d of n.querySelectorAll("a")){const{url:m,external:b}=Ee(d,e);if(b)continue;const v=fe(d);v.reload||(v.preload_code===Ye.viewport&&c.observe(d),v.preload_code===Ye.eager&&re(m.pathname))}}u.after_navigate.push(h),h()}return{after_navigate:r=>{Oe(()=>(u.after_navigate.push(r),()=>{const s=u.after_navigate.indexOf(r);u.after_navigate.splice(s,1)}))},before_navigate:r=>{Oe(()=>(u.before_navigate.push(r),()=>{const s=u.before_navigate.indexOf(r);u.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(g||!_)&&(p=!1)},goto:(r,s={})=>ge(r,s,[]),invalidate:r=>{if(typeof r=="function")i.push(r);else{const{href:s}=new URL(r,location.href);i.push(c=>c.href===s)}return je()},invalidateAll:()=>(j=!0,je()),preload_data:async r=>{const s=new URL(r,ze(document));await Te(s)},preload_code:re,apply_action:async r=>{if(r.type==="error"){const s=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const h=await Be(t.branch.length,c,l.errors);if(h){const d=await Q({url:s,params:t.params,branch:c.slice(0,h.idx).concat(h.node),status:r.status??500,error:r.error,route:l});t=d.state,T.$set(d.props),ce().then(Le)}}else if(r.type==="redirect")ge(r.location,{invalidateAll:!0},[]);else{const s={form:r.data,page:{...J,form:r.data,status:r.status}};T.$set(s),r.type==="success"&&ce().then(Le)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var l;let c=!1;if(!w){const h={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};u.before_navigate.forEach(d=>d(h))}c?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(P);try{sessionStorage[tt]=JSON.stringify(ne)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||nt(),n.addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const c=He(s.composedPath()[0],n);if(!c)return;const{url:l,external:h,has:d}=Ee(c,e),m=fe(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||d.download)return;if(h||m.reload){Fe({url:l,type:"link"})||s.preventDefault(),w=!0;return}const[v,y]=l.href.split("#");if(y!==void 0&&v===location.href.split("#")[0]){S=!0,Se(P),t.url=l,K.page.set({...J,url:l}),K.page.notify();return}ie({url:l,scroll:m.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),n.addEventListener("submit",s=>{if(s.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(s.target),l=s.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const d=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(d,e))return;const m=s.target,{noscroll:b,reload:v}=fe(m);if(v)return;s.preventDefault(),s.stopPropagation();const y=new FormData(m),k=l==null?void 0:l.getAttribute("name");k&&y.append(k,(l==null?void 0:l.getAttribute("value"))??""),d.search=new URLSearchParams(y).toString(),ie({url:d,scroll:b?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",s=>{var c;if((c=s.state)!=null&&c[C]){if(s.state[C]===P)return;const l=s.state[C]-P;ie({url:new URL(location.href),scroll:ne[s.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=s.state[C]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{S&&(S=!1,history.replaceState({...history.state,[C]:++P},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&K.navigating.set(null)})},_hydrate:async({status:r=200,error:s,node_ids:c,params:l,route:h,data:d,form:m})=>{f=!0;const b=new URL(location.href);({params:l={},route:h={id:null}}=se(b,!1)||{});let v;try{const y=c.map(async(k,L)=>{const D=d[L];return ye({loader:me[k],url:b,params:l,route:h,parent:async()=>{const O={};for(let E=0;E<L;E+=1)Object.assign(O,(await y[E]).data);return O},server_data_node:we(D)})});v=await Q({url:b,params:l,branch:await Promise.all(y),status:r,error:s,form:m,route:Re.find(({id:k})=>k===h.id)??null})}catch(y){if(y instanceof xe){await le(new URL(y.location,location.href));return}v=await oe({status:y instanceof Ie?y.status:500,error:await ee(y,{url:b,params:l,route:h}),url:b,route:h})}Ve(v)}}}async function et(a,e){var u;const n=new URL(a);n.pathname=St(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await he(n.href),o=await i.json();if(!i.ok)throw new Error(o);return(u=o.nodes)==null||u.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=tn(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function ee(a,e){return a instanceof Ie?a.body:Ht.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function on({env:a,hydrate:e,paths:n,target:i,version:o}){mt(n),gt(o);const u=nn({target:i,base:n.base});_t({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{on as start};
