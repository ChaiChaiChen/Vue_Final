"use strict";(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[549],{7549:function(t,e,a){a.r(e),a.d(e,{default:function(){return ft}});var l=a(3396),o=a(9242),s=a(7139);const i={class:"text-end"},d={class:"table mt-4"},c=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{width:"120"},"分類"),(0,l._)("th",null,"產品名稱"),(0,l._)("th",{width:"120"},"原價"),(0,l._)("th",{width:"120"},"售價"),(0,l._)("th",{width:"120"},"是否啟用"),(0,l._)("th",{width:"120"},"編輯")])],-1),r={class:"text-right"},n={class:"text-right"},p={key:0,class:"text-success"},u={key:1,class:"text-muted"},m={class:"btn-group"},h=["onClick"],_=["onClick"];function g(t,e,a,g,b,f){const P=(0,l.up)("Loading"),v=(0,l.up)("Pagination"),y=(0,l.up)("ProductModal"),w=(0,l.up)("DelModal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(P,{active:b.isLoading},null,8,["active"]),(0,l._)("div",i,[(0,l._)("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=(0,o.iM)((t=>f.openModal(!0)),["prevent"]))}," 新增產品 ")]),(0,l._)("table",d,[c,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(b.products,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",null,(0,s.zw)(e.category),1),(0,l._)("td",null,(0,s.zw)(e.title),1),(0,l._)("td",r,(0,s.zw)(t.$filters.currency(e.origin_price)),1),(0,l._)("td",n,(0,s.zw)(t.$filters.currency(e.price)),1),(0,l._)("td",null,[e.is_enabled?((0,l.wg)(),(0,l.iD)("span",p,"啟用")):((0,l.wg)(),(0,l.iD)("span",u,"未啟用"))]),(0,l._)("td",null,[(0,l._)("div",m,[(0,l._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>f.openModal(!1,e)},"編輯",8,h),(0,l._)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>f.openDelProductModal(e)},"刪除",8,_)])])])))),128))])]),(0,l.Wm)(v,{pages:b.pagination,onEmitPages:f.getProducts},null,8,["pages","onEmitPages"]),(0,l.Wm)(y,{ref:"productModal",product:b.tempProduct,onUpdateProduct:f.updateProduct},null,8,["product","onUpdateProduct"]),(0,l.Wm)(w,{item:b.tempProduct,ref:"delModal",onDelItem:f.delProduct},null,8,["item","onDelItem"])],64)}const b={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},f={class:"modal-dialog modal-xl",role:"document"},P={class:"modal-content border-0"},v=(0,l._)("div",{class:"modal-header bg-dark text-white"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,l._)("span",null,"新增產品")]),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),y={class:"modal-body"},w={class:"row"},x={class:"col-sm-4"},M={class:"mb-3"},k=(0,l._)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),$={class:"mb-3"},U=(0,l._)("label",{for:"customFile",class:"form-label"},[(0,l.Uk)("或 上傳圖片 "),(0,l._)("i",{class:"fas fa-spinner fa-spin"})],-1),D=["src"],C={class:"col-sm-8"},V={class:"mb-3"},L=(0,l._)("label",{for:"title",class:"form-label"},"標題",-1),F={class:"row gx-2"},z={class:"mb-3 col-md-6"},Z=(0,l._)("label",{for:"category",class:"form-label"},"分類",-1),I={class:"mb-3 col-md-6"},N=(0,l._)("label",{for:"price",class:"form-label"},"單位",-1),W={class:"row gx-2"},j={class:"mb-3 col-md-6"},H=(0,l._)("label",{for:"origin_price",class:"form-label"},"原價",-1),Y={class:"mb-3 col-md-6"},E=(0,l._)("label",{for:"price",class:"form-label"},"售價",-1),K=(0,l._)("hr",null,null,-1),S={class:"mb-3"},O=(0,l._)("label",{for:"description",class:"form-label"},"產品描述",-1),q={class:"mb-3"},A=(0,l._)("label",{for:"content",class:"form-label"},"說明內容",-1),B={class:"mb-3"},G={class:"form-check"},J=(0,l._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),Q={class:"modal-footer"},R=(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function T(t,e,a,s,i,d){return(0,l.wg)(),(0,l.iD)("div",b,[(0,l._)("div",f,[(0,l._)("div",P,[v,(0,l._)("div",y,[(0,l._)("div",w,[(0,l._)("div",x,[(0,l._)("div",M,[k,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[0]||(e[0]=t=>i.tempProduct.imageUrl=t),placeholder:"請輸入圖片連結"},null,512),[[o.nr,i.tempProduct.imageUrl]])]),(0,l._)("div",$,[U,(0,l._)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=(...t)=>d.uploadFile&&d.uploadFile(...t))},null,544)]),(0,l._)("img",{class:"img-fluid",src:i.tempProduct.imageUrl,alt:""},null,8,D)]),(0,l._)("div",C,[(0,l._)("div",V,[L,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[2]||(e[2]=t=>i.tempProduct.title=t),placeholder:"請輸入標題"},null,512),[[o.nr,i.tempProduct.title]])]),(0,l._)("div",F,[(0,l._)("div",z,[Z,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":e[3]||(e[3]=t=>i.tempProduct.category=t),placeholder:"請輸入分類"},null,512),[[o.nr,i.tempProduct.category]])]),(0,l._)("div",I,[N,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":e[4]||(e[4]=t=>i.tempProduct.unit=t),placeholder:"請輸入單位"},null,512),[[o.nr,i.tempProduct.unit]])])]),(0,l._)("div",W,[(0,l._)("div",j,[H,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":e[5]||(e[5]=t=>i.tempProduct.origin_price=t),placeholder:"請輸入原價"},null,512),[[o.nr,i.tempProduct.origin_price,void 0,{number:!0}]])]),(0,l._)("div",Y,[E,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[6]||(e[6]=t=>i.tempProduct.price=t),placeholder:"請輸入售價"},null,512),[[o.nr,i.tempProduct.price,void 0,{number:!0}]])])]),K,(0,l._)("div",S,[O,(0,l.wy)((0,l._)("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[7]||(e[7]=t=>i.tempProduct.description=t),placeholder:"請輸入產品描述"},null,512),[[o.nr,i.tempProduct.description]])]),(0,l._)("div",q,[A,(0,l.wy)((0,l._)("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[8]||(e[8]=t=>i.tempProduct.content=t),placeholder:"請輸入產品說明內容"},null,512),[[o.nr,i.tempProduct.content]])]),(0,l._)("div",B,[(0,l._)("div",G,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[9]||(e[9]=t=>i.tempProduct.is_enabled=t),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[o.e8,i.tempProduct.is_enabled]]),J])])])])]),(0,l._)("div",Q,[R,(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[10]||(e[10]=e=>t.$emit("update-product",i.tempProduct))}," 確認 ")])])])],512)}var X=a(1339),tt={props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product,this.tempProduct.images||(this.tempProduct.images=[])}},data(){return{modal:{},tempProduct:{}}},methods:{uploadFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const a="https://vue3-course-api.hexschool.io/api/chaichai_api/admin/upload";this.$http.post(a,e).then((t=>{console.log(t.data),t.data.success&&(this.tempProduct.imageUrl=t.data.imageUrl)}))}},mixins:[X.Z]},et=a(89);const at=(0,et.Z)(tt,[["render",T]]);var lt=at,ot=a(5919);const st={"aria-label":"Page navigation example"},it={class:"pagination justify-content-center"},dt=(0,l._)("a",{class:"page-link",href:"#","aria-label":"Previous"},[(0,l._)("span",{"aria-hidden":"true"},"«")],-1),ct=[dt],rt=["onClick"],nt=(0,l._)("a",{class:"page-link",href:"#","aria-label":"Next"},[(0,l._)("span",{"aria-hidden":"true"},"»")],-1),pt=[nt];function ut(t,e,a,i,d,c){return(0,l.wg)(),(0,l.iD)("nav",st,[(0,l._)("ul",it,[(0,l._)("li",{class:(0,s.C_)(["page-item",{disabled:1===a.pages.current_page}])},ct,2),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.pages.total_pages,(t=>((0,l.wg)(),(0,l.iD)("li",{class:(0,s.C_)(["page-item",{active:t===a.pages.current_page}]),key:t},[(0,l._)("a",{class:"page-link",href:"#",onClick:(0,o.iM)((e=>c.updatePage(t)),["prevent"])},(0,s.zw)(t),9,rt)],2)))),128)),(0,l._)("li",{class:(0,s.C_)(["page-item",{disabled:a.pages.current_page===a.pages.total_pages}])},pt,2)])])}var mt={props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}};const ht=(0,et.Z)(mt,[["render",ut]]);var _t=ht,gt={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1,status:""}},components:{ProductModal:lt,DelModal:ot.Z,Pagination:_t},inject:["emitter"],methods:{getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/products/?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{this.isLoading=!1,t.data.success&&(console.log(t.data),this.products=t.data.products,this.pagination=t.data.pagination)}))},openModal(t,e){this.tempProduct=t?{}:{...e},this.isNew=t;const a=this.$refs.productModal;a.showModal()},updateProduct(t){this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/chaichai_api/admin/product";const a=this.$refs.productModal;let l="post";this.status="新增產品",this.isNew||(e=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/product/${t.id}`,l="put",this.status="更新產品"),this.$http[l](e,{data:this.tempProduct}).then((t=>{console.log(t),a.hideModal(),this.$httpMessageState(t,this.status),this.getProducts()}))},openDelProductModal(t){this.tempProduct={...t};const e=this.$refs.delModal;e.showModal()},delProduct(){const t=`https://vue3-course-api.hexschool.io/api/chaichai_api/admin/product/${this.tempProduct.id}`;this.$http.delete(t).then((t=>{console.log(t.data);const e=this.$refs.delModal;e.hideModal(),this.$httpMessageState(t,t.data.message),this.getProducts()}))}},created(){this.getProducts()}};const bt=(0,et.Z)(gt,[["render",g]]);var ft=bt}}]);
//# sourceMappingURL=549.4e23ca46.js.map