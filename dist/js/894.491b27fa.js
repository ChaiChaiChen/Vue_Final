"use strict";(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[894],{8894:function(t,i,n){n.r(i),n.d(i,{default:function(){return v}});var e=n(3396),s=n(7139);const u={class:"container"},l={class:"row mt-4"},r={class:"col-md-7"},o={class:"table align-middle"},c=(0,e._)("thead",null,[(0,e._)("tr",null,[(0,e._)("th",{width:"120"},"圖片"),(0,e._)("th",{width:"120"},"商品名稱"),(0,e._)("th",{width:"120"},"價格"),(0,e._)("th",{width:"120"})])],-1),d={class:"btn-group"},a=["onClick"],h=(0,e._)("button",{class:"btn btn-outline-danger btn-sm"},"加入購物車",-1);function p(t,i,n,p,_,g){return(0,e.wg)(),(0,e.iD)("div",u,[(0,e._)("div",l,[(0,e._)("div",r,[(0,e._)("table",o,[c,(0,e._)("tbody",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(_.productList,(t=>((0,e.wg)(),(0,e.iD)("tr",{key:t.id},[(0,e._)("td",null,[(0,e._)("div",{style:(0,s.j5)([{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${t.imageUrl})`}])},null,4)]),(0,e._)("td",null,(0,s.zw)(t.title),1),(0,e._)("td",null,(0,s.zw)(t.price),1),(0,e._)("td",null,[(0,e._)("div",d,[(0,e._)("button",{class:"btn btn-outline-primary btn-sm",onClick:i=>g.getProduct(t.id)},"查看更多",8,a),h])])])))),128))])])])])])}n(560);var _={data(){return{productList:[]}},methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/chaichai_api/products";this.$http.get(t).then((t=>{this.productList=t.data.products,console.log(this.productList)}))},getProduct(t){this.$router.push(`/user/product/${t}`)}},created(){this.getProducts()}},g=n(89);const b=(0,g.Z)(_,[["render",p]]);var v=b}}]);
//# sourceMappingURL=894.491b27fa.js.map