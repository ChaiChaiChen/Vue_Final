"use strict";(self["webpackChunksoffa"]=self["webpackChunksoffa"]||[]).push([[364],{8364:function(s,a,e){e.r(a),e.d(a,{default:function(){return _}});var i=e(3396),t=e(7139);const c=(0,i.uE)('<div id="carouselExampleIndicators" class="carousel slide mt-5" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item active"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/chaichai_api/1706077463262.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=QXfnqNZnXmmFs6cbZe%2B9zxEhBhrLaFiBOvWI6UCSblbdA5aNmKSWPFm4aLSSlfiqOE9sSjRwND6a7QOJiAxA%2FcI3db944J87n5H%2B9wLO3A0hucrwGkjYCfUAW%2FO6cGK7PeNAsrgxvdDXMuW%2Bgox9oVNZMiz0Y%2BFWNn%2BBExrKD9vCrxZOX9v787IyOXgtVixOsnN573CdXko1DiWhyPlSjXHnUvb4T4MKP8upsrOYm4dYbp05Y36c8bQrFeZwnpx9VNvTOPSRCIAsCANjAV3wxWmcprl9vvfrMdzO%2B%2BiCfv0N1ng4mWrTulCvuiJGRYiAYzuu3kIL3ENFv70QaAMvnw%3D%3D" class="img-fluid" alt="..."><div class="carousel-caption justify-content-center carousel-home-text"><h1 class="bannerText">一手掌握 <br> 最新消息</h1></div></div></div></div>',1),r={class:"container"},l={class:"row my-5"},o=["onClick"],n={class:"row g-0"},d={class:"col-md-4 my-2 ps-2"},u=["src"],v={class:"col-md-8"},g={class:"card-body"},p={class:"card-title"},m={class:"card-text text-truncate-2 text-dark-gray"},h={class:"card-text"},w={class:"text-muted"};function f(s,a,e,f,x,b){return(0,i.wg)(),(0,i.iD)(i.HY,null,[c,(0,i._)("div",r,[(0,i._)("div",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(x.news,((a,e)=>((0,i.wg)(),(0,i.iD)("div",{class:"col-sm-6",key:e},[(0,i._)("div",{class:"card card-shadow mb-3 border border-gray newsCard",onClick:s=>b.getNew(a.id)},[(0,i._)("div",n,[(0,i._)("div",d,[(0,i._)("img",{src:a.imageUrl,class:"rounded img-fluid newsImg",alt:"..."},null,8,u)]),(0,i._)("div",v,[(0,i._)("div",g,[(0,i._)("h5",p,(0,t.zw)(a.title),1),(0,i._)("p",m,(0,t.zw)(a.description),1),(0,i._)("p",h,[(0,i._)("small",w,(0,t.zw)(s.$filters.date(a.create_at)),1)])])])])],8,o)])))),128))])])],64)}e(560);var x={data(){return{news:[],pagination:{}}},inject:["emitter"],methods:{getNews(){const s="https://vue3-course-api.hexschool.io/api/chaichai_api/articles";this.$http.get(s).then((s=>{this.news=s.data.articles,console.log(s.data),this.pagination=s.data.pagination,console.log(this.pagination)}))},getNew(s){console.log(s),this.$router.push(`/new/${s}`)}},created(){this.getNews()}},b=e(89);const N=(0,b.Z)(x,[["render",f]]);var _=N}}]);
//# sourceMappingURL=364.82394025.js.map