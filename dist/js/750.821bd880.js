"use strict";(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[750],{4750:function(t,s,e){e.r(s),e.d(s,{default:function(){return tt}});var i=e(3396),o=e(7139);const l=(0,i._)("div",{class:"coupon-container bg-theme text-white text-center d-flex align-items-center justify-content-center",style:{"margin-top":"85px",height:"40px"}},[(0,i._)("div",{class:"coupon-content"},"現在輸入優惠碼：95%  享有95折優惠")],-1),c={class:"container-fluid"},d={class:"row align-items-center bg-gray"},a={class:"col-md-6 gx-0 mt-5"},n=["src"],r={class:"col-md-6 d-flex justify-content-start gx-0 mt-md-5"},u={class:"d-flex flex-column m-5 ps-md-5"},m={class:"font-md-l fw-bold mb-3"},g={class:"mb-5 fs-5 text-theme"},h={class:"btn-group",role:"group","aria-label":"Basic example"},p=["disabled"],v={key:0,class:"spinner-grow text-red spinner-grow-sm"},w=(0,i._)("span",{class:"visually-hidden"},"Loading...",-1),_=[w],b=["disabled"],x=(0,i._)("i",{class:"bi bi-share"},null,-1),f={class:"row align-items-center"},P={class:"col-md-6 d-flex justify-content-center gx-0 order-2 order-md-1"},k={class:"d-flex flex-column mr-5 ms-5 content"},y={class:"col-md-6 gx-0 order-1 order-md-2"},L=["src"],I={class:"row align-items-center bg-gray"},C={class:"col-md-6 gx-0"},z=["src"],D={class:"col-md-6 d-flex justify-content-center gx-0"},$={class:"d-flex flex-column content ms-md-5 ps-5"},U={class:"row align-items-center"},T={class:"col-md-6 d-flex justify-content-center gx-0 order-2 order-md-1"},j={class:"d-flex flex-column mr-5 ms-5 content"},q={class:"col-md-6 gx-0 order-1 order-md-2"},F=["src"],H={key:0,class:"container mt-5 mb-5"},M={class:"row"},Y=(0,i._)("h3",{class:"text-center mb-4"},"相關產品",-1),K={class:"card rounded-0"},S=["onMouseenter","onMouseleave","onClick"],B=["src"],E=["src"],G={class:"card-body text-center"},O={class:"card-img-title-lg"},W={class:"card-text"},Z=["disabled","onClick"],A={key:0,class:"spinner-grow text-red spinner-grow-sm"},J=(0,i._)("span",{class:"visually-hidden"},"Loading...",-1),N=[J];function Q(t,s,e,w,J,Q){const R=(0,i.up)("Loading");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(R,{active:J.isLoading},null,8,["active"]),l,(0,i._)("div",c,[(0,i._)("div",d,[(0,i._)("div",a,[(0,i._)("img",{src:J.tempProduct.imageUrl,alt:"",class:"img-fluid"},null,8,n)]),(0,i._)("div",r,[(0,i._)("div",u,[(0,i._)("h4",m,(0,o.zw)(J.tempProduct.title),1),(0,i._)("p",g,"售價：$"+(0,o.zw)(J.tempProduct.price),1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(J.contentList,(t=>((0,i.wg)(),(0,i.iD)("p",{key:t},(0,o.zw)(t),1)))),128)),(0,i._)("div",h,[(0,i._)("button",{class:"btn btn-btn-bg btn-xl btn-add-view m-1",disabled:this.status.loadingItem===J.tempProduct.id,onClick:s[0]||(s[0]=t=>Q.addCart(J.tempProduct.id))},[this.status.loadingItem===J.tempProduct.id?((0,i.wg)(),(0,i.iD)("div",v,_)):(0,i.kq)("",!0),(0,i.Uk)(" 加入購物車")],8,p),(0,i._)("button",{class:"btn btn-btn-share-bg btn-share-view btn-xl m-1",onClick:s[1]||(s[1]=(...t)=>Q.shareUrl&&Q.shareUrl(...t)),disabled:this.status.loadingItem===J.tempProduct.id},[(0,i.Uk)(" 分享 "),x],8,b)])])])]),(0,i._)("div",f,[(0,i._)("div",P,[(0,i._)("div",k,[(0,i._)("p",null,(0,o.zw)(J.descriptionList[0]),1)])]),(0,i._)("div",y,[(0,i._)("img",{src:J.images[2],alt:"",class:"img-fluid"},null,8,L)])]),(0,i._)("div",I,[(0,i._)("div",C,[(0,i._)("img",{src:J.images[3],alt:"",class:"img-fluid"},null,8,z)]),(0,i._)("div",D,[(0,i._)("div",$,[(0,i._)("p",null,(0,o.zw)(J.descriptionList[1]),1)])])]),(0,i._)("div",U,[(0,i._)("div",T,[(0,i._)("div",j,[(0,i._)("p",null,(0,o.zw)(J.descriptionList[2]),1)])]),(0,i._)("div",q,[(0,i._)("img",{src:J.images[4],alt:"",class:"img-fluid"},null,8,F)])])]),J.relatedProducts.length>0?((0,i.wg)(),(0,i.iD)("div",H,[(0,i._)("div",M,[Y,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(J.relatedProducts,((t,s)=>((0,i.wg)(),(0,i.iD)("div",(0,i.dG)({class:"col-sm-12 col-md-6 col-xl-3 py-2",key:t.Id},t),[(0,i._)("div",K,[(0,i._)("div",{class:"card border border-white text-white text-left imgHover",onMouseenter:t=>Q.enterFun(s),onMouseleave:t=>Q.leaveFun(s),onClick:s=>Q.relatedProduct(t.id)},[J.showImage||J.n!=s?((0,i.wg)(),(0,i.iD)("img",{key:0,src:t.images[0],alt:"",class:"img-cover imageSize",height:"300"},null,8,B)):((0,i.wg)(),(0,i.iD)("img",{key:1,src:t.images[1],alt:"",class:"img-cover imageSize",height:"300"},null,8,E))],40,S),(0,i._)("div",G,[(0,i._)("h5",O,(0,o.zw)(t.title),1),(0,i._)("p",W,"售價："+(0,o.zw)(t.price),1),(0,i._)("button",{class:"btn btn-btn-bg btn-add-view btn-xl",disabled:this.status.loadingItem===t.id,onClick:s=>Q.addCart(t.id)},[this.status.loadingItem===t.id?((0,i.wg)(),(0,i.iD)("div",A,N)):(0,i.kq)("",!0),(0,i.Uk)(" 加入購物車")],8,Z)])])],16)))),128))])])):(0,i.kq)("",!0)],64)}e(560);var R={data(){return{isLoading:!1,tempProduct:{},id:"",status:{loadingItem:""},images:[],imagesList:[],contentList:{},descriptionList:{},relatedProducts:[],showImage:!0,n:0,elTop:0,share:""}},mounted(){window.addEventListener("scroll",this.scrolling)},methods:{getProduct(){const t=`https://vue3-course-api.hexschool.io/api/chaichai_api/product/${this.id}`;this.isLoading=!0,this.$http.get(t).then((t=>{this.tempProduct=t.data.product,this.images=this.tempProduct.images,this.imagesList=this.tempProduct.images.slice(5);const{content:s}=this.tempProduct;this.contentList=s.split("\n");const{description:e}=this.tempProduct;this.descriptionList=e.split("；"),this.same(this.tempProduct.category),this.isLoading=!1,this.scrollTop()}))},addCart(t){const s="https://vue3-course-api.hexschool.io/api/chaichai_api/cart";this.status.loadingItem=t;const e={product_id:t,qty:1};this.$http.post(s,{data:e}).then((t=>{this.status.loadingItem="",console.log("Products",t)}))},same(t){const s="https://vue3-course-api.hexschool.io/api/chaichai_api/products";this.$http.get(s).then((s=>{this.productList=s.data.products,this.relatedProducts=this.productList.filter((s=>s.category===t&&s.id!==this.tempProduct.id)),console.log(this.relatedProducts)}))},relatedProduct(t){this.$router.push(`/product/${t}`),this.id=t,this.getProduct()},enterFun(t){this.showImage=!1,this.n=t},leaveFun(t){this.showImage=!0,this.n=t},scrollTop(){window.scrollTo({top:0,behavior:"smooth"})},scrolling(){const t=window.pageYOffset;this.elTop=t},shareUrl(){navigator.clipboard.writeText(window.location.href).then((()=>{console.log("分享")}))}},created(){this.id=this.$route.params.productId,this.getProduct()}},V=e(89);const X=(0,V.Z)(R,[["render",Q]]);var tt=X}}]);
//# sourceMappingURL=750.821bd880.js.map