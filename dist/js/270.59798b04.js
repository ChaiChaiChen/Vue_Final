"use strict";(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[270],{7270:function(e,t,s){s.r(t),s.d(t,{default:function(){return T}});var a=s(3396),l=s(7139),o=s(9242);const i=(0,a.uE)('<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item active"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1706078810302.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=MAAQRolibq6tHzK8TGDZ4o%2Bryk5I2oNYpMJwSGBo1fbSc3%2BtTDEAdEWFJSX5CdVzZFdcOsVIAkgO%2BCXlx3GXgG07d8zOL45xdw8hJt%2B2Vj%2BxiTF8DSC6BJIszgx%2F6mXWtSB1CC0FYN%2B39QVvJ1dSw0GLM1tmIsy1WRjUNTIk3T7oZYbJuFY3pmF0G7dXJr82rmgeZMKs6ySBMGkVlM7sLbVAvx08kX5J5O6ULFH4YqRAfjxUGoUyce6RzpCRnDLakbrtPD7eO9MP%2B0TP%2F04%2BYKMYT6c5IHR5bslmlMIO6jaJ6kzIHUSXKSJ99JN8FCW48CeCHF28NEw0Hq3GnJ4EPA%3D%3D" class="img-fluid" alt="..."><div class="carousel-caption justify-content-center carousel-home-text"><h1 class="bannerText">結帳</h1></div></div></div></div>',1),r={class:"container"},c={class:"my-5 row justify-content-center text-center"},d={class:"col-md-8"},n={class:"table table-hover"},u=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"品名"),(0,a._)("th",{style:{width:"100px"}},"數量"),(0,a._)("th",null,"單價"),(0,a._)("th",null,"刪除")])],-1),m={class:"bg-table-title"},p=(0,a._)("i",{class:"bi bi-link-45deg fs-5 text-danger"},null,-1),h={class:"input-group input-group-sm"},_=["onUpdate:modelValue","onChange"],f={class:"input-group-text"},b={class:"text-end"},g={key:0,class:"text-success"},v=["onClick"],y=(0,a._)("i",{class:"bi bi-trash3"},null,-1),x=[y],C=(0,a._)("td",{colspan:"3",class:"text-end"},"總計",-1),k={class:"text-end"},w={key:0},L=(0,a._)("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),V={class:"text-end text-success"},I={class:"col-lg-5 col-md-10 mt-3"},$={class:"input-group mb-3 input-group-md"},U={class:"input-group-append"},W={key:0,class:"my-5 row justify-content-center"},q={class:"mb-3"},z=(0,a._)("label",{for:"email",class:"form-label"},"Email",-1),D={class:"mb-3"},F=(0,a._)("label",{for:"name",class:"form-label"},"收件人姓名",-1),S={class:"mb-3"},B=(0,a._)("label",{for:"tel",class:"form-label"},"收件人電話",-1),J={class:"mb-3"},M=(0,a._)("label",{for:"address",class:"form-label"},"收件人地址",-1),E={class:"mb-3"},G=(0,a._)("label",{for:"message",class:"form-label"},"留言",-1),Y=(0,a._)("div",{class:"text-end"},[(0,a._)("button",{class:"btn btn-btn-bg btn-add-view btn-xl"},"送出訂單")],-1);function j(e,t,s,y,j,A){const H=(0,a.up)("Loading"),O=(0,a.up)("router-link"),T=(0,a.up)("Field"),X=(0,a.up)("ErrorMessage"),R=(0,a.up)("Form");return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,(0,a._)("div",r,[(0,a.Wm)(H,{active:j.isLoading},null,8,["active"]),(0,a._)("div",c,[(0,a._)("div",d,[(0,a._)("table",n,[u,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(j.cartsList.carts,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.Id},[(0,a._)("td",m,[(0,a.Wm)(O,{to:`/product/${t.product_id}`,class:"text-decoration-none text-theme"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(t.product.title),1),p])),_:2},1032,["to"])]),(0,a._)("td",null,[(0,a._)("div",h,[(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",min:"1","onUpdate:modelValue":e=>t.qty=e,onChange:e=>A.updateCart(t)},null,40,_),[[o.nr,t.qty,void 0,{number:!0}]]),(0,a._)("div",f,"/ "+(0,l.zw)(t.product.unit),1)])]),(0,a._)("td",b,[t.final_total!==t.total?((0,a.wg)(),(0,a.iD)("small",g,"折扣價：")):(0,a.kq)("",!0),(0,a.Uk)(" "+(0,l.zw)(e.$filters.currency(t.final_total)),1)]),(0,a._)("td",null,[(0,a._)("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:e=>A.deleteCartItem(t.id)},x,8,v)])])))),128))]),(0,a._)("tfoot",null,[(0,a._)("tr",null,[C,(0,a._)("td",k,(0,l.zw)(e.$filters.currency(j.cartsList.total)),1)]),j.cartsList.final_total!==j.cartsList.total?((0,a.wg)(),(0,a.iD)("tr",w,[L,(0,a._)("td",V,(0,l.zw)(e.$filters.currency(j.cartsList.final_total)),1)])):(0,a.kq)("",!0)])])]),(0,a._)("div",I,[(0,a._)("div",$,[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control rounded-0 form-style","onUpdate:modelValue":t[0]||(t[0]=e=>j.coupon_code=e),placeholder:"請輸入優惠碼"},null,512),[[o.nr,j.coupon_code]]),(0,a._)("div",U,[(0,a._)("button",{class:"btn btn-btn-bg",type:"button",onClick:t[1]||(t[1]=(...e)=>A.addCouponCode&&A.addCouponCode(...e))}," 套用優惠碼 ")])])])]),j.cartsList.total>0?((0,a.wg)(),(0,a.iD)("div",W,[(0,a.Wm)(R,{class:"col-md-6",onSubmit:A.createOrder},{default:(0,a.w5)((({errors:e})=>[(0,a._)("div",q,[z,(0,a.Wm)(T,{id:"email",name:"email",type:"email",class:(0,l.C_)(["form-control rounded-0 form-style",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:j.form.user.email,"onUpdate:modelValue":t[2]||(t[2]=e=>j.form.user.email=e)},null,8,["class","modelValue"]),(0,a.Wm)(X,{name:"email",class:"invalid-feedback"})]),(0,a._)("div",D,[F,(0,a.Wm)(T,{id:"name",name:"姓名",type:"text",class:(0,l.C_)(["form-control rounded-0 form-style",{"is-invalid":e["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:j.form.user.name,"onUpdate:modelValue":t[3]||(t[3]=e=>j.form.user.name=e)},null,8,["class","modelValue"]),(0,a.Wm)(X,{name:"姓名",class:"invalid-feedback"})]),(0,a._)("div",S,[B,(0,a.Wm)(T,{id:"tel",name:"電話",type:"tel",class:(0,l.C_)(["form-control rounded-0 form-style",{"is-invalid":e["電話"]}]),placeholder:"請輸入電話",rules:"required",modelValue:j.form.user.tel,"onUpdate:modelValue":t[4]||(t[4]=e=>j.form.user.tel=e)},null,8,["class","modelValue"]),(0,a.Wm)(X,{name:"電話",class:"invalid-feedback"})]),(0,a._)("div",J,[M,(0,a.Wm)(T,{id:"address",name:"地址",type:"text",class:(0,l.C_)(["form-control rounded-0 form-style",{"is-invalid":e["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:j.form.user.address,"onUpdate:modelValue":t[5]||(t[5]=e=>j.form.user.address=e)},null,8,["class","modelValue"]),(0,a.Wm)(X,{name:"地址",class:"invalid-feedback"})]),(0,a._)("div",E,[G,(0,a.wy)((0,a._)("textarea",{name:"",id:"message",class:"form-control rounded-0 form-style",cols:"30",placeholder:"留言","onUpdate:modelValue":t[6]||(t[6]=e=>j.form.message=e)},null,512),[[o.nr,j.form.message]])]),Y])),_:1},8,["onSubmit"])])):(0,a.kq)("",!0)])],64)}s(560);var A={data(){return{isLoading:!1,productList:[],cartsList:[],status:{loadingItem:""},form:{user:{name:"",email:"",tel:"",address:""},message:""},cart:{},coupon_code:""}},methods:{getProduct(e){this.$router.push(`/user/product/${e}`)},getCart(){const e="https://vue3-course-api.hexschool.io/api/chaichai_api/cart";this.isLoading=!0,this.$http.get(e).then((e=>{console.log(e),this.cartsList=e.data.data,console.log("cartsList",this.cartsList),this.isLoading=!1}))},addCouponCode(){const e="https://vue3-course-api.hexschool.io/api/chaichai_api/coupon",t={code:this.coupon_code};this.isLoading=!0,this.$http.post(e,{data:t}).then((e=>{this.$httpMessageState(e,"使用優惠券"),this.getCart(),this.isLoading=!1}))},createOrder(){const e="https://vue3-course-api.hexschool.io/api/chaichai_api/order",t=this.form;this.$http.post(e,{data:t}).then((e=>{console.log(e),this.$router.push(`pay/${e.data.orderId}`)}))},updateCart(e){const t=`https://vue3-course-api.hexschool.io/api/chaichai_api/cart/${e.id}`,s={product_id:e.product_id,qty:e.qty};this.$http.put(t,{data:s}).then((e=>{console.log(e),this.getCart()}))},deleteCartItem(e){this.status.loadingItem=e;const t=`https://vue3-course-api.hexschool.io/api/chaichai_api/cart/${e}`;this.$http.delete(t).then((e=>{console.log(e),this.status.loadingItem="",this.getCart()}))}},created(){this.getCart()}},H=s(89);const O=(0,H.Z)(A,[["render",j]]);var T=O}}]);
//# sourceMappingURL=270.59798b04.js.map