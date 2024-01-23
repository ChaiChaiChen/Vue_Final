(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[679],{8803:function(t,e,s){
/*!
  * Bootstrap toast.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,n){t.exports=n(s(1884),s(4130),s(9069),s(1437))})(0,(function(t,e,s,n){"use strict";const a="toast",i="bs.toast",o=`.${i}`,l=`mouseover${o}`,r=`mouseout${o}`,c=`focusin${o}`,u=`focusout${o}`,m=`hide${o}`,d=`hidden${o}`,h=`show${o}`,_=`shown${o}`,g="fade",v="hide",f="show",b="showing",p={animation:"boolean",autohide:"boolean",delay:"number"},w={animation:!0,autohide:!0,delay:5e3};class k extends t{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return w}static get DefaultType(){return p}static get NAME(){return a}show(){const t=e.trigger(this._element,h);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(g);const s=()=>{this._element.classList.remove(b),e.trigger(this._element,_),this._maybeScheduleHide()};this._element.classList.remove(v),n.reflow(this._element),this._element.classList.add(f,b),this._queueCallback(s,this._element,this._config.animation)}hide(){if(!this.isShown())return;const t=e.trigger(this._element,m);if(t.defaultPrevented)return;const s=()=>{this._element.classList.add(v),this._element.classList.remove(b,f),e.trigger(this._element,d)};this._element.classList.add(b),this._queueCallback(s,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(f),super.dispose()}isShown(){return this._element.classList.contains(f)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){e.on(this._element,l,(t=>this._onInteraction(t,!0))),e.on(this._element,r,(t=>this._onInteraction(t,!1))),e.on(this._element,c,(t=>this._onInteraction(t,!0))),e.on(this._element,u,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=k.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return s.enableDismissTrigger(k),n.defineJQueryPlugin(k),k}))},5016:function(t,e,s){"use strict";s.d(e,{Z:function(){return k}});var n=s(3396);const a={class:"toast-container position-fixed pe-3 top-0 end-0"};function i(t,e,s,i,o,l){const r=(0,n.up)("Toast");return(0,n.wg)(),(0,n.iD)("div",a,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.messages,((t,e)=>((0,n.wg)(),(0,n.j4)(r,{key:e,msg:t},null,8,["msg"])))),128))])}s(560);var o=s(7139);const l={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},r={class:"toast-header"},c={class:"me-auto"},u=(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),m={key:0,class:"toast-body"};function d(t,e,s,a,i,d){return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",r,[(0,n._)("span",{class:(0,o.C_)([`bg-${s.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,n._)("strong",c,(0,o.zw)(s.msg.title),1),u]),s.msg.content?((0,n.wg)(),(0,n.iD)("div",m,(0,o.zw)(s.msg.content),1)):(0,n.kq)("",!0)],512)}var h=s(8803),_=s.n(h),g={name:"Toast",props:["msg"],mounted(){const t=this.$refs.toast,e=new(_())(t,{delay:6e3});e.show()}},v=s(89);const f=(0,v.Z)(g,[["render",d]]);var b=f,p={components:{Toast:b},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-message",(t=>{const{style:e="success",title:s,content:n}=t;this.messages.push({style:e,title:s,content:n})}))}};const w=(0,v.Z)(p,[["render",i]]);var k=w},9805:function(t,e,s){"use strict";s.d(e,{Z:function(){return B}});var n=s(3396),a=s(7139),i=s.p+"img/soffa.90566d6f.png";const o={class:"navbar navbar-expand-lg navbar-light bg-light fixed-top"},l={class:"container-fluid"},r=(0,n._)("img",{src:i,style:{height:"50px"},alt:""},null,-1),c=(0,n._)("span",{class:"navbar-toggler-icon"},null,-1),u=[c],m={class:"nav navbar-nav me-auto"},d={class:"nav-item ms-2 mt-2"},h=(0,n._)("h5",null,[(0,n._)("strong",null,"商品一覽")],-1),_={class:"nav-item ms-2 mt-2"},g=(0,n._)("h5",null,[(0,n._)("strong",null,"關於我們")],-1),v={class:"nav navbar-nav ms-auto"},f={class:"me-2 ms-2 d-none d-lg-block"},b={class:"me-3 ms-2 d-none d-lg-block"},p={class:"nav navbar-nav ms-auto d-lg-none d-xl-none"},w={class:"me-2 ms-2"},k=(0,n._)("h5",null,[(0,n._)("strong",null,"購物車")],-1),y={class:"me-5 ms-2"},C=(0,n._)("h5",null,[(0,n._)("strong",null,"後台登入")],-1);function T(t,e,s,i,c,T){const x=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("nav",o,[(0,n._)("div",l,[(0,n.Wm)(x,{to:"/",class:"navbar-brand mt-2 ms-2"},{default:(0,n.w5)((()=>[r])),_:1}),(0,n._)("button",{class:(0,a.C_)(["navbar-toggler",{active:c.mobileBtn}]),type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=t=>c.mobileBtn=!c.mobileBtn)},u,2),(0,n._)("div",{class:(0,a.C_)(["collapse navbar-collapse",{active:c.mobileBtn}]),id:"navbarNav"},[(0,n._)("ul",m,[(0,n._)("li",d,[(0,n.Wm)(x,{class:"nav-link",onClick:e[1]||(e[1]=t=>c.mobileBtn=!1),"aria-current":"page",to:"/products"},{default:(0,n.w5)((()=>[h])),_:1})]),(0,n._)("li",_,[(0,n.Wm)(x,{class:"nav-link",onClick:e[2]||(e[2]=t=>c.mobileBtn=!1),"aria-current":"page",to:"/about"},{default:(0,n.w5)((()=>[g])),_:1})])]),(0,n._)("div",v,[(0,n._)("li",f,[(0,n.Wm)(x,{class:"nav-link bi bi-cart fs-4",onClick:e[3]||(e[3]=t=>c.mobileBtn=!1),"aria-current":"page",to:"/checkout"})]),(0,n._)("li",b,[(0,n.Wm)(x,{class:"nav-link bi bi-person fs-3",onClick:e[4]||(e[4]=t=>c.mobileBtn=!1),"aria-current":"page",to:"/login"})])]),(0,n._)("div",p,[(0,n._)("li",w,[(0,n.Wm)(x,{class:"nav-link",onClick:e[5]||(e[5]=t=>c.mobileBtn=!1),"aria-current":"page",to:"/checkout"},{default:(0,n.w5)((()=>[k])),_:1})]),(0,n._)("li",y,[(0,n.Wm)(x,{class:"nav-link",onClick:e[6]||(e[6]=t=>c.mobileBtn=!1),"aria-current":"page",to:"/login"},{default:(0,n.w5)((()=>[C])),_:1})])])],2)])])}var x={data(){return{mobileBtn:!1}}},I=s(89);const $=(0,I.Z)(x,[["render",T]]);var B=$},756:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return b}});var n=s(3396);function a(t,e,s,a,i,o){const l=(0,n.up)("UserNavbar"),r=(0,n.up)("router-view"),c=(0,n.up)("Footer"),u=(0,n.up)("ToastMessages");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(l),(0,n.Wm)(r),(0,n.Wm)(c),(0,n.Wm)(u)],64)}var i=s(5820);const o={class:"py-4 bg-theme"},l=(0,n.uE)('<div class="container"><div class="d-flex flex-column align-items-center"><div class="d-md-flex align-items-md-center justify-content-md-center"><p class="text-white ms-md-4 text-center">© 2023 Soffa All rights resevered.</p><p class="text-white ms-md-4 text-center">本網站僅供個人作品使用，不提供商業用途</p></div></div></div>',1),r=[l];function c(t,e){return(0,n.wg)(),(0,n.iD)("footer",o,r)}var u=s(89);const m={},d=(0,u.Z)(m,[["render",c]]);var h=d,_=s(9805),g=s(5016),v={components:{UserNavbar:_.Z,Footer:h,ToastMessages:g.Z},provide(){return{emitter:i.Z}}};const f=(0,u.Z)(v,[["render",a]]);var b=f}}]);
//# sourceMappingURL=679.86f04f38.js.map