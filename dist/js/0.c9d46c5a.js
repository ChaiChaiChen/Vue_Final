"use strict";(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[0],{1e3:function(t,e,s){s.r(e),s.d(e,{default:function(){return L}});var l=s(3396),r=s(9242),a=s(7139);const d=(0,l.uE)('<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item active"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704688694154.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=TDqPpRKduKijGpwaoRFJepfnRIfVupIvLLZe9pIoUDztJ5T0%2B5gd74UhQAYGPuJbfa713z%2FGCNmeWbrXGVJJMLIAi%2BkLgDX1b5CYuSDzhtBke4vmafE4%2FZIuJl0DW1x1F34UbBTZTH%2F52yIVBQGKhgeQG3JNP6hYOl9t82FsaWYibPEH%2FhL2UVJMss8FsKbNfH0zVbxF96Uk9HDAD3jjRDfKsQnmJ5gzeLVtU3vP6GI7C%2B1ATnTWWxsJWG0UjUXF0mKvIB38f5yT7n%2FFRHPAwoPCqrx4d70Wkxxjd5R58VPD%2BST65W0%2FjGNCyf35O2YE42Y%2FXeQlvxgbScHKFMQ5og%3D%3D" class="img-fluid" alt="..."><div class="carousel-caption d-none d-md-block justify-content-center carousel-text"><h1><strong>付款</strong></h1></div></div></div></div>',1),i={class:"my-5 row justify-content-center"},o={class:"table align-middle"},n=(0,l._)("thead",null,[(0,l._)("th",null,"品名"),(0,l._)("th",null,"數量"),(0,l._)("th",null,"單價")],-1),u={class:"text-end"},c=(0,l._)("td",{colspan:"2",class:"text-end"},"總計",-1),h={class:"text-end"},p={class:"table"},_=(0,l._)("th",{width:"100"},"Email",-1),g=(0,l._)("th",null,"姓名",-1),v=(0,l._)("th",null,"收件人電話",-1),m=(0,l._)("th",null,"收件人地址",-1),b=(0,l._)("th",null,"付款狀態",-1),f={key:0},w={key:1,class:"text-success"},y={key:0,class:"text-end"},x=(0,l._)("button",{class:"btn btn-danger"},"確認付款去",-1),D=[x];function z(t,e,s,x,z,I){const k=(0,l.up)("Loading");return(0,l.wg)(),(0,l.iD)(l.HY,null,[d,(0,l.Wm)(k,{active:z.isLoading},null,8,["active"]),(0,l._)("div",i,[(0,l._)("form",{class:"col-md-6",onSubmit:e[0]||(e[0]=(0,r.iM)(((...t)=>I.payOrder&&I.payOrder(...t)),["prevent"]))},[(0,l._)("table",o,[n,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(z.order.products,(t=>((0,l.wg)(),(0,l.iD)("tr",{key:t.id},[(0,l._)("td",null,(0,a.zw)(t.product.title),1),(0,l._)("td",null,(0,a.zw)(t.qty)+"/"+(0,a.zw)(t.product.unit),1),(0,l._)("td",u,(0,a.zw)(t.final_total),1)])))),128))]),(0,l._)("tfoot",null,[(0,l._)("tr",null,[c,(0,l._)("td",h,(0,a.zw)(z.order.total),1)])])]),(0,l._)("table",p,[(0,l._)("tbody",null,[(0,l._)("tr",null,[_,(0,l._)("td",null,(0,a.zw)(z.order.user.email),1)]),(0,l._)("tr",null,[g,(0,l._)("td",null,(0,a.zw)(z.order.user.name),1)]),(0,l._)("tr",null,[v,(0,l._)("td",null,(0,a.zw)(z.order.user.tel),1)]),(0,l._)("tr",null,[m,(0,l._)("td",null,(0,a.zw)(z.order.user.address),1)]),(0,l._)("tr",null,[b,(0,l._)("td",null,[z.order.is_paid?((0,l.wg)(),(0,l.iD)("span",w,"付款完成")):((0,l.wg)(),(0,l.iD)("span",f,"尚未付款"))])])])]),!1===z.order.is_paid?((0,l.wg)(),(0,l.iD)("div",y,D)):(0,l.kq)("",!0)],32)])],64)}var I={data(){return{order:{user:{}},orderId:"",isLoading:!1}},methods:{getOrder(){const t=`https://vue3-course-api.hexschool.io/api/chaichai_api/order/${this.orderId}`;this.isLoading=!0,this.$http.get(t).then((t=>{t.data.success&&(this.order=t.data.order,console.log(this.order),this.isLoading=!1)}))},payOrder(){const t=`https://vue3-course-api.hexschool.io/api/chaichai_api/pay/${this.orderId}`;this.$http.post(t).then((t=>{console.log(t),t.data.success&&this.getOrder()}))}},created(){this.orderId=this.$route.params.orderId,console.log(this.orderId),this.getOrder()}},k=s(89);const F=(0,k.Z)(I,[["render",z]]);var L=F}}]);
//# sourceMappingURL=0.c9d46c5a.js.map