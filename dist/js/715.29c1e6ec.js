"use strict";(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[715],{7715:function(t,i,e){e.r(i),e.d(i,{default:function(){return m}});var s=e(3396),c=e(7139);const r={class:"container"},l={class:"row my-5"},a={class:"col-12 mt-5"},n={class:"text-dark-gray"},o=["src"];function p(t,i,e,p,h,d){return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",l,[(0,s._)("div",a,[(0,s._)("h3",null,(0,c.zw)(h.tempArticle.title),1),(0,s._)("p",n,(0,c.zw)(t.$filters.date(h.tempArticle.create_at)),1),(0,s._)("img",{src:h.tempArticle.imageUrl,class:"newImg",alt:""},null,8,o),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(h.descriptionList,(t=>((0,s.wg)(),(0,s.iD)("p",{class:"mt-3",key:t},(0,c.zw)(t),1)))),128))])])])}var h={data(){return{tempArticle:{},descriptionList:""}},methods:{getArticle(){const t=`https://vue3-course-api.hexschool.io/api/chaichai_api/article/${this.id}`;this.$http.get(t).then((t=>{this.tempArticle=t.data.article;const{description:i}=this.tempArticle;this.descriptionList=i.split("\n"),this.$scroll.scrollTop()}))}},created(){this.id=this.$route.params.newId,this.getArticle()}},d=e(89);const u=(0,d.Z)(h,[["render",p]]);var m=u}}]);
//# sourceMappingURL=715.29c1e6ec.js.map