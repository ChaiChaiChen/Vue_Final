"use strict";(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[841],{4656:function(t,e,l){l.d(e,{Z:function(){return b}});var a=l(3396),i=l(7139),s=l(9242);const c={"aria-label":"Page navigation example"},o={class:"pagination justify-content-center"},r=(0,a._)("a",{class:"page-link",href:"#","aria-label":"Previous"},[(0,a._)("span",{"aria-hidden":"true"},"«")],-1),n=[r],d=["onClick"],p=(0,a._)("a",{class:"page-link",href:"#","aria-label":"Next"},[(0,a._)("span",{"aria-hidden":"true"},"»")],-1),u=[p];function h(t,e,l,r,p,h){return(0,a.wg)(),(0,a.iD)("nav",c,[(0,a._)("ul",o,[(0,a._)("li",{class:(0,i.C_)(["page-item",{disabled:1===l.pages.current_page}])},n,2),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.pages.total_pages,(t=>((0,a.wg)(),(0,a.iD)("li",{class:(0,i.C_)(["page-item",{active:t===l.pages.current_page}]),key:t},[(0,a._)("a",{class:"page-link",href:"#",onClick:(0,s.iM)((e=>h.updatePage(t)),["prevent"])},(0,i.zw)(t),9,d)],2)))),128)),(0,a._)("li",{class:(0,i.C_)(["page-item",{disabled:l.pages.current_page===l.pages.total_pages}])},u,2)])])}var m={props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},_=l(89);const g=(0,_.Z)(m,[["render",h]]);var b=g},9841:function(t,e,l){l.r(e),l.d(e,{default:function(){return Q}});var a=l(3396),i=l(7139);const s={class:"container"},c={class:"row mt-5"},o={class:"text-end mt-5"},r={class:"table mt-4"},n=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"標題"),(0,a._)("th",null,"文章內容"),(0,a._)("th",null,"日期"),(0,a._)("th",null,"是否啟用"),(0,a._)("th",null,"編輯")])],-1),d={class:"text-truncate",style:{"max-width":"200px"}},p={key:0,class:"text-success"},u={key:1,class:"text-muted"},h={class:"btn-group"},m=["onClick"],_=["onClick"];function g(t,e,l,g,b,f){const A=(0,a.up)("Pagination"),v=(0,a.up)("ArticleModal"),w=(0,a.up)("DelModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",s,[(0,a._)("div",c,[(0,a._)("div",o,[(0,a._)("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=t=>f.openArticleModal(!0))}," 新增留言 ")]),(0,a._)("table",r,[n,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(b.articles,((e,l)=>((0,a.wg)(),(0,a.iD)("tr",{key:l},[(0,a._)("td",null,(0,i.zw)(e.title),1),(0,a._)("td",d,(0,i.zw)(e.description),1),(0,a._)("td",null,(0,i.zw)(t.$filters.date(e.create_at)),1),(0,a._)("td",null,[!0===e.isPublic?((0,a.wg)(),(0,a.iD)("span",p,"啟用")):((0,a.wg)(),(0,a.iD)("span",u,"未起用"))]),(0,a._)("td",null,[(0,a._)("div",h,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>f.openArticleModal(!1,e)},"編輯",8,m),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>f.openDelArticleModal(e)},"刪除",8,_)])])])))),128))])])])]),(0,a.Wm)(A,{pages:b.pagination,onEmitPages:f.getArticles},null,8,["pages","onEmitPages"]),(0,a.Wm)(v,{ref:"articleModal",article:b.tempArticle,onUpdateArticle:f.updateArticle},null,8,["article","onUpdateArticle"]),(0,a.Wm)(w,{item:b.tempArticle,ref:"delModal",onDelItem:f.delArticle},null,8,["item","onDelItem"])],64)}var b=l(9242);const f={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},A={class:"modal-dialog",role:"document"},v={class:"modal-content border-0"},w=(0,a._)("div",{class:"modal-header bg-dark text-white"},[(0,a._)("h5",{class:"modal-title"},[(0,a._)("span",null,"新增文章")]),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),y={class:"modal-body"},M={class:"col-12"},k={class:"mb-3"},x=(0,a._)("label",{for:"title",class:"form-label"},"標題",-1),$={class:"mb-3"},D=(0,a._)("label",{for:"title",class:"form-label"},"作者",-1),C={class:"mb-3"},P=(0,a._)("label",{for:"description",class:"form-label"},"描述",-1),U={class:"mb-3"},Z=(0,a._)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),F={class:"mb-3"},V=(0,a._)("label",{for:"customFile",class:"form-label"},[(0,a.Uk)("或 上傳圖片 "),(0,a._)("i",{class:"fas fa-spinner fa-spin"})],-1),I={class:"mb-3"},N=(0,a._)("label",{for:"create_at"},"新增日期",-1),S={class:"mb-3"},z={class:"form-check"},H=(0,a._)("label",{class:"form-check-label",for:"isPublic"}," 是否啟用 ",-1),W={class:"modal-footer"},Y=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function j(t,e,l,i,s,c){return(0,a.wg)(),(0,a.iD)("div",f,[(0,a._)("div",A,[(0,a._)("div",v,[w,(0,a._)("div",y,[(0,a._)("div",M,[(0,a._)("div",k,[x,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=t=>s.tempArticle.title=t),placeholder:"請輸入標題"},null,512),[[b.nr,s.tempArticle.title]])]),(0,a._)("div",$,[D,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[1]||(e[1]=t=>s.tempArticle.author=t),placeholder:"請輸入作者"},null,512),[[b.nr,s.tempArticle.author]])]),(0,a._)("div",C,[P,(0,a.wy)((0,a._)("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[2]||(e[2]=t=>s.tempArticle.description=t),placeholder:"請輸入描述"},null,512),[[b.nr,s.tempArticle.description]])]),(0,a._)("div",U,[Z,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[3]||(e[3]=t=>s.tempArticle.imageUrl=t),placeholder:"請輸入圖片連結"},null,512),[[b.nr,s.tempArticle.imageUrl]])]),(0,a._)("div",F,[V,(0,a._)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[4]||(e[4]=(...t)=>c.uploadFile&&c.uploadFile(...t))},null,544)]),(0,a._)("div",I,[N,(0,a.wy)((0,a._)("input",{type:"date",class:"form-control",id:"create_at","onUpdate:modelValue":e[5]||(e[5]=t=>s.create_at=t)},null,512),[[b.nr,s.create_at]])]),(0,a._)("div",S,[(0,a._)("div",z,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[6]||(e[6]=t=>s.tempArticle.isPublic=t),"true-value":!0,"false-value":!1,id:"isPublic"},null,512),[[b.e8,s.tempArticle.isPublic]]),H])])])]),(0,a._)("div",W,[Y,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:e[7]||(e[7]=e=>t.$emit("update-article",s.tempArticle))},"確認 ")])])])],512)}var E=l(1339),K={props:{article:{type:Object,default(){return{}}}},emits:["update-article"],watch:{article(){this.tempArticle=this.article,console.log(this.article);const t=new Date(1e3*this.tempArticle.create_at).toISOString().split("T");[this.create_at]=t,this.tempArticle.content=" ","undefined"===typeof this.tempArticle.isPublic&&(this.tempArticle.isPublic=!1)},create_at(){this.tempArticle.create_at=Math.floor(new Date(this.create_at)/1e3)}},data(){return{tempArticle:{},create_at:""}},methods:{uploadFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const l="https://vue3-course-api.hexschool.io/api/chaichai_api/admin/upload";this.$http.post(l,e).then((t=>{console.log(t.data),t.data.success&&(this.tempArticle.imageUrl=t.data.imageUrl)}))}},mixins:[E.Z]},O=l(89);const T=(0,O.Z)(K,[["render",j]]);var L=T,q=l(5919),B=l(4656),G={data(){return{articles:[],tempArticle:[],isNew:!1,pagination:{}}},components:{ArticleModal:L,DelModal:q.Z,Pagination:B.Z},methods:{getArticles(t=1){const e=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/articles?page=${t}`;this.$http.get(e).then((t=>{this.articles=t.data.articles,console.log(this.articles),this.pagination=t.data.pagination}))},openArticleModal(t,e){this.isNew=t,this.isNew?this.tempArticle={create_at:(new Date).getTime()/1e3}:this.tempArticle={...e},this.$refs.articleModal.showModal()},updateArticle(t){if(console.log("tempArticle",t),this.isNew){const e="https://vue3-course-api.hexschool.io/api/chaichai_api/admin/article";this.$http.post(e,{data:t}).then((t=>{this.$httpMessageState(t,"新增文章"),this.getArticles(),this.$refs.articleModal.hideModal()}))}else{const e=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/article/${this.tempArticle.id}`;this.$http.put(e,{data:t}).then((t=>{console.log(t),this.$httpMessageState(t,"新增文章"),this.getArticles(),this.$refs.articleModal.hideModal()}))}},openDelArticleModal(t){this.tempArticle={...t};const e=this.$refs.delModal;e.showModal()},delArticle(){const t=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/article/${this.tempArticle.id}`;this.$http.delete(t).then((t=>{console.log(t,this.tempArticle),this.$httpMessageState(t,"刪除文章");const e=this.$refs.delModal;e.hideModal(),this.getArticles()}))}},created(){this.getArticles()}};const J=(0,O.Z)(G,[["render",g]]);var Q=J}}]);
//# sourceMappingURL=841.afe12191.js.map