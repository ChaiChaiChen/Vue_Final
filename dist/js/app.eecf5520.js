(function(){"use strict";var e={4742:function(e,n,t){var o=t(9242),r=t(1020),i=t(4695),a=t(1076),c=t(6423),u=t(6216),s=t(5708),l=t(3990),f=t(579),d=t(2389),p=t(3396);function h(e,n){const t=(0,p.up)("router-view");return(0,p.wg)(),(0,p.j4)(t)}var m=t(89);const b={},g=(0,m.Z)(b,[["render",h]]);var v=g,y=t(2483);const w=[{path:"/",component:()=>Promise.all([t.e(746),t.e(483),t.e(157)]).then(t.bind(t,5157)),children:[{path:"",name:"Home",component:()=>t.e(300).then(t.bind(t,300))},{path:"products",component:()=>t.e(725).then(t.bind(t,4725))},{path:"news",component:()=>t.e(854).then(t.bind(t,5854))},{path:"new/:newId",component:()=>t.e(288).then(t.bind(t,8288))},{path:"product/:productId",component:()=>t.e(186).then(t.bind(t,8186))},{path:"checkout",component:()=>t.e(449).then(t.bind(t,1449))},{path:"pay/:orderId",component:()=>t.e(858).then(t.bind(t,1858))}]},{path:"/dashboard",component:()=>Promise.all([t.e(746),t.e(483),t.e(548)]).then(t.bind(t,2548)),children:[{path:"chart",component:()=>t.e(389).then(t.bind(t,6389))},{path:"products",component:()=>Promise.all([t.e(746),t.e(919),t.e(489)]).then(t.bind(t,489))},{path:"orders",component:()=>Promise.all([t.e(746),t.e(919),t.e(630)]).then(t.bind(t,630))},{path:"coupons",component:()=>Promise.all([t.e(746),t.e(919),t.e(798)]).then(t.bind(t,3798))},{path:"articles",component:()=>Promise.all([t.e(746),t.e(919),t.e(47)]).then(t.bind(t,4047))}]},{path:"/login",name:"login",component:()=>t.e(31).then(t.bind(t,9031))},{path:"/:pathMatch(.*)*",redirect:{name:"Home"}}],O=(0,y.p7)({history:(0,y.r5)(),routes:w});var j=O;function P(e){const n=parseInt(e,10);return`${n.toFixed(0).replace(/./g,((e,n,t)=>n&&"."!==e&&(t.length-n)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function k(e){const n=new Date(1e3*e);return n.toLocaleDateString()}var C=t(5820);function E(e,n="更新"){if(e.data.success)C.Z.emit("push-message",{style:"success",title:`${n}成功`});else{const t="string"===typeof e.data.message?[e.data.message]:e.data.message;C.Z.emit("push-message",{style:"danger",title:`${n}失敗`,content:t.join("、")})}}function S(){window.scrollTo({top:0,behavior:"smooth"})}function T(){const e=window.pageYOffset;this.elTop=e}t(2166);(0,s.aH)("required",l.C1),(0,s.aH)("email",l.Do),(0,s.aH)("min",l.VV),(0,s.jQ)({generateMessage:(0,f.NC)({zh_TW:d}),validateOnInput:!0}),(0,f.i_)("zh_TW");const x=(0,o.ri)(v);x.use(j),x.config.globalProperties.$filters={currency:P,date:k};const _=(0,r.WB)();x.config.globalProperties.$scroll={scrollTop:S,scrolling:T},x.config.globalProperties.$httpMessageState=E,x.component("Form",s.l0),x.component("Field",s.gN),x.component("ErrorMessage",s.Bc),x.component("Loading",u.Z),x.use(c.Z,a.Z),x.use(i.Z),x.use(_),x.mount("#app")},5820:function(e,n,t){var o=t(1373);const r=(0,o.Z)();n.Z=r}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var c=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(l--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{31:"a62847c5",47:"7588f5f5",157:"5d727660",186:"0a592268",288:"402fb698",300:"0a7c81ce",389:"f78400b5",449:"a930620a",483:"c753841d",489:"ab0212b9",548:"af647b1f",630:"bc5a7ed7",725:"076595ea",746:"94cf5d27",798:"07161b19",854:"63ad6825",858:"0b14fbef",919:"c6248539"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{31:"53f87d28",548:"57b41ef2"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue-final:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var c,u;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==n+i){c=f;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+i),c.src=o),e[o]=[r];var d=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/Vue_Final/dist/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)o();else{var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=c,i.parentNode&&i.parentNode.removeChild(i),r(u)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===n))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===n)return r}},o=function(o){return new Promise((function(r,i){var a=t.miniCssF(o),c=t.p+a;if(n(a,c))return r();e(o,c,null,r,i)}))},r={143:0};t.f.miniCss=function(e,n){var t={31:1,548:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),c=new Error,u=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}};t.l(a,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],c=o[1],u=o[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(u)var l=u(t)}for(n&&n(o);s<a.length;s++)i=a[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},o=self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(4742)}));o=t.O(o)})();
//# sourceMappingURL=app.eecf5520.js.map