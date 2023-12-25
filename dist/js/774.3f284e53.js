(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[774],{8803:function(e,t,s){
/*!
  * Bootstrap toast.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,a){e.exports=a(s(1884),s(4130),s(9069),s(1437))})(0,(function(e,t,s,a){"use strict";const n="toast",i="bs.toast",o=`.${i}`,r=`mouseover${o}`,c=`mouseout${o}`,l=`focusin${o}`,u=`focusout${o}`,h=`hide${o}`,d=`hidden${o}`,m=`show${o}`,_=`shown${o}`,g="fade",v="hide",p="show",f="showing",b={animation:"boolean",autohide:"boolean",delay:"number"},w={animation:!0,autohide:!0,delay:5e3};class y extends e{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return w}static get DefaultType(){return b}static get NAME(){return n}show(){const e=t.trigger(this._element,m);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(g);const s=()=>{this._element.classList.remove(f),t.trigger(this._element,_),this._maybeScheduleHide()};this._element.classList.remove(v),a.reflow(this._element),this._element.classList.add(p,f),this._queueCallback(s,this._element,this._config.animation)}hide(){if(!this.isShown())return;const e=t.trigger(this._element,h);if(e.defaultPrevented)return;const s=()=>{this._element.classList.add(v),this._element.classList.remove(f,p),t.trigger(this._element,d)};this._element.classList.add(f),this._queueCallback(s,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(p),super.dispose()}isShown(){return this._element.classList.contains(p)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const s=e.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){t.on(this._element,r,(e=>this._onInteraction(e,!0))),t.on(this._element,c,(e=>this._onInteraction(e,!1))),t.on(this._element,l,(e=>this._onInteraction(e,!0))),t.on(this._element,u,(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=y.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}return s.enableDismissTrigger(y),a.defineJQueryPlugin(y),y}))},3774:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return P}});var a=s(3396);const n={class:"container-fluid"};function i(e,t,s,i,o,r){const c=(0,a.up)("Navbar"),l=(0,a.up)("router-view"),u=(0,a.up)("ToastMessages");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),(0,a._)("div",n,[(0,a.Wm)(l)]),(0,a.Wm)(u)],64)}s(560);var o=s(8557),r=s(9242);const c={class:"navbar navbar-expand-lg navbar-light bg-light"},l={class:"container-fluid"},u=(0,a._)("a",{class:"navbar-brand",href:"#/dashboard/products"},"HELMET",-1),h=(0,a._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,a._)("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarNav"},m={class:"navbar-nav"},_=(0,a.uE)('<li class="nav-item"><a class="nav-link active" aria-current="page" href="#/dashboard/products">Home</a></li><li class="nav-item"><a class="nav-link active" aria-current="page" href="#/dashboard/orders">Orders</a></li><li class="nav-item"><a class="nav-link active" aria-current="page" href="#/dashboard/coupons">Coupons</a></li>',3),g={class:"nav-item"};function v(e,t,s,n,i,o){return(0,a.wg)(),(0,a.iD)("nav",c,[(0,a._)("div",l,[u,h,(0,a._)("div",d,[(0,a._)("ul",m,[_,(0,a._)("li",g,[(0,a._)("a",{class:"nav-link",href:"#",onClick:t[0]||(t[0]=(0,r.iM)(((...e)=>o.logout&&o.logout(...e)),["prevent"]))},"登出")])])])])])}var p={methods:{logout(){const e="https://vue3-course-api.hexschool.io/logout";this.$http.post(e,this.user).then((e=>{e.data.success&&this.$router.push("/login")}))}}},f=s(89);const b=(0,f.Z)(p,[["render",v]]);var w=b;const y={class:"toast-container position-absolute pe-3 top-0 end-0"};function k(e,t,s,n,i,o){const r=(0,a.up)("Toast");return(0,a.wg)(),(0,a.iD)("div",y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.messages,((e,t)=>((0,a.wg)(),(0,a.j4)(r,{key:t,msg:e},null,8,["msg"])))),128))])}var $=s(7139);const T={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},I={class:"toast-header"},L={class:"me-auto"},C=(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),D={key:0,class:"toast-body"};function M(e,t,s,n,i,o){return(0,a.wg)(),(0,a.iD)("div",T,[(0,a._)("div",I,[(0,a._)("span",{class:(0,$.C_)([`bg-${s.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,a._)("strong",L,(0,$.zw)(s.msg.title),1),C]),s.msg.content?((0,a.wg)(),(0,a.iD)("div",D,(0,$.zw)(s.msg.content),1)):(0,a.kq)("",!0)],512)}var x=s(8803),H=s.n(x),N={name:"Toast",props:["msg"],mounted(){const e=this.$refs.toast,t=new(H())(e,{delay:6e3});t.show()}};const S=(0,f.Z)(N,[["render",M]]);var E=S,Z={components:{Toast:E},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-message",(e=>{const{style:t="success",title:s,content:a}=e;this.messages.push({style:t,title:s,content:a})}))}};const K=(0,f.Z)(Z,[["render",k]]);var j=K,q={components:{Navbar:w,ToastMessages:j},provide(){return{emitter:o.Z}},created(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=e;const t="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(t,this.user).then((e=>{e.data.success||this.$router.push("/login")}))}};const z=(0,f.Z)(q,[["render",i]]);var P=z}}]);
//# sourceMappingURL=774.3f284e53.js.map