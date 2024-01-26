"use strict";(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[782],{8782:function(o,e,t){t.r(e),t.d(e,{default:function(){return q}});var n=t(3396),l=t(7139);const a={class:"container"},s={class:"row mt-5"},i={class:"text-end mt-5"},p={class:"table mt-4"},d=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"名稱"),(0,n._)("th",null,"折扣百分比"),(0,n._)("th",null,"到期日"),(0,n._)("th",null,"是否啟用"),(0,n._)("th",null,"編輯")])],-1),u={key:0,class:"text-success"},c={key:1,class:"text-muted"},h={class:"btn-group"},r=["onClick"],m=["onClick"];function _(o,e,t,_,b,C){const f=(0,n.up)("Loading"),g=(0,n.up)("couponModal"),v=(0,n.up)("DelModal");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",s,[(0,n.Wm)(f,{active:b.isLoading},null,8,["active"]),(0,n._)("div",i,[(0,n._)("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=o=>C.openCouponModal(!0))}," 建立新的優惠券 ")]),(0,n._)("table",p,[d,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(b.coupons,((e,t)=>((0,n.wg)(),(0,n.iD)("tr",{key:t},[(0,n._)("td",null,(0,l.zw)(e.title),1),(0,n._)("td",null,(0,l.zw)(e.percent)+"%",1),(0,n._)("td",null,(0,l.zw)(o.$filters.date(e.due_date)),1),(0,n._)("td",null,[1===e.is_enabled?((0,n.wg)(),(0,n.iD)("span",u,"啟用")):((0,n.wg)(),(0,n.iD)("span",c,"未起用"))]),(0,n._)("td",null,[(0,n._)("div",h,[(0,n._)("button",{class:"btn btn-outline-primary btn-sm",onClick:o=>C.openCouponModal(!1,e)},"編輯",8,r),(0,n._)("button",{class:"btn btn-outline-danger btn-sm",onClick:o=>C.openDelCouponModal(e)},"刪除",8,m)])])])))),128))])]),(0,n.Wm)(g,{coupon:b.tempCoupon,ref:"couponModal",onUpdateCoupon:C.updateCoupon},null,8,["coupon","onUpdateCoupon"]),(0,n.Wm)(v,{item:b.tempCoupon,ref:"delModal",onDelItem:C.delCoupon},null,8,["item","onDelItem"])])])}var b=t(9242);const C={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},f={class:"modal-dialog",role:"document"},g={class:"modal-content"},v=(0,n._)("div",{class:"modal-header"},[(0,n._)("h5",{class:"modal-title",id:"exampleModalLabel"},"優惠券"),(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),M={class:"modal-body"},w={class:"mb-3"},y=(0,n._)("label",{for:"title"},"標題",-1),k={class:"mb-3"},$=(0,n._)("label",{for:"coupon_code"},"優惠碼",-1),x={class:"mb-3"},D=(0,n._)("label",{for:"due_date"},"到期日",-1),L={class:"mb-3"},U=(0,n._)("label",{for:"price"},"折扣百分比",-1),S={class:"mb-3"},V={class:"form-check"},N=(0,n._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),Z={class:"modal-footer"},z=(0,n._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1);function I(o,e,t,l,a,s){return(0,n.wg)(),(0,n.iD)("div",C,[(0,n._)("div",f,[(0,n._)("div",g,[v,(0,n._)("div",M,[(0,n._)("div",w,[y,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=o=>a.tempCoupon.title=o),placeholder:"請輸入標題"},null,512),[[b.nr,a.tempCoupon.title]])]),(0,n._)("div",k,[$,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":e[1]||(e[1]=o=>a.tempCoupon.code=o),placeholder:"請輸入優惠碼"},null,512),[[b.nr,a.tempCoupon.code]])]),(0,n._)("div",x,[D,(0,n.wy)((0,n._)("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":e[2]||(e[2]=o=>a.due_date=o)},null,512),[[b.nr,a.due_date]])]),(0,n._)("div",L,[U,(0,n.wy)((0,n._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[3]||(e[3]=o=>a.tempCoupon.percent=o),placeholder:"請輸入折扣百分比"},null,512),[[b.nr,a.tempCoupon.percent,void 0,{number:!0}]])]),(0,n._)("div",S,[(0,n._)("div",V,[(0,n.wy)((0,n._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[4]||(e[4]=o=>a.tempCoupon.is_enabled=o),id:"is_enabled"},null,512),[[b.e8,a.tempCoupon.is_enabled]]),N])])]),(0,n._)("div",Z,[z,(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=e=>o.$emit("update-coupon",a.tempCoupon))},"更新優惠券 ")])])])],512)}var W=t(1339),O={name:"couponModal",props:{coupon:{}},data(){return{tempCoupon:{},due_date:""}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon,console.log(this.tempCoupon.due_date);const o=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T");[this.due_date]=o}},mixins:[W.Z]},T=t(89);const j=(0,T.Z)(O,[["render",I]]);var H=j,K=t(5919),P={components:{CouponModal:H,DelModal:K.Z},props:{config:Object},data(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isLoading:!1,isNew:!1}},methods:{openCouponModal(o,e){this.isNew=o,this.isNew?this.tempCoupon={due_date:(new Date).getTime()/1e3}:this.tempCoupon={...e},this.$refs.couponModal.showModal()},openDelCouponModal(o){this.tempCoupon={...o};const e=this.$refs.delModal;e.showModal()},getCoupons(){this.isLoading=!0;const o="https://vue3-course-api.hexschool.io/api/chaichai_api/admin/coupons";this.$http.get(o,this.tempProduct).then((o=>{this.coupons=o.data.coupons,this.isLoading=!1,console.log(o)}))},updateCoupon(o){if(this.isNew){const e="https://vue3-course-api.hexschool.io/api/chaichai_api/admin/coupon";this.$http.post(e,{data:o}).then((e=>{console.log(e,o),this.$httpMessageState(e,"新增優惠券"),this.getCoupons(),this.$refs.couponModal.hideModal()}))}else{const o=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/coupon/${this.tempCoupon.id}`;this.$http.put(o,{data:this.tempCoupon}).then((o=>{console.log(o),this.$httpMessageState(o,"新增優惠券"),this.getCoupons(),this.$refs.couponModal.hideModal()}))}},delCoupon(){const o=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/coupon/${this.tempCoupon.id}`;this.isLoading=!0,this.$http.delete(o).then((o=>{console.log(o,this.tempCoupon),this.$httpMessageState(o,"刪除優惠券");const e=this.$refs.delModal;e.hideModal(),this.getCoupons()}))}},created(){this.getCoupons()}};const Y=(0,T.Z)(P,[["render",_]]);var q=Y}}]);
//# sourceMappingURL=782.0450ea18.js.map