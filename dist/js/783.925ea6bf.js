"use strict";(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[783],{4656:function(t,e,a){a.d(e,{Z:function(){return b}});var l=a(3396),o=a(7139),s=a(9242);const i={"aria-label":"Page navigation example"},c={class:"pagination justify-content-center"},d=(0,l._)("a",{class:"page-link",href:"#","aria-label":"Previous"},[(0,l._)("span",{"aria-hidden":"true"},"«")],-1),r=[d],n=["onClick"],p=(0,l._)("a",{class:"page-link",href:"#","aria-label":"Next"},[(0,l._)("span",{"aria-hidden":"true"},"»")],-1),u=[p];function m(t,e,a,d,p,m){return(0,l.wg)(),(0,l.iD)("nav",i,[(0,l._)("ul",c,[(0,l._)("li",{class:(0,o.C_)(["page-item",{disabled:1===a.pages.current_page}])},r,2),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.pages.total_pages,(t=>((0,l.wg)(),(0,l.iD)("li",{class:(0,o.C_)(["page-item",{active:t===a.pages.current_page}]),key:t},[(0,l._)("a",{class:"page-link",href:"#",onClick:(0,s.iM)((e=>m.updatePage(t)),["prevent"])},(0,o.zw)(t),9,n)],2)))),128)),(0,l._)("li",{class:(0,o.C_)(["page-item",{disabled:a.pages.current_page===a.pages.total_pages}])},u,2)])])}var h={props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},g=a(89);const _=(0,g.Z)(h,[["render",m]]);var b=_},2783:function(t,e,a){a.r(e),a.d(e,{default:function(){return ht}});var l=a(3396),o=a(9242),s=a(7139);const i={class:"container"},c={class:"row mt-5"},d={class:"text-end mt-5"},r={class:"table mt-4"},n=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{width:"120"},"分類"),(0,l._)("th",null,"產品名稱"),(0,l._)("th",{width:"120"},"原價"),(0,l._)("th",{width:"120"},"售價"),(0,l._)("th",{width:"120"},"是否啟用"),(0,l._)("th",{width:"120"},"編輯")])],-1),p={class:"text-right"},u={class:"text-right"},m={key:0,class:"text-success"},h={key:1,class:"text-muted"},g={class:"btn-group"},_=["onClick"],b=["onClick"];function f(t,e,a,f,P,v){const y=(0,l.up)("Loading"),w=(0,l.up)("Pagination"),k=(0,l.up)("ProductModal"),x=(0,l.up)("DelModal");return(0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("div",c,[(0,l.Wm)(y,{active:P.isLoading},null,8,["active"]),(0,l._)("div",d,[(0,l._)("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=(0,o.iM)((t=>v.openModal(!0)),["prevent"]))}," 新增產品 ")]),(0,l._)("table",r,[n,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(P.products,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",null,(0,s.zw)(e.category),1),(0,l._)("td",null,(0,s.zw)(e.title),1),(0,l._)("td",p,(0,s.zw)(t.$filters.currency(e.origin_price)),1),(0,l._)("td",u,(0,s.zw)(t.$filters.currency(e.price)),1),(0,l._)("td",null,[e.is_enabled?((0,l.wg)(),(0,l.iD)("span",m,"啟用")):((0,l.wg)(),(0,l.iD)("span",h,"未啟用"))]),(0,l._)("td",null,[(0,l._)("div",g,[(0,l._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>v.openModal(!1,e)},"編輯",8,_),(0,l._)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>v.openDelProductModal(e)},"刪除",8,b)])])])))),128))])]),(0,l.Wm)(w,{pages:P.pagination,onEmitPages:v.getProducts},null,8,["pages","onEmitPages"]),(0,l.Wm)(k,{ref:"productModal",product:P.tempProduct,onUpdateProduct:v.updateProduct},null,8,["product","onUpdateProduct"]),(0,l.Wm)(x,{item:P.tempProduct,ref:"delModal",onDelItem:v.delProduct},null,8,["item","onDelItem"])])])}a(560);const P={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},v={class:"modal-dialog modal-xl",role:"document"},y={class:"modal-content border-0"},w=(0,l._)("div",{class:"modal-header bg-dark text-white"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,l._)("span",null,"新增產品")]),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),k={class:"modal-body"},x={class:"row"},M={class:"col-sm-4"},D={class:"mb-3"},U=(0,l._)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),C={class:"mb-3"},$=(0,l._)("label",{for:"customFile",class:"form-label"},[(0,l.Uk)("或 上傳圖片 "),(0,l._)("i",{class:"fas fa-spinner fa-spin"})],-1),V=["src"],L={key:0,class:"mt-5"},Z=["onUpdate:modelValue"],F=["onClick"],z={key:0},I={class:"col-sm-8"},N={class:"mb-3"},W=(0,l._)("label",{for:"title",class:"form-label"},"標題",-1),j={class:"row gx-2"},H={class:"mb-3 col-md-6"},K=(0,l._)("label",{for:"category",class:"form-label"},"分類",-1),Y={class:"mb-3 col-md-6"},q=(0,l._)("label",{for:"price",class:"form-label"},"單位",-1),E={class:"row gx-2"},S={class:"mb-3 col-md-6"},O=(0,l._)("label",{for:"origin_price",class:"form-label"},"原價",-1),A={class:"mb-3 col-md-6"},B=(0,l._)("label",{for:"price",class:"form-label"},"售價",-1),G=(0,l._)("hr",null,null,-1),J={class:"mb-3"},Q=(0,l._)("label",{for:"description",class:"form-label"},"產品描述",-1),R={class:"mb-3"},T=(0,l._)("label",{for:"content",class:"form-label"},"說明內容",-1),X={class:"mb-3"},tt={class:"form-check"},et=(0,l._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),at={class:"modal-footer"},lt=(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ot(t,e,a,s,i,c){return(0,l.wg)(),(0,l.iD)("div",P,[(0,l._)("div",v,[(0,l._)("div",y,[w,(0,l._)("div",k,[(0,l._)("div",x,[(0,l._)("div",M,[(0,l._)("div",D,[U,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[0]||(e[0]=t=>i.tempProduct.imageUrl=t),placeholder:"請輸入圖片連結"},null,512),[[o.nr,i.tempProduct.imageUrl]])]),(0,l._)("div",C,[$,(0,l._)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=(...t)=>c.uploadFile&&c.uploadFile(...t))},null,544)]),(0,l._)("img",{class:"img-fluid",src:i.tempProduct.imageUrl,alt:""},null,8,V),i.tempProduct.images?((0,l.wg)(),(0,l.iD)("div",L,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.tempProduct.images,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{class:"mb-3 input-group",key:e},[(0,l.wy)((0,l._)("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":t=>i.tempProduct.images[e]=t,placeholder:"請輸入連結"},null,8,Z),[[o.nr,i.tempProduct.images[e]]]),(0,l._)("button",{type:"button",class:"btn btn-outline-danger",onClick:t=>i.tempProduct.images.splice(e,1)}," 移除 ",8,F)])))),128)),i.tempProduct.images[i.tempProduct.images.length-1]||!i.tempProduct.images.length?((0,l.wg)(),(0,l.iD)("div",z,[(0,l._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=t=>i.tempProduct.images.push(""))}," 新增圖片 ")])):(0,l.kq)("",!0)])):(0,l.kq)("",!0)]),(0,l._)("div",I,[(0,l._)("div",N,[W,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[3]||(e[3]=t=>i.tempProduct.title=t),placeholder:"請輸入標題"},null,512),[[o.nr,i.tempProduct.title]])]),(0,l._)("div",j,[(0,l._)("div",H,[K,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":e[4]||(e[4]=t=>i.tempProduct.category=t),placeholder:"請輸入分類"},null,512),[[o.nr,i.tempProduct.category]])]),(0,l._)("div",Y,[q,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":e[5]||(e[5]=t=>i.tempProduct.unit=t),placeholder:"請輸入單位"},null,512),[[o.nr,i.tempProduct.unit]])])]),(0,l._)("div",E,[(0,l._)("div",S,[O,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":e[6]||(e[6]=t=>i.tempProduct.origin_price=t),placeholder:"請輸入原價"},null,512),[[o.nr,i.tempProduct.origin_price,void 0,{number:!0}]])]),(0,l._)("div",A,[B,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[7]||(e[7]=t=>i.tempProduct.price=t),placeholder:"請輸入售價"},null,512),[[o.nr,i.tempProduct.price,void 0,{number:!0}]])])]),G,(0,l._)("div",J,[Q,(0,l.wy)((0,l._)("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[8]||(e[8]=t=>i.tempProduct.description=t),placeholder:"請輸入產品描述"},null,512),[[o.nr,i.tempProduct.description]])]),(0,l._)("div",R,[T,(0,l.wy)((0,l._)("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[9]||(e[9]=t=>i.tempProduct.content=t),placeholder:"請輸入產品說明內容"},null,512),[[o.nr,i.tempProduct.content]])]),(0,l._)("div",X,[(0,l._)("div",tt,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=t=>i.tempProduct.is_enabled=t),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[o.e8,i.tempProduct.is_enabled]]),et])])])])]),(0,l._)("div",at,[lt,(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=e=>t.$emit("update-product",i.tempProduct))}," 確認 ")])])])],512)}var st=a(1339),it={props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product,this.tempProduct.images||(this.tempProduct.images=[])}},data(){return{modal:{},tempProduct:{}}},methods:{uploadFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const a="https://vue3-course-api.hexschool.io/api/chaichai_api/admin/upload";this.$http.post(a,e).then((t=>{console.log(t.data),t.data.success&&(this.tempProduct.imageUrl=t.data.imageUrl)}))}},mixins:[st.Z]},ct=a(89);const dt=(0,ct.Z)(it,[["render",ot]]);var rt=dt,nt=a(5919),pt=a(4656),ut={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1,status:""}},components:{ProductModal:rt,DelModal:nt.Z,Pagination:pt.Z},inject:["emitter"],methods:{getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/products/?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{this.isLoading=!1,t.data.success&&(console.log(t.data),this.products=t.data.products,this.pagination=t.data.pagination)}))},openModal(t,e){this.tempProduct=t?{}:{...e},this.isNew=t;const a=this.$refs.productModal;a.showModal()},updateProduct(t){this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/chaichai_api/admin/product";const a=this.$refs.productModal;let l="post";this.status="新增產品",this.isNew||(e=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/product/${t.id}`,l="put",this.status="更新產品"),this.$http[l](e,{data:this.tempProduct}).then((t=>{console.log(t),a.hideModal(),this.$httpMessageState(t,this.status),this.getProducts()}))},openDelProductModal(t){this.tempProduct={...t};const e=this.$refs.delModal;e.showModal()},delProduct(){const t=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/product/${this.tempProduct.id}`;this.$http.delete(t).then((t=>{console.log(t.data);const e=this.$refs.delModal;e.hideModal(),this.$httpMessageState(t,t.data.message),this.getProducts()}))}},created(){this.getProducts()}};const mt=(0,ct.Z)(ut,[["render",f]]);var ht=mt}}]);
//# sourceMappingURL=783.925ea6bf.js.map