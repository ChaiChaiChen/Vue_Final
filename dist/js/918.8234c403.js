"use strict";(self["webpackChunkvue_final"]=self["webpackChunkvue_final"]||[]).push([[918],{2918:function(s,n,e){e.r(n),e.d(n,{default:function(){return w}});var r=e(3396),t=e(9242);const a={class:"container mt-5"},o={class:"col-md-6"},l=(0,r._)("h1",{class:"h3 mb-3 font-weight-normal"}," 請先登入 ",-1),i={class:"mb-2"},u=(0,r._)("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),c={class:"mb-2"},d=(0,r._)("label",{for:"inputPassword",class:"sr-only"},"Password",-1),p=(0,r._)("div",{class:"text-end mt-4"},[(0,r._)("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1);function m(s,n,e,m,f,h){return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("form",{action:"",class:"row justify-content-center",onSubmit:n[2]||(n[2]=(0,t.iM)(((...s)=>h.singIn&&h.singIn(...s)),["prevent"]))},[(0,r._)("div",o,[l,(0,r._)("div",i,[u,(0,r.wy)((0,r._)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":n[0]||(n[0]=s=>f.user.username=s)},null,512),[[t.nr,f.user.username]])]),(0,r._)("div",c,[d,(0,r.wy)((0,r._)("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":n[1]||(n[1]=s=>f.user.password=s)},null,512),[[t.nr,f.user.password]])]),p])],32)])}var f={data(){return{user:{username:"",password:""}}},methods:{singIn(){const s="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(s,this.user).then((s=>{console.log(s)}))}}},h=e(89);const b=(0,h.Z)(f,[["render",m]]);var w=b}}]);
//# sourceMappingURL=918.8234c403.js.map