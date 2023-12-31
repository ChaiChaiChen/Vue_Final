"use strict";(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[871],{8871:function(e,t,a){a.r(t),a.d(t,{default:function(){return O}});var s=a(3396),l=a(7139),o=a(9242);const r=(0,s._)("div",{class:"banner"},[(0,s._)("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1703908235018.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HMirTBLqIDnBljng1KfXDplpROeMbDTPnuByMw7zyhfEA68A1cJ50BtPiG5fy%2BK0tNn%2Fp2LrpF01mQN7L0Q0eJxm19w6GYS0BiabUcYqF4gy0iYbvPB7qgrmG1duyOETR16Ms8zwRkt2hd1oM%2F3Fbi78sn%2FRjheIcp8X%2BdVQjvdaINQsxsn5GKyvFHjdfG8QzqmI4%2FR2WuDhWzZNQbfqGX49PM0H%2Bedb%2FuABPzfu7Zgknnxx6SBoj4tLIiJFByfKEbeu%2F6gEZh1mOoEmspR84XpnGVedOA9AJQm8I9c%2FK9bTcZbtG8GshqrXNR7PU%2FzOBv1%2FdANSkDZQXhhrYQqb5Q%3D%3D",class:"d-block w-100",alt:"..."})],-1),i={class:"my-5 row justify-content-center"},n={class:"col-md-8"},c={class:"table"},d=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th"),(0,s._)("th",null,"品名"),(0,s._)("th",{style:{width:"100px"}},"數量"),(0,s._)("th",null,"單價")])],-1),u=["onClick"],m=(0,s._)("i",{class:"bi bi-x"},null,-1),p=[m],h={class:"input-group input-group-sm"},_=["onUpdate:modelValue","onChange"],f={class:"input-group-text"},b={class:"text-end"},g={key:0,class:"text-success"},v=(0,s._)("td",{colspan:"3",class:"text-end"},"總計",-1),y={class:"text-end"},w={key:0},x=(0,s._)("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),k={class:"text-end text-success"},C={class:"input-group mb-3 input-group-sm"},q={class:"input-group-append"},V={key:0,class:"my-5 row justify-content-center"},F={class:"mb-3"},L=(0,s._)("label",{for:"email",class:"form-label"},"Email",-1),I={class:"mb-3"},z=(0,s._)("label",{for:"name",class:"form-label"},"收件人姓名",-1),B={class:"mb-3"},D=(0,s._)("label",{for:"tel",class:"form-label"},"收件人電話",-1),U={class:"mb-3"},W=(0,s._)("label",{for:"address",class:"form-label"},"收件人地址",-1),$={class:"mb-3"},G=(0,s._)("label",{for:"message",class:"form-label"},"留言",-1),Q=(0,s._)("div",{class:"text-end"},[(0,s._)("button",{class:"btn btn-danger"},"送出訂單")],-1);function E(e,t,a,m,E,j){const A=(0,s.up)("Field"),M=(0,s.up)("ErrorMessage"),O=(0,s.up)("Form");return(0,s.wg)(),(0,s.iD)(s.HY,null,[r,(0,s._)("div",i,[(0,s._)("div",n,[(0,s._)("table",c,[d,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(E.cartsList.carts,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.Id},[(0,s._)("td",null,[(0,s._)("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:e=>j.deleteCartItem(t.id)},p,8,u)]),(0,s._)("td",null,(0,l.zw)(t.product.title),1),(0,s._)("td",null,[(0,s._)("div",h,[(0,s.wy)((0,s._)("input",{type:"number",class:"form-control",min:"1","onUpdate:modelValue":e=>t.qty=e,onChange:e=>j.updateCart(t)},null,40,_),[[o.nr,t.qty,void 0,{number:!0}]]),(0,s._)("div",f,"/ "+(0,l.zw)(t.product.unit),1)])]),(0,s._)("td",b,[t.final_total!==t.total?((0,s.wg)(),(0,s.iD)("small",g,"折扣價：")):(0,s.kq)("",!0),(0,s.Uk)(" "+(0,l.zw)(e.$filters.currency(t.final_total)),1)])])))),128))]),(0,s._)("tfoot",null,[(0,s._)("tr",null,[v,(0,s._)("td",y,(0,l.zw)(E.cartsList.total),1)]),E.cartsList.final_total!==E.cartsList.total?((0,s.wg)(),(0,s.iD)("tr",w,[x,(0,s._)("td",k,(0,l.zw)(E.cartsList.final_total),1)])):(0,s.kq)("",!0)])]),(0,s._)("div",C,[(0,s.wy)((0,s._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>E.coupon_code=e),placeholder:"請輸入優惠碼"},null,512),[[o.nr,E.coupon_code]]),(0,s._)("div",q,[(0,s._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:t[1]||(t[1]=(...t)=>e.addCouponCode&&e.addCouponCode(...t))}," 套用優惠碼 ")])])])]),E.cartsList.total>0?((0,s.wg)(),(0,s.iD)("div",V,[(0,s.Wm)(O,{class:"col-md-6",onSubmit:j.createOrder},{default:(0,s.w5)((({errors:e})=>[(0,s._)("div",F,[L,(0,s.Wm)(A,{id:"email",name:"email",type:"email",class:(0,l.C_)(["form-control",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:E.form.user.email,"onUpdate:modelValue":t[2]||(t[2]=e=>E.form.user.email=e)},null,8,["class","modelValue"]),(0,s.Wm)(M,{name:"email",class:"invalid-feedback"})]),(0,s._)("div",I,[z,(0,s.Wm)(A,{id:"name",name:"姓名",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":e["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:E.form.user.name,"onUpdate:modelValue":t[3]||(t[3]=e=>E.form.user.name=e)},null,8,["class","modelValue"]),(0,s.Wm)(M,{name:"姓名",class:"invalid-feedback"})]),(0,s._)("div",B,[D,(0,s.Wm)(A,{id:"tel",name:"電話",type:"tel",class:(0,l.C_)(["form-control",{"is-invalid":e["電話"]}]),placeholder:"請輸入電話",rules:"required",modelValue:E.form.user.tel,"onUpdate:modelValue":t[4]||(t[4]=e=>E.form.user.tel=e)},null,8,["class","modelValue"]),(0,s.Wm)(M,{name:"電話",class:"invalid-feedback"})]),(0,s._)("div",U,[W,(0,s.Wm)(A,{id:"address",name:"地址",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":e["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:E.form.user.address,"onUpdate:modelValue":t[5]||(t[5]=e=>E.form.user.address=e)},null,8,["class","modelValue"]),(0,s.Wm)(M,{name:"地址",class:"invalid-feedback"})]),(0,s._)("div",$,[G,(0,s.wy)((0,s._)("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[6]||(t[6]=e=>E.form.message=e)},null,512),[[o.nr,E.form.message]])]),Q])),_:1},8,["onSubmit"])])):(0,s.kq)("",!0)],64)}a(560);var j={data(){return{productList:[],cartsList:[],status:{loadingItem:""},form:{user:{name:"",email:"",tel:"",address:""},message:""},cart:{},coupon_code:""}},methods:{getProduct(e){this.$router.push(`/user/product/${e}`)},getCart(){const e="https://vue3-course-api.hexschool.io/api/chaichai_api/cart";this.$http.get(e).then((e=>{console.log(e),this.cartsList=e.data.data,console.log("cartsList",this.cartsList)}))},createOrder(){const e="https://vue3-course-api.hexschool.io/api/chaichai_api/order",t=this.form;this.$http.post(e,{data:t}).then((e=>{console.log(e),this.$router.push(`pay/${e.data.orderId}`)}))},updateCart(e){const t=`https://vue3-course-api.hexschool.io/api/chaichai_api/cart/${e.id}`,a={product_id:e.product_id,qty:e.qty};this.$http.put(t,{data:a}).then((e=>{console.log(e),this.getCart()}))},deleteCartItem(e){this.status.loadingItem=e;const t=`https://vue3-course-api.hexschool.io/api/chaichai_api/cart/${e}`;this.$http.delete(t).then((e=>{console.log(e),this.status.loadingItem="",this.getCart()}))}},created(){this.getCart()}},A=a(89);const M=(0,A.Z)(j,[["render",E]]);var O=M}}]);
//# sourceMappingURL=871.74191c39.js.map