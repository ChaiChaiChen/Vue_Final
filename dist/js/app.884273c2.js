(function(){"use strict";var e={4742:function(e,n,t){var o=t(9242),r=t(4695),i=t(1076),a=t(6423),c=t(6216),u=t(5708),s=t(3990),f=t(579),l=t(2389),d=t(3396);function p(e,n){const t=(0,d.up)("router-view");return(0,d.wg)(),(0,d.j4)(t)}var h=t(89);const m={},g=(0,h.Z)(m,[["render",p]]);var b=g,v=t(2483);const y=[{path:"/",component:()=>Promise.all([t.e(746),t.e(554),t.e(921)]).then(t.bind(t,5157)),children:[{path:"",component:()=>t.e(539).then(t.bind(t,6539))},{path:"products",component:()=>t.e(533).then(t.bind(t,3533))},{path:"news",component:()=>t.e(515).then(t.bind(t,6515))},{path:"product/:productId",component:()=>t.e(219).then(t.bind(t,219))},{path:"checkout",component:()=>t.e(931).then(t.bind(t,7931))},{path:"pay/:orderId",component:()=>t.e(858).then(t.bind(t,1858))}]},{path:"/dashboard",component:()=>Promise.all([t.e(746),t.e(554),t.e(804)]).then(t.bind(t,5954)),children:[{path:"products",component:()=>Promise.all([t.e(746),t.e(919),t.e(930)]).then(t.bind(t,3930))},{path:"orders",component:()=>Promise.all([t.e(746),t.e(919),t.e(101)]).then(t.bind(t,3101))},{path:"coupons",component:()=>Promise.all([t.e(746),t.e(919),t.e(251)]).then(t.bind(t,2251))}]},{path:"/login",name:"login",component:()=>t.e(391).then(t.bind(t,4391))},{path:"/:pathMatch(.*)*",component:()=>t.e(192).then(t.bind(t,7192))}],w=(0,v.p7)({history:(0,v.r5)(),routes:y});var O=w;function j(e){const n=parseInt(e,10);return`${n.toFixed(0).replace(/./g,((e,n,t)=>n&&"."!==e&&(t.length-n)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function k(e){const n=new Date(1e3*e);return n.toLocaleDateString()}var P=t(5820);function C(e,n="更新"){if(e.data.success)P.Z.emit("push-message",{style:"success",title:`${n}成功`});else{const t="string"===typeof e.data.message?[e.data.message]:e.data.message;P.Z.emit("push-message",{style:"danger",title:`${n}失敗`,content:t.join("、")})}}function E(){window.scrollTo({top:0,behavior:"smooth"})}function S(){const e=window.pageYOffset;this.elTop=e}t(2166);(0,u.aH)("required",s.C1),(0,u.aH)("email",s.Do),(0,u.aH)("min",s.VV),(0,u.jQ)({generateMessage:(0,f.NC)({zh_TW:l}),validateOnInput:!0}),(0,f.i_)("zh_TW");const T=(0,o.ri)(b);T.use(O),T.config.globalProperties.$filters={currency:j,date:k},T.config.globalProperties.$scroll={scrollTop:E,scrolling:S},T.config.globalProperties.$httpMessageState=C,T.component("Form",u.l0),T.component("Field",u.gN),T.component("ErrorMessage",u.Bc),T.component("Loading",c.Z),T.use(a.Z,i.Z),T.use(r.Z),T.mount("#app")},5820:function(e,n,t){var o=t(1373);const r=(0,o.Z)();n.Z=r}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],i=e[f][2];for(var c=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(f--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{101:"40bf0bba",192:"4c18600a",219:"e2a28e52",251:"4471078e",391:"d0c9094a",515:"f0eeba24",533:"398dc435",539:"13cf2f68",554:"94663620",746:"94cf5d27",804:"11d26e4f",858:"69f0b629",919:"0d8bc352",921:"07e06172",930:"9e146dfe",931:"d0474415"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{219:"1baeee6f",391:"53f87d28",539:"7f3f47cd",804:"013de767",921:"013de767",931:"e5244e47"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue-final:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var c,u;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==n+i){c=l;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+i),c.src=o),e[o]=[r];var d=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/Vue_Final/dist/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)o();else{var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=c,i.parentNode&&i.parentNode.removeChild(i),r(u)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===n))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===n)return r}},o=function(o){return new Promise((function(r,i){var a=t.miniCssF(o),c=t.p+a;if(n(a,c))return r();e(o,c,null,r,i)}))},r={143:0};t.f.miniCss=function(e,n){var t={219:1,391:1,539:1,804:1,921:1,931:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),c=new Error,u=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}};t.l(a,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],c=o[1],u=o[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(u)var f=u(t)}for(n&&n(o);s<a.length;s++)i=a[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(f)},o=self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(4742)}));o=t.O(o)})();
//# sourceMappingURL=app.884273c2.js.map