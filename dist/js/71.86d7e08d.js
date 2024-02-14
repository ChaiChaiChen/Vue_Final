"use strict";(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[71],{2071:function(o,e,t){t.r(e),t.d(e,{default:function(){return F}});var n=t(3396),l=t(7139);const a={class:"container"},s={class:"row mt-5"},i={class:"text-end mt-5"},d={class:"table mt-5 text-center table-radius"},p=(0,n._)("thead",{class:"table-theme"},[(0,n._)("tr",null,[(0,n._)("th",null,"名稱"),(0,n._)("th",null,"折扣百分比"),(0,n._)("th",null,"到期日"),(0,n._)("th",{width:"120"},"是否啟用"),(0,n._)("th",null,"編輯")])],-1),u={key:0,class:"is-enabled-border is-enabled"},c={key:1,class:"is-enabled-border not-enabled"},h={class:"btn-group"},r=["onClick"],m=(0,n._)("i",{class:"bi bi-pencil-square"},null,-1),_=[m],b=["onClick"],C=(0,n._)("i",{class:"bi bi-trash3"},null,-1),f=[C];function g(o,e,t,m,C,g){const v=(0,n.up)("Loading"),w=(0,n.up)("couponModal"),M=(0,n.up)("DelModal");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",s,[(0,n.Wm)(v,{active:C.isLoading},null,8,["active"]),(0,n._)("div",i,[(0,n._)("button",{class:"new-product",onClick:e[0]||(e[0]=o=>g.openCouponModal(!0))}," 建立優惠券 ")]),(0,n._)("table",d,[p,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(C.coupons,((e,t)=>((0,n.wg)(),(0,n.iD)("tr",{key:t},[(0,n._)("td",null,(0,l.zw)(e.title),1),(0,n._)("td",null,(0,l.zw)(e.percent)+"%",1),(0,n._)("td",null,(0,l.zw)(o.$filters.date(e.due_date)),1),(0,n._)("td",null,[1===e.is_enabled?((0,n.wg)(),(0,n.iD)("span",u,"啟用")):((0,n.wg)(),(0,n.iD)("span",c,"未啟用"))]),(0,n._)("td",null,[(0,n._)("div",h,[(0,n._)("button",{class:"btn btn-primary",onClick:o=>g.openCouponModal(!1,e)},_,8,r),(0,n._)("button",{class:"btn btn-danger",onClick:o=>g.openDelCouponModal(e)},f,8,b)])])])))),128))])]),(0,n.Wm)(w,{coupon:C.tempCoupon,ref:"couponModal",onUpdateCoupon:g.updateCoupon},null,8,["coupon","onUpdateCoupon"]),(0,n.Wm)(M,{item:C.tempCoupon,ref:"delModal",onDelItem:g.delCoupon},null,8,["item","onDelItem"])])])}var v=t(9242);const w={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},M={class:"modal-dialog",role:"document"},y={class:"modal-content"},k=(0,n._)("div",{class:"modal-header bg-modal-brown text-white"},[(0,n._)("h5",{class:"modal-title",id:"exampleModalLabel"},"優惠券"),(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),$={class:"modal-body"},D={class:"mb-3"},x=(0,n._)("label",{for:"title"},"標題",-1),L={class:"mb-3"},U=(0,n._)("label",{for:"coupon_code"},"優惠碼",-1),S={class:"mb-3"},V=(0,n._)("label",{for:"due_date"},"到期日",-1),N={class:"mb-3"},Z=(0,n._)("label",{for:"price"},"折扣百分比",-1),z={class:"mb-3"},I={class:"form-check"},W=(0,n._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),O={class:"modal-footer"},T=(0,n._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1);function j(o,e,t,l,a,s){return(0,n.wg)(),(0,n.iD)("div",w,[(0,n._)("div",M,[(0,n._)("div",y,[k,(0,n._)("div",$,[(0,n._)("div",D,[x,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=o=>a.tempCoupon.title=o),placeholder:"請輸入標題"},null,512),[[v.nr,a.tempCoupon.title]])]),(0,n._)("div",L,[U,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":e[1]||(e[1]=o=>a.tempCoupon.code=o),placeholder:"請輸入優惠碼"},null,512),[[v.nr,a.tempCoupon.code]])]),(0,n._)("div",S,[V,(0,n.wy)((0,n._)("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":e[2]||(e[2]=o=>a.due_date=o)},null,512),[[v.nr,a.due_date]])]),(0,n._)("div",N,[Z,(0,n.wy)((0,n._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[3]||(e[3]=o=>a.tempCoupon.percent=o),placeholder:"請輸入折扣百分比"},null,512),[[v.nr,a.tempCoupon.percent,void 0,{number:!0}]])]),(0,n._)("div",z,[(0,n._)("div",I,[(0,n.wy)((0,n._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[4]||(e[4]=o=>a.tempCoupon.is_enabled=o),id:"is_enabled"},null,512),[[v.e8,a.tempCoupon.is_enabled]]),W])])]),(0,n._)("div",O,[T,(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=e=>o.$emit("update-coupon",a.tempCoupon))},"更新優惠券 ")])])])],512)}var q=t(1339),H={name:"couponModal",props:{coupon:{}},data(){return{tempCoupon:{},due_date:""}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon,console.log(this.tempCoupon.due_date);const o=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T");[this.due_date]=o,"undefined"===typeof this.tempCoupon.is_enabled&&(this.tempCoupon.is_enabled=0)},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[q.Z]},K=t(89);const P=(0,K.Z)(H,[["render",j]]);var Y=P,A=t(5919),B={components:{CouponModal:Y,DelModal:A.Z},props:{config:Object},data(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isLoading:!1,isNew:!1}},methods:{openCouponModal(o,e){this.isNew=o,this.isNew?this.tempCoupon={due_date:(new Date).getTime()/1e3}:this.tempCoupon={...e},this.$refs.couponModal.showModal()},openDelCouponModal(o){this.tempCoupon={...o};const e=this.$refs.delModal;e.showModal()},getCoupons(){this.isLoading=!0;const o="https://vue3-course-api.hexschool.io/api/chaichai_api/admin/coupons";this.$http.get(o,this.tempProduct).then((o=>{this.coupons=o.data.coupons,this.isLoading=!1,console.log(o)}))},updateCoupon(o){if(this.isNew){const e="https://vue3-course-api.hexschool.io/api/chaichai_api/admin/coupon";this.$http.post(e,{data:o}).then((e=>{console.log(e,o),this.$httpMessageState(e,"新增優惠券"),this.getCoupons(),this.$refs.couponModal.hideModal()}))}else{const o=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/coupon/${this.tempCoupon.id}`;this.$http.put(o,{data:this.tempCoupon}).then((o=>{console.log(o),this.$httpMessageState(o,"新增優惠券"),this.getCoupons(),this.$refs.couponModal.hideModal()}))}},delCoupon(){const o=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/coupon/${this.tempCoupon.id}`;this.isLoading=!0,this.$http.delete(o).then((o=>{console.log(o,this.tempCoupon),this.$httpMessageState(o,"刪除優惠券");const e=this.$refs.delModal;e.hideModal(),this.getCoupons()}))}},created(){this.getCoupons()}};const E=(0,K.Z)(B,[["render",g]]);var F=E}}]);
//# sourceMappingURL=71.86d7e08d.js.map