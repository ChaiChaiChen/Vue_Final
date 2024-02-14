"use strict";(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[154],{8464:function(e,t,a){a.d(t,{Z:function(){return v}});var s=a(3396),r=a(9242),i=a(7139);const l={"aria-label":"Page navigation example"},d={class:"pagination justify-content-center"},o={key:0,class:"page-item"},n=(0,s._)("span",{"aria-hidden":"true"},"«",-1),c=[n],p=["onClick"],u={key:1,class:"page-item"},m=(0,s._)("span",{"aria-hidden":"true"},"»",-1),h=[m];function g(e,t,a,n,m,g){return(0,s.wg)(),(0,s.iD)("nav",l,[(0,s._)("ul",d,[1!==a.pages.current_page?((0,s.wg)(),(0,s.iD)("li",o,[(0,s._)("a",{class:"page-link",href:"#",onClick:t[0]||(t[0]=(0,r.iM)((e=>g.updatePage(a.pages.current_page-1)),["prevent"])),"aria-label":"Previous"},c)])):(0,s.kq)("",!0),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.pages.total_pages,(e=>((0,s.wg)(),(0,s.iD)("li",{class:(0,i.C_)(["page-item",{active:e===a.pages.current_page}]),key:e},[(0,s._)("a",{class:"page-link",href:"#",onClick:(0,r.iM)((t=>g.updatePage(e)),["prevent"])},(0,i.zw)(e),9,p)],2)))),128)),a.pages.current_page!==a.pages.total_pages?((0,s.wg)(),(0,s.iD)("li",u,[(0,s._)("a",{class:"page-link",href:"#",onClick:t[1]||(t[1]=(0,r.iM)((e=>g.updatePage(a.pages.current_page+1)),["prevent"])),"aria-label":"Next"},h)])):(0,s.kq)("",!0)])])}var _={props:["pages"],methods:{updatePage(e){console.log(e),this.$emit("emit-pages",e)}}},b=a(89);const w=(0,b.Z)(_,[["render",g]]);var v=w},4154:function(e,t,a){a.r(t),a.d(t,{default:function(){return B}});var s=a(3396),r=a(7139),i=a(9242);const l={class:"container"},d={class:"row mt-5"},o={class:"table mt-5 text-center table-radius"},n=(0,s._)("thead",{class:"table-theme"},[(0,s._)("tr",null,[(0,s._)("th",{width:"120"},"購買時間"),(0,s._)("th",{width:"120"},"Email"),(0,s._)("th",{width:"300"},"購買項目"),(0,s._)("th",{width:"120"},"應付金額"),(0,s._)("th",{width:"120"},"是否已付款"),(0,s._)("th",{width:"120"},"編輯")])],-1),c={class:"text-right"},p={class:"text-right"},u={key:0,class:"is-enabled-border is-enabled"},m={key:1,class:"is-enabled-border not-enabled"},h=["onClick"],g=(0,s._)("i",{class:"bi bi-pencil-square"},null,-1),_=[g],b=["onClick"],w=(0,s._)("i",{class:"bi bi-trash3"},null,-1),v=[w];function f(e,t,a,g,w,f){const O=(0,s.up)("OrderModal"),k=(0,s.up)("DelModal"),M=(0,s.up)("Pagination");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",l,[(0,s._)("div",d,[(0,s._)("table",o,[n,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(w.orders,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,(0,r.zw)(e.$filters.date(t.create_at)),1),(0,s._)("td",null,(0,r.zw)(t.user.email),1),(0,s._)("td",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.products,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},(0,r.zw)(e.product.title)+" 數量："+(0,r.zw)(e.qty)+" "+(0,r.zw)(e.product.unit),1)))),128))]),(0,s._)("td",p,(0,r.zw)(e.$filters.currency(t.total)),1),(0,s._)("td",null,[t.is_paid?((0,s.wg)(),(0,s.iD)("span",u,"已付款")):((0,s.wg)(),(0,s.iD)("span",m,"未付款"))]),(0,s._)("td",null,[(0,s._)("button",{class:"btn btn-primary",onClick:(0,i.iM)((e=>f.openModal(t)),["prevent"])},_,8,h),(0,s._)("button",{class:"btn btn-danger",onClick:(0,i.iM)((e=>f.openDelOrderModal(t)),["prevent"])},v,8,b)])])))),128))])])])]),(0,s.Wm)(O,{ref:"orderModal",order:w.tempOrder,onReviseItem:f.reviseItem},null,8,["order","onReviseItem"]),(0,s.Wm)(k,{item:w.tempOrder,ref:"delModal",onDelItem:f.delOrder},null,8,["item","onDelItem"]),(0,s.Wm)(M,{pages:w.pagination,onEmitPages:f.getOrders},null,8,["pages","onEmitPages"])],64)}const O={class:"modal fade",id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},k={class:"modal-dialog",role:"document"},M={class:"modal-content border-0"},y=(0,s._)("div",{class:"modal-header bg-modal-brown text-white"},[(0,s._)("h5",{class:"modal-title"},[(0,s._)("span",null,"檢視訂單")]),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),D={class:"modal-body"},$={class:"mb-3"},z={class:"mb-3"},x={class:"mb-3"},C={class:"mb-3"},P={class:"mb-3"},Z={class:"mb-3"},I={class:"mb-3"},q={class:"form-check"},H=(0,s._)("label",{class:"form-check-label",for:"is_paid"}," 是否付款 ",-1),Y={class:"modal-footer"},E=(0,s._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function K(e,t,a,l,d,o){return(0,s.wg)(),(0,s.iD)("div",O,[(0,s._)("div",k,[(0,s._)("div",M,[y,(0,s._)("div",D,[(0,s._)("div",$," 訂購人："+(0,r.zw)(d.user.name),1),(0,s._)("div",z," Email："+(0,r.zw)(d.user.email),1),(0,s._)("div",x," 購買時間："+(0,r.zw)(e.$filters.date(d.tempOrder.create_at)),1),(0,s._)("div",C,[(0,s.Uk)(" 訂單列表："),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(d.tempOrder.products,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},(0,r.zw)(e.product.title)+" 數量："+(0,r.zw)(e.qty)+" "+(0,r.zw)(e.product.unit),1)))),128))]),(0,s._)("div",P," 應付金額："+(0,r.zw)(e.$filters.currency(d.tempOrder.total)),1),(0,s._)("div",Z," 留言："+(0,r.zw)(d.tempOrder.message),1),(0,s._)("div",I,[(0,s._)("div",q,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=e=>d.tempOrder.is_paid=e),true:1,false:0,id:"is_paid"},null,512),[[i.e8,d.tempOrder.is_paid]]),H])])]),(0,s._)("div",Y,[E,(0,s._)("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=t=>e.$emit("revise-item",d.tempOrder))},"確認 ")])])])],512)}var j=a(1339),W={props:{order:{type:Object,default(){return{}}}},data(){return{modal:{},tempOrder:{},user:""}},watch:{order(){this.tempOrder=this.order,this.user=this.tempOrder.user,console.log("tempOrder",this.tempOrder)}},mixins:[j.Z]},R=a(89);const U=(0,R.Z)(W,[["render",K]]);var L=U,N=a(5919),S=a(8464),V={data(){return{orders:[],pagination:{},tempOrder:{}}},components:{OrderModal:L,DelModal:N.Z,Pagination:S.Z},inject:["emitter"],methods:{getOrders(e=1){const t=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/orders/?page=${e}`;this.$http.get(t).then((e=>{e.data.success&&(this.orders=e.data.orders,console.log("order",this.orders),this.pagination=e.data.pagination)}))},openModal(e){this.tempOrder={...e};const t=this.$refs.orderModal;t.showModal()},reviseItem(e){this.tempOrder=e;const t=this.$refs.orderModal,a=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/order/${this.tempOrder.id}`;this.$http.put(a,{data:this.tempOrder}).then((e=>{e.data.success&&(t.hideModal(),this.getOrders())}))},openDelOrderModal(e){this.tempOrder={...e};const t=this.$refs.delModal;t.showModal()},delOrder(){const e=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/order/${this.tempOrder.id}`;this.$http.delete(e).then((e=>{if(e.data.success){console.log(e);const t=this.$refs.delModal;t.hideModal(),this.$httpMessageState(e,e.data.message),this.getOrders()}}))}},created(){this.getOrders()}};const A=(0,R.Z)(V,[["render",f]]);var B=A}}]);
//# sourceMappingURL=154.e5f83ce7.js.map