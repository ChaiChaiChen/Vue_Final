"use strict";(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[558],{9558:function(a,s,t){t.r(s),t.d(s,{default:function(){return w}});var e=t(3396);const n={class:"container-fluid"};function r(a,s,t,r,o,l){const i=(0,e.up)("Navbar"),c=(0,e.up)("router-view");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(i),(0,e._)("div",n,[(0,e.Wm)(c)])],64)}t(560);var o=t(9242);const l={class:"navbar navbar-expand-lg navbar-light bg-light"},i={class:"container-fluid"},c=(0,e._)("a",{class:"navbar-brand",href:"#"},"Navbar",-1),u=(0,e._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,e._)("span",{class:"navbar-toggler-icon"})],-1),v={class:"collapse navbar-collapse",id:"navbarNav"},h={class:"navbar-nav"},p=(0,e._)("li",{class:"nav-item"},[(0,e._)("a",{class:"nav-link active","aria-current":"page",href:"#"},"Home")],-1),b=(0,e._)("li",{class:"nav-item"},[(0,e._)("a",{class:"nav-link",href:"#"},"Features")],-1),d={class:"nav-item"};function g(a,s,t,n,r,g){return(0,e.wg)(),(0,e.iD)("nav",l,[(0,e._)("div",i,[c,u,(0,e._)("div",v,[(0,e._)("ul",h,[p,b,(0,e._)("li",d,[(0,e._)("a",{class:"nav-link",href:"#",onClick:s[0]||(s[0]=(0,o.iM)(((...a)=>g.logout&&g.logout(...a)),["prevent"]))},"登出")])])])])])}var f={methods:{logout(){const a="https://vue3-course-api.hexschool.io/logout";this.$http.post(a,this.user).then((a=>{a.data.success&&this.$router.push("/login")}))}}},_=t(89);const k=(0,_.Z)(f,[["render",g]]);var m=k,$={components:{Navbar:m},created(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=a;const s="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(s,this.user).then((a=>{a.data.success||this.$router.push("/login")}))}};const N=(0,_.Z)($,[["render",r]]);var w=N}}]);
//# sourceMappingURL=558.b58a7d54.js.map