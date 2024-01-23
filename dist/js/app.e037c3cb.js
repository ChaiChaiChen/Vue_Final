(function(){"use strict";var e={1593:function(e,n,t){var r=t(9242),o=t(4695),i=t(1076),a=t(6423),u=t(6216),c=t(5708),s=t(3990),d=t(579),f=t(2389),l=t(3396);function p(e,n){const t=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(t)}var h=t(89);const m={},g=(0,h.Z)(m,[["render",p]]);var b=g,v=t(2483);const y=[{path:"/",component:()=>Promise.all([t.e(746),t.e(679)]).then(t.bind(t,756)),children:[{path:"",component:()=>t.e(682).then(t.bind(t,4682))},{path:"products",component:()=>t.e(277).then(t.bind(t,7277))},{path:"about",component:()=>t.e(945).then(t.bind(t,6945))},{path:"product/:productId",component:()=>t.e(139).then(t.bind(t,9139))},{path:"checkout",component:()=>t.e(544).then(t.bind(t,544))},{path:"pay/:orderId",component:()=>t.e(550).then(t.bind(t,5550))}]},{path:"/dashboard",component:()=>Promise.all([t.e(746),t.e(815)]).then(t.bind(t,1815)),children:[{path:"products",component:()=>Promise.all([t.e(746),t.e(919),t.e(132)]).then(t.bind(t,7132))},{path:"orders",component:()=>t.e(942).then(t.bind(t,6942))},{path:"coupons",component:()=>Promise.all([t.e(746),t.e(919),t.e(255)]).then(t.bind(t,8255))}]},{path:"/login",name:"login",component:()=>t.e(715).then(t.bind(t,4391))},{path:"/:pathMatch(.*)*",component:()=>t.e(453).then(t.bind(t,1453))}],w=(0,v.p7)({history:(0,v.r5)(),routes:y});var O=w;function j(e){const n=parseInt(e,10);return`${n.toFixed(0).replace(/./g,((e,n,t)=>n&&"."!==e&&(t.length-n)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function k(e){const n=new Date(1e3*e);return n.toLocaleDateString()}var C=t(5820);function E(e,n="更新"){if(e.data.success)C.Z.emit("push-message",{style:"success",title:`${n}成功`});else{const t="string"===typeof e.data.message?[e.data.message]:e.data.message;C.Z.emit("push-message",{style:"danger",title:`${n}失敗`,content:t.join("、")})}}t(2166);(0,c.aH)("required",s.C1),(0,c.aH)("email",s.Do),(0,c.aH)("min",s.VV),(0,c.jQ)({generateMessage:(0,d.NC)({zh_TW:f}),validateOnInput:!0}),(0,d.i_)("zh_TW");const P=(0,r.ri)(b);P.use(O),P.config.globalProperties.$filters={currency:j,date:k},P.config.globalProperties.$httpMessageState=E,P.component("Form",c.l0),P.component("Field",c.gN),P.component("ErrorMessage",c.Bc),P.component("Loading",u.Z),P.use(a.Z,i.Z),P.use(o.Z),P.mount("#app")},5820:function(e,n,t){var r=t(1373);const o=(0,r.Z)();n.Z=o}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],i=e[d][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(d--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{132:"f954af93",139:"a6a05037",255:"294f001c",277:"b2ce0306",453:"8c5630e9",544:"c0c86833",550:"c63fdae1",679:"17a5e2de",682:"8ab43bf5",715:"00c41544",746:"94cf5d27",815:"fd0e2493",919:"68e4d176",942:"ed316dbe",945:"d47851df"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{139:"1baeee6f",715:"53f87d28"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue-final:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var f=s[d];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+i){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=r),e[r]=[o];var l=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=l.bind(null,u.onerror),u.onload=l.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/Vue_Final/dist/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var a=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),u=t.p+a;if(n(a,u))return o();e(r,u,null,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={139:1,715:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var d=c(t)}for(n&&n(r);s<a.length;s++)i=a[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},r=self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(1593)}));r=t.O(r)})();
//# sourceMappingURL=app.e037c3cb.js.map