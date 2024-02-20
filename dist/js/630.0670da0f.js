"use strict";(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[630],{630:function(e,t,r){r.r(t),r.d(t,{default:function(){return J}});var s=r(3396),a=r(7139),d=r(9242);const i={class:"container"},l={class:"row mt-5"},o={class:"table mt-5 text-center table-radius"},n=(0,s._)("thead",{class:"table-theme"},[(0,s._)("tr",null,[(0,s._)("th",{width:"120"},"購買時間"),(0,s._)("th",{width:"120"},"Email"),(0,s._)("th",{width:"300"},"購買項目"),(0,s._)("th",{width:"120"},"應付金額"),(0,s._)("th",{width:"120"},"是否已付款"),(0,s._)("th",{width:"120"},"編輯")])],-1),c={class:"text-right"},p={class:"text-right"},m={key:0,class:"is-enabled-border is-enabled"},u={key:1,class:"is-enabled-border not-enabled"},h=["onClick"],b=(0,s._)("i",{class:"bi bi-pencil-square"},null,-1),_=[b],g=["onClick"],w=(0,s._)("i",{class:"bi bi-trash3"},null,-1),v=[w];function O(e,t,r,b,w,O){const f=(0,s.up)("OrderModal"),y=(0,s.up)("DelModal"),M=(0,s.up)("Pagination");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",i,[(0,s._)("div",l,[(0,s._)("table",o,[n,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.orders,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,(0,a.zw)(e.$filters.date(t.create_at)),1),(0,s._)("td",null,(0,a.zw)(t.user.email),1),(0,s._)("td",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.products,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},(0,a.zw)(e.product.title)+" 數量："+(0,a.zw)(e.qty)+" "+(0,a.zw)(e.product.unit),1)))),128))]),(0,s._)("td",p,(0,a.zw)(e.$filters.currency(t.total)),1),(0,s._)("td",null,[t.is_paid?((0,s.wg)(),(0,s.iD)("span",m,"已付款")):((0,s.wg)(),(0,s.iD)("span",u,"未付款"))]),(0,s._)("td",null,[(0,s._)("button",{class:"btn btn-primary",onClick:(0,d.iM)((e=>O.openModal(t)),["prevent"])},_,8,h),(0,s._)("button",{class:"btn btn-danger",onClick:(0,d.iM)((e=>O.openDelOrderModal(t)),["prevent"])},v,8,g)])])))),128))])])])]),(0,s.Wm)(f,{ref:"orderModal",order:w.tempOrder,onReviseItem:O.reviseItem},null,8,["order","onReviseItem"]),(0,s.Wm)(y,{item:w.tempOrder,ref:"delModal",onDelItem:O.delOrder},null,8,["item","onDelItem"]),(0,s.Wm)(M,{pages:e.pagination,onEmitPages:e.getOrders},null,8,["pages","onEmitPages"])],64)}var f=r(1020),y=r(1076),M=(0,f.Q_)("orderStore",{state:()=>({orders:[],pagination:{}}),getters:{productList:e=>e.products},actions:{getOrders(e=1){return new Promise((async(t,r)=>{const s=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/orders/?page=${e}`;try{const e=await y.Z.get(s);console.log(e),this.orders=e.data.orders,this.pagination=e.data.pagination,t()}catch(a){console.log(a),r()}}))}}});const k={class:"modal fade",id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},D={class:"modal-dialog",role:"document"},$={class:"modal-content border-0"},z=(0,s._)("div",{class:"modal-header bg-modal-brown text-white"},[(0,s._)("h5",{class:"modal-title"},[(0,s._)("span",null,"檢視訂單")]),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),x={class:"modal-body"},C={class:"mb-3"},I={class:"mb-3"},Z={class:"mb-3"},P={class:"mb-3"},E={class:"mb-3"},H={class:"mb-3"},Y={class:"mb-3"},q={class:"form-check"},K=(0,s._)("label",{class:"form-check-label",for:"is_paid"}," 是否付款 ",-1),W={class:"modal-footer"},j=(0,s._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function L(e,t,r,i,l,o){return(0,s.wg)(),(0,s.iD)("div",k,[(0,s._)("div",D,[(0,s._)("div",$,[z,(0,s._)("div",x,[(0,s._)("div",C," 訂購人："+(0,a.zw)(l.user.name),1),(0,s._)("div",I," Email："+(0,a.zw)(l.user.email),1),(0,s._)("div",Z," 購買時間："+(0,a.zw)(e.$filters.date(l.tempOrder.create_at)),1),(0,s._)("div",P,[(0,s.Uk)(" 訂單列表："),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.tempOrder.products,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},(0,a.zw)(e.product.title)+" 數量："+(0,a.zw)(e.qty)+" "+(0,a.zw)(e.product.unit),1)))),128))]),(0,s._)("div",E," 應付金額："+(0,a.zw)(e.$filters.currency(l.tempOrder.total)),1),(0,s._)("div",H," 留言："+(0,a.zw)(l.tempOrder.message),1),(0,s._)("div",Y,[(0,s._)("div",q,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=e=>l.tempOrder.is_paid=e),true:1,false:0,id:"is_paid"},null,512),[[d.e8,l.tempOrder.is_paid]]),K])])]),(0,s._)("div",W,[j,(0,s._)("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=t=>e.$emit("revise-item",l.tempOrder))},"確認 ")])])])],512)}var R=r(1339),S={props:{order:{type:Object,default(){return{}}}},data(){return{modal:{},tempOrder:{},user:""}},watch:{order(){this.tempOrder=this.order,this.user=this.tempOrder.user,console.log("tempOrder",this.tempOrder)}},mixins:[R.Z]},U=r(89);const Q=(0,U.Z)(S,[["render",L]]);var V=Q,A=r(5919),B=r(8464),F={data(){return{tempOrder:{}}},components:{OrderModal:V,DelModal:A.Z,Pagination:B.Z},inject:["emitter"],computed:{...(0,f.rn)(M,["orders","pagination"])},methods:{...(0,f.nv)(M,["getOrders"]),openModal(e){this.tempOrder={...e};const t=this.$refs.orderModal;t.showModal()},reviseItem(e){this.tempOrder=e;const t=this.$refs.orderModal,r=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/order/${this.tempOrder.id}`;this.$http.put(r,{data:this.tempOrder}).then((e=>{e.data.success&&(t.hideModal(),this.getOrders())}))},openDelOrderModal(e){this.tempOrder={...e};const t=this.$refs.delModal;t.showModal()},delOrder(){const e=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/order/${this.tempOrder.id}`;this.$http.delete(e).then((e=>{if(e.data.success){console.log(e);const t=this.$refs.delModal;t.hideModal(),this.$httpMessageState(e,e.data.message),this.getOrders()}}))}},created(){this.getOrders()}};const G=(0,U.Z)(F,[["render",O]]);var J=G}}]);
//# sourceMappingURL=630.0670da0f.js.map