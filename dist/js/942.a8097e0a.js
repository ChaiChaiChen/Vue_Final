"use strict";(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[942],{6942:function(t,e,s){s.r(e),s.d(e,{default:function(){return L}});var i=s(3396),a=s(7139);const c=(0,i.uE)('<div id="carouselExampleIndicators" class="carousel slide mt-5" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item active"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1706077315976.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=D7%2BEdS2XnksgpFa1QOFNVE0MXXPJC8NCGx1JPzBv5QhXO0BV1fZS3dwdhI04MNzsxeblXDUEb8kyo0BLzgyqud0wg4Kj9c3fNbLbStXlVxGhofVrUYCul8uyes65R5dhMAQCe7lP0esqFKHTEsGatIloErJEUokuD2DUEFNA7aWYDMRAX0UD2efeuK2glXsbIS9uNlzS32Tw9JHpWMwp4pygOy1zVrg85OuVETeQ7UumA821mxIOeMHxZ74sKjimSAeyYNJbkJeY%2FOYUflqdcGcaZh2G6NUzELn3%2Bh5CvesxnVo504e5pXCmPyJHH%2BeaYY9EeJbaeIqeUc6RP2W1IA%3D%3D" class="img-fluid" alt="..."><div class="carousel-caption justify-content-center carousel-home-text"><h1 class="bannerText">安坐家中 <br> 樂享生活</h1></div></div></div></div>',1),r={class:"container"},l={class:"row"},o={class:"col"},d={class:"list-group list-group-horizontal justify-content-center mt-3"},n={class:"container"},u={class:"row mt-5 mb-5"},g={class:"card rounded-0"},h=["onMouseenter","onMouseleave","onClick"],p=["src"],m=["src"],v={class:"card-body text-center bg-card"},f={class:"card-img-title-lg"},y={class:"card-text"},b=["disabled","onClick"],k={key:0,class:"spinner-grow text-red spinner-grow-sm"},_=(0,i._)("span",{class:"visually-hidden"},"Loading...",-1),w=[_];function C(t,e,s,_,C,x){const I=(0,i.up)("Loading");return(0,i.wg)(),(0,i.iD)(i.HY,null,[c,(0,i._)("div",r,[(0,i.Wm)(I,{active:C.isLoading},null,8,["active"]),(0,i._)("div",l,[(0,i._)("div",o,[(0,i._)("ul",d,[(0,i._)("li",{class:(0,a.C_)(["list-group-item",{active:"全部"===C.filterType}]),onClick:e[0]||(e[0]=t=>x.getFilter(C.filterType="全部"))},"全部商品",2),(0,i._)("li",{class:(0,a.C_)(["list-group-item",{active:"布質"===C.filterType}]),onClick:e[1]||(e[1]=t=>x.getFilter(C.filterType="布質"))},"布質沙發",2),(0,i._)("li",{class:(0,a.C_)(["list-group-item",{active:"半皮"===C.filterType}]),onClick:e[2]||(e[2]=t=>x.getFilter(C.filterType="半皮"))},"半皮沙發",2),(0,i._)("li",{class:(0,a.C_)(["list-group-item",{active:"全皮"===C.filterType}]),onClick:e[3]||(e[3]=t=>x.getFilter(C.filterType="全皮"))},"全皮沙發",2)])])])]),(0,i._)("div",n,[(0,i._)("div",u,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(C.relatedProducts,((e,s)=>((0,i.wg)(),(0,i.iD)("div",(0,i.dG)({class:"col-sm-12 col-md-6 col-xl-4 py-2",key:e.Id},e),[(0,i._)("div",g,[(0,i._)("div",{class:"card border-white text-white text-left imgHover",onMouseenter:t=>x.enterFun(s),onMouseleave:t=>x.leaveFun(s),onClick:t=>x.getProduct(e.id)},[C.showImage||C.n!=s?((0,i.wg)(),(0,i.iD)("img",{key:0,src:e.images[0],class:"img-cover imgSize",height:"350"},null,8,p)):((0,i.wg)(),(0,i.iD)("img",{key:1,src:e.images[1],class:"img-cover imgSize",height:"350"},null,8,m))],40,h),(0,i._)("div",v,[(0,i._)("h5",f,(0,a.zw)(e.title),1),(0,i._)("p",y,"售價："+(0,a.zw)(t.$filters.currency(e.price)),1),(0,i._)("button",{class:"btn btn-btn-bg btn-add-view btn-xl",disabled:this.status.loadingItem===e.id,onClick:t=>x.addCart(e.id)},[this.status.loadingItem===e.id?((0,i.wg)(),(0,i.iD)("div",k,w)):(0,i.kq)("",!0),(0,i.Uk)(" 加入購物車")],8,b)])])],16)))),128))])])],64)}s(560);var x={data(){return{isLoading:!1,productList:[],status:{loadingItem:""},showImage:!0,relatedProducts:[],filterType:"全部",n:0}},inject:["emitter"],methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/chaichai_api/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{this.productList=t.data.products,this.relatedProducts=this.productList,console.log(t),this.isLoading=!1}))},getFilter(){switch(this.filterType){case"全部":this.relatedProducts=this.productList;break;case"布質":this.relatedProducts=this.productList.filter((t=>"布質"===t.category));break;case"半皮":this.relatedProducts=this.productList.filter((t=>"半皮"===t.category));break;case"全皮":this.relatedProducts=this.productList.filter((t=>"全皮"===t.category));break;default:break}},getProduct(t){this.$router.push(`/product/${t}`)},addCart(t){const e="https://vue3-course-api.hexschool.io/api/chaichai_api/cart";this.status.loadingItem=t;const s={product_id:t,qty:1};this.$http.post(e,{data:s}).then((t=>{this.status.loadingItem="",console.log("Products",t),this.$httpMessageState(t,"加入購物車")}))},enterFun(t){this.showImage=!1,this.n=t},leaveFun(t){this.showImage=!0,this.n=t}},created(){this.getProducts()}},I=s(89);const P=(0,I.Z)(x,[["render",C]]);var L=P}}]);
//# sourceMappingURL=942.a8097e0a.js.map