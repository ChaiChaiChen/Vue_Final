(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[253],{7972:function(t,e,i){
/*!
  * Bootstrap modal.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i(1884),i(4130),i(7317),i(632),i(9069),i(5160),i(1437),i(7547))})(0,(function(t,e,i,s,o,n,l,a){"use strict";const d="modal",r="bs.modal",c=`.${r}`,u=".data-api",h="Escape",m=`hide${c}`,p=`hidePrevented${c}`,_=`hidden${c}`,g=`show${c}`,b=`shown${c}`,f=`resize${c}`,y=`click.dismiss${c}`,w=`mousedown.dismiss${c}`,v=`keydown.dismiss${c}`,k=`click${c}${u}`,P="modal-open",A="fade",x="show",E="modal-static",D=".modal.show",M=".modal-dialog",$=".modal-body",C='[data-bs-toggle="modal"]',T={backdrop:!0,focus:!0,keyboard:!0},L={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class U extends t{constructor(t,e){super(t,e),this._dialog=i.findOne(M,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new a,this._addEventListeners()}static get Default(){return T}static get DefaultType(){return L}static get NAME(){return d}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;const i=e.trigger(this._element,g,{relatedTarget:t});i.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(P),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){if(!this._isShown||this._isTransitioning)return;const t=e.trigger(this._element,m);t.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(x),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}dispose(){e.off(window,c),e.off(this._dialog,c),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new s({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new n({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const s=i.findOne($,this._dialog);s&&(s.scrollTop=0),l.reflow(this._element),this._element.classList.add(x);const o=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,e.trigger(this._element,b,{relatedTarget:t})};this._queueCallback(o,this._dialog,this._isAnimated())}_addEventListeners(){e.on(this._element,v,(t=>{t.key===h&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),e.on(window,f,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),e.on(this._element,w,(t=>{e.one(this._element,y,(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(P),this._resetAdjustments(),this._scrollBar.reset(),e.trigger(this._element,_)}))}_isAnimated(){return this._element.classList.contains(A)}_triggerBackdropTransition(){const t=e.trigger(this._element,p);if(t.defaultPrevented)return;const i=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;"hidden"===s||this._element.classList.contains(E)||(i||(this._element.style.overflowY="hidden"),this._element.classList.add(E),this._queueCallback((()=>{this._element.classList.remove(E),this._queueCallback((()=>{this._element.style.overflowY=s}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=l.isRTL()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=l.isRTL()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=U.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}return e.on(document,k,C,(function(t){const s=i.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),e.one(s,g,(t=>{t.defaultPrevented||e.one(s,_,(()=>{l.isVisible(this)&&this.focus()}))}));const o=i.findOne(D);o&&U.getInstance(o).hide();const n=U.getOrCreateInstance(s);n.toggle(this)})),o.enableDismissTrigger(U),l.defineJQueryPlugin(U),U}))},632:function(t,e,i){
/*!
  * Bootstrap backdrop.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i(4130),i(2166),i(1437))})(0,(function(t,e,i){"use strict";const s="backdrop",o="fade",n="show",l=`mousedown.bs.${s}`,a={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},d={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class r extends e{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return a}static get DefaultType(){return d}static get NAME(){return s}show(t){if(!this._config.isVisible)return void i.execute(t);this._append();const e=this._getElement();this._config.isAnimated&&i.reflow(e),e.classList.add(n),this._emulateAnimation((()=>{i.execute(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(n),this._emulateAnimation((()=>{this.dispose(),i.execute(t)}))):i.execute(t)}dispose(){this._isAppended&&(t.off(this._element,l),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(o),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=i.getElement(t.rootElement),t}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),t.on(e,l,(()=>{i.execute(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){i.executeAfterTransition(t,this._getElement(),this._config.isAnimated)}}return r}))},5160:function(t,e,i){
/*!
  * Bootstrap focustrap.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i(4130),i(7317),i(2166))})(0,(function(t,e,i){"use strict";const s="focustrap",o="bs.focustrap",n=`.${o}`,l=`focusin${n}`,a=`keydown.tab${n}`,d="Tab",r="forward",c="backward",u={autofocus:!0,trapElement:null},h={autofocus:"boolean",trapElement:"element"};class m extends i{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return u}static get DefaultType(){return h}static get NAME(){return s}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),t.off(document,n),t.on(document,l,(t=>this._handleFocusin(t))),t.on(document,a,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,t.off(document,n))}_handleFocusin(t){const{trapElement:i}=this._config;if(t.target===document||t.target===i||i.contains(t.target))return;const s=e.focusableChildren(i);0===s.length?i.focus():this._lastTabNavDirection===c?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){t.key===d&&(this._lastTabNavDirection=t.shiftKey?c:r)}}return m}))},7547:function(t,e,i){
/*!
  * Bootstrap scrollbar.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i(6221),i(7317),i(1437))})(0,(function(t,e,i){"use strict";const s=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",o=".sticky-top",n="padding-right",l="margin-right";class a{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,n,(e=>e+t)),this._setElementAttributes(s,n,(e=>e+t)),this._setElementAttributes(o,l,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,n),this._resetElementAttributes(s,n),this._resetElementAttributes(o,l)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth(),o=t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return;this._saveInitialAttribute(t,e);const o=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(o))}px`)};this._applyManipulationCallback(t,o)}_saveInitialAttribute(e,i){const s=e.style.getPropertyValue(i);s&&t.setDataAttribute(e,i,s)}_resetElementAttributes(e,i){const s=e=>{const s=t.getDataAttribute(e,i);null!==s?(t.removeDataAttribute(e,i),e.style.setProperty(i,s)):e.style.removeProperty(i)};this._applyManipulationCallback(e,s)}_applyManipulationCallback(t,s){if(i.isElement(t))s(t);else for(const i of e.find(t,this._element))s(i)}}return a}))},5253:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return Et}});var s=i(3396),o=i(9242),n=i(7139);const l={class:"text-end"},a={class:"table mt-4"},d=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{width:"120"},"分類"),(0,s._)("th",null,"產品名稱"),(0,s._)("th",{width:"120"},"原價"),(0,s._)("th",{width:"120"},"售價"),(0,s._)("th",{width:"120"},"是否啟用"),(0,s._)("th",{width:"120"},"編輯")])],-1),r={class:"text-right"},c={class:"text-right"},u={key:0,class:"text-success"},h={key:1,class:"text-muted"},m={class:"btn-group"},p=["onClick"],_=["onClick"];function g(t,e,i,g,b,f){const y=(0,s.up)("Loading"),w=(0,s.up)("ProductModel"),v=(0,s.up)("DelModal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(y,{active:b.isLoading},null,8,["active"]),(0,s._)("div",l,[(0,s._)("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=(0,o.iM)((t=>f.openModal(!0)),["prevent"]))}," 新增產品 ")]),(0,s._)("table",a,[d,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(b.products,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,(0,n.zw)(t.category),1),(0,s._)("td",null,(0,n.zw)(t.title),1),(0,s._)("td",r,(0,n.zw)(t.origin_price),1),(0,s._)("td",c,(0,n.zw)(t.price),1),(0,s._)("td",null,[t.is_enabled?((0,s.wg)(),(0,s.iD)("span",u,"啟用")):((0,s.wg)(),(0,s.iD)("span",h,"未啟用"))]),(0,s._)("td",null,[(0,s._)("div",m,[(0,s._)("button",{class:"btn btn-outline-primary btn-sm",onClick:e=>f.openModal(!1,t)},"編輯",8,p),(0,s._)("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>f.openDelProductModal(t)},"刪除",8,_)])])])))),128))])]),(0,s.Wm)(w,{ref:"productModal",product:b.tempProduct,onUpdateProduct:f.updateProduct},null,8,["product","onUpdateProduct"]),(0,s.Wm)(v,{item:b.tempProduct,ref:"delModal",onDelItem:f.delProduct},null,8,["item","onDelItem"])],64)}i(560);const b={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},f={class:"modal-dialog modal-xl"},y={class:"modal-content border-0"},w=(0,s._)("div",{class:"modal-header bg-secondary text-white"},[(0,s._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,s._)("span",null,"新增產品")]),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),v={class:"modal-body"},k={class:"row"},P={class:"col-sm-4"},A={class:"mb-3"},x=(0,s._)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),E={class:"mb-3"},D=(0,s._)("label",{for:"customFile",class:"form-label"},[(0,s.Uk)("或 上傳圖片 "),(0,s._)("i",{class:"fas fa-spinner fa-spin"})],-1),M=["src"],$={key:0,class:"mt-5"},C=["onUpdate:modelValue"],T=["onClick"],L={key:0},U={class:"col-sm-8"},V={class:"mb-3"},N=(0,s._)("label",{for:"title",class:"form-label"},"標題",-1),F={class:"row gx-2"},W={class:"mb-3 col-md-6"},z=(0,s._)("label",{for:"category",class:"form-label"},"分類",-1),I={class:"mb-3 col-md-6"},j=(0,s._)("label",{for:"price",class:"form-label"},"單位",-1),B={class:"row gx-2"},O={class:"mb-3 col-md-6"},S=(0,s._)("label",{for:"origin_price",class:"form-label"},"原價",-1),H={class:"mb-3 col-md-6"},q=(0,s._)("label",{for:"price",class:"form-label"},"售價",-1),R=(0,s._)("hr",null,null,-1),Y={class:"mb-3"},K=(0,s._)("label",{for:"description",class:"form-label"},"產品描述",-1),Z={class:"mb-3"},Q=(0,s._)("label",{for:"content",class:"form-label"},"說明內容",-1),J={class:"mb-3"},G={class:"form-check"},X=(0,s._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),tt={class:"modal-footer"},et=(0,s._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function it(t,e,i,n,l,a){return(0,s.wg)(),(0,s.iD)("div",b,[(0,s._)("div",f,[(0,s._)("div",y,[w,(0,s._)("div",v,[(0,s._)("div",k,[(0,s._)("div",P,[(0,s._)("div",A,[x,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[0]||(e[0]=t=>l.tempProduct.imageUrl=t),placeholder:"請輸入圖片連結"},null,512),[[o.nr,l.tempProduct.imageUrl]])]),(0,s._)("div",E,[D,(0,s._)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=(...t)=>a.uploadFile&&a.uploadFile(...t))},null,544)]),(0,s._)("img",{class:"img-fluid",src:l.tempProduct.imageUrl,alt:""},null,8,M),l.tempProduct.images?((0,s.wg)(),(0,s.iD)("div",$,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.tempProduct.images,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"mb-3 input-group",key:e},[(0,s.wy)((0,s._)("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":t=>l.tempProduct.images[e]=t,placeholder:"請輸入連結"},null,8,C),[[o.nr,l.tempProduct.images[e]]]),(0,s._)("button",{type:"button",class:"btn btn-outline-danger",onClick:t=>l.tempProduct.images.splice(e,1)}," 移除 ",8,T)])))),128)),l.tempProduct.images[l.tempProduct.images.length-1]||!l.tempProduct.images.length?((0,s.wg)(),(0,s.iD)("div",L,[(0,s._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=t=>l.tempProduct.images.push(""))}," 新增圖片 ")])):(0,s.kq)("",!0)])):(0,s.kq)("",!0)]),(0,s._)("div",U,[(0,s._)("div",V,[N,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[3]||(e[3]=t=>l.tempProduct.title=t),placeholder:"請輸入標題"},null,512),[[o.nr,l.tempProduct.title]])]),(0,s._)("div",F,[(0,s._)("div",W,[z,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":e[4]||(e[4]=t=>l.tempProduct.category=t),placeholder:"請輸入分類"},null,512),[[o.nr,l.tempProduct.category]])]),(0,s._)("div",I,[j,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":e[5]||(e[5]=t=>l.tempProduct.unit=t),placeholder:"請輸入單位"},null,512),[[o.nr,l.tempProduct.unit]])])]),(0,s._)("div",B,[(0,s._)("div",O,[S,(0,s.wy)((0,s._)("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":e[6]||(e[6]=t=>l.tempProduct.origin_price=t),placeholder:"請輸入原價"},null,512),[[o.nr,l.tempProduct.origin_price,void 0,{number:!0}]])]),(0,s._)("div",H,[q,(0,s.wy)((0,s._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[7]||(e[7]=t=>l.tempProduct.price=t),placeholder:"請輸入售價"},null,512),[[o.nr,l.tempProduct.price,void 0,{number:!0}]])])]),R,(0,s._)("div",Y,[K,(0,s.wy)((0,s._)("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[8]||(e[8]=t=>l.tempProduct.description=t),placeholder:"請輸入產品描述"},null,512),[[o.nr,l.tempProduct.description]])]),(0,s._)("div",Z,[Q,(0,s.wy)((0,s._)("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[9]||(e[9]=t=>l.tempProduct.content=t),placeholder:"請輸入產品說明內容"},null,512),[[o.nr,l.tempProduct.content]])]),(0,s._)("div",J,[(0,s._)("div",G,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=t=>l.tempProduct.is_enabled=t),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[o.e8,l.tempProduct.is_enabled]]),X])])])])]),(0,s._)("div",tt,[et,(0,s._)("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=e=>t.$emit("update-product",l.tempProduct))},"確認")])])])],512)}var st=i(7972),ot=i.n(st),nt={methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(ot())(this.$refs.modal)}},lt={props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product}},data(){return{modal:{},tempProduct:{}}},mixins:[nt],methods:{uploadFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const i="https://vue3-course-api.hexschool.io/api/chaichai_api/admin/upload";this.$http.post(i,e).then((t=>{console.log(t.data)}))}}},at=i(89);const dt=(0,at.Z)(lt,[["render",it]]);var rt=dt;const ct={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},ut={class:"modal-dialog",role:"document"},ht={class:"modal-content border-0"},mt={class:"modal-header bg-danger text-white"},pt={class:"modal-title"},_t=(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),gt={class:"modal-body"},bt={class:"text-danger"},ft={class:"modal-footer"},yt=(0,s._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function wt(t,e,i,o,l,a){return(0,s.wg)(),(0,s.iD)("div",ct,[(0,s._)("div",ut,[(0,s._)("div",ht,[(0,s._)("div",mt,[(0,s._)("h5",pt,[(0,s._)("span",null,"刪除 "+(0,n.zw)(i.item.title),1)]),_t]),(0,s._)("div",gt,[(0,s.Uk)(" 是否刪除 "),(0,s._)("strong",bt,(0,n.zw)(i.item.title),1),(0,s.Uk)(" (刪除後將無法恢復)。 ")]),(0,s._)("div",ft,[yt,(0,s._)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=e=>t.$emit("del-item"))},"確認刪除 ")])])])],512)}var vt={props:{item:{}},data(){return{modal:""}},mixins:[nt]};const kt=(0,at.Z)(vt,[["render",wt]]);var Pt=kt,At={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModel:rt,DelModal:Pt},inject:["emitter"],methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/chaichai_api/admin/products";this.isLoading=!0,this.$http.get(t).then((t=>{this.isLoading=!1,t.data.success&&(console.log(t.data),this.products=t.data.products,this.pagination=t.data.pagination)}))},openModal(t,e){this.tempProduct=t?{}:{...e},this.isNew=t;const i=this.$refs.productModal;i.showModal()},updateProduct(t){this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/chaichai_api/admin/product";const i=this.$refs.productModal;let s="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/product/${t.id}`,s="put"),this.$http[s](e,{data:this.tempProduct}).then((t=>{console.log(t),i.hideModal(),t.data.success?(this.getProducts(),console.log("success"),this.emitter.emit("push-message",{style:"success",title:"更新成功"})):(console.log("error",t.data.message),this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:t.data.message.join("、")}))}))},openDelProductModal(t){this.tempProduct={...t};const e=this.$refs.delModal;e.showModal()},delProduct(){const t=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/product/${this.tempProduct.id}`;this.$http.delete(t).then((t=>{console.log(t.data);const e=this.$refs.delModal;e.hideModal(),this.emitter.emit("push-message",{style:"danger",title:`${t.data.message}`}),this.getProducts()}))}},created(){this.getProducts()}};const xt=(0,at.Z)(At,[["render",g]]);var Et=xt}}]);
//# sourceMappingURL=253.a16c0429.js.map