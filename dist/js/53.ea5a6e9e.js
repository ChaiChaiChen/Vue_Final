"use strict";(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[53],{7053:function(t,e,s){s.r(e),s.d(e,{default:function(){return P}});var i=s(3396),a=s(7139);const r=(0,i.uE)('<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item active"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1704688694154.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=TDqPpRKduKijGpwaoRFJepfnRIfVupIvLLZe9pIoUDztJ5T0%2B5gd74UhQAYGPuJbfa713z%2FGCNmeWbrXGVJJMLIAi%2BkLgDX1b5CYuSDzhtBke4vmafE4%2FZIuJl0DW1x1F34UbBTZTH%2F52yIVBQGKhgeQG3JNP6hYOl9t82FsaWYibPEH%2FhL2UVJMss8FsKbNfH0zVbxF96Uk9HDAD3jjRDfKsQnmJ5gzeLVtU3vP6GI7C%2B1ATnTWWxsJWG0UjUXF0mKvIB38f5yT7n%2FFRHPAwoPCqrx4d70Wkxxjd5R58VPD%2BST65W0%2FjGNCyf35O2YE42Y%2FXeQlvxgbScHKFMQ5og%3D%3D" class="img-fluid" alt="..."><div class="carousel-caption d-none d-md-block justify-content-center carousel-text"><h1><strong>安坐家中 <br> 樂享生活</strong></h1></div></div></div></div>',1),c={class:"container"},o={class:"row"},l={class:"list-group list-group-horizontal justify-content-center mt-3"},d={class:"container"},n={class:"row mt-5"},u={class:"card rounded-0"},g=["onMouseenter","onMouseleave","onClick"],h=["src"],p=["src"],v={class:"card-body text-center"},m={class:"card-img-title-lg"},f={class:"card-text"},b=["disabled","onClick"],k={key:0,class:"spinner-grow text-red spinner-grow-sm"},y=(0,i._)("span",{class:"visually-hidden"},"Loading...",-1),_=[y];function w(t,e,s,y,w,F){return(0,i.wg)(),(0,i.iD)(i.HY,null,[r,(0,i._)("div",c,[(0,i._)("div",o,[(0,i._)("ul",l,[(0,i._)("li",{class:(0,a.C_)(["list-group-item",{active:"全部"===w.filterType}]),onClick:e[0]||(e[0]=t=>F.getFilter(w.filterType="全部"))},"全部商品",2),(0,i._)("li",{class:(0,a.C_)(["list-group-item",{active:"布質"===w.filterType}]),onClick:e[1]||(e[1]=t=>F.getFilter(w.filterType="布質"))},"布質沙發",2),(0,i._)("li",{class:(0,a.C_)(["list-group-item",{active:"半皮"===w.filterType}]),onClick:e[2]||(e[2]=t=>F.getFilter(w.filterType="半皮"))},"半皮沙發",2),(0,i._)("li",{class:(0,a.C_)(["list-group-item",{active:"全皮"===w.filterType}]),onClick:e[3]||(e[3]=t=>F.getFilter(w.filterType="全皮"))},"全皮沙發",2)])])]),(0,i._)("div",d,[(0,i._)("div",n,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(w.relatedProducts,((t,e)=>((0,i.wg)(),(0,i.iD)("div",(0,i.dG)({class:"col-sm-12 col-md-6 col-xl-4 py-2",key:t.Id},t),[(0,i._)("div",u,[(0,i._)("div",{class:"card border-white text-white text-left imgHover",onMouseenter:t=>F.enterFun(e),onMouseleave:t=>F.leaveFun(e),onClick:e=>F.getProduct(t.id)},[w.showImage||w.n!=e?((0,i.wg)(),(0,i.iD)("img",{key:0,src:t.images[0],class:"img-cover imgSize",height:"350"},null,8,h)):((0,i.wg)(),(0,i.iD)("img",{key:1,src:t.images[1],class:"img-cover imgSize",height:"350"},null,8,p))],40,g),(0,i._)("div",v,[(0,i._)("h5",m,(0,a.zw)(t.title),1),(0,i._)("p",f,"售價："+(0,a.zw)(t.price),1),(0,i._)("button",{class:"btn btn-btn-bg btn-view btn-xl",disabled:this.status.loadingItem===t.id,onClick:e=>F.addCart(t.id)},[this.status.loadingItem===t.id?((0,i.wg)(),(0,i.iD)("div",k,_)):(0,i.kq)("",!0),(0,i.Uk)(" 加入購物車")],8,b)])])],16)))),128))])])],64)}s(560);var F={data(){return{productList:[],status:{loadingItem:""},showImage:!0,relatedProducts:[],filterType:"全部",n:0}},methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/chaichai_api/products";this.$http.get(t).then((t=>{this.productList=t.data.products,this.relatedProducts=this.productList,console.log(this.productList)}))},getFilter(){switch(this.filterType){case"全部":this.relatedProducts=this.productList;break;case"布質":this.relatedProducts=this.productList.filter((t=>"布質"===t.category));break;case"半皮":this.relatedProducts=this.productList.filter((t=>"半皮"===t.category));break;case"全皮":this.relatedProducts=this.productList.filter((t=>"全皮"===t.category));break;default:break}},getProduct(t){this.$router.push(`/user/product/${t}`)},addCart(t){const e="https://vue3-course-api.hexschool.io/api/chaichai_api/cart";this.status.loadingItem=t;const s={product_id:t,qty:1};this.$http.post(e,{data:s}).then((t=>{this.status.loadingItem="",console.log("Products",t)}))},enterFun(t){this.showImage=!1,this.n=t},leaveFun(t){this.showImage=!0,this.n=t}},created(){this.getProducts()}},C=s(89);const I=(0,C.Z)(F,[["render",w]]);var P=I}}]);
//# sourceMappingURL=53.ea5a6e9e.js.map