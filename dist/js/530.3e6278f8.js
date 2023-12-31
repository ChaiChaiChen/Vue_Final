"use strict";(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[530],{4530:function(e,t,l){l.r(t),l.d(t,{default:function(){return K}});var a=l(3396),s=l(7139),o=l(9242);const r={class:"my-5 row justify-content-center"},n={class:"col-md-8"},i={class:"table"},c=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th",null,"品名"),(0,a._)("th",{style:{width:"100px"}},"數量"),(0,a._)("th",null,"單價")])],-1),d=["onClick"],u=(0,a._)("i",{class:"bi bi-x"},null,-1),m=[u],p={class:"input-group input-group-sm"},_=["onUpdate:modelValue","onChange"],h={class:"input-group-text"},f={class:"text-end"},b={key:0,class:"text-success"},g=(0,a._)("td",{colspan:"3",class:"text-end"},"總計",-1),v={class:"text-end"},y={key:0},C=(0,a._)("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),w={class:"text-end text-success"},x={class:"input-group mb-3 input-group-sm"},k={class:"input-group-append"},V={key:0,class:"my-5 row justify-content-center"},q={class:"mb-3"},L=(0,a._)("label",{for:"email",class:"form-label"},"Email",-1),$={class:"mb-3"},U=(0,a._)("label",{for:"name",class:"form-label"},"收件人姓名",-1),W={class:"mb-3"},I=(0,a._)("label",{for:"tel",class:"form-label"},"收件人電話",-1),D={class:"mb-3"},z=(0,a._)("label",{for:"address",class:"form-label"},"收件人地址",-1),E={class:"mb-3"},j=(0,a._)("label",{for:"message",class:"form-label"},"留言",-1),F=(0,a._)("div",{class:"text-end"},[(0,a._)("button",{class:"btn btn-danger"},"送出訂單")],-1);function H(e,t,l,u,H,O){const S=(0,a.up)("Field"),Y=(0,a.up)("ErrorMessage"),K=(0,a.up)("Form");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",r,[(0,a._)("div",n,[(0,a._)("table",i,[c,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(H.cartsList.carts,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.Id},[(0,a._)("td",null,[(0,a._)("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:e=>O.deleteCartItem(t.id)},m,8,d)]),(0,a._)("td",null,(0,s.zw)(t.product.title),1),(0,a._)("td",null,[(0,a._)("div",p,[(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",min:"1","onUpdate:modelValue":e=>t.qty=e,onChange:e=>O.updateCart(t)},null,40,_),[[o.nr,t.qty,void 0,{number:!0}]]),(0,a._)("div",h,"/ "+(0,s.zw)(t.product.unit),1)])]),(0,a._)("td",f,[t.final_total!==t.total?((0,a.wg)(),(0,a.iD)("small",b,"折扣價：")):(0,a.kq)("",!0),(0,a.Uk)(" "+(0,s.zw)(e.$filters.currency(t.final_total)),1)])])))),128))]),(0,a._)("tfoot",null,[(0,a._)("tr",null,[g,(0,a._)("td",v,(0,s.zw)(H.cartsList.total),1)]),H.cartsList.final_total!==H.cartsList.total?((0,a.wg)(),(0,a.iD)("tr",y,[C,(0,a._)("td",w,(0,s.zw)(H.cartsList.final_total),1)])):(0,a.kq)("",!0)])]),(0,a._)("div",x,[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>H.coupon_code=e),placeholder:"請輸入優惠碼"},null,512),[[o.nr,H.coupon_code]]),(0,a._)("div",k,[(0,a._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:t[1]||(t[1]=(...t)=>e.addCouponCode&&e.addCouponCode(...t))}," 套用優惠碼 ")])])])]),H.cartsList.total>0?((0,a.wg)(),(0,a.iD)("div",V,[(0,a.Wm)(K,{class:"col-md-6",onSubmit:O.createOrder},{default:(0,a.w5)((({errors:e})=>[(0,a._)("div",q,[L,(0,a.Wm)(S,{id:"email",name:"email",type:"email",class:(0,s.C_)(["form-control",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:H.form.user.email,"onUpdate:modelValue":t[2]||(t[2]=e=>H.form.user.email=e)},null,8,["class","modelValue"]),(0,a.Wm)(Y,{name:"email",class:"invalid-feedback"})]),(0,a._)("div",$,[U,(0,a.Wm)(S,{id:"name",name:"姓名",type:"text",class:(0,s.C_)(["form-control",{"is-invalid":e["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:H.form.user.name,"onUpdate:modelValue":t[3]||(t[3]=e=>H.form.user.name=e)},null,8,["class","modelValue"]),(0,a.Wm)(Y,{name:"姓名",class:"invalid-feedback"})]),(0,a._)("div",W,[I,(0,a.Wm)(S,{id:"tel",name:"電話",type:"tel",class:(0,s.C_)(["form-control",{"is-invalid":e["電話"]}]),placeholder:"請輸入電話",rules:"required",modelValue:H.form.user.tel,"onUpdate:modelValue":t[4]||(t[4]=e=>H.form.user.tel=e)},null,8,["class","modelValue"]),(0,a.Wm)(Y,{name:"電話",class:"invalid-feedback"})]),(0,a._)("div",D,[z,(0,a.Wm)(S,{id:"address",name:"地址",type:"text",class:(0,s.C_)(["form-control",{"is-invalid":e["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:H.form.user.address,"onUpdate:modelValue":t[5]||(t[5]=e=>H.form.user.address=e)},null,8,["class","modelValue"]),(0,a.Wm)(Y,{name:"地址",class:"invalid-feedback"})]),(0,a._)("div",E,[j,(0,a.wy)((0,a._)("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[6]||(t[6]=e=>H.form.message=e)},null,512),[[o.nr,H.form.message]])]),F])),_:1},8,["onSubmit"])])):(0,a.kq)("",!0)],64)}l(560);var O={data(){return{productList:[],cartsList:[],status:{loadingItem:""},form:{user:{name:"",email:"",tel:"",address:""},message:""},cart:{},coupon_code:""}},methods:{getProduct(e){this.$router.push(`/user/product/${e}`)},getCart(){const e="https://vue3-course-api.hexschool.io/api/chaichai_api/cart";this.$http.get(e).then((e=>{console.log(e),this.cartsList=e.data.data,console.log("cartsList",this.cartsList)}))},createOrder(){const e="https://vue3-course-api.hexschool.io/api/chaichai_api/order",t=this.form;this.$http.post(e,{data:t}).then((e=>{console.log(e),this.$router.push(`pay/${e.data.orderId}`)}))},updateCart(e){const t=`https://vue3-course-api.hexschool.io/api/chaichai_api/cart/${e.id}`,l={product_id:e.product_id,qty:e.qty};this.$http.put(t,{data:l}).then((e=>{console.log(e),this.getCart()}))},deleteCartItem(e){this.status.loadingItem=e;const t=`https://vue3-course-api.hexschool.io/api/chaichai_api/cart/${e}`;this.$http.delete(t).then((e=>{console.log(e),this.status.loadingItem="",this.getCart()}))}},created(){this.getCart()}},S=l(89);const Y=(0,S.Z)(O,[["render",H]]);var K=Y}}]);
//# sourceMappingURL=530.3e6278f8.js.map