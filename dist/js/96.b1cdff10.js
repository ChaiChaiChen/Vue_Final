"use strict";(self["webpackChunksoffa"]=self["webpackChunksoffa"]||[]).push([[96],{6286:function(e,t,a){a.d(t,{Z:function(){return b}});var s=a(3396),r=a(7139),i=a(9242);const d={"aria-label":"Page navigation example"},l={class:"pagination justify-content-center"},o=(0,s._)("span",{"aria-hidden":"true"},"«",-1),n=[o],c=["onClick"],p=(0,s._)("span",{"aria-hidden":"true"},"»",-1),u=[p];function m(e,t,a,o,p,m){return(0,s.wg)(),(0,s.iD)("nav",d,[(0,s._)("ul",l,[(0,s._)("li",{class:(0,r.C_)(["page-item",{disabled:1===a.pages.current_page}])},[(0,s._)("a",{class:"page-link",href:"#",onClick:t[0]||(t[0]=(0,i.iM)((e=>m.updatePage(a.pages.current_page-1)),["prevent"])),"aria-label":"Previous"},n)],2),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.pages.total_pages,(e=>((0,s.wg)(),(0,s.iD)("li",{class:(0,r.C_)(["page-item",{active:e===a.pages.current_page}]),key:e},[(0,s._)("a",{class:"page-link",href:"#",onClick:(0,i.iM)((t=>m.updatePage(e)),["prevent"])},(0,r.zw)(e),9,c)],2)))),128)),(0,s._)("li",{class:(0,r.C_)(["page-item",{disabled:a.pages.current_page===a.pages.total_pages}])},[(0,s._)("a",{class:"page-link",href:"#",onClick:t[1]||(t[1]=(0,i.iM)((e=>m.updatePage(a.pages.current_page+1)),["prevent"])),"aria-label":"Next"},u)],2)])])}var h={props:["pages"],methods:{updatePage(e){console.log(e),this.$emit("emit-pages",e)}}},g=a(89);const _=(0,g.Z)(h,[["render",m]]);var b=_},3096:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var s=a(3396),r=a(7139),i=a(9242);const d={class:"container"},l={class:"row mt-5"},o={class:"table mt-4"},n=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{width:"120"},"購買時間"),(0,s._)("th",{width:"120"},"Email"),(0,s._)("th",{width:"300"},"購買項目"),(0,s._)("th",{width:"120"},"應付金額"),(0,s._)("th",{width:"120"},"是否已付款"),(0,s._)("th",{width:"120"},"編輯")])],-1),c={class:"text-right"},p={class:"text-right"},u={key:0,class:"text-success"},m={key:1,class:"text-muted"},h={class:"btn-group"},g=["onClick"],_=["onClick"];function b(e,t,a,b,v,w){const f=(0,s.up)("OrderModal"),O=(0,s.up)("DelModal"),k=(0,s.up)("Pagination");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",d,[(0,s._)("div",l,[(0,s._)("table",o,[n,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(v.orders,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,(0,r.zw)(e.$filters.date(t.create_at)),1),(0,s._)("td",null,(0,r.zw)(t.user.email),1),(0,s._)("td",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.products,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},(0,r.zw)(e.product.title)+" 數量："+(0,r.zw)(e.qty)+" "+(0,r.zw)(e.product.unit),1)))),128))]),(0,s._)("td",p,(0,r.zw)(e.$filters.currency(t.total)),1),(0,s._)("td",null,[t.is_paid?((0,s.wg)(),(0,s.iD)("span",u,"已付款")):((0,s.wg)(),(0,s.iD)("span",m,"未付款"))]),(0,s._)("td",null,[(0,s._)("div",h,[(0,s._)("button",{class:"btn btn-outline-primary btn-sm",onClick:(0,i.iM)((e=>w.openModal(t)),["prevent"])},"檢視",8,g),(0,s._)("button",{class:"btn btn-outline-danger btn-sm",onClick:(0,i.iM)((e=>w.openDelOrderModal(t)),["prevent"])}," 刪除 ",8,_)])])])))),128))])])])]),(0,s.Wm)(f,{ref:"orderModal",order:v.tempOrder,onReviseItem:w.reviseItem},null,8,["order","onReviseItem"]),(0,s.Wm)(O,{item:v.tempOrder,ref:"delModal",onDelItem:w.delOrder},null,8,["item","onDelItem"]),(0,s.Wm)(k,{pages:v.pagination,onEmitPages:w.getOrders},null,8,["pages","onEmitPages"])],64)}const v={class:"modal fade",id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},w={class:"modal-dialog",role:"document"},f={class:"modal-content border-0"},O=(0,s._)("div",{class:"modal-header bg-dark text-white"},[(0,s._)("h5",{class:"modal-title"},[(0,s._)("span",null,"檢視訂單")]),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),k={class:"modal-body"},M={class:"mb-3"},y={class:"mb-3"},D={class:"mb-3"},$={class:"mb-3"},z={class:"mb-3"},C={class:"mb-3"},x={class:"mb-3"},P={class:"form-check"},Z=(0,s._)("label",{class:"form-check-label",for:"is_paid"}," 是否付款 ",-1),I={class:"modal-footer"},H=(0,s._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function Y(e,t,a,d,l,o){return(0,s.wg)(),(0,s.iD)("div",v,[(0,s._)("div",w,[(0,s._)("div",f,[O,(0,s._)("div",k,[(0,s._)("div",M," 訂購人："+(0,r.zw)(l.user.name),1),(0,s._)("div",y," Email："+(0,r.zw)(l.user.email),1),(0,s._)("div",D," 購買時間："+(0,r.zw)(e.$filters.date(l.tempOrder.create_at)),1),(0,s._)("div",$,[(0,s.Uk)(" 訂單列表："),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.tempOrder.products,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},(0,r.zw)(e.product.title)+" 數量："+(0,r.zw)(e.qty)+" "+(0,r.zw)(e.product.unit),1)))),128))]),(0,s._)("div",z," 應付金額："+(0,r.zw)(e.$filters.currency(l.tempOrder.total)),1),(0,s._)("div",C," 留言："+(0,r.zw)(l.tempOrder.message),1),(0,s._)("div",x,[(0,s._)("div",P,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=e=>l.tempOrder.is_paid=e),true:1,false:0,id:"is_paid"},null,512),[[i.e8,l.tempOrder.is_paid]]),Z])])]),(0,s._)("div",I,[H,(0,s._)("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=t=>e.$emit("revise-item",l.tempOrder))},"確認 ")])])])],512)}var E=a(1339),K={props:{order:{type:Object,default(){return{}}}},data(){return{modal:{},tempOrder:{},user:""}},watch:{order(){this.tempOrder=this.order,this.user=this.tempOrder.user,console.log("tempOrder",this.tempOrder)}},mixins:[E.Z]},j=a(89);const W=(0,j.Z)(K,[["render",Y]]);var q=W,R=a(5919),U=a(6286),L={data(){return{orders:[],pagination:{},tempOrder:{}}},components:{OrderModal:q,DelModal:R.Z,Pagination:U.Z},inject:["emitter"],methods:{getOrders(e=1){const t=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/orders/?page=${e}`;this.$http.get(t).then((e=>{e.data.success&&(this.orders=e.data.orders,console.log("order",this.orders),this.pagination=e.data.pagination)}))},openModal(e){this.tempOrder={...e};const t=this.$refs.orderModal;t.showModal()},reviseItem(e){this.tempOrder=e;const t=this.$refs.orderModal,a=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/order/${this.tempOrder.id}`;this.$http.put(a,{data:this.tempOrder}).then((e=>{e.data.success&&(t.hideModal(),this.getOrders())}))},openDelOrderModal(e){this.tempOrder={...e};const t=this.$refs.delModal;t.showModal()},delOrder(){const e=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/order/${this.tempOrder.id}`;this.$http.delete(e).then((e=>{if(e.data.success){console.log(e);const t=this.$refs.delModal;t.hideModal(),this.$httpMessageState(e,e.data.message),this.getOrders()}}))}},created(){this.getOrders()}};const N=(0,j.Z)(L,[["render",b]]);var S=N}}]);
//# sourceMappingURL=96.b1cdff10.js.map