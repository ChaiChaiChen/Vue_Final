"use strict";(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[966],{2966:function(t,e,a){a.r(e),a.d(e,{default:function(){return Z}});var s=a(3396),l=a(7139),o=a(9242);const r=(0,s.uE)('<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item active"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1706078810302.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=MAAQRolibq6tHzK8TGDZ4o%2Bryk5I2oNYpMJwSGBo1fbSc3%2BtTDEAdEWFJSX5CdVzZFdcOsVIAkgO%2BCXlx3GXgG07d8zOL45xdw8hJt%2B2Vj%2BxiTF8DSC6BJIszgx%2F6mXWtSB1CC0FYN%2B39QVvJ1dSw0GLM1tmIsy1WRjUNTIk3T7oZYbJuFY3pmF0G7dXJr82rmgeZMKs6ySBMGkVlM7sLbVAvx08kX5J5O6ULFH4YqRAfjxUGoUyce6RzpCRnDLakbrtPD7eO9MP%2B0TP%2F04%2BYKMYT6c5IHR5bslmlMIO6jaJ6kzIHUSXKSJ99JN8FCW48CeCHF28NEw0Hq3GnJ4EPA%3D%3D" class="img-fluid" alt="..."><div class="carousel-caption justify-content-center carousel-home-text"><h1 class="bannerText">結帳</h1></div></div></div></div>',1),c={class:"container"},i={class:"my-5 row justify-content-center text-center"},n={class:"col-md-8"},d={class:"table table-hover"},u=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th"),(0,s._)("th",null,"品名"),(0,s._)("th",{class:"unit"},"數量"),(0,s._)("th",null,"單價"),(0,s._)("th",null,"刪除")])],-1),m=["src"],p={class:"bg-table-title"},h=(0,s._)("i",{class:"bi bi-link-45deg fs-5 text-danger"},null,-1),_={class:"input-group input-group-sm"},g=["onUpdate:modelValue","onChange"],f={class:"input-group-text"},b={class:"text-end"},v={key:0,class:"text-success"},y=["onClick"],C=(0,s._)("i",{class:"bi bi-trash3"},null,-1),x=[C],k=(0,s._)("td",{colspan:"4",class:"text-end"},"總計",-1),w={class:"text-end"},V={key:0},L=(0,s._)("td",{colspan:"4",class:"text-end text-success"},"折扣價",-1),I={class:"text-end text-success"},U={class:"col-lg-5 col-md-10 mt-3"},W={class:"input-group mb-3 input-group-md"},$={class:"input-group-append"},q={key:0,class:"my-5 row justify-content-center"},S={class:"mb-3"},z=(0,s._)("label",{for:"email",class:"form-label"},"Email",-1),D={class:"mb-3"},F=(0,s._)("label",{for:"name",class:"form-label"},"收件人姓名",-1),B={class:"mb-3"},J=(0,s._)("label",{for:"tel",class:"form-label"},"收件人電話",-1),M={class:"mb-3"},E=(0,s._)("label",{for:"address",class:"form-label"},"收件人地址",-1),G={class:"mb-3"},Y=(0,s._)("label",{for:"message",class:"form-label"},"留言",-1),j=(0,s._)("div",{class:"text-end"},[(0,s._)("button",{class:"btn btn-btn-bg btn-add-view btn-xl"},"送出訂單")],-1);function A(t,e,a,C,A,H){const O=(0,s.up)("Loading"),T=(0,s.up)("router-link"),X=(0,s.up)("Field"),P=(0,s.up)("ErrorMessage"),R=(0,s.up)("Form");return(0,s.wg)(),(0,s.iD)(s.HY,null,[r,(0,s._)("div",c,[(0,s.Wm)(O,{active:A.isLoading},null,8,["active"]),(0,s._)("div",i,[(0,s._)("div",n,[(0,s._)("table",d,[u,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.cartsList.carts,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.Id},[(0,s._)("td",null,[(0,s._)("img",{src:e.product.images[0],class:"productImg",alt:""},null,8,m)]),(0,s._)("td",p,[(0,s.Wm)(T,{to:`/product/${e.product_id}`,class:"text-decoration-none text-theme"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(e.product.title),1),h])),_:2},1032,["to"])]),(0,s._)("td",null,[(0,s._)("div",_,[(0,s.wy)((0,s._)("input",{type:"number",class:"form-control",min:"1","onUpdate:modelValue":t=>e.qty=t,onChange:t=>H.updateCart(e)},null,40,g),[[o.nr,e.qty,void 0,{number:!0}]]),(0,s._)("div",f,"/ "+(0,l.zw)(e.product.unit),1)])]),(0,s._)("td",b,[e.final_total!==e.total?((0,s.wg)(),(0,s.iD)("small",v,"折扣價：")):(0,s.kq)("",!0),(0,s.Uk)(" "+(0,l.zw)(t.$filters.currency(e.final_total)),1)]),(0,s._)("td",null,[(0,s._)("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:t=>H.deleteCartItem(e.id)},x,8,y)])])))),128))]),(0,s._)("tfoot",null,[(0,s._)("tr",null,[k,(0,s._)("td",w,(0,l.zw)(t.$filters.currency(t.cartsList.total)),1)]),t.cartsList.final_total!==t.cartsList.total?((0,s.wg)(),(0,s.iD)("tr",V,[L,(0,s._)("td",I,(0,l.zw)(t.$filters.currency(t.cartsList.final_total)),1)])):(0,s.kq)("",!0)])])]),(0,s._)("div",U,[(0,s._)("div",W,[(0,s.wy)((0,s._)("input",{type:"text",class:"form-control rounded-0 form-style","onUpdate:modelValue":e[0]||(e[0]=t=>A.coupon_code=t),placeholder:"請輸入優惠碼"},null,512),[[o.nr,A.coupon_code]]),(0,s._)("div",$,[(0,s._)("button",{class:"btn btn-btn-bg",type:"button",onClick:e[1]||(e[1]=(...t)=>H.addCouponCode&&H.addCouponCode(...t))}," 套用優惠碼 ")])])])]),t.cartsList.total>0?((0,s.wg)(),(0,s.iD)("div",q,[(0,s.Wm)(R,{class:"col-md-6",onSubmit:H.createOrder},{default:(0,s.w5)((({errors:t})=>[(0,s._)("div",S,[z,(0,s.Wm)(X,{id:"email",name:"email",type:"email",class:(0,l.C_)(["form-control rounded-0 form-style",{"is-invalid":t["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:A.form.user.email,"onUpdate:modelValue":e[2]||(e[2]=t=>A.form.user.email=t)},null,8,["class","modelValue"]),(0,s.Wm)(P,{name:"email",class:"invalid-feedback"})]),(0,s._)("div",D,[F,(0,s.Wm)(X,{id:"name",name:"姓名",type:"text",class:(0,l.C_)(["form-control rounded-0 form-style",{"is-invalid":t["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:A.form.user.name,"onUpdate:modelValue":e[3]||(e[3]=t=>A.form.user.name=t)},null,8,["class","modelValue"]),(0,s.Wm)(P,{name:"姓名",class:"invalid-feedback"})]),(0,s._)("div",B,[J,(0,s.Wm)(X,{id:"tel",name:"電話",type:"tel",class:(0,l.C_)(["form-control rounded-0 form-style",{"is-invalid":t["電話"]}]),placeholder:"請輸入電話",rules:"required",modelValue:A.form.user.tel,"onUpdate:modelValue":e[4]||(e[4]=t=>A.form.user.tel=t)},null,8,["class","modelValue"]),(0,s.Wm)(P,{name:"電話",class:"invalid-feedback"})]),(0,s._)("div",M,[E,(0,s.Wm)(X,{id:"address",name:"地址",type:"text",class:(0,l.C_)(["form-control rounded-0 form-style",{"is-invalid":t["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:A.form.user.address,"onUpdate:modelValue":e[5]||(e[5]=t=>A.form.user.address=t)},null,8,["class","modelValue"]),(0,s.Wm)(P,{name:"地址",class:"invalid-feedback"})]),(0,s._)("div",G,[Y,(0,s.wy)((0,s._)("textarea",{name:"",id:"message",class:"form-control rounded-0 form-style",cols:"30",placeholder:"留言","onUpdate:modelValue":e[6]||(e[6]=t=>A.form.message=t)},null,512),[[o.nr,A.form.message]])]),j])),_:1},8,["onSubmit"])])):(0,s.kq)("",!0)])],64)}a(560);var H=a(1020),O=a(1076),T=(0,H.Q_)("getCartStore",{state:()=>({carts:[]}),getters:{cartsList:t=>t.carts},actions:{getCart(){return new Promise((async(t,e)=>{const a="https://vue3-course-api.hexschool.io/api/chaichai_api/cart";try{const e=await O.Z.get(a);this.carts=e.data.data,t()}catch(s){console.log(s),e()}}))}}}),X={data(){return{isLoading:!1,productList:[],status:{loadingItem:""},form:{user:{name:"",email:"",tel:"",address:""},message:""},cart:{},coupon_code:""}},computed:{...(0,H.rn)(T,["cartsList"])},methods:{...(0,H.nv)(T,["getCart"]),getProduct(t){this.$router.push(`/user/product/${t}`)},addCouponCode(){const t="https://vue3-course-api.hexschool.io/api/chaichai_api/coupon",e={code:this.coupon_code};this.isLoading=!0,this.$http.post(t,{data:e}).then((t=>{this.$httpMessageState(t,"使用優惠券"),this.getCart(),this.isLoading=!1}))},createOrder(){const t="https://vue3-course-api.hexschool.io/api/chaichai_api/order",e=this.form;this.$http.post(t,{data:e}).then((t=>{console.log(t),this.$router.push(`pay/${t.data.orderId}`)}))},updateCart(t){const e=`https://vue3-course-api.hexschool.io/api/chaichai_api/cart/${t.id}`,a={product_id:t.product_id,qty:t.qty};this.$http.put(e,{data:a}).then((t=>{console.log(t),this.getCart()}))},deleteCartItem(t){this.status.loadingItem=t;const e=`https://vue3-course-api.hexschool.io/api/chaichai_api/cart/${t}`;this.$http.delete(e).then((t=>{console.log(t),this.status.loadingItem="",this.getCart()}))}},async created(){try{await this.getCart()}catch(t){console.log(t)}}},P=a(89);const R=(0,P.Z)(X,[["render",A]]);var Z=R}}]);
//# sourceMappingURL=966.9add61cb.js.map